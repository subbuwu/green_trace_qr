"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ConsumerDashboard from '@/components/CustomerDashboard';
import BusinessDashboard from '@/components/BusinessDashboard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, LogOut, User, Settings, Home, QrCode, BarChart3, Package, Leaf, Map, History, Award } from 'lucide-react';
import { authService } from '@/services/authServices';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

interface UserData {
  id: string;
  name: string;
  email: string;
  userType: 'user' | 'business';
  avatar?: string;
  profile?: any;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [userType, setUserType] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is authenticated
        if (!authService.isAuthenticated()) {
          router.push('/login');
          return;
        }
        
        // Get user type from localStorage
        const storedUserType = authService.getUserType();
        setUserType(storedUserType);
        
        // Fetch user data
        const token = localStorage.getItem('token');
        
        if (token) {
          const response = await fetch('/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setError('Failed to authenticate user');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);
  
  const handleLogout = async () => {
    try {
      await authService.logout();
      router.push('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };
  
  // Consumer menu items
  const consumerItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Generate QR",
      url: "/dashboard/generate",
      icon: QrCode,
    },
    {
      title: "Find Centers",
      url: "/dashboard/centers",
      icon: Map,
    },
    {
      title: "Rewards & Leaderboard",
      url: "/dashboard/rewards",
      icon: Award,
    },
  ];
  
  // Business menu items
  const businessItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Scan & Vefify QR",
      url: "/dashboard/verify",
      icon: QrCode,
    },
  ];
  
  // Choose menu items based on user type
  const items = userType === 'business' ? businessItems : consumerItems;
  
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <div className="flex flex-col items-center">
          <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="h-screen flex justify-center items-center p-6">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication Error</AlertTitle>
          <AlertDescription>
            {error}. Please try logging in again.
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };
  
  const avatarColor = userType === 'business' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700';
  
  return (
    <div className="flex h-screen bg-gray-50 w-full">
      {/* Sidebar */}
      <Sidebar className="hidden md:flex border-r">
        <SidebarContent className="h-full flex flex-col">
          <div className="py-4 px-6 border-b flex items-center justify-center">
            <h1 className="text-lg font-bold text-green-600">Green Trace QR</h1>
          </div>
          
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="py-6 px-2 flex-grow space-y-3">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`group cursor-pointer relative flex items-center gap-3.5 p-3 rounded-lg text-[15px] font-medium transition-all duration-300 ease-in-out hover:bg-gradient-to-r ${
                        userType === 'business' 
                          ? 'hover:from-blue-50 hover:to-blue-100' 
                          : 'hover:from-green-50 hover:to-green-100'
                      } hover:shadow-sm hover:transform hover:translate-x-1 ${
                        pathname === item.url
                          ? userType === 'business'
                            ? 'bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm transform translate-x-1 text-blue-900'
                            : 'bg-gradient-to-r from-green-50 to-green-100 shadow-sm transform translate-x-1 text-green-900'
                          : userType === 'business' ? 'text-blue-800' : 'text-green-800'
                      }`}
                      onClick={() => router.push(item.url)}
                    >
                      <div className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300`}>
                        <item.icon className={`w-5 h-5 ${
                          pathname === item.url
                            ? userType === 'business' ? 'text-blue-900' : 'text-green-900'
                            : userType === 'business' 
                              ? 'text-blue-700 group-hover:text-blue-900' 
                              : 'text-green-700 group-hover:text-green-900'
                        }`} />
                      </div>
                      <span className="transition-colors duration-200">{item.title}</span>
                      
                      {/* Active indicator line */}
                      <div className={`absolute left-0 w-1 rounded-r-full transition-all duration-300 ${
                        pathname === item.url
                          ? userType === 'business' 
                            ? 'h-3/4 bg-blue-600' 
                            : 'h-3/4 bg-green-600'
                          : 'h-0 bg-transparent group-hover:h-3/4 ' + 
                            (userType === 'business' ? 'group-hover:bg-blue-600' : 'group-hover:bg-green-600')
                      }`}></div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarFooter>
            <div className="p-4 mt-auto">
              <Separator className="mb-4" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100">
                    <Avatar className={`mr-2 h-9 w-9 ${avatarColor}`}>
                      <AvatarImage src={user?.avatar || ''} alt={user?.name || ''} />
                      <AvatarFallback>{user?.name ? getInitials(user.name) : 'U'}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="text-sm font-medium truncate">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b bg-white">
          <h1 className="text-lg font-bold text-green-600">Green Trace QR</h1>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1">
                <Avatar className={`h-8 w-8 ${avatarColor}`}>
                  <AvatarImage src={user?.avatar || ''} alt={user?.name || ''} />
                  <AvatarFallback>{user?.name ? getInitials(user.name) : 'U'}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {items.map((item) => (
                <DropdownMenuItem key={item.title} onClick={() => router.push(item.url)}>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        
        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;