import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Placeholder client logos - these would be replaced with actual client logos
const clients = [
  { name: "TechCorp", initial: "TC" },
  { name: "InnovateLabs", initial: "IL" },
  { name: "DataFlow", initial: "DF" },
  { name: "CloudPeak", initial: "CP" },
  { name: "SecureNet", initial: "SN" },
  { name: "DigitalEdge", initial: "DE" },
  { name: "SmartSystems", initial: "SS" },
  { name: "FutureScale", initial: "FS" },
];

const ClientLogo = ({ name, initial, index }: { name: string; initial: string; index: number }) => (
  <motion.div
    className="flex-shrink-0 mx-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="group relative w-32 h-20 flex items-center justify-center rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 cursor-pointer">
      {/* Placeholder logo */}
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {initial}
        </span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-muted-foreground whitespace-nowrap">{name}</span>
      </div>
    </div>
  </motion.div>
);

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the clients array for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Subtle gradient decorations */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background to-transparent z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Our <span className="gradient-text">Valued Clients</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <motion.div
          className="flex"
          animate={{
            x: [0, -50 * clients.length * 4],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {doubledClients.map((client, index) => (
            <ClientLogo
              key={`${client.name}-${index}`}
              name={client.name}
              initial={client.initial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
