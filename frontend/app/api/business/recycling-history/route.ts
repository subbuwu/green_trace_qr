// app/api/business/recycling-history/route.ts
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
    
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    // Fetch recycling history for this business
    const history = await prisma.recyclingHistory.findMany({
      where: {
        businessId: user.business.id
      },
      include: {
        qrCode: {
          select: {
            wasteType: true,
            quantity: true,
            unit: true,
            description: true,
          }
        },
        consumer: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              }
            }
          }
        },
        recyclingCenter: {
          select: {
            name: true,
            address: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit,
      skip: offset
    });
    
    // Count total records for pagination
    const total = await prisma.recyclingHistory.count({
      where: {
        businessId: user.business.id
      }
    });
    
    return NextResponse.json({
      history,
      pagination: {
        total,
        limit,
        offset
      }
    });
    
  } catch (error) {
    console.error('Error fetching recycling history:', error);
    return NextResponse.json({ error: 'Failed to fetch recycling history' }, { status: 500 });
  }
}