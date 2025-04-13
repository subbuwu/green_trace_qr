import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const qrCodeId = params.id;
    
    if (!qrCodeId) {
      return NextResponse.json(
        { success: false, error: "QR code ID is required" },
        { status: 400 }
      );
    }
    
    // Validate token
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json(
        { success: false, error: error || 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Get user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    
    // Get QR code
    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId },
      include: {
        recyclingHistory: {
          select: {
            id: true,
            verifiedAt: true,
            businessId: true,
            recyclingCenterId: true,
            pointsEarned: true,
            business: {
              select: {
                businessName: true
              }
            },
            recyclingCenter: {
              select: {
                name: true
              }
            }
          }
        },
        consumer: {
          select: {
            userId: true
          }
        }
      }
    });
    
    if (!qrCode) {
      return NextResponse.json(
        { success: false, error: "QR code not found" },
        { status: 404 }
      );
    }
    
    // Check if the user is authorized to access this QR code
    if (user.userType === UserType.CONSUMER) {
      // Consumers can only access their own QR codes
      const consumer = await prisma.consumer.findUnique({
        where: { userId: user.id }
      });
      
      if (!consumer || qrCode.consumer.userId !== user.id) {
        return NextResponse.json(
          { success: false, error: "Unauthorized: This QR code belongs to another user" },
          { status: 403 }
        );
      }
    } else if (user.userType === UserType.BUSINESS) {
      // Businesses can access all QR codes for verification purposes
      // No restrictions needed, but we might add some business-specific logic here
    } else {
      // Unknown user type
      return NextResponse.json(
        { success: false, error: "Unauthorized: Invalid user type" },
        { status: 403 }
      );
    }
    
    // Format response
    const formattedQRCode = {
      id: qrCode.id,
      wasteType: qrCode.wasteType,
      quantity: qrCode.quantity,
      unit: qrCode.unit,
      description: qrCode.description,
      photos: qrCode.photos,
      qrCodeUrl: qrCode.qrCodeUrl,
      createdAt: qrCode.createdAt,
      isVerified: qrCode.isVerified,
      verifiedAt: qrCode.recyclingHistory?.verifiedAt,
      verificationDetails: qrCode.recyclingHistory ? {
        id: qrCode.recyclingHistory.id,
        businessName: qrCode.recyclingHistory.business.businessName,
        recyclingCenter: qrCode.recyclingHistory.recyclingCenter.name,
        pointsEarned: qrCode.recyclingHistory.pointsEarned
      } : null
    };
    
    return NextResponse.json({
      success: true,
      qrCode: formattedQRCode
    });
    
  } catch (error) {
    console.error("Error fetching QR code:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch QR code" },
      { status: 500 }
    );
  }
}