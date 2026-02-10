import { motion } from "framer-motion";
import { Cloud, Shield, Code, Users, BarChart3, Server } from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud infrastructure and migration strategies that drive agility and reduce operational costs." },
  { icon: Shield, title: "Cybersecurity", description: "Comprehensive security assessments, threat monitoring, and compliance frameworks to protect your assets." },
  { icon: Code, title: "Software Development", description: "Custom software solutions built with modern technologies, from concept to deployment and beyond." },
  { icon: Users, title: "IT Consulting", description: "Strategic technology advisory to align your IT roadmap with business objectives and maximize ROI." },
  { icon: BarChart3, title: "Data Analytics", description: "Transform raw data into actionable insights with advanced analytics, BI dashboards, and AI-driven models." },
  { icon: Server, title: "Managed IT Services", description: "Proactive monitoring, maintenance, and support to keep your infrastructure running at peak performance." },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-neon-blue/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm uppercase tracking-[0.3em]">
            // What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end technology solutions designed to accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass-card rounded-xl p-8 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {/* Top neon line on hover */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(180_80%_50%/0.2)] transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
