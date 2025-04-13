import { 
  Recycle,
  User,
  Building2,
  MapPin,
  CheckCircle2,
  BarChart3,
  History,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface EcoRewardsSidebarProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  user: {
    name: string;
    email: string;
    avatar: string | null;
  };
  navigateToVerify: () => void;
}

export function EcoRewardsSidebar({
  selectedTab,
  setSelectedTab,
  user,
  navigateToVerify,
}: EcoRewardsSidebarProps) {
  return (
    <div className="hidden lg:flex w-64 flex-col fixed inset-y-0 bg-gradient-to-b from-green-50 to-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="px-6 py-6 border-b border-gray-200">
          <h2 className="text-xl font-bold flex items-center">
            <Recycle className="w-6 h-6 mr-2 text-green-600" />
            EcoRewards
          </h2>
        </div>
        
        <nav className="flex-1 pt-6 px-4">
          <div className="mb-6">
            <div className="px-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Main
            </div>
            <div className="space-y-1">
              <Button 
                variant={selectedTab === "overview" ? "secondary" : "ghost"} 
                className="w-full justify-start px-3 py-2 font-normal"
                onClick={() => setSelectedTab("overview")}
              >
                <LayoutDashboard className="w-5 h-5 mr-3" />
                Overview
              </Button>
              <Button 
                variant={selectedTab === "analytics" ? "secondary" : "ghost"} 
                className="w-full justify-start px-3 py-2 font-normal"
                onClick={() => setSelectedTab("analytics")}
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Analytics
              </Button>
              <Button 
                variant={selectedTab === "history" ? "secondary" : "ghost"} 
                className="w-full justify-start px-3 py-2 font-normal"
                onClick={() => setSelectedTab("history")}
              >
                <History className="w-5 h-5 mr-3" />
                Recycling History
              </Button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="px-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Management
            </div>
            <div className="space-y-1">
              <Button 
                variant={selectedTab === "centers" ? "secondary" : "ghost"} 
                className="w-full justify-start px-3 py-2 font-normal"
                onClick={() => setSelectedTab("centers")}
              >
                <MapPin className="w-5 h-5 mr-3" />
                Recycling Centers
              </Button>
              <Button 
                variant={selectedTab === "profile" ? "secondary" : "ghost"} 
                className="w-full justify-start px-3 py-2 font-normal"
                onClick={() => setSelectedTab("profile")}
              >
                <Building2 className="w-5 h-5 mr-3" />
                Business Profile
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start px-3 py-2 font-normal"
                onClick={navigateToVerify}
              >
                <CheckCircle2 className="w-5 h-5 mr-3" />
                Verify QR Code
              </Button>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-200 mt-auto bg-white">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ring-2 ring-green-100">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <User className="w-5 h-5 text-gray-600" />
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 