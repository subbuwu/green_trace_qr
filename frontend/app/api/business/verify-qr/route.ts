// app/api/business/verify-qr/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';
import { z } from 'zod';

const prisma = new PrismaClient();

// Schema for QR verification
const verifyQrSchema = z.object({
  qrCodeId: z.string().uuid({ message: "Valid QR code ID is required" }),
  recyclingCenterId: z.string().uuid({ message: "Valid recycling center ID is required" }),
  staffName: z.string().min(1, { message: "Staff name is required" }),
  notes: z.string().optional(),
  photo: z.string().optional(), // Base64 encoded image if provided
});

export async function POST(request: NextRequest) {
  try {
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json({ error }, { status: 401 });
    }
    
    // Verify user is a business
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        business: true
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    if (user.userType !== UserType.BUSINESS || !user.business) {
      return NextResponse.json({ error: 'Unauthorized: Not a business account' }, { status: 403 });
    }
    
    const data = await request.json();
    
    // Validate request data
    try {
      const validatedData = verifyQrSchema.parse(data);
      
      // Start a transaction to ensure all operations are atomic
      const result = await prisma.$transaction(async (tx) => {
        // 1. Get the QR code and ensure it's not already verified
        const qrCode = await tx.qRCode.findUnique({
          where: { id: validatedData.qrCodeId },
          include: {
            consumer: true,
            recyclingHistory: true
          }
        });
        
        if (!qrCode) {
          throw new Error('QR code not found');
        }
        
        if (qrCode.isVerified) {
          throw new Error('QR code has already been verified');
        }
        
        // 2. Get recycling center
        const recyclingCenter = await tx.recyclingCenter.findUnique({
          where: { 
            id: validatedData.recyclingCenterId,
            businessId: user.business?.id ?? '' // Ensure center belongs to this business
          }
        });
        
        if (!recyclingCenter) {
          throw new Error('Recycling center not found or not owned by your business');
        }
        
        // 3. Determine points to award based on waste type and center's pointsPerWasteType
        let pointsEarned = 10; // Default points if not specified
        
        if (recyclingCenter.pointsPerWasteType) {
          const pointsMap = recyclingCenter.pointsPerWasteType as Record<string, number>;
          if (pointsMap[qrCode.wasteType]) {
            // Points per unit * quantity
            pointsEarned = pointsMap[qrCode.wasteType] * Number(qrCode.quantity);
          }
        }
        
        // 4. Create recycling history record first
        const recyclingHistory = await tx.recyclingHistory.create({
          data: {
            qrCodeId: qrCode.id,
            consumerId: qrCode.consumerId,
            businessId: user.business?.id ?? '',
            recyclingCenterId: recyclingCenter.id,
            pointsEarned,
            notes: validatedData.notes,
            staffName: validatedData.staffName,
            photo: validatedData.photo
          },
          include: {
            consumer: {
              include: {
                user: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        });
        
        // 5. Update QR code verification status
        await tx.qRCode.update({
          where: { id: qrCode.id },
          data: {
            isVerified: true
          }
        });
        
        // 6. Update consumer's points
        const updatedConsumer = await tx.consumer.update({
          where: { id: qrCode.consumerId },
          data: {
            points: { increment: pointsEarned }
          }
        });
        
        // 7. Update business points (if applicable)
        await tx.business.update({
          where: { id: user.business?.id ?? '' },
          data: {
            points: { increment: Math.floor(pointsEarned * 0.1) } // Business gets 10% of points
          }
        });
        
        return {
          recyclingHistory,
          consumer: {
            ...updatedConsumer,
            user: {
              name: recyclingHistory.consumer.user.name
            }
          }
        };
      }, {
        timeout: 10000, // Increase timeout to 10 seconds
        maxWait: 10000, // Maximum time to wait for the transaction
        isolationLevel: 'Serializable' // Ensure strict isolation
      });
      
      return NextResponse.json({
        success: true,
        message: 'QR code verified successfully',
        recyclingHistory: {
          id: result.recyclingHistory.id,
          pointsEarned: result.recyclingHistory.pointsEarned,
          consumer: {
            user: {
              name: result.consumer.user.name
            },
            points: result.consumer.points
          }
        }
      });
      
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const formattedErrors = validationError.errors.reduce((acc, curr) => {
          const field = curr.path[0] as string;
          if (!acc[field]) acc[field] = [];
          acc[field].push(curr.message);
          return acc;
        }, {} as Record<string, string[]>);
        
        return NextResponse.json(
          { error: 'Validation failed', errors: formattedErrors },
          { status: 400 }
        );
      }
      
      if (validationError instanceof Error) {
        return NextResponse.json({ error: validationError.message }, { status: 400 });
      }
      
      throw validationError;
    }
    
  } catch (error) {
    console.error('Error verifying QR code:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Failed to verify QR code' 
    }, { status: 500 });
  }
}