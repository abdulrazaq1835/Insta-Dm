import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function AuthShell({
  title, subtitle, children, footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-background">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute top-32 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float-slow" />

      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-10 p-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">Reel2Revenue</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="relative w-full flex items-center justify-center p-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="glass-card p-8">
            <h1 className="font-display text-2xl font-bold tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground mt-1.5">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">{footer}</p>
        </motion.div>
      </main>
    </div>
  );
}
