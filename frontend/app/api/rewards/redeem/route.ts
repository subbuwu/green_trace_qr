// app/api/rewards/redeem/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getCurrentUser } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Validate user authentication
    const { success, user, error } = await getCurrentUser(request);
    
    if (!success || !user) {
      return NextResponse.json(
        { error: error || 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    const { rewardId } = body;
    
    if (!rewardId) {
      return NextResponse.json(
        { error: 'Reward ID is required' },
        { status: 400 }
      );
    }
    
    // Get consumer profile
    const consumer = await prisma.consumer.findUnique({
      where: { userId: user.id }
    });
    
    if (!consumer) {
      return NextResponse.json(
        { error: 'Consumer profile not found' },
        { status: 404 }
      );
    }
    
    // Get reward
    const reward = await prisma.reward.findUnique({
      where: { id: rewardId }
    });
    
    if (!reward) {
      return NextResponse.json(
        { error: 'Reward not found' },
        { status: 404 }
      );
    }
    
    // Check if reward is available
    if (!reward.isActive) {
      return NextResponse.json(
        { error: 'This reward is not currently active' },
        { status: 400 }
      );
    }
    
    if (reward.quantity !== null && reward.quantity <= 0) {
      return NextResponse.json(
        { error: 'This reward is out of stock' },
        { status: 400 }
      );
    }
    
    // Check if user has enough points
    if (consumer.points < reward.pointsCost) {
      return NextResponse.json(
        { error: 'Not enough points to redeem this reward' },
        { status: 400 }
      );
    }
    
    // Use a transaction to ensure data consistency
    const [updatedConsumer, redemption] = await prisma.$transaction([
      // Update consumer points
      prisma.consumer.update({
        where: { id: consumer.id },
        data: { points: { decrement: reward.pointsCost } }
      }),
      
      // Update reward quantity if applicable
      reward.quantity !== null ? 
        prisma.reward.update({
          where: { id: reward.id },
          data: { quantity: { decrement: 1 } }
        }) : 
        Promise.resolve(reward),
      
      // Create redemption record
      prisma.rewardRedemption.create({
        data: {
          consumerId: consumer.id,
          rewardId: reward.id,
          pointsSpent: reward.pointsCost,
          status: 'PENDING'
        },
        include: {
          reward: {
            select: {
              name: true
            }
          }
        }
      })
    ]);
    
    // Format the redemption response
    const redemptionResponse = {
      id: redemption.id,
      createdAt: redemption.createdAt.toISOString(),
      rewardId: redemption.rewardId,
      rewardName: redemption.reward.name,
      pointsSpent: redemption.pointsSpent,
      status: redemption.status,
      redeemedAt: redemption.redeemedAt ? redemption.redeemedAt.toISOString() : null
    };
    
    return NextResponse.json({
      success: true,
      message: 'Reward redeemed successfully',
      redemption: redemptionResponse,
      currentPoints: updatedConsumer.points
    });
  } catch (error) {
    console.error('Error redeeming reward:', error);
    return NextResponse.json(
      { error: 'Failed to redeem reward' },
      { status: 500 }
    );
  }
}