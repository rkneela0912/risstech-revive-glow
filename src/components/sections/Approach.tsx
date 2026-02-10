import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";

const approaches = [
  { icon: Search, title: "Discovery & Analysis", description: "We begin by deeply understanding your business needs, challenges, and goals through comprehensive analysis and stakeholder interviews.", step: "01" },
  { icon: Code, title: "Design & Development", description: "Our expert team crafts tailored solutions using cutting-edge technologies, following agile methodologies for efficient delivery.", step: "02" },
  { icon: Rocket, title: "Launch & Support", description: "We ensure smooth deployment and provide ongoing support to optimize performance and drive continuous improvement.", step: "03" },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-blue/4 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-[0.3em]">
            // Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            How We <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that ensures quality, transparency, and results
          </p>
        </motion.div>

        {/* Connecting line */}
        <div className="hidden md:block absolute top-[55%] left-[15%] right-[15%] h-px overflow-hidden">
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, transparent, hsl(180 80% 50% / 0.3), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
            style={{ boxShadow: "0 0 10px hsl(180 80% 50% / 0.8)" }}
            initial={{ left: "0%", opacity: 0 }}
            animate={isInView ? { left: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="group glass-card rounded-xl p-8 pt-12 h-full relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-5xl font-display font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {approach.step}
                </div>

                {/* Top neon line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(180_80%_50%/0.15)] transition-all">
                  <approach.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {approach.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {approach.description}
                </p>

                {/* Bottom neon line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary to-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
