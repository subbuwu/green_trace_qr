
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Validate token
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json(
        { success: false, error: error || 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Check if user is a consumer
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    
    if (user.userType !== UserType.CONSUMER) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Only consumers can access QR codes" },
        { status: 403 }
      );
    }
    
    // Get consumer ID
    const consumer = await prisma.consumer.findUnique({
      where: { userId: user.id }
    });
    
    if (!consumer) {
      return NextResponse.json(
        { success: false, error: "Consumer profile not found" },
        { status: 404 }
      );
    }
    
    // Get QR codes for this consumer
    const qrCodes = await prisma.qRCode.findMany({
      where: {
        consumerId: consumer.id
      },
      orderBy: {
        createdAt: 'desc'
      },
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
        }
      }
    });
    
    // Format response
    const formattedQRCodes = qrCodes.map(qrCode => ({
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
    }));
    
    return NextResponse.json({
      success: true,
      qrCodes: formattedQRCodes
    });
    
  } catch (error) {
    console.error("Error fetching QR codes:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch QR codes" },
      { status: 500 }
    );
  }
}