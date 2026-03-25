import { LayoutDashboard, ArrowLeftRight, Coins, BarChart3, Settings, Wallet } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ArrowLeftRight, label: "Swap" },
  { icon: Coins, label: "Tokens" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border/50 p-6 gap-2">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
          <Wallet className="w-5 h-5 text-primary" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-foreground">NexFi</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              item.active
                ? "bg-primary/10 text-primary glow-border"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto glass-card p-4">
        <p className="text-xs text-muted-foreground mb-1">Connected</p>
        <p className="text-sm font-mono text-foreground truncate">0x1a2B...9cDe</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
          <span className="text-xs text-success">Ethereum</span>
        </div>
      </div>
    </aside>
  );
}
