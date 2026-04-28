import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Megaphone, MoreVertical, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const campaigns = [
  { name: "Free Guide Funnel", status: "Active", keywords: ["guide", "ebook", "free"], dms: 1820, leads: 312, conv: "17.1%" },
  { name: "Black Friday 2026", status: "Active", keywords: ["bf", "discount", "promo"], dms: 980, leads: 184, conv: "18.7%" },
  { name: "Webinar Signup", status: "Paused", keywords: ["webinar", "join"], dms: 540, leads: 88, conv: "16.3%" },
  { name: "Launch Reel #4", status: "Active", keywords: ["link", "info"], dms: 1240, leads: 201, conv: "16.2%" },
];

export default function Campaigns() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">Campaigns</h2>
          <p className="text-muted-foreground text-sm mt-1">Build and manage your auto-DM funnels.</p>
        </div>
        <Button variant="hero" asChild>
          <Link to="/dashboard/campaigns/new"><Plus className="h-4 w-4" /> New campaign</Link>
        </Button>
      </div>

      {campaigns.length === 0 ? <EmptyState /> : (
        <div className="grid md:grid-cols-2 gap-4">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="glass-card p-5 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{c.name}</h3>
                    <Badge variant={c.status === "Active" ? "default" : "secondary"} className={c.status === "Active" ? "bg-success/15 text-success hover:bg-success/15" : ""}>
                      {c.status === "Active" ? <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5 animate-pulse" /> : null}
                      {c.status}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.keywords.map((k) => (
                      <span key={k} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary border border-border">#{k}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    {c.status === "Active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-border">
                <Stat label="DMs" v={c.dms.toLocaleString()} />
                <Stat label="Leads" v={c.leads.toLocaleString()} />
                <Stat label="Conv." v={c.conv} />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

const Stat = ({ label, v }: { label: string; v: string }) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    <p className="font-display font-semibold text-lg">{v}</p>
  </div>
);

const EmptyState = () => (
  <div className="glass-card p-12 text-center">
    <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
      <Megaphone className="h-6 w-6 text-primary" />
    </div>
    <h3 className="mt-4 font-semibold">No campaigns yet</h3>
    <p className="text-sm text-muted-foreground mt-1">Create your first auto-DM campaign in under 2 minutes.</p>
    <Button variant="hero" className="mt-6" asChild>
      <Link to="/dashboard/campaigns/new"><Plus className="h-4 w-4" /> Create campaign</Link>
    </Button>
  </div>
);
