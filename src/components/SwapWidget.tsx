import { motion } from "framer-motion";
import { ArrowDownUp } from "lucide-react";
import { useState } from "react";

export default function SwapWidget() {
  const [fromAmount, setFromAmount] = useState("1.0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.4 }}
      className="glass-card p-5"
    >
      <h2 className="text-sm font-semibold text-foreground mb-4">Quick Swap</h2>

      <div className="space-y-2">
        {/* From */}
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">From</span>
            <span className="text-xs text-muted-foreground">Balance: 12.45</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent text-xl font-mono text-foreground outline-none flex-1 w-0"
            />
            <span className="text-sm font-semibold text-foreground bg-muted px-3 py-1.5 rounded-lg">ETH</span>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center -my-1 relative z-10">
          <button className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-colors">
            <ArrowDownUp className="w-4 h-4 text-primary" />
          </button>
        </div>

        {/* To */}
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">To</span>
            <span className="text-xs text-muted-foreground">Balance: 8,241</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl font-mono text-muted-foreground flex-1">1,945.20</span>
            <span className="text-sm font-semibold text-foreground bg-muted px-3 py-1.5 rounded-lg">USDC</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
        <span>Rate</span>
        <span className="font-mono">1 ETH = 1,945.20 USDC</span>
      </div>

      <button className="w-full mt-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all">
        Swap
      </button>
    </motion.div>
  );
}
