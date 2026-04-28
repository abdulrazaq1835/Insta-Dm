import { useState } from "react";
import { Search, Download, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Lead = { username: string; keyword: string; status: "New" | "Engaged" | "Converted" | "Lost"; campaign: string; when: string };

const leads: Lead[] = [
  { username: "@sarah.codes", keyword: "guide", status: "Converted", campaign: "Free Guide Funnel", when: "2m ago" },
  { username: "@maria.studio", keyword: "price", status: "Engaged", campaign: "Launch Reel #4", when: "12m ago" },
  { username: "@johnny.designs", keyword: "guide", status: "New", campaign: "Free Guide Funnel", when: "28m ago" },
  { username: "@nova.fit", keyword: "link", status: "Engaged", campaign: "Launch Reel #4", when: "1h ago" },
  { username: "@coffeebar.id", keyword: "menu", status: "New", campaign: "Webinar Signup", when: "2h ago" },
  { username: "@art.by.lia", keyword: "promo", status: "Converted", campaign: "Black Friday 2026", when: "3h ago" },
  { username: "@studio.delta", keyword: "info", status: "Lost", campaign: "Webinar Signup", when: "5h ago" },
  { username: "@hiro.makes", keyword: "guide", status: "Engaged", campaign: "Free Guide Funnel", when: "8h ago" },
];

const statusStyles: Record<Lead["status"], string> = {
  New: "bg-primary/15 text-primary border-primary/20",
  Engaged: "bg-warning/15 text-warning border-warning/20",
  Converted: "bg-success/15 text-success border-success/20",
  Lost: "bg-muted text-muted-foreground border-border",
};

export default function Leads() {
  const [q, setQ] = useState("");
  const filtered = leads.filter((l) => l.username.toLowerCase().includes(q.toLowerCase()) || l.keyword.includes(q.toLowerCase()));

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">Leads CRM</h2>
          <p className="text-muted-foreground text-sm mt-1">Every commenter, captured automatically.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Filter className="h-4 w-4" /> Filter</Button>
          <Button variant="outline" size="sm"><Download className="h-4 w-4" /> Export</Button>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search username or keyword…" className="pl-9 bg-background" />
          </div>
          <span className="text-xs text-muted-foreground ml-auto">{filtered.length} leads</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="px-4 py-3 font-medium">Username</th>
                <th className="px-4 py-3 font-medium">Keyword</th>
                <th className="px-4 py-3 font-medium">Campaign</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Captured</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/40 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <span className="font-medium">{l.username}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">#{l.keyword}</td>
                  <td className="px-4 py-3 text-muted-foreground">{l.campaign}</td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={cn("border", statusStyles[l.status])}>{l.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{l.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
