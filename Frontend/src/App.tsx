import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/auth/Login.tsx";
import Signup from "./pages/auth/Signup.tsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.tsx";
import Overview from "./pages/dashboard/Overview.tsx";
import Campaigns from "./pages/dashboard/Campaigns.tsx";
import CampaignBuilder from "./pages/dashboard/CampaignBuilder.tsx";
import Analytics from "./pages/dashboard/Analytics.tsx";
import Leads from "./pages/dashboard/Leads.tsx";
import Settings from "./pages/dashboard/Settings.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="campaigns" element={<Campaigns />} />
              <Route path="campaigns/new" element={<CampaignBuilder />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="leads" element={<Leads />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
