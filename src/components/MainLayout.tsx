import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      <main
        className={cn(
          "pt-14 transition-all duration-300",
          sidebarOpen ? "md:ml-60" : "md:ml-20"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
