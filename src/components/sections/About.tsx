import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import techAbstract from "@/assets/tech-abstract.png";

const cards = [
  {
    icon: Shield,
    title: "Our Strength",
    description:
      "With years of experience and a team of certified professionals, we deliver robust and secure IT solutions that stand the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description:
      "Innovation, integrity, and client success drive everything we do. We believe in building lasting partnerships through transparency and excellence.",
  },
];

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
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-purple-glow/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              About Us
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Empowering Your{" "}
              <span className="gradient-text">Digital Future</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              RISS Technologies is a leading provider of comprehensive IT solutions. 
              We specialize in helping businesses navigate the complex digital landscape 
              with confidence. Our team of experts brings together decades of experience 
              in <span className="text-primary font-medium">software development</span>, 
              <span className="text-primary font-medium"> cloud solutions</span>, and 
              <span className="text-primary font-medium"> cybersecurity</span>.
            </motion.p>

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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative w-full h-64 lg:hidden rounded-2xl overflow-hidden"
            >
              <img 
                src={techAbstract} 
                alt="Technology illustration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Column - Cards and Image */}
          <div className="space-y-6">
            {/* Desktop decorative image */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hidden lg:block relative h-48 rounded-2xl overflow-hidden mb-8"
            >
              <img 
                src={techAbstract} 
                alt="Technology illustration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-6xl font-bold gradient-text opacity-60"
                >
                  RISS
                </motion.div>
              </div>
            </motion.div>

            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <Card className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-glow/10" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/20 via-purple-glow/20 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  <CardContent className="relative p-8 bg-card rounded-lg">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500"
                      whileHover={{ rotate: 5 }}
                    >
                      <card.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
