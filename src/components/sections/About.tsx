import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Lightbulb, Target } from "lucide-react";
import techAbstract from "@/assets/tech-abstract.png";

const highlights = [
  { icon: Users, text: "Expert Team" },
  { icon: Target, text: "Goal-Oriented" },
  { icon: Shield, text: "Secure Solutions" },
  { icon: Lightbulb, text: "Innovative Approach" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-neon-blue/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-[0.3em]">
              // About Us
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
              Empowering Your{" "}
              <span className="gradient-text">Digital Future</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              RISS Technologies is a leading provider of comprehensive IT solutions.
              We specialize in helping businesses navigate the complex digital landscape
              with confidence. Our team of experts brings together decades of experience
              in <span className="text-primary font-medium">software development</span>,
              <span className="text-primary font-medium"> cloud solutions</span>, and
              <span className="text-primary font-medium"> cybersecurity</span>.
            </p>

            {/* Highlight badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full neon-border bg-secondary/50 text-secondary-foreground hover:bg-primary/10 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="relative w-full h-64 lg:hidden rounded-xl overflow-hidden neon-border"
            >
              <img src={techAbstract} alt="Technology illustration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right - Cards + image */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="hidden lg:block relative h-48 rounded-xl overflow-hidden neon-border"
            >
              <img src={techAbstract} alt="Technology illustration" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-background/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-5xl font-display font-black gradient-text opacity-80"
                >
                  RISS
                </motion.div>
              </div>
            </motion.div>

            {[
              { icon: Shield, title: "Our Strength", description: "With years of experience and a team of certified professionals, we deliver robust and secure IT solutions that stand the test of time." },
              { icon: Lightbulb, title: "Our Values", description: "Innovation, integrity, and client success drive everything we do. We believe in building lasting partnerships through transparency and excellence." },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="group glass-card rounded-xl p-8 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
