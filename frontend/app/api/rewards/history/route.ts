// app/api/rewards/history/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getCurrentUser } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Validate user authentication
    const { success, user, error } = await getCurrentUser(request);
    
    if (!success || !user) {
      return NextResponse.json(
        { error: error || 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get consumer ID for the user
    const consumer = await prisma.consumer.findUnique({
      where: { userId: user.id }
    });
    
    if (!consumer) {
      return NextResponse.json(
        { error: 'Consumer profile not found' },
        { status: 404 }
      );
    }
    
    // Get the user's reward redemption history
    const redemptions = await prisma.rewardRedemption.findMany({
      where: {
        consumerId: consumer.id
      },
      include: {
        reward: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // Format the response
    const formattedRedemptions = redemptions.map(redemption => ({
      id: redemption.id,
      createdAt: redemption.createdAt.toISOString(),
      rewardId: redemption.rewardId,
      rewardName: redemption.reward.name,
      pointsSpent: redemption.pointsSpent,
      status: redemption.status,
      redeemedAt: redemption.redeemedAt ? redemption.redeemedAt.toISOString() : null
    }));
    
    return NextResponse.json({ redemptions: formattedRedemptions });
  } catch (error) {
    console.error('Error fetching reward redemption history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch redemption history' },
      { status: 500 }
    );
  }
}