import { motion } from "framer-motion";
import { MessageSquare, Send, UserCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Set keyword triggers",
    desc: "Pick the words your audience uses — 'link', 'price', 'guide'. We listen 24/7.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Send,
    title: "Auto-DM on autopilot",
    desc: "Every matching comment gets an instant, personalized DM sequence with your offer.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: UserCheck,
    title: "Capture & convert leads",
    desc: "Leads land in your CRM. Track clicks, replies and revenue per campaign.",
    color: "from-cyan-500 to-blue-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24 lg:py-28 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Three steps to <span className="gradient-text">automated revenue</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Set up in under 5 minutes. No engineers needed.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="glass-card p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-glow`}>
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-display text-3xl font-bold text-muted-foreground/30">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
