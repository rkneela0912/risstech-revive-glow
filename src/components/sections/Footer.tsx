import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import rissLogo from "@/assets/riss-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:connect@risstechnologiesllc.com", label: "Email" },
];

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Cloud Solutions", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-dark py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div className="flex items-center mb-6" whileHover={{ scale: 1.02 }}>
                <img src={rissLogo} alt="RISS Technologies" className="h-14 w-auto" />
              </motion.div>

              <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
                Engineering the future of enterprise technology through cloud-native architecture,
                zero-trust security, and intelligent automation.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all neon-border"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-display font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-display font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs font-mono">
                © {new Date().getFullYear()} RISS Technologies LLC. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs font-mono">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
