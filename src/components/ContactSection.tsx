import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Ambika+Bhavan+Krishna+Canal+Vidyanagar+Saidapur+Karad+Maharashtra';

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'satwikudupi@gmail.com',
      href: 'mailto:satwikudupi@gmail.com',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 983 430 0849',
      href: `tel:${phoneNumber}`,
      gradient: 'from-emerald-500 to-teal-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ambika Bhavan, Krishna Canal',
      subvalue: 'Vidyanagar, Saidapur, Karad',
      href: googleMapsUrl,
      gradient: 'from-violet-500 to-purple-400'
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: whatsappUrl,
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#20BD5A]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/satwik-udupi-37304a231',
      color: 'bg-[#0077B5]',
      hoverColor: 'hover:bg-[#006699]'
    },
    {
      icon: ExternalLink,
      label: 'Consulting',
      href: '/pravaha-tattva',
      color: 'bg-primary',
      hoverColor: 'hover:bg-primary/90',
      isInternal: true
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-card/10" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Let's <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-lg">
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
              className="group block bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 text-center hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6">
                <ExternalLink className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Start Your Project</h3>
              <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                Fill out the inquiry form and get a response within 24 hours
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Request Quote
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group relative overflow-hidden bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-border hover:bg-card/60 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} p-[1px] mb-4`}>
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</p>
                    <p className="text-sm font-semibold text-foreground">{link.value}</p>
                    {link.subvalue && (
                      <p className="text-xs text-muted-foreground mt-1">{link.subvalue}</p>
                    )}
                    
                    {link.label === 'Location' && (
                      <p className="text-xs text-primary mt-2 flex items-center gap-1">
                        Open in Google Maps
                        <ArrowUpRight className="w-3 h-3" />
                      </p>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Social Links - Rounded animated buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const Component = link.isInternal ? 'a' : 'a';
              
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={!link.isInternal ? '_blank' : undefined}
                  rel={!link.isInternal ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-full ${link.color} ${link.hoverColor} text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
              <span className="text-sm font-medium text-emerald-400">Available for new projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
