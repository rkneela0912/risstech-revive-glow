import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingShape = ({ delay, duration, size, left, top }: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
}) => (
  <motion.div
    className="absolute rounded-full bg-primary/10 blur-xl"
    style={{
      width: size,
      height: size,
      left,
      top,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to RISS Technologies";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, hsl(270 60% 40% / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Shapes */}
      <FloatingShape delay={0} duration={7} size={300} left="10%" top="20%" />
      <FloatingShape delay={1} duration={8} size={200} left="70%" top="10%" />
      <FloatingShape delay={2} duration={6} size={150} left="80%" top="60%" />
      <FloatingShape delay={3} duration={9} size={250} left="20%" top="70%" />
      <FloatingShape delay={1.5} duration={7.5} size={180} left="50%" top="40%" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary/30">
            Innovative IT Solutions
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 min-h-[1.2em]">
          <span className="inline-block">
            {displayText}
            <motion.span
              className="inline-block w-1 h-[1em] bg-accent ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10"
        >
          Transforming businesses through cutting-edge technology solutions, 
          expert consulting, and innovative digital strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="glow-button bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
          >
            <a href="#contact">Start Your Journey</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
          >
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
