'use client'

import { 
  Home, 
  QrCode, 
  Package,
  ChartBarDecreasing
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation"

// Menu items.
const items = [
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
    title: "Profile & Rankings",
    url: "/dashboard/rankings",
    icon: ChartBarDecreasing,
  },
  {
    title: "Business",
    url: "/dashboard/business",
    icon: Package,
  },

]

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="py-10 space-y-6 pr-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    className={`group cursor-pointer relative flex items-center gap-3.5 p-5 rounded-lg text-[16px] font-medium transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 hover:shadow-sm hover:transform hover:translate-x-1 ${
                      pathname === item.url 
                        ? 'bg-gradient-to-r from-green-100 to-green-200 shadow-sm transform translate-x-1 text-green-900' 
                        : 'text-green-800'
                    }`}
                    onClick={() => router.push(item.url)}
                  >
                    <div className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 `}>
                      <item.icon className={`w-5 h-5 ${
                        pathname === item.url 
                          ? 'text-green-900' 
                          : 'text-green-700 group-hover:text-green-900'
                      }`} />
                    </div>
                    <span className="transition-colors duration-200">{item.title}</span>
                    
                    {/* Active indicator line */}
                    <div className={`absolute left-0 w-1 rounded-r-full transition-all duration-300 ${
                      pathname === item.url 
                        ? 'h-3/4 bg-green-600' 
                        : 'h-0 bg-green-600 group-hover:h-3/4'
                    }`}></div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
