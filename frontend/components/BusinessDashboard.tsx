"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { AddRecyclingCenterDialog } from "@/components/AddRecyclingCenterDialog";
import { 
  Trash2, 
  Edit, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  ArrowUpRight, 
  Recycle,
  User,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  BarChart3,
  History,
  LayoutDashboard,
  Settings,
  PlusCircle,
  MoreVertical,
  Calendar,
  RefreshCw
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Types
interface Business {
  id: string;
  businessName: string;
  businessAddress: string;
  businessType: string;
  description: string | null;
  logo: string | null;
  coverImage: string | null;
  website: string | null;
  socialLinks: Record<string, string> | null;
  status: string;
  points: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  userType: string;
  verified: boolean;
  profile: Business;
}

interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  operatingHours: Record<string, string> | null;
  acceptedWasteTypes: string[];
  isActive: boolean;
}

interface RecyclingHistory {
  id: string;
  createdAt: string;
  qrCode: {
    wasteType: string;
    quantity: number;
    unit: string;
  };
  consumer: {
    user: {
      name: string;
    }
  };
  pointsEarned: number;
}

// Form schema for business profile
const businessProfileSchema = z.object({
  businessName: z.string().min(1, { message: "Business name is required" }),
  businessAddress: z.string().min(1, { message: "Business address is required" }),
  businessType: z.string().min(1, { message: "Business type is required" }),
  description: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});

// Analytics data shape
type AnalyticsData = {
  label: string;
  value: number;
}[];

// Custom color palette for charts
const CHART_COLORS = [
  "#3b82f6", // Blue
  "#60a5fa", // Light Blue
  "#93c5fd", // Lighter Blue
  "#bfdbfe", // Very Light Blue
  "#2563eb", // Dark Blue
  "#1d4ed8", // Darker Blue
  "#1e40af", // Deep Blue
  "#1e3a8a", // Navy Blue
];

