import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Funnel, FunnelChart, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const trend = Array.from({ length: 30 }).map((_, i) => ({
  d: i + 1,
  sent: 800 + Math.round(Math.sin(i / 3) * 200 + Math.random() * 300 + i * 12),
  conv: 80 + Math.round(Math.cos(i / 3) * 18 + Math.random() * 30 + i * 1.4),
}));

const ctr = Array.from({ length: 7 }).map((_, i) => ({
  day: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i],
  ctr: 14 + Math.round(Math.random() * 14),
}));

const funnel = [
  { name: "DMs sent", value: 12480, fill: "hsl(263 90% 66%)" },
  { name: "Opened", value: 9842, fill: "hsl(280 92% 70%)" },
  { name: "Clicked", value: 4123, fill: "hsl(220 90% 65%)" },
  { name: "Replied", value: 2104, fill: "hsl(190 95% 60%)" },
  { name: "Converted", value: 824, fill: "hsl(152 75% 50%)" },
];

const tooltipStyle = { background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 };

export default function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground text-sm mt-1">Track DMs, clicks and conversions across all campaigns.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass-card p-6">
          <h3 className="font-semibold">DMs sent vs Conversions</h3>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
          <div className="h-72 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="sent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="conv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--success))" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="sent" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#sent)" />
                <Area type="monotone" dataKey="conv" stroke="hsl(var(--success))" strokeWidth={2} fill="url(#conv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-semibold">Click-through rate</h3>
          <p className="text-xs text-muted-foreground">By weekday (%)</p>
          <div className="h-72 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ctr}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="ctr" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="font-semibold">Funnel drop-off</h3>
        <p className="text-xs text-muted-foreground">Stage-by-stage conversion</p>
        <div className="h-80 mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip contentStyle={tooltipStyle} />
              <Funnel dataKey="value" data={funnel} isAnimationActive>
                <LabelList position="right" fill="hsl(var(--foreground))" stroke="none" dataKey="name" fontSize={12} />
                <LabelList position="center" fill="white" stroke="none" dataKey="value" fontSize={12} />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
