import DashboardLayout from '@/components/DashboardLayout';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider><DashboardLayout>{children}</DashboardLayout></SidebarProvider>;
} 