"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  Leaf,
  Calendar,
  Trophy,
  Recycle,
  AlertCircle,
  Sparkles,
  Info,
  QrCode,
  Clock,
  Printer,
  Download,
  ExternalLink
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface DashboardData {
  stats: {
    totalRecycledItems: number;
    percentageChange: number;
    totalQrCodes: number;
    rewardPoints: number;
    pointsThisWeek: number;
    co2Saved: number;
    recyclingStreak: number;
  };
  recentActivity: Array<{
    id: string;
    wasteType: string;
    quantity: number;
    unit: string;
    pointsEarned: number;
    recyclingCenter: string;
    verifiedAt: string;
  }>;
  nextReward: {
    id: string;
    name: string;
    description: string;
    pointsCost: number;
    image?: string;
  } | null;
  recentRedemptions: Array<{
    id: string;
    rewardName: string;
    pointsSpent: number;
    status: string;
    redeemedAt: string | null;
    createdAt: string;
  }>;
  recyclingTips: string[];
  qrCodes: Array<{
    id: string;
    wasteType: string;
    quantity: number;
    unit: string;
    qrCodeUrl: string;
    createdAt: string;
    isVerified: boolean;
  }>;
}

const ConsumerDashboard = () => {
  const router = useRouter();
  const [greeting, setGreeting] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [userName, setUserName] = useState<string>('Eco Warrior');
  const [loading, setLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Set greeting based on time of day
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting = '';
      
      if (hour >= 5 && hour < 12) {
        newGreeting = 'Good Morning';
      } else if (hour >= 12 && hour < 17) {
        newGreeting = 'Good Afternoon';
      } else if (hour >= 17 && hour < 22) {
        newGreeting = 'Good Evening';
      } else {
        newGreeting = 'Hello';
      }
      
      setGreeting(newGreeting);
    };
    
    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    // Initial calls
    updateGreeting();
    updateTime();
    
    // Set interval to update time every minute
    const timeInterval = setInterval(updateTime, 60000);
    
    return () => clearInterval(timeInterval);
  }, []);
  
  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Not authenticated');
          setLoading(false);
          return;
        }
        
        const response = await fetch('/api/dashboard/consumer', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch dashboard data');
        }
        
        const data = await response.json();
        
        // Also fetch QR code history
        const qrResponse = await fetch('/api/qrcode/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (qrResponse.ok) {
          const qrData = await qrResponse.json();
          // Merge the QR code data with the dashboard data
          data.qrCodes = qrData.qrCodes || [];
        } else {
          data.qrCodes = [];
        }
        
        setDashboardData(data);
        
        // Get user data
        const userResponse = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUserName(userData.user.name);
        }
        
      } catch (error: any) {
        console.error('Error fetching dashboard data:', error);
        setError(error.message);
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };
  
  const getWasteTypeLabel = (wasteType: string): string => {
    return wasteType.charAt(0).toUpperCase() + wasteType.slice(1).toLowerCase();
  };
  
  const handlePrintQR = (qrCode: any) => {
    // Open a new window with just the QR code
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Popup blocked. Please allow popups to print.');
      return;
    }
    
    // Write HTML content to the new window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print QR Code - Green Trace QR</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 20px;
            }
            .qr-container {
              margin: 30px auto;
              max-width: 400px;
            }
            .qr-image {
              width: 100%;
              max-width: 300px;
              height: auto;
            }
            .waste-details {
              margin-top: 20px;
              font-size: 14px;
              color: #666;
            }
            .waste-type {
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 5px;
            }
            .app-name {
              margin-top: 30px;
              color: #4ade80;
              font-weight: bold;
            }
            @media print {
              .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <img src="${qrCode.qrCodeUrl}" alt="QR Code" class="qr-image" />
            <div class="waste-details">
              <div class="waste-type">${getWasteTypeLabel(qrCode.wasteType)}</div>
              <div>${qrCode.quantity} ${qrCode.unit}</div>
              <div>ID: ${qrCode.id}</div>
            </div>
            <div class="app-name">Green Trace QR</div>
          </div>
          <div class="no-print">
            <button onclick="window.print();window.close();" style="padding: 10px 20px; background: #4ade80; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;">
              Print QR Code
            </button>
          </div>
        </body>
      </html>
    `);
    
    // Focus the new window
    printWindow.document.close();
    printWindow.focus();
  };
  
  const handleDownloadQR = (qrCode: any) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = qrCode.qrCodeUrl;
    link.download = `qrcode-${qrCode.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('QR code downloaded successfully');
  };
  
  const handleViewQRDetails = (qrCodeId: string) => {
    router.push(`/dashboard/qrcode/${qrCodeId}`);
  };
  
  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600">Loading your eco-friendly dashboard...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}. Please try refreshing the page or contact support if the problem persists.
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  
  if (!dashboardData) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>No Data Available</AlertTitle>
          <AlertDescription>
            No dashboard data is available. Start recycling to see your statistics!
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  
  const { stats, recentActivity, nextReward, recentRedemptions, recyclingTips, qrCodes = [] } = dashboardData;
  
  // Sort QR codes by creation date (newest first)
  const sortedQRCodes = [...qrCodes].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  
  // Take only the first 5 for display
  const recentQRCodes = sortedQRCodes.slice(0, 5);
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with greeting */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {greeting}, {userName}!
          </h1>
          <div className="text-lg text-gray-500">{currentTime}</div>
        </div>
        <p className="text-gray-500 mt-1">Welcome to your recycling rewards dashboard</p>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <Recycle className="h-4 w-4 mr-1 text-green-600" />
                Total Recycled Items
              </p>
              <h3 className="text-2xl font-bold">{stats.totalRecycledItems}</h3>
              <p className="text-xs flex items-center">
                {stats.percentageChange > 0 ? (
                  <>
                    <ArrowUpIcon className="h-3 w-3 text-green-600 mr-1" />
                    <span className="text-green-600">{stats.percentageChange}% from last month</span>
                  </>
                ) : stats.percentageChange < 0 ? (
                  <>
                    <ArrowDownIcon className="h-3 w-3 text-red-600 mr-1" />
                    <span className="text-red-600">{Math.abs(stats.percentageChange)}% from last month</span>
                  </>
                ) : (
                  <span className="text-gray-500">No change from last month</span>
                )}
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <Trophy className="h-4 w-4 mr-1 text-purple-600" />
                Reward Points
              </p>
              <h3 className="text-2xl font-bold">{stats.rewardPoints}</h3>
              <p className="text-xs text-purple-600">+{stats.pointsThisWeek} this week</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <Leaf className="h-4 w-4 mr-1 text-blue-600" />
                CO₂ Saved
              </p>
              <h3 className="text-2xl font-bold">{stats.co2Saved} kg</h3>
              <p className="text-xs text-blue-600">Environmental impact</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-amber-600" />
                Recycling Streak
              </p>
              <h3 className="text-2xl font-bold">{stats.recyclingStreak} days</h3>
              <p className="text-xs text-amber-600">Keep it up!</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Next reward progress */}
      {nextReward && (
        <Card className="mb-8 overflow-hidden border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 pb-2">
            <CardTitle className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-green-600" />
              Progress to Next Reward
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-medium">{nextReward.name}</h4>
                  <p className="text-sm text-gray-500">{nextReward.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold">{stats.rewardPoints}</span>
                  <span className="text-gray-500"> / {nextReward.pointsCost}</span>
                  <p className="text-xs text-gray-500">points</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <Progress 
                  value={(stats.rewardPoints / nextReward.pointsCost) * 100} 
                  className="h-2" 
                />
                <p className="text-xs text-right text-gray-500">
                  {nextReward.pointsCost - stats.rewardPoints} more points needed
                </p>
              </div>
              
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={stats.rewardPoints < nextReward.pointsCost}
              >
                {stats.rewardPoints >= nextReward.pointsCost ? 'Redeem Reward Now' : 'Keep Recycling to Earn Reward'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Tabs for Recent Activity and Tips */}
      <Tabs defaultValue="activity" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="tips">Recycling Tips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity" className="mt-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Your Recycling Activity</CardTitle>
              <CardDescription>
                See your recent recycling efforts and points earned
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((item, index) => (
                    <div key={item.id} className="flex justify-between items-start border-b pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium flex items-center">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                          {item.wasteType.charAt(0) + item.wasteType.slice(1).toLowerCase()} recycled
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} {item.unit} at {item.recyclingCenter}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+{item.pointsEarned} pts</p>
                        <p className="text-xs text-gray-500">{formatDate(item.verifiedAt)}</p>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full mt-4">
                    View All Activity
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Recycle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No Recycling Activity Yet</h3>
                  <p className="text-gray-500 mb-4">Start recycling to track your impact and earn points</p>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push('/dashboard/generate')}>Generate QR Code</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tips" className="mt-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recycling Tips</CardTitle>
              <CardDescription>
                Helpful advice to improve your recycling habits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recyclingTips.map((tip, index) => (
                  <div key={index} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-sm pt-1">{tip}</p>
                  </div>
                ))}
                
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-800">Pro Tip</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    Remember to check local recycling guidelines as they can vary by location. What's recyclable in one area may not be in another.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* QR Code History - Replacing Environmental Impact section */}
      <div className="mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <QrCode className="h-5 w-5 mr-2 text-gray-700" />
              Your QR Code History
            </CardTitle>
            <CardDescription>
              Recent QR codes you've generated for recycling
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {recentQRCodes.length > 0 ? (
              <div className="space-y-4">
                {recentQRCodes.map((qrCode) => (
                  <div key={qrCode.id} className="flex flex-col sm:flex-row gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex-shrink-0">
                      <img 
                        src={qrCode.qrCodeUrl} 
                        alt="QR Code" 
                        className="w-20 h-20 border rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-medium">
                          {getWasteTypeLabel(qrCode.wasteType)}
                        </h3>
                        <Badge className={qrCode.isVerified 
                          ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800" 
                          : "bg-amber-100 text-amber-800 hover:bg-amber-100 hover:text-amber-800"
                        }>
                          {qrCode.isVerified ? 'Verified' : 'Pending'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        {qrCode.quantity} {qrCode.unit} • {formatDate(qrCode.createdAt)}
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-2 sm:ml-auto mt-2 sm:mt-0">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => handlePrintQR(qrCode)}
                      >
                        <Printer className="h-3 w-3 mr-1" />
                        Print
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => handleDownloadQR(qrCode)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <QrCode className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No QR Codes Generated Yet</h3>
                <p className="text-gray-500 mb-4">
                  Generate QR codes for your recyclable items to start tracking your impact
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-gray-50 border-t p-4">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => router.push('/dashboard/generate')}
            >
              <QrCode className="h-4 w-4 mr-2" />
              {recentQRCodes.length > 0 ? 'View All QR Codes' : 'Generate Your First QR Code'}
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Ready to recycle more?</h3>
              <p className="text-green-50">Generate QR codes for your waste items and find recycling locations near you.</p>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="secondary" 
                className="bg-white text-green-700 hover:bg-green-50"
                onClick={() => router.push('/dashboard/centers')}
              >
                Find Recycling Centers
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-green-600"
                onClick={() => router.push('/dashboard/generate')}
              >
                Generate QR Code
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerDashboard;