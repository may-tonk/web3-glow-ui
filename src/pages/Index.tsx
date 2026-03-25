import DashboardSidebar from "@/components/DashboardSidebar";
import PortfolioCards from "@/components/PortfolioCards";
import PortfolioChart from "@/components/PortfolioChart";
import TokenList from "@/components/TokenList";
import SwapWidget from "@/components/SwapWidget";
import { Bell, Search } from "lucide-react";

export default function Index() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Welcome back, Anon</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent" />
          </div>
        </div>

        {/* Stats */}
        <PortfolioCards />

        {/* Chart + Swap */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
          <div className="xl:col-span-2">
            <PortfolioChart />
          </div>
          <SwapWidget />
        </div>

        {/* Token List */}
        <div className="mt-4">
          <TokenList />
        </div>
      </main>
    </div>
  );
}
