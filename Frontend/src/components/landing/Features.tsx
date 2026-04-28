import { motion } from "framer-motion";
import { Target, GitBranch, BarChart3, Users, Zap, Shield } from "lucide-react";

const features = [
  { icon: Target, title: "Keyword Trigger System", desc: "Match exact words, phrases or patterns. Multi-language support out of the box." },
  { icon: GitBranch, title: "DM Funnel Builder", desc: "Drag-and-drop multi-step sequences with delays, conditions and branches." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "DM → click → conversion tracking with funnel drop-off insights." },
  { icon: Users, title: "CRM Leads System", desc: "Every commenter becomes a lead. Tag, segment and export to your tools." },
  { icon: Zap, title: "Instant Delivery", desc: "DMs fire within 1 second of a comment. Powered by Meta Graph API." },
  { icon: Shield, title: "Compliance built-in", desc: "Meta-approved flows. Rate limits, opt-outs and audit logs handled." },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-28 relative">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Everything you need to <span className="gradient-text">scale your DMs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="group glass-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
