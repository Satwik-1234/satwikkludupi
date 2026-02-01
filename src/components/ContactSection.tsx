import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, 
  ExternalLink, ArrowUpRight, Send
} from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'satwikudupi@gmail.com',
      href: 'mailto:satwikudupi@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 983 430 0849',
      href: `tel:${phoneNumber}`,
      color: 'accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karad, Maharashtra',
      href: null,
      color: 'secondary'
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-muted/10" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Send className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Get in Touch</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
              Let's <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Ready to collaborate on GIS, hydrology, or agricultural engineering projects?
            </p>
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-primary/30 hover:bg-card/80 transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-foreground text-background mb-6">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Start Your Project</h3>
              <p className="text-sm text-muted-foreground mb-4">Fill out the inquiry form and get a response within 24 hours</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Request Quote
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              const content = (
                <div className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-5 text-center hover:border-primary/30 hover:bg-card/50 transition-all h-full">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-${link.color}/10 mb-3`}>
                    <Icon className={`w-4 h-4 text-${link.color}`} />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">{link.value}</p>
                </div>
              );

              return link.href ? (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/satwik-udupi-37304a231"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] text-sm font-medium hover:bg-[#0077B5]/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <Link
              to="/pravaha-tattva"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              Consulting
            </Link>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-500">Available for new projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
