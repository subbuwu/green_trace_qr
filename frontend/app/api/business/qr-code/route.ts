// app/api/business/qr-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
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
    
    // Get QR code ID from query parameter
    const qrCodeId = request.nextUrl.searchParams.get('id');
    
    if (!qrCodeId) {
      return NextResponse.json({ error: 'QR code ID is required' }, { status: 400 });
    }
    
    // Look up QR code
    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId },
      include: {
        consumer: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              }
            }
          }
        },
        recyclingHistory: true
      }
    });
    
    if (!qrCode) {
      return NextResponse.json({ error: 'QR code not found' }, { status: 404 });
    }
    
    return NextResponse.json({
      qrCode: {
        id: qrCode.id,
        consumerId: qrCode.consumerId,
        wasteType: qrCode.wasteType,
        quantity: qrCode.quantity,
        unit: qrCode.unit,
        description: qrCode.description,
        isVerified: qrCode.isVerified,
        photos: qrCode.photos,
        consumer: {
          id: qrCode.consumer.id,
          user: {
            name: qrCode.consumer.user.name,
            email: qrCode.consumer.user.email
          },
          points: qrCode.consumer.points
        }
      }
    });
    
  } catch (error) {
    console.error('Error looking up QR code:', error);
    return NextResponse.json({ error: 'Failed to look up QR code' }, { status: 500 });
  }
}