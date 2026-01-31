import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, 
  ExternalLink, Github, Terminal, ArrowRight
} from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';
  const githubUrl = 'https://github.com/Satwik-1234';

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'satwikudupi@gmail.com', href: 'mailto:satwikudupi@gmail.com', color: 'text-primary' },
    { icon: Phone, label: 'Phone', value: '+91 9834300849', href: `tel:${phoneNumber}`, color: 'text-primary' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Quick Chat', href: whatsappUrl, color: 'text-green-500' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/in/satwik-udupi-37304a231', color: 'text-[#0077B5]' },
    { icon: Github, label: 'GitHub', value: 'View Code', href: githubUrl, color: 'text-foreground' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-card/50 border border-border/30 mb-4"
            >
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-muted-foreground font-mono">$ ./contact.sh</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
              Get in <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Ready to collaborate on GIS, hydrology, or engineering projects.
            </p>
          </div>

          {/* Terminal-style Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20 bg-card/60">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-muted-foreground/60 ml-3 font-mono">contact_info.json</span>
            </div>
            
            {/* Content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-muted-foreground/80 mb-4">
                <span className="text-foreground/60">{'{'}</span>
              </div>
              
              {/* Contact links */}
              <div className="space-y-3 pl-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group flex items-center gap-3 py-2 hover:bg-primary/5 rounded-lg px-3 -mx-3 transition-colors"
                  >
                    <span className="text-foreground/70">"{link.label.toLowerCase()}"</span>
                    <span className="text-foreground/40">:</span>
                    <span className="text-green-400 group-hover:text-green-300 transition-colors">"{link.value}"</span>
                    <link.icon className={`w-4 h-4 ${link.color} opacity-0 group-hover:opacity-100 transition-opacity ml-auto`} />
                  </motion.a>
                ))}
                
                {/* Location */}
                <div className="flex items-center gap-3 py-2 px-3 -mx-3">
                  <span className="text-foreground/70">"location"</span>
                  <span className="text-foreground/40">:</span>
                  <span className="text-green-400">"Karad, Maharashtra, India"</span>
                  <MapPin className="w-4 h-4 text-secondary ml-auto opacity-50" />
                </div>
              </div>
              
              <div className="text-muted-foreground/80 mt-4">
                <span className="text-foreground/60">{'}'}</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>submit_project_inquiry()</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Availability */}
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs">status: "available"</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
