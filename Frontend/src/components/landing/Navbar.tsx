import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for active section highlight
  useEffect(() => {
    const ids = ["features", "how", "pricing"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const links = [
    { href: "#features", id: "features", label: "Features" },
    { href: "#how", id: "how", label: "How it works" },
    { href: "#pricing", id: "pricing", label: "Pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
      )}
    >
      <div className="container px-3 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 transition-all duration-300 glass border",
            scrolled
              ? "shadow-soft border-glass-border"
              : "border-transparent bg-background/40 backdrop-blur-md"
          )}
        >
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight">
              Reel2Revenue
            </span>
          </Link>

          {/* Desktop nav — show from lg up so it never crowds mid-sized screens */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary border border-border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/signup">Start Free</Link>
            </Button>
          </div>

          {/* Tablet (md): compact CTAs, no nav links */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button variant="hero" size="sm" asChild>
              <Link to="/signup">Start Free</Link>
            </Button>
            <button
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1 shadow-elegant"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 mt-1 border-t border-border">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link to="/login" onClick={() => setOpen(false)}>Sign in</Link>
              </Button>
              <Button variant="hero" size="sm" asChild className="flex-1">
                <Link to="/signup" onClick={() => setOpen(false)}>Start Free</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
