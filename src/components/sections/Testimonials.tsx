import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "RISS Technologies transformed our entire IT infrastructure. Their cloud migration was seamless and reduced our costs by 40%.",
    name: "Sarah Mitchell",
    title: "CTO, Meridian Corp",
  },
  {
    quote: "Their cybersecurity team identified vulnerabilities we didn't know existed. We now have peace of mind knowing our data is protected.",
    name: "James Rodriguez",
    title: "VP of Operations, Apex Industries",
  },
  {
    quote: "The custom software they built for us streamlined our workflows and boosted team productivity by over 60%. Exceptional work.",
    name: "Emily Chen",
    title: "Director of Engineering, NovaEdge",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-[0.3em]">
            // Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="glass-card rounded-xl p-8 relative group transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {/* Top neon line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
