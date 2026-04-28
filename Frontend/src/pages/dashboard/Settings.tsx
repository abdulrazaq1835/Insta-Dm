import { Instagram, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage your account, integrations and notifications.</p>
      </div>

      <section className="glass-card p-6">
        <h3 className="font-semibold">Profile</h3>
        <p className="text-xs text-muted-foreground">Update your personal information.</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-5">
          <div><Label>Full name</Label><Input defaultValue="Jane Doe" className="mt-1.5" /></div>
          <div><Label>Email</Label><Input type="email" defaultValue="jane@brand.com" className="mt-1.5" /></div>
        </div>
        <Button variant="hero" className="mt-5">Save changes</Button>
      </section>

      <section className="glass-card p-6">
        <h3 className="font-semibold">Connected accounts</h3>
        <p className="text-xs text-muted-foreground">Instagram via Meta Graph API.</p>
        <div className="mt-5 flex items-center justify-between rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-orange-400 flex items-center justify-center">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-sm">@your.brand</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-success" /> Connected · 24,318 followers
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">Disconnect</Button>
        </div>
        <Button variant="outline" className="mt-3 w-full border-dashed">+ Connect another account</Button>
      </section>

      <section className="glass-card p-6">
        <h3 className="font-semibold">Notifications</h3>
        <div className="mt-5 space-y-4">
          {[
            ["Daily summary email", "Recap of DMs, leads and conversions every morning.", true],
            ["New lead captured", "Get notified when a high-intent comment is matched.", true],
            ["Campaign paused by Meta", "Alerts if any policy issue affects your campaign.", false],
          ].map(([title, desc, on]) => (
            <div key={title as string} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <Switch defaultChecked={on as boolean} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
