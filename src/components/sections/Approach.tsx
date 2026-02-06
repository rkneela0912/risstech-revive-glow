import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const approaches = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We begin by deeply understanding your business needs, challenges, and goals through comprehensive analysis and stakeholder interviews.",
    step: "01",
  },
  {
    icon: Code,
    title: "Design & Development",
    description:
      "Our expert team crafts tailored solutions using cutting-edge technologies, following agile methodologies for efficient delivery.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We ensure smooth deployment and provide ongoing support to optimize performance and drive continuous improvement.",
    step: "03",
  },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" ref={ref} className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            How We <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that ensures quality, transparency, and results
          </p>
        </motion.div>

        {/* Connecting animated line for desktop */}
        <div className="hidden md:block absolute top-[55%] left-[15%] right-[15%] h-0.5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 0.3 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          {/* Animated dot traveling along the line */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
            initial={{ left: "0%", opacity: 0 }}
            animate={isInView ? { left: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {approach.step}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/20 via-purple-glow/20 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-8 pt-12 bg-card/90 rounded-lg">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500"
                    whileHover={{ rotate: 5 }}
                  >
                    <approach.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {approach.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
