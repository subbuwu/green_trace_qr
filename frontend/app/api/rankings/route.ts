// app/api/rankings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, WasteType } from '@prisma/client';
import { getCurrentUser } from '@/lib/auth-helpers';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const timeFrame = searchParams.get('timeFrame') || 'all-time';
    const wasteType = searchParams.get('wasteType') || 'all';
    
    // Get current user (if authenticated)
    const { success, user} = await getCurrentUser(request);
    const currentUserId = success ? user?.id : null;

    // Determine date filter based on timeFrame
    let dateFilter: Date | null = null;
    const now = new Date();
    
    if (timeFrame === 'weekly') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      dateFilter = oneWeekAgo;
    } else if (timeFrame === 'monthly') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(now.getMonth() - 1);
      dateFilter = oneMonthAgo;
    } else if (timeFrame === 'yearly') {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(now.getFullYear() - 1);
      dateFilter = oneYearAgo;
    }

    // Build waste type filter
    const wasteTypeFilter = wasteType !== 'all' ? { wasteType: wasteType as WasteType } : {};

    // Get top users with their recycling data
    const leaderboardUsers = await prisma.consumer.findMany({
      select: {
        id: true,
        userId: true,
        points: true,
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
        recyclingHistory: {
          where: {
            ...(dateFilter ? { createdAt: { gte: dateFilter } } : {}),
            qrCode: {
              ...wasteTypeFilter,
            },
          },
          select: {
            pointsEarned: true,
            qrCode: {
              select: {
                quantity: true,
                unit: true,
              },
            },
          },
        },
      },
      orderBy: {
        points: 'desc',
      },
      take: 100,
    });

    // Calculate total waste recycled for each user and format the response
    const topUsers = leaderboardUsers.map((user, index) => {
      const wasteRecycled = user.recyclingHistory.reduce((total, history) => {
        return total + history.qrCode.quantity;
      }, 0);

      // Create a set of badges (this is simplified - you would likely have a more complex badges system)
      const badges = [];
      if (user.points >= 1000) badges.push('Earth Champion');
      if (wasteRecycled >= 100) badges.push('Recycling Expert');
      if (user.recyclingHistory.length >= 10) badges.push('Consistent Recycler');

      return {
        id: user.id,
        name: user.user.name,
        avatar: user.user.avatar,
        points: user.points,
        wasteRecycled: parseFloat(wasteRecycled.toFixed(2)),
        rank: index + 1,
        badges,
      };
    });

    // Get current user's rank if authenticated
    let currentUserRank = null;
    if (currentUserId) {
      const userConsumer = await prisma.consumer.findFirst({
        where: {
          user: {
            id: currentUserId,
          },
        },
        select: {
          id: true,
          userId: true,
          points: true,
          user: {
            select: {
              name: true,
              avatar: true,
            },
          },
          recyclingHistory: {
            where: {
              ...(dateFilter ? { createdAt: { gte: dateFilter } } : {}),
              qrCode: {
                ...wasteTypeFilter,
              },
            },
            select: {
              pointsEarned: true,
              qrCode: {
                select: {
                  quantity: true,
                  unit: true,
                },
              },
            },
          },
        },
      });

      if (userConsumer) {
        const userWasteRecycled = userConsumer.recyclingHistory.reduce((total, history) => {
          return total + history.qrCode.quantity;
        }, 0);

        // Find user's rank
        const rank = topUsers.findIndex(u => u.id === userConsumer.id) + 1;

        // Create badges
        const badges = [];
        if (userConsumer.points >= 1000) badges.push('Earth Champion');
        if (userWasteRecycled >= 100) badges.push('Recycling Expert');
        if (userConsumer.recyclingHistory.length >= 10) badges.push('Consistent Recycler');

        currentUserRank = {
          id: userConsumer.id,
          name: userConsumer.user.name,
          avatar: userConsumer.user.avatar,
          points: userConsumer.points,
          wasteRecycled: parseFloat(userWasteRecycled.toFixed(2)),
          rank: rank > 0 ? rank : topUsers.length + 1,
          badges,
        };
      }
    }

    // Calculate total stats
    const totalUsers = await prisma.consumer.count();
    
    // Calculate total waste recycled
    const totalWasteRecycled = await prisma.qRCode.aggregate({
      _sum: {
        quantity: true,
      },
      where: {
        ...(dateFilter ? { createdAt: { gte: dateFilter } } : {}),
        ...wasteTypeFilter,
      },
    });

    return NextResponse.json({
      topUsers: topUsers.slice(0, 20), // Return only top 20 for display
      currentUserRank,
      totalUsers,
      totalWasteRecycled: parseFloat((totalWasteRecycled._sum.quantity || 0).toFixed(2)),
    });
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard data' },
      { status: 500 }
    );
  }
}