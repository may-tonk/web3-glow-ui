import { motion } from "framer-motion";

const tokens = [
  { symbol: "ETH", name: "Ethereum", balance: "12.4521", value: "$24,182.09", change: "+3.42%", positive: true, color: "hsl(225, 50%, 60%)" },
  { symbol: "USDC", name: "USD Coin", balance: "8,241.00", value: "$8,241.00", change: "+0.01%", positive: true, color: "hsl(210, 80%, 55%)" },
  { symbol: "WBTC", name: "Wrapped BTC", balance: "0.2841", value: "$12,091.42", change: "+1.87%", positive: true, color: "hsl(35, 95%, 55%)" },
  { symbol: "UNI", name: "Uniswap", balance: "421.50", value: "$2,318.25", change: "-2.11%", positive: false, color: "hsl(330, 80%, 60%)" },
  { symbol: "LINK", name: "Chainlink", balance: "89.20", value: "$1,458.87", change: "+4.52%", positive: true, color: "hsl(220, 70%, 55%)" },
];

export default function TokenList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="glass-card overflow-hidden"
    >
      <div className="p-5 border-b border-border/50">
        <h2 className="text-sm font-semibold text-foreground">Holdings</h2>
      </div>
      <div className="divide-y divide-border/30">
        {tokens.map((token) => (
          <div key={token.symbol} className="flex items-center justify-between px-5 py-4 hover:bg-secondary/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: token.color + "22", color: token.color }}>
                {token.symbol.slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{token.symbol}</p>
                <p className="text-xs text-muted-foreground">{token.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono text-foreground">{token.value}</p>
              <p className={`text-xs font-mono ${token.positive ? "text-success" : "text-destructive"}`}>{token.change}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
