import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
    <div className="flex w-full h-full relative">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
      
      <div className="absolute right-0 top-2 z-10 transition-all duration-300 ease-in-out flex items-center md:hidden p-4">
          <SidebarTrigger className="md:hidden"/>
      </div> 
        <Navbar />
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
    </SidebarProvider>
  );
}
