import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { date: "Jan", value: 32000 },
  { date: "Feb", value: 35200 },
  { date: "Mar", value: 31800 },
  { date: "Apr", value: 38400 },
  { date: "May", value: 42100 },
  { date: "Jun", value: 39800 },
  { date: "Jul", value: 44500 },
  { date: "Aug", value: 41200 },
  { date: "Sep", value: 46800 },
  { date: "Oct", value: 48291 },
];

const periods = ["1D", "1W", "1M", "3M", "1Y", "All"];

export default function PortfolioChart() {
  const [activePeriod, setActivePeriod] = useState("1Y");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.4 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-foreground">Portfolio Performance</h2>
        <div className="flex gap-1 bg-secondary/50 rounded-lg p-0.5">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setActivePeriod(p)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activePeriod === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(185, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(225, 15%, 12%)",
                border: "1px solid hsl(225, 12%, 20%)",
                borderRadius: "8px",
                color: "hsl(210, 20%, 92%)",
                fontSize: "12px",
                fontFamily: "JetBrains Mono",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]}
            />
            <Area type="monotone" dataKey="value" stroke="hsl(185, 100%, 50%)" strokeWidth={2} fill="url(#chartGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
