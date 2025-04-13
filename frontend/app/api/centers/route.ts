import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json({ error }, { status: 401 });
    }
    
    // Fetch all active recycling centers
    const centers = await prisma.recyclingCenter.findMany({
      where: {
        isActive: true
      },
      include: {
        business: {
          select: {
            businessName: true,
            businessAddress: true,
            logo: true
          }
        }
      }
    });
    
    return NextResponse.json({ centers });
  } catch (error) {
    console.error('Error fetching recycling centers:', error);
    return NextResponse.json({ error: 'Failed to fetch recycling centers' }, { status: 500 });
  }
} 