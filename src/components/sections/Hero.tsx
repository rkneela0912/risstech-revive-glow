import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

// Animated particle component
const Particle = ({ delay, size, left, top }: {
  delay: number;
  size: number;
  left: string;
  top: string;
}) => (
  <motion.div
    className="absolute rounded-full bg-white/30"
    style={{
      width: size,
      height: size,
      left,
      top,
      filter: "blur(1px)",
    }}
    animate={{
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Glowing orb component
const GlowingOrb = ({ delay, size, left, top, color }: {
  delay: number;
  size: number;
  left: string;
  top: string;
  color: string;
}) => (
  <motion.div
    className="absolute rounded-full blur-2xl"
    style={{
      width: size,
      height: size,
      left,
      top,
      background: color,
    }}
    animate={{
      y: [0, -40, 0],
      x: [0, 20, 0],
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 8 + delay,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to RISS Technologies";
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);
  const moveX = useTransform(springX, [-300, 300], [-30, 30]);
  const moveY = useTransform(springY, [-300, 300], [-30, 30]);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    size: 2 + Math.random() * 4,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-purple-deep/50 to-background/80 dark:from-background/70 dark:via-purple-deep/60 dark:to-background/90" />
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, hsl(270 60% 30% / 0.5) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing Orbs with parallax */}
      <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0 pointer-events-none">
        <GlowingOrb delay={0} size={400} left="5%" top="15%" color="radial-gradient(circle, hsl(270 70% 50% / 0.4), transparent)" />
        <GlowingOrb delay={2} size={300} left="70%" top="10%" color="radial-gradient(circle, hsl(280 60% 45% / 0.3), transparent)" />
        <GlowingOrb delay={1} size={250} left="80%" top="60%" color="radial-gradient(circle, hsl(45 80% 55% / 0.2), transparent)" />
        <GlowingOrb delay={3} size={350} left="15%" top="70%" color="radial-gradient(circle, hsl(265 70% 55% / 0.35), transparent)" />
      </motion.div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <motion.path
          d="M0,200 Q400,100 800,300 T1600,200"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,400 Q300,500 600,350 T1200,450 T1800,350"
          stroke="url(#circuitGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, delay: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270 70% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(270 70% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(45 80% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium backdrop-blur-md border border-primary-foreground/20 shadow-lg shadow-primary/20">
            <Sparkles className="w-4 h-4 text-accent" />
            Innovative IT Solutions
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 min-h-[1.2em] drop-shadow-2xl">
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
          className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 drop-shadow-lg"
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
            className="glow-button bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl shadow-accent/30"
          >
            <a href="#contact">Start Your Journey</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:border-primary-foreground/60 backdrop-blur-sm text-lg px-8 py-6"
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
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
