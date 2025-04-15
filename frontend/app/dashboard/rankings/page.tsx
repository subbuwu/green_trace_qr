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

// Session implementation
const useSession = () => {
  const [session, setSession] = useState<{ user: { id: string, name: string } } | null>(null);
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setStatus('unauthenticated');
          return;
        }
        
        // Instead of a dedicated validation endpoint, we'll use the rankings endpoint
        // to determine if the user is authenticated based on whether currentUserRank is returned
        const response = await fetch('/api/rankings', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.currentUserRank) {
            setSession({
              user: {
                id: data.currentUserRank.id,
                name: data.currentUserRank.name
              }
            });
            setStatus('authenticated');
          } else {
            setStatus('unauthenticated');
          }
        } else {
          localStorage.removeItem('token');
          setStatus('unauthenticated');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setStatus('unauthenticated');
      }
    };
    
    checkAuth();
  }, []);
  
  return { session, status };
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
        const token = localStorage.getItem('token');
        const headers: HeadersInit = {};
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        
        const response = await fetch(
          `/api/rankings?timeFrame=${timeFilter}&wasteType=${wasteTypeFilter}`,
          { headers }
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
          const token = localStorage.getItem('token');
          
          const response = await fetch('/api/rewards/history', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
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
      const token = localStorage.getItem('token');
      
      const response = await fetch('/api/rewards/redeem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rewardId }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to redeem reward");
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
        
        {status === 'authenticated' && leaderboardData?.currentUserRank && (
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 md:min-w-48 mt-4 md:mt-0">
            <CardHeader className="py-3">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Zap className="h-5 w-5" /> Your Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="flex flex-col gap-1">
                <p className="text-sm flex justify-between">
                  <span className="text-gray-600">Rank:</span>
                  <span className="font-semibold">#{leaderboardData.currentUserRank.rank}</span>
                </p>
                <p className="text-sm flex justify-between">
                  <span className="text-gray-600">Points:</span>
                  <span className="font-semibold">{leaderboardData.currentUserRank.points}</span>
                </p>
                <p className="text-sm flex justify-between">
                  <span className="text-gray-600">Recycled:</span>
                  <span className="font-semibold">{leaderboardData.currentUserRank.wasteRecycled} kg</span>
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <div className="mb-6">
        <Tabs defaultValue="rankings" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="rankings" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" /> Rankings
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex items-center gap-2">
              <Gift className="h-4 w-4" /> Rewards
            </TabsTrigger>
          </TabsList>
          
          {/* Rankings Tab */}
          <TabsContent value="rankings">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <CardTitle>Top Recyclers</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Select value={timeFilter} onValueChange={setTimeFilter}>
                          <SelectTrigger className="w-36">
                            <Calendar className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all-time">All Time</SelectItem>
                            <SelectItem value="yearly">Past Year</SelectItem>
                            <SelectItem value="monthly">Past Month</SelectItem>
                            <SelectItem value="weekly">Past Week</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <Select value={wasteTypeFilter} onValueChange={setWasteTypeFilter}>
                          <SelectTrigger className="w-36">
                            <Tag className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Waste Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="PAPER">Paper</SelectItem>
                            <SelectItem value="PLASTIC">Plastic</SelectItem>
                            <SelectItem value="GLASS">Glass</SelectItem>
                            <SelectItem value="METAL">Metal</SelectItem>
                            <SelectItem value="ELECTRONICS">Electronics</SelectItem>
                            <SelectItem value="ORGANIC">Organic</SelectItem>
                            <SelectItem value="TEXTILE">Textile</SelectItem>
                            <SelectItem value="HAZARDOUS">Hazardous</SelectItem>
                            <SelectItem value="OTHER">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {leaderboardLoading ? (
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-40" />
                              <Skeleton className="h-4 w-24" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th 
                                className="px-4 py-3 text-left"
                                onClick={() => toggleSort('rank')}
                              >
                                <div className="flex items-center cursor-pointer">
                                  <span>Rank</span>
                                  {sortField === 'rank' && (
                                    sortDirection === 'asc' ? 
                                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                                      <ChevronDown className="ml-1 h-4 w-4" />
                                  )}
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left">User</th>
                              <th 
                                className="px-4 py-3 text-right"
                                onClick={() => toggleSort('points')}
                              >
                                <div className="flex items-center justify-end cursor-pointer">
                                  <span>Points</span>
                                  {sortField === 'points' && (
                                    sortDirection === 'asc' ? 
                                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                                      <ChevronDown className="ml-1 h-4 w-4" />
                                  )}
                                </div>
                              </th>
                              <th 
                                className="px-4 py-3 text-right"
                                onClick={() => toggleSort('wasteRecycled')}
                              >
                                <div className="flex items-center justify-end cursor-pointer">
                                  <span>Recycled (kg)</span>
                                  {sortField === 'wasteRecycled' && (
                                    sortDirection === 'asc' ? 
                                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                                      <ChevronDown className="ml-1 h-4 w-4" />
                                  )}
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left">Badges</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getSortedLeaderboardData().map((user) => (
                              <tr 
                                key={user.id} 
                                className={`border-b border-gray-100 hover:bg-gray-50 ${
                                  leaderboardData?.currentUserRank?.id === user.id 
                                    ? 'bg-green-50' 
                                    : ''
                                }`}
                              >
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    {getRankIcon(user.rank)}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    {user.avatar ? (
                                      <Image 
                                        src={user.avatar} 
                                        alt={user.name} 
                                        width={32} 
                                        height={32} 
                                        className="rounded-full"
                                      />
                                    ) : (
                                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <User className="h-4 w-4 text-gray-500" />
                                      </div>
                                    )}
                                    <span className="font-medium">{user.name}</span>
                                    {leaderboardData?.currentUserRank?.id === user.id && (
                                      <Badge variant="outline" className="ml-1 text-xs bg-green-50 border-green-200 text-green-700">
                                        You
                                      </Badge>
                                    )}
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-right font-medium">
                                  {user.points}
                                </td>
                                <td className="px-4 py-3 text-right font-medium">
                                  {user.wasteRecycled}
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex flex-wrap gap-1">
                                    {user.badges.map((badge, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {badge}
                                      </Badge>
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {leaderboardLoading ? (
                      <div className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600">Total Recyclers</p>
                          <p className="text-2xl font-bold text-green-800">
                            {leaderboardData?.totalUsers.toLocaleString()}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600">Total Waste Recycled</p>
                          <p className="text-2xl font-bold text-blue-800">
                            {leaderboardData?.totalWasteRecycled.toLocaleString()} kg
                          </p>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600">
                            {timeFilter === 'all-time' ? 'All Time' : 
                             timeFilter === 'yearly' ? 'Past Year' :
                             timeFilter === 'monthly' ? 'Past Month' : 'Past Week'}
                          </p>
                          <p className="text-sm font-medium text-purple-800">
                            {wasteTypeFilter === 'all' ? 'All Waste Types' : wasteTypeFilter.charAt(0) + wasteTypeFilter.slice(1).toLowerCase()}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Rewards Tab */}
          <TabsContent value="rewards">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <CardTitle>Available Rewards</CardTitle>
                      <div className="relative w-full sm:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search rewards"
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <CardDescription>Redeem your points for these amazing rewards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {rewardsLoading ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="border rounded-lg p-4">
                            <Skeleton className="h-32 w-full rounded-md mb-3" />
                            <Skeleton className="h-5 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-2/3" />
                          </div>
                        ))}
                      </div>
                    ) : filteredRewards.length === 0 ? (
                      <div className="text-center py-10">
                        <p className="text-gray-500">No rewards match your search.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredRewards.map((reward) => (
                          <div 
                            key={reward.id} 
                            className={`border rounded-lg transition-shadow hover:shadow-md ${
                              !reward.isActive || (reward.quantity !== null && reward.quantity <= 0)
                                ? 'opacity-60'
                                : ''
                            }`}
                          >
                            <div className="p-4">
                              <div className="mb-3 h-32 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                                {reward.image ? (
                                  <Image 
                                    src={reward.image} 
                                    alt={reward.name} 
                                    width={120} 
                                    height={120} 
                                    className="object-contain"
                                  />
                                ) : (
                                  <Gift className="h-12 w-12 text-gray-400" />
                                )}
                              </div>
                              <h3 className="text-lg font-semibold mb-1">{reward.name}</h3>
                              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{reward.description}</p>
                              <div className="flex justify-between items-center mt-4">
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                  {reward.pointsCost} Points
                                </Badge>
                                {reward.quantity !== null && (
                                  <span className="text-xs text-gray-500">
                                    {reward.quantity > 0 ? `${reward.quantity} left` : 'Out of stock'}
                                  </span>
                                )}
                              </div>
                              <Button 
                                className="w-full mt-3" 
                                disabled={
                                  !reward.isActive || 
                                  (reward.quantity !== null && reward.quantity <= 0) || 
                                  status !== 'authenticated' ||
                                  userPoints < reward.pointsCost
                                }
                                onClick={() => {
                                  setSelectedReward(reward);
                                  setRedeemDialogOpen(true);
                                }}
                              >
                                {userPoints < reward.pointsCost 
                                  ? `Need ${reward.pointsCost - userPoints} more points` 
                                  : 'Redeem'}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-1">
                <div className="space-y-6">
                  {status === 'authenticated' && (
                    <Card>
                      <CardHeader className="py-4">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Award className="h-5 w-5 text-green-600" /> Your Points
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="py-3">
                        <div className="text-3xl font-bold text-green-800">{userPoints}</div>
                        <p className="text-sm text-gray-500">Available to redeem</p>
                      </CardContent>
                    </Card>
                  )}
                  
                  {status === 'authenticated' && redemptionHistory.length > 0 && (
                    <Card>
                      <CardHeader className="py-4">
                        <CardTitle className="text-lg">Recent Redemptions</CardTitle>
                      </CardHeader>
                      <CardContent className="py-2">
                        <div className="space-y-3">
                          {redemptionHistory.slice(0, 5).map((redemption) => (
                            <div key={redemption.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium text-sm">{redemption.rewardName}</p>
                                  <p className="text-xs text-gray-500">
                                    {new Date(redemption.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getStatusBadgeClass(redemption.status)}`}
                                >
                                  <span className="flex items-center gap-1">
                                    {getStatusIcon(redemption.status)}
                                    {redemption.status}
                                  </span>
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">
                                {redemption.pointsSpent} points
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  
                  {status !== 'authenticated' && (
                    <Card>
                      <CardHeader className="py-5">
                        <CardTitle className="text-lg">Sign In Required</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          Please sign in to view your points and redeem rewards.
                        </p>
                        <Button className="w-full">
                          Sign In
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Redeem Confirmation Dialog */}
      <Dialog open={redeemDialogOpen} onOpenChange={setRedeemDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Redeem Reward</DialogTitle>
            <DialogDescription>
              Are you sure you want to redeem this reward using your points?
            </DialogDescription>
          </DialogHeader>
          
          {selectedReward && (
            <div className="py-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                  {selectedReward.image ? (
                    <Image 
                      src={selectedReward.image} 
                      alt={selectedReward.name} 
                      width={48} 
                      height={48} 
                      className="object-contain"
                    />
                  ) : (
                    <Gift className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedReward.name}</h3>
                  <p className="text-sm text-gray-600">{selectedReward.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded p-3 mb-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Your current points:</span>
                  <span className="font-medium">{userPoints}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost:</span>
                  <span className="font-medium text-amber-600">-{selectedReward.pointsCost}</span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2 flex justify-between">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-semibold">
                    {userPoints - selectedReward.pointsCost}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">
                Once redeemed, our team will review and process your request. You'll receive a notification when it's approved.
              </p>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRedeemDialogOpen(false)}
              disabled={redemptionLoading}
            >
              Cancel
            </Button>
            <Button 
              onClick={() => selectedReward && handleRedeemReward(selectedReward.id)}
              disabled={redemptionLoading}
            >
              {redemptionLoading ? (
                <>Processing...</>
              ) : (
                <>Confirm Redemption</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RankingsAndRewardsPage;