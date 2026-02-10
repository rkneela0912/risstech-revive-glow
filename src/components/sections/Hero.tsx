import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Particle = ({ delay, size, left, top }: {
  delay: number; size: number; left: string; top: string;
}) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left,
      top,
      background: `hsl(180 100% 60% / 0.6)`,
      boxShadow: `0 0 ${size * 3}px hsl(180 100% 60% / 0.3)`,
    }}
    animate={{
      y: [0, -120, 0],
      opacity: [0, 1, 0],
      scale: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 4 + Math.random() * 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "RISS TECHNOLOGIES";
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const moveX = useTransform(springX, [-300, 300], [-20, 20]);
  const moveY = useTransform(springY, [-300, 300], [-20, 20]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 3,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background scanlines"
    >
      {/* Deep dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(180 100% 60% / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(180 100% 60% / 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Neon orbs */}
      <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ left: "10%", top: "20%", background: "hsl(180 80% 50% / 0.12)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ right: "5%", top: "30%", background: "hsl(210 100% 60% / 0.1)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ left: "40%", bottom: "10%", background: "hsl(270 80% 60% / 0.08)" }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Particles */}
      {particles.map((p) => <Particle key={p.id} {...p} />)}

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
        <motion.path
          d="M0,300 Q400,150 800,350 T1600,250"
          stroke="url(#neonLine)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,500 Q300,600 600,400 T1200,550 T1800,400"
          stroke="url(#neonLine)"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, delay: 1, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="neonLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(180 100% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(180 100% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono font-medium tracking-wider uppercase neon-border bg-secondary/50 text-primary backdrop-blur-md">
            <Zap className="w-4 h-4" />
            Next-Gen IT Solutions
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="gradient-text inline-block">
            {displayText}
            <motion.span
              className="inline-block w-[3px] h-[0.85em] bg-primary ml-2 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{ boxShadow: "0 0 10px hsl(180 100% 60% / 0.8)" }}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Engineering the future of enterprise technology through
          cloud-native architecture, zero-trust security, and intelligent automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6"
          >
            <a href="#contact">Get Started</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border border-primary/30 text-foreground bg-transparent hover:bg-primary/10 hover:border-primary/60 backdrop-blur-sm text-base px-8 py-6"
          >
            <a href="#about">Explore</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-mono">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
