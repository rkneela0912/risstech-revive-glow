import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Clock, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 300, suffix: "+", label: "Projects Completed" },
  { icon: Clock, value: 50000, suffix: "+", label: "Hours of Work" },
  { icon: Trophy, value: 25, suffix: "", label: "Team Members" },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Floating particle for background
const FloatingParticle = ({ delay, size, left, duration }: {
  delay: number;
  size: number;
  left: string;
  duration: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{
      width: size,
      height: size,
      left,
      bottom: "-10%",
    }}
    animate={{
      y: [0, -800],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    size: 4 + Math.random() * 8,
    left: `${Math.random() * 100}%`,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-dark" />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}
      
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(270 60% 40% / 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(270 80% 50% / 0.3) 0%, transparent 50%)`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Impact</span> in Numbers
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Years of dedication and hard work reflected in the numbers that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/10 hover:shadow-xl hover:shadow-primary/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Icon with pulse effect */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(270 60% 50% / 0.4)",
                      "0 0 0 15px hsl(270 60% 50% / 0)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Animated number */}
                <div className="relative text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>

                <p className="relative text-white/70 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
