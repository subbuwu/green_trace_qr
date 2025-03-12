
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
        </main>
      </div>

  );
}
