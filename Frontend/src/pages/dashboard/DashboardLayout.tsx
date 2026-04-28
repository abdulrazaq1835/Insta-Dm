import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Megaphone, BarChart3, Users, Settings as SettingsIcon, Sparkles, Bell, Search } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const items = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard, end: true },
  { title: "Campaigns", url: "/dashboard/campaigns", icon: Megaphone },
  { title: "Leads", url: "/dashboard/leads", icon: Users },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Settings", url: "/dashboard/settings", icon: SettingsIcon },
];

function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        <div className="px-4 py-5 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-display font-bold tracking-tight">Reel2Revenue</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.end}
                      className="hover:bg-sidebar-accent rounded-lg"
                      activeClassName="bg-gradient-primary text-primary-foreground hover:bg-gradient-primary [&>svg]:text-primary-foreground font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="rounded-xl border border-sidebar-border bg-gradient-to-br from-primary/15 to-accent/10 p-4">
              <p className="text-xs font-semibold">Upgrade to Pro</p>
              <p className="text-[11px] text-muted-foreground mt-1">Unlock unlimited DMs and advanced analytics.</p>
              <Button variant="hero" size="sm" className="w-full mt-3">Upgrade</Button>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}

export default function DashboardLayout() {
  const loc = useLocation();
  const title = items.find((i) => (i.end ? i.url === loc.pathname : loc.pathname.startsWith(i.url)))?.title ?? "Dashboard";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b border-border flex items-center gap-2 sm:gap-3 px-3 sm:px-6 sticky top-0 z-30 bg-background/80 backdrop-blur-xl">
            <SidebarTrigger />
            <div className="hidden sm:block min-w-0">
              <h1 className="font-display font-semibold tracking-tight truncate">{title}</h1>
            </div>
            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              <div className="relative hidden lg:block">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search…" className="pl-9 w-56 xl:w-64 h-9 bg-secondary/50 border-transparent focus:border-border" />
              </div>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex"><Bell className="h-4 w-4" /></Button>
              <ThemeToggle />
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
