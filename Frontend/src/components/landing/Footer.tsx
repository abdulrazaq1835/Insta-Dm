import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const cols = [
    { title: "Product", links: [["Features", "#features"], ["Pricing", "#pricing"], ["How it works", "#how"]] },
    { title: "Company", links: [["About", "#"], ["Blog", "#"], ["Careers", "#"]] },
    { title: "Legal", links: [["Privacy", "#"], ["Terms", "#"], ["DPA", "#"]] },
  ];
  return (
    <footer className="border-t border-border py-14 mt-10">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">Reel2Revenue</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Turn Instagram comments into paying customers — automatically.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold text-sm mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Reel2Revenue. All rights reserved.</p>
          <p>Built with ♥ for creators worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
