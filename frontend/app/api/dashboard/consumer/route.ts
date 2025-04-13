// app/api/dashboard/consumer/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }
    
    // Verify token
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }
    
    // Check if user is a consumer
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    
    if (user.userType !== UserType.CONSUMER) {
      return NextResponse.json(
        { error: "Unauthorized: Not a consumer account" },
        { status: 403 }
      );
    }
    
    // Get consumer data
    const consumer = await prisma.consumer.findUnique({
      where: { userId: user.id }
    });
    
    if (!consumer) {
      return NextResponse.json(
        { error: "Consumer profile not found" },
        { status: 404 }
      );
    }
    
    // Get QR codes count
    const qrCodesCount = await prisma.qRCode.count({
      where: { consumerId: consumer.id }
    });
    
    // Get verified QR codes count
    const verifiedQrCodesCount = await prisma.qRCode.count({
      where: { 
        consumerId: consumer.id,
        isVerified: true
      }
    });
    
    // Get recycling history
    const recyclingHistory = await prisma.recyclingHistory.findMany({
      where: { consumerId: consumer.id },
      orderBy: { verifiedAt: 'desc' },
      take: 5,
      include: {
        qrCode: {
          select: {
            wasteType: true,
            quantity: true,
            unit: true
          }
        },
        recyclingCenter: {
          select: {
            name: true
          }
        }
      }
    });
    
    // Calculate CO2 saved (simplified calculation)
    // In a real app, you would have more accurate calculations based on waste type and quantity
    const co2Saved = verifiedQrCodesCount * 2.5; // Assume 2.5kg CO2 saved per recycled item
    
    // Calculate recycling streak
    // This is a simplified implementation
    let recyclingStreak = 0;
    if (recyclingHistory.length > 0) {
      const today = new Date();
      const lastRecyclingDate = new Date(recyclingHistory[0].verifiedAt);
      
      // If recycled in the last 24 hours, streak is at least 1
      if ((today.getTime() - lastRecyclingDate.getTime()) < 24 * 60 * 60 * 1000) {
        recyclingStreak = 1;
        
        // Check previous days
        let currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() - 1);
        
        for (let i = 1; i < recyclingHistory.length; i++) {
          const recyclingDate = new Date(recyclingHistory[i].verifiedAt);
          const recyclingDay = recyclingDate.getDate();
          const recyclingMonth = recyclingDate.getMonth();
          const recyclingYear = recyclingDate.getFullYear();
          
          const currentDay = currentDate.getDate();
          const currentMonth = currentDate.getMonth();
          const currentYear = currentDate.getFullYear();
          
          // If there's a recycling record for the previous day, increment streak
          if (recyclingDay === currentDay && 
              recyclingMonth === currentMonth && 
              recyclingYear === currentYear) {
            recyclingStreak++;
            currentDate.setDate(currentDate.getDate() - 1);
          } else {
            break;
          }
        }
      }
    }
    
    // Get available rewards
    const availableRewards = await prisma.reward.findMany({
      where: { 
        isActive: true,
        OR: [
          { quantity: { gt: 0 } },
          { quantity: null } // null means unlimited
        ]
      },
      orderBy: { pointsCost: 'asc' },
      take: 3
    });
    
    // Find next reward
    let nextReward = null;
    if (availableRewards.length > 0) {
      // Find the first reward that the user doesn't have enough points for
      for (const reward of availableRewards) {
        if (consumer.points < reward.pointsCost) {
          nextReward = {
            id: reward.id,
            name: reward.name,
            description: reward.description,
            pointsCost: reward.pointsCost,
            image: reward.image
          };
          break;
        }
      }
      
      // If user has enough points for all rewards, set the most expensive one as next
      if (!nextReward && availableRewards.length > 0) {
        const mostExpensiveReward = availableRewards[availableRewards.length - 1];
        nextReward = {
          id: mostExpensiveReward.id,
          name: mostExpensiveReward.name,
          description: mostExpensiveReward.description,
          pointsCost: mostExpensiveReward.pointsCost,
          image: mostExpensiveReward.image
        };
      }
    }
    
    // Get recent redemptions
    const recentRedemptions = await prisma.rewardRedemption.findMany({
      where: { consumerId: consumer.id },
      orderBy: { createdAt: 'desc' },
      take: 3,
      include: {
        reward: true
      }
    });
    
    // Calculate points earned this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const pointsThisWeek = await prisma.recyclingHistory.aggregate({
      where: { 
        consumerId: consumer.id,
        verifiedAt: { gte: oneWeekAgo }
      },
      _sum: {
        pointsEarned: true
      }
    });
    
    // Calculate percentage change in recycling from last month
    const currentMonth = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    
    const currentMonthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastMonthStart = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
    const lastMonthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0);
    
    const currentMonthCount = await prisma.recyclingHistory.count({
      where: {
        consumerId: consumer.id,
        verifiedAt: { gte: currentMonthStart }
      }
    });
    
    const lastMonthCount = await prisma.recyclingHistory.count({
      where: {
        consumerId: consumer.id,
        verifiedAt: { 
          gte: lastMonthStart,
          lte: lastMonthEnd
        }
      }
    });
    
    let percentageChange = 0;
    if (lastMonthCount > 0) {
      percentageChange = Math.round(((currentMonthCount - lastMonthCount) / lastMonthCount) * 100);
    } else if (currentMonthCount > 0) {
      percentageChange = 100; // If last month was 0, and this month is > 0, that's a 100% increase
    }
    
    // Get recycling tips
    const recyclingTips = [
      "Rinse plastic containers before recycling to prevent contamination",
      "Remove caps from bottles unless instructed otherwise",
      "Flatten cardboard boxes to save space in recycling bins",
      "Remove food residue from containers before recycling",
      "Check with your local recycling center about accepted materials",
      "Use a separate bin for recyclables to make sorting easier",
      "Remember that not all plastics are recyclable - check the recycling number",
      "Avoid putting plastic bags in regular recycling - most centers require separate drop-offs"
    ];
    
    // Randomly select 3 tips
    const selectedTips = recyclingTips
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    return NextResponse.json({
      stats: {
        totalRecycledItems: verifiedQrCodesCount,
        percentageChange: percentageChange,
        totalQrCodes: qrCodesCount,
        rewardPoints: consumer.points,
        pointsThisWeek: pointsThisWeek._sum.pointsEarned || 0,
        co2Saved: co2Saved,
        recyclingStreak: recyclingStreak
      },
      recentActivity: recyclingHistory.map(item => ({
        id: item.id,
        wasteType: item.qrCode.wasteType,
        quantity: item.qrCode.quantity,
        unit: item.qrCode.unit,
        pointsEarned: item.pointsEarned,
        recyclingCenter: item.recyclingCenter.name,
        verifiedAt: item.verifiedAt
      })),
      nextReward: nextReward,
      recentRedemptions: recentRedemptions.map(redemption => ({
        id: redemption.id,
        rewardName: redemption.reward.name,
        pointsSpent: redemption.pointsSpent,
        status: redemption.status,
        redeemedAt: redemption.redeemedAt,
        createdAt: redemption.createdAt
      })),
      recyclingTips: selectedTips
    });
    
  } catch (error) {
    console.error("Consumer dashboard error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}