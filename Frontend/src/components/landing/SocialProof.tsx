import { motion } from "framer-motion";

const logos = ["Nimbus", "Lumen", "Nova", "Atlas", "Pulse", "Vertex", "Quill"];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-border/60 bg-surface/40">
      <div className="container">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-muted-foreground mb-8">
          Trusted by 12,000+ creators and brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-display font-semibold text-xl tracking-tight text-muted-foreground hover:text-foreground transition-colors"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