export default function BusinessDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [centers, setCenters] = useState<RecyclingCenter[]>([]);
  const [recyclingHistory, setRecyclingHistory] = useState<RecyclingHistory[]>([]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>([]);
  const [wasteTypeAnalytics, setWasteTypeAnalytics] = useState<AnalyticsData>([]);
  const [dailyTrends, setDailyTrends] = useState<AnalyticsData>([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ title: "", message: "" });
  const [selectedTab, setSelectedTab] = useState("overview");

  // Form setup
  const form = useForm<z.infer<typeof businessProfileSchema>>({
    resolver: zodResolver(businessProfileSchema),
    defaultValues: {
      businessName: "",
      businessAddress: "",
      businessType: "",
      description: "",
      website: "",
      phone: "",
      email: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    // Fetch all data
    fetchAllData(token);
  }, [router]);

  useEffect(() => {
    if (user) {
      // Set form values from user data
      form.setValue("businessName", user.profile.businessName);
      form.setValue("businessAddress", user.profile.businessAddress);
      form.setValue("businessType", user.profile.businessType);
      form.setValue("description", user.profile.description || "");
      form.setValue("website", user.profile.website || "");
      form.setValue("phone", user.phone || "");
      form.setValue("email", user.email);
    }
  }, [user, form]);

  useEffect(() => {
    if (recyclingHistory.length > 0) {
      generateAnalyticsData();
    }
  }, [recyclingHistory]);

  const fetchAllData = async (token: string) => {
    setRefreshing(true);
    await Promise.all([
      fetchUserData(token),
      fetchRecyclingCenters(token),
      fetchRecyclingHistory(token)
    ]);
    setRefreshing(false);
  };

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch("/api/business/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
      showAlert("Error", "Failed to load your profile data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRecyclingCenters = async (token: string) => {
    try {
      const response = await fetch("/api/business/recycling-centers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recycling centers");
      }

      const data = await response.json();
      setCenters(data.centers);
    } catch (error) {
      console.error("Error fetching recycling centers:", error);
    }
  };

  const fetchRecyclingHistory = async (token: string) => {
    try {
      const response = await fetch("/api/business/recycling-history", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recycling history");
      }

      const data = await response.json();
      setRecyclingHistory(data.history);
    } catch (error) {
      console.error("Error fetching recycling history:", error);
    }
  };

  const generateAnalyticsData = () => {
    // Group by month for time-based analytics
    const monthlyData: Record<string, number> = {};
    
    recyclingHistory.forEach(item => {
      const date = new Date(item.createdAt);
      const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = 0;
      }
      monthlyData[monthYear] += item.pointsEarned;
    });
    
    const sortedMonthlyData = Object.entries(monthlyData)
      .map(([label, value]) => ({ label, value }))
      .sort((a, b) => {
        const [aMonth, aYear] = a.label.split(' ');
        const [bMonth, bYear] = b.label.split(' ');
        
        if (aYear !== bYear) return parseInt(aYear) - parseInt(bYear);
        
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months.indexOf(aMonth) - months.indexOf(bMonth);
      });
    
    setAnalyticsData(sortedMonthlyData);
    
    // Group by waste type
    const wasteTypeData: Record<string, number> = {};
    
    recyclingHistory.forEach(item => {
      const wasteType = item.qrCode.wasteType;
      
      if (!wasteTypeData[wasteType]) {
        wasteTypeData[wasteType] = 0;
      }
      wasteTypeData[wasteType] += item.qrCode.quantity;
    });
    
    const wasteTypeAnalyticsData = Object.entries(wasteTypeData)
      .map(([label, value]) => ({ label, value }));
    
    setWasteTypeAnalytics(wasteTypeAnalyticsData);

    // Generate daily trends for last 7 days
    const dailyData: Record<string, number> = {};
    const today = new Date();
    
    // Initialize with zero values for the last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
      dailyData[dayStr] = 0;
    }
    
    // Fill with actual data
    recyclingHistory.forEach(item => {
      const date = new Date(item.createdAt);
      const dayDiff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
      
      if (dayDiff < 7) {
        const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
        dailyData[dayStr] += item.pointsEarned;
      }
    });
    
    const dailyTrendsData = Object.entries(dailyData)
      .map(([label, value]) => ({ label, value }));
    
    setDailyTrends(dailyTrendsData);
  };

  const onProfileSubmit = async (values: z.infer<typeof businessProfileSchema>) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch("/api/business/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      setUser(prev => prev ? { ...prev, profile: { ...prev.profile, ...data.business } } : null);
      showAlert("Profile Updated", "Your business profile has been updated successfully.");
    } catch (error) {
      console.error("Error updating profile:", error);
      showAlert("Update Failed", "We couldn't update your profile. Please try again later.");
    }
  };

  const navigateToVerify = () => {
    router.push("/dashboard/verify");
  };

  const refreshData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchAllData(token);
    }
  };

  const handleCenterAction = async (centerId: string, action: 'edit' | 'toggle') => {
    // This would be implemented with actual API calls
    alert(`${action} center ${centerId} - This would call an API in production`);
    
    // After API call succeeds, refresh the data
    const token = localStorage.getItem("token");
    if (token) {
      fetchRecyclingCenters(token);
    }
  };

  const showAlert = (title: string, message: string) => {
    setAlertMessage({ title, message });
    setAlertOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center space-y-4">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          <h2 className="text-2xl font-semibold">Loading Dashboard</h2>
          <p className="text-gray-500">Please wait while we load your business data</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Session Expired</h2>
          <p className="text-gray-600 mb-6">Your session has expired or you're not logged in. Please log in again to access your dashboard.</p>
          <Button className="w-full" onClick={() => router.push("/login")}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  const getMetricTrend = (metricName: string) => {
    // This would calculate a real trend based on historical data
    // For now we'll return a random value between -15 and +25
    const trends: Record<string, number> = {
      "points": 15.3,
      "centers": 0,
      "transactions": 27.8
    };
    
    return trends[metricName] || Math.floor(Math.random() * 40) - 15;
  };

  const formatTrend = (trend: number) => {
    const prefix = trend > 0 ? "+" : "";
    return `${prefix}${trend.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header with Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 py-4">
            {/* Header */}
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center"
                  onClick={refreshData}
                  disabled={refreshing}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                  Refresh Data
                </Button>
                <Button
                  size="sm" 
                  onClick={navigateToVerify}
                >
                  Verify QR Code
                </Button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <Button 
                variant={selectedTab === "overview" ? "default" : "ghost"} 
                size="sm"
                className="flex-1"
                onClick={() => setSelectedTab("overview")}
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button 
                variant={selectedTab === "analytics" ? "default" : "ghost"} 
                size="sm"
                className="flex-1"
                onClick={() => setSelectedTab("analytics")}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button 
                variant={selectedTab === "history" ? "default" : "ghost"} 
                size="sm"
                className="flex-1"
                onClick={() => setSelectedTab("history")}
              >
                <History className="w-4 h-4 mr-2" />
                History
              </Button>
              <Button 
                variant={selectedTab === "centers" ? "default" : "ghost"} 
                size="sm"
                className="flex-1"
                onClick={() => setSelectedTab("centers")}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Centers
              </Button>
              <Button 
                variant={selectedTab === "profile" ? "default" : "ghost"} 
                size="sm"
                className="flex-1"
                onClick={() => setSelectedTab("profile")}
              >
                <Building2 className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              {selectedTab === "overview" && "Business Dashboard"}
              {selectedTab === "analytics" && "Analytics & Insights"}
              {selectedTab === "profile" && "Business Profile"}
              {selectedTab === "centers" && "Recycling Centers"}
              {selectedTab === "history" && "Recycling History"}
            </h1>
            <p className="text-gray-600 mt-1">
              {selectedTab === "overview" && `Welcome back, ${user.profile.businessName}!`}
              {selectedTab === "analytics" && "Track your impact and performance metrics"}
              {selectedTab === "profile" && "Manage your business information"}
              {selectedTab === "centers" && "Manage your recycling center locations"}
              {selectedTab === "history" && "View all recycling transactions"}
            </p>
          </div>
        </div>

        {/* Overview Content */}
        {selectedTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Verified Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{user.profile.points}</div>
                  <div className="flex items-center mt-1">
                    <div className={`text-xs ${getMetricTrend("points") >= 0 ? 'text-blue-600' : 'text-red-600'} flex items-center`}>
                      <ArrowUpRight className={`h-3 w-3 mr-1 ${getMetricTrend("points") < 0 ? 'rotate-180' : ''}`} />
                      {formatTrend(getMetricTrend("points"))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">vs. last month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Recycling Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{centers.filter(c => c.isActive).length}</div>
                  <div className="flex items-center mt-1">
                    <div className={`text-xs ${getMetricTrend("centers") >= 0 ? 'text-blue-600' : 'text-red-600'} flex items-center`}>
                      <ArrowUpRight className={`h-3 w-3 mr-1 ${getMetricTrend("centers") < 0 ? 'rotate-180' : ''}`} />
                      {formatTrend(getMetricTrend("centers"))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">vs. last month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Recycling Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{recyclingHistory.length}</div>
                  <div className="flex items-center mt-1">
                    <div className={`text-xs ${getMetricTrend("transactions") >= 0 ? 'text-blue-600' : 'text-red-600'} flex items-center`}>
                      <ArrowUpRight className={`h-3 w-3 mr-1 ${getMetricTrend("transactions") < 0 ? 'rotate-180' : ''}`} />
                      {formatTrend(getMetricTrend("transactions"))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">vs. last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-sm lg:col-span-2 hover:bg-blue-50">
                <CardHeader className="flex flex-row justify-between items-center pb-2">
                  <div>
                    <CardTitle>Daily Performance</CardTitle>
                    <CardDescription>Points earned in the last 7 days</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dailyTrends}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          name="Points" 
                          stroke="#3b82f6" 
                          strokeWidth={2}
                          dot={{ fill: '#3b82f6', r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle>Waste Distribution</CardTitle>
                  <CardDescription>Types of waste recycled</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={wasteTypeAnalytics}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={50}
                          dataKey="value"
                          nameKey="label"
                          label={(entry) => entry.label}
                          labelLine={false}
                        >
                          {wasteTypeAnalytics.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={CHART_COLORS[index % CHART_COLORS.length]} 
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value, name, props) => [`${value} units`, props.payload.label]} />
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-sm hover:bg-blue-50">
              <CardHeader className="flex flex-row justify-between items-center">
                <div>
                  <CardTitle>Recent Recycling Activity</CardTitle>
                  <CardDescription>Latest recycling transactions</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs font-medium"
                  onClick={() => setSelectedTab("history")}
                >
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Consumer</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Waste Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Quantity</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {recyclingHistory.slice(0, 5).map((item) => (
                        <tr key={item.id} className="hover:bg-blue-50">
                          <td className="px-4 py-3 text-sm whitespace-nowrap">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {item.consumer.user.name}
                          </td>
                          <td className="px-4 py-3 text-sm capitalize">
                            <Badge variant="outline" className="capitalize bg-blue-50 text-blue-700 border-blue-200">{item.qrCode.wasteType.toLowerCase()}</Badge>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {item.qrCode.quantity} {item.qrCode.unit}
                          </td>
                          <td className="px-4 py-3 text-sm font-medium">
                            {item.pointsEarned}
                          </td>
                        </tr>
                      ))}
                      {recyclingHistory.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                            No recycling activity yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Business Profile Content */}
        {selectedTab === "profile" && (
          <Card className="shadow-sm hover:bg-blue-50">
            <CardHeader>
              <CardTitle>Business Profile</CardTitle>
              <CardDescription>
                Update your business information and details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onProfileSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                            Business Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your business name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <FileText className="w-4 h-4 mr-2 text-gray-400" />
                            Business Type
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Type of business" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessAddress"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                            Business Address
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your business address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Globe className="w-4 h-4 mr-2 text-gray-400" />
                            Website (optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your website URL" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="flex items-center">
                            <FileText className="w-4 h-4 mr-2 text-gray-400" />
                            Description (optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your business"
                              className="h-32 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="mt-6">
                    Update Profile
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {/* Recycling Centers Content */}
        {selectedTab === "centers" && (
          <Card className="shadow-sm hover:bg-blue-50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Your Recycling Centers</CardTitle>
                <CardDescription>
                  Manage your recycling center locations
                </CardDescription>
              </div>
              <AddRecyclingCenterDialog onSuccess={() => fetchRecyclingCenters(localStorage.getItem("token") || "")} />
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Address</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Waste Types</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {centers.map((center) => (
                      <tr key={center.id} className="hover:bg-blue-50">
                        <td className="px-4 py-3 text-sm font-medium">{center.name}</td>
                        <td className="px-4 py-3 text-sm">{center.address}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex flex-wrap gap-1">
                            {center.acceptedWasteTypes.map((type) => (
                              <Badge
                                key={type}
                                variant="outline"
                                className="text-xs capitalize bg-blue-50 text-blue-700 border-blue-200"
                              >
                                {type.toLowerCase()}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Badge
                            variant={center.isActive ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {center.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="h-8 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              onClick={() => handleCenterAction(center.id, 'edit')}
                            >
                              <Edit className="h-3.5 w-3.5 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`h-8 px-2 text-xs ${center.isActive ? "text-red-600 hover:text-red-700" : "text-green-600 hover:text-green-700"}`}
                              onClick={() => handleCenterAction(center.id, 'toggle')}
                            >
                              {center.isActive ? (
                                <>
                                  <XCircle className="h-3.5 w-3.5 mr-1" />
                                  Deactivate
                                </>
                              ) : (
                                <>
                                  <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                                  Activate
                                </>
                              )}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {centers.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                          <div className="flex flex-col items-center">
                            <MapPin className="h-10 w-10 text-gray-300 mb-2" />
                            <p className="mb-4">No recycling centers yet</p>
                            <AddRecyclingCenterDialog 
                              onSuccess={() => fetchRecyclingCenters(localStorage.getItem("token") || "")}
                            />
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recycling History Content */}
        {selectedTab === "history" && (
          <Card className="shadow-sm hover:bg-blue-50">
            <CardHeader>
              <CardTitle>Recycling History</CardTitle>
              <CardDescription>
                All verified recycling transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date & Time</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Consumer</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Waste Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Quantity</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recyclingHistory.map((item) => (
                      <tr key={item.id} className="hover:bg-blue-50">
                        <td className="px-4 py-3 text-sm whitespace-nowrap">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {item.consumer.user.name}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Badge variant="outline" className="capitalize bg-blue-50 text-blue-700 border-blue-200">
                            {item.qrCode.wasteType.toLowerCase()}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {item.qrCode.quantity} {item.qrCode.unit}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {item.pointsEarned}
                        </td>
                      </tr>
                    ))}
                    {recyclingHistory.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                          <div className="flex flex-col items-center">
                            <History className="h-10 w-10 text-gray-300 mb-2" />
                            <p className="mb-4">No recycling history yet</p>
                            <Button onClick={navigateToVerify}>
                              Verify a QR Code
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Analytics Content */}
        {selectedTab === "analytics" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader>
                  <CardTitle>Monthly Points Earned</CardTitle>
                  <CardDescription>
                    Points earned from recycling over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
                        <Legend />
                        <Bar dataKey="value" name="Points" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader>
                  <CardTitle>Waste Type Distribution</CardTitle>
                  <CardDescription>
                    Quantity of different waste types recycled
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={wasteTypeAnalytics} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" horizontal={false} />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="label" width={100} />
                        <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
                        <Legend />
                        <Bar 
                          dataKey="value" 
                          name="Quantity" 
                          radius={[0, 4, 4, 0]}
                        >
                          {wasteTypeAnalytics.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={CHART_COLORS[index % CHART_COLORS.length]} 
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-sm hover:bg-blue-50">
              <CardHeader>
                <CardTitle>Daily Performance (Last 7 Days)</CardTitle>
                <CardDescription>
                  Recent recycling activity and points earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailyTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        name="Points" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Average Points per Transaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {recyclingHistory.length > 0 
                      ? (recyclingHistory.reduce((sum, item) => sum + item.pointsEarned, 0) / recyclingHistory.length).toFixed(1) 
                      : "0"}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Unique Consumers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {new Set(recyclingHistory.map(item => item.consumer.user.name)).size}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Waste Types Collected</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {new Set(recyclingHistory.map(item => item.qrCode.wasteType)).size}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Quantity Recycled</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {recyclingHistory.reduce((sum, item) => sum + item.qrCode.quantity, 0)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Units of material</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="border-blue-200">
          <AlertDialogHeader>
            <AlertDialogTitle>{alertMessage.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertMessage.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}