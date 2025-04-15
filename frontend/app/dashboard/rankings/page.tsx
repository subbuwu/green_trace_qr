// app/rankings/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Award, Trophy, Medal, Crown, Calendar, Gift, Search, Tag, Zap, Filter, User, ArrowUp, ChevronDown, ChevronUp, CheckCircle, XCircle, Clock } from "lucide-react";
import Image from 'next/image';

// Types
type LeaderboardUser = {
  id: string;
  name: string;
  avatar: string | null;
  points: number;
  wasteRecycled: number;
  rank: number;
  badges: string[];
}

type LeaderboardData = {
  topUsers: LeaderboardUser[];
  currentUserRank: LeaderboardUser | null;
  totalUsers: number;
  totalWasteRecycled: number;
}

type Reward = {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  image: string | null;
  isActive: boolean;
  quantity: number | null;
}

type RewardRedemption = {
  id: string;
  createdAt: string;
  rewardId: string;
  rewardName: string;
  pointsSpent: number;
  status: string;
  redeemedAt: string | null;
}

// Session mock (you should replace this with your actual auth implementation)
const useSession = () => {
  // This is a simplified mock. In a real app, you'd implement proper authentication
  const [session, setSession] = useState<{ user: { id: string, name: string } } | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you'd validate the token
      setSession({
        user: {
          id: 'mock-user-id',
          name: 'Test User'
        }
      });
    }
  }, []);
  
  return { session, status: session ? 'authenticated' : 'unauthenticated' };
};

const RankingsAndRewardsPage = () => {
  const { session, status } = useSession();
  
  // Leaderboard states
  const [timeFilter, setTimeFilter] = useState<string>('all-time');
  const [wasteTypeFilter, setWasteTypeFilter] = useState<string>('all');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData | null>(null);
  const [leaderboardLoading, setLeaderboardLoading] = useState<boolean>(true);
  
  // Rewards states
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [rewardsLoading, setRewardsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [redemptionHistory, setRedemptionHistory] = useState<RewardRedemption[]>([]);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [redeemDialogOpen, setRedeemDialogOpen] = useState<boolean>(false);
  const [redemptionLoading, setRedemptionLoading] = useState<boolean>(false);
  const [userPoints, setUserPoints] = useState<number>(0);
  
  // Add sort state for the leaderboard
  const [sortField, setSortField] = useState<'rank' | 'points' | 'wasteRecycled'>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Notification state
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      setLeaderboardLoading(true);
      try {
        // In a real app, you would include the auth token in the headers
        const response = await fetch(
          `/api/rankings?timeFrame=${timeFilter}&wasteType=${wasteTypeFilter}`
        );
        
        if (!response.ok) throw new Error("Failed to fetch leaderboard data");
        
        const data = await response.json();
        setLeaderboardData(data);
        
        // If current user exists, set their points
        if (data.currentUserRank) {
          setUserPoints(data.currentUserRank.points);
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        showNotification("Failed to load leaderboard data", "error");
      } finally {
        setLeaderboardLoading(false);
      }
    };

    fetchLeaderboardData();
  }, [timeFilter, wasteTypeFilter]);

  // Fetch rewards data
  useEffect(() => {
    const fetchRewards = async () => {
      setRewardsLoading(true);
      try {
        // In a real app, you would include the auth token in the headers
        const response = await fetch('/api/rewards');
        
        if (!response.ok) throw new Error("Failed to fetch rewards");
        
        const data = await response.json();
        setRewards(data.rewards);
      } catch (error) {
        console.error("Error fetching rewards:", error);
        showNotification("Failed to load rewards", "error");
      } finally {
        setRewardsLoading(false);
      }
    };

    fetchRewards();
  }, []);

  // Fetch redemption history for authenticated users
  useEffect(() => {
    const fetchRedemptionHistory = async () => {
      if (status === 'authenticated') {
        try {
          // In a real app, you would include the auth token in the headers
          const response = await fetch('/api/rewards/history');
          
          if (!response.ok) throw new Error("Failed to fetch redemption history");
          
          const data = await response.json();
          setRedemptionHistory(data.redemptions);
        } catch (error) {
          console.error("Error fetching redemption history:", error);
        }
      }
    };

    fetchRedemptionHistory();
  }, [status]);

  // Helper function to show notifications
  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({
      show: true,
      message,
      type
    });
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  // Helper function to render rank icon
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Trophy className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />;
      default:
        return <span className="flex h-6 w-6 items-center justify-center font-bold">{rank}</span>;
    }
  };

  // Helper function to sort leaderboard data
  const getSortedLeaderboardData = () => {
    if (!leaderboardData?.topUsers) return [];
    
    return [...leaderboardData.topUsers].sort((a, b) => {
      if (sortField === 'rank') {
        return sortDirection === 'asc' ? a.rank - b.rank : b.rank - a.rank;
      } else if (sortField === 'points') {
        return sortDirection === 'asc' ? a.points - b.points : b.points - a.points;
      } else { // wasteRecycled
        return sortDirection === 'asc' 
          ? a.wasteRecycled - b.wasteRecycled 
          : b.wasteRecycled - a.wasteRecycled;
      }
    });
  };

  // Helper function to toggle sort
  const toggleSort = (field: 'rank' | 'points' | 'wasteRecycled') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc'); // Default to descending when changing fields
    }
  };

  // Filter rewards based on search query
  const filteredRewards = rewards.filter(reward => 
    reward.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    reward.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle reward redemption
  const handleRedeemReward = async (rewardId: string) => {
    if (status !== 'authenticated') {
      showNotification("Please sign in to redeem rewards", "error");
      return;
    }

    setRedemptionLoading(true);
    try {
      // In a real app, you would include the auth token in the headers
      const response = await fetch('/api/rewards/redeem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rewardId }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to redeem reward");
      }

      const data = await response.json();
      
      // Update user points
      setUserPoints(data.currentPoints);
      
      // Add to redemption history
      setRedemptionHistory(prev => [data.redemption, ...prev]);
      
      // Show success message
      showNotification("Reward successfully redeemed!", "success");
      
      // Close dialog
      setRedeemDialogOpen(false);
    } catch (error) {
      console.error("Error redeeming reward:", error);
      showNotification((error as Error).message || "Failed to redeem reward", "error");
    } finally {
      setRedemptionLoading(false);
    }
  };

  // Get status badge color
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'APPROVED':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'REJECTED':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'REDEEMED':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="h-4 w-4" />;
      case 'APPROVED':
        return <CheckCircle className="h-4 w-4" />;
      case 'REJECTED':
        return <XCircle className="h-4 w-4" />;
      case 'REDEEMED':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Notification */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          <Alert 
            className={notification.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}
          >
            <AlertTitle className={notification.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {notification.type === 'success' ? 'Success' : 'Error'}
            </AlertTitle>
            <AlertDescription className={notification.type === 'success' ? 'text-green-700' : 'text-red-700'}>
              {notification.message}
            </AlertDescription>
          </Alert>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">EcoChampions Leaderboard</h1>
          <p className="text-muted-foreground">Track your recycling impact and earn rewards</p>
        </div>
        
        {status === 'authenticated' && (
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 md:min-w-48 mt-4 md:mt-0">
            <CardHeader className="py-3">
              <CardTitle className="flex items-center gap-2 text-