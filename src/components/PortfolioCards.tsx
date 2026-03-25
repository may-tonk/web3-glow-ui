import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const stats = [
  { label: "Total Balance", value: "$48,291.63", change: "+5.23%", positive: true, icon: DollarSign },
  { label: "24h P&L", value: "+$2,418.90", change: "+5.01%", positive: true, icon: TrendingUp },
  { label: "Total Assets", value: "12", change: "+2", positive: true, icon: Activity },
  { label: "Gas (Gwei)", value: "23", change: "-12%", positive: false, icon: TrendingDown },
];

export default function PortfolioCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="glass-card p-5 group hover:glow-border transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            <stat.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-2xl font-semibold tracking-tight text-foreground">{stat.value}</p>
          <span className={`text-xs font-mono mt-1 inline-block ${stat.positive ? "text-success" : "text-destructive"}`}>
            {stat.change}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
