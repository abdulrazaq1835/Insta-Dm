import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* floating orbs */}
      <div className="absolute top-32 left-4 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-48 right-4 sm:right-20 w-72 h-72 sm:w-96 sm:h-96 bg-accent/15 rounded-full blur-3xl animate-float-slow" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Now integrating with Meta Graph API v18</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-semibold">NEW</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
          >
            Turn Instagram comments into{" "}
            <span className="gradient-text">paying customers</span>{" "}
            automatically.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-2"
          >
            Reel2Revenue auto-DMs every comment, captures leads, and converts followers
            with intelligent funnels — all from one beautiful dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-4 sm:px-0"
          >
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/signup">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild className="w-full sm:w-auto">
              <a href="#how">See how it works</a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-4 text-xs text-muted-foreground"
          >
            No credit card required · 14-day Pro trial · Cancel anytime
          </motion.p>
        </div>

        {/* Animated UI preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 sm:mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-3xl" />
          <div className="relative glass-card p-3 sm:p-4 md:p-6">
            <DmFlowPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DmFlowPreview() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {/* Comment */}
      <motion.div
        animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}
        className="rounded-xl bg-surface-elevated border border-border p-4"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <MessageCircle className="h-3.5 w-3.5" /> New comment
        </div>
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 shrink-0" />
          <div>
            <p className="text-sm font-medium">@sarah.codes</p>
            <p className="text-sm text-muted-foreground mt-1">"Send me the <span className="text-primary font-semibold">guide</span> please! 🙏"</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> 24</span>
              <span>2s ago</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trigger */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="rounded-xl gradient-border p-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="relative">
          <div className="flex items-center gap-2 text-xs text-primary mb-3">
            <Zap className="h-3.5 w-3.5" /> Keyword matched · "guide"
          </div>
          <div className="space-y-2">
            <div className="rounded-lg bg-secondary/60 px-3 py-2 text-xs">
              <span className="text-muted-foreground">If comment contains</span>{" "}
              <span className="font-semibold">"guide"</span>
            </div>
            <div className="rounded-lg bg-secondary/60 px-3 py-2 text-xs">
              <span className="text-muted-foreground">Then send</span>{" "}
              <span className="font-semibold">DM Sequence #3</span>
            </div>
            <div className="rounded-lg bg-primary/15 px-3 py-2 text-xs flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="font-semibold text-primary">Triggering now…</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* DM */}
      <motion.div
        animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="rounded-xl bg-surface-elevated border border-border p-4 sm:col-span-2 lg:col-span-1"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <MessageCircle className="h-3.5 w-3.5" /> DM delivered · auto
        </div>
        <div className="space-y-2">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-primary text-primary-foreground text-sm px-3 py-2">
            Hey Sarah! 👋 Here's your free guide ↓
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
            className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-primary text-primary-foreground text-sm px-3 py-2"
          >
            👉 reel2rev.com/guide
          </motion.div>
          <div className="text-[10px] text-muted-foreground text-right pt-1">Lead captured · added to CRM</div>
        </div>
      </motion.div>
    </div>
  );
}
