import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, 
  ExternalLink, Github, Briefcase, ArrowRight, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  'HEC-HMS', 'HEC-RAS', 'ArcGIS Pro', 'QGIS', 
  'Google Earth Engine', 'SolidWorks', 'ANSYS', 
  'Agisoft Metashape', 'Python', 'AutoCAD'
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';
  const githubUrl = 'https://github.com/Satwik-1234';

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-muted/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on GIS, hydrology, or agricultural engineering projects? Let's discuss how I can help.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Card */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/30">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">SU</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">Satwik Udupi</h3>
                    <p className="text-sm text-muted-foreground">Hydrologist • GIS Analyst</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                      <p className="font-medium text-foreground">+91 9834300849</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:satwikudupi@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="font-medium text-foreground">satwikudupi@gmail.com</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="font-medium text-foreground">Karad, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-border/30">
                  <a 
                    href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href={githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60977.03894508831!2d74.13721279375474!3d17.291079747055163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183e3a1e4f953%3A0x9987a0e03a00e22b!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karad, Maharashtra Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Right Column - CTA & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main CTA Card */}
              <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                
                <div className="relative">
                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                    Start Your Project
                  </h3>
                  <p className="text-muted-foreground mb-8 text-sm">
                    Fill out the project inquiry form and receive a detailed proposal within 24 hours.
                  </p>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-12 rounded-xl"
                  >
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Request Project Quote
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">WhatsApp</h4>
                  <p className="text-xs text-muted-foreground mt-1">Quick response</p>
                </a>

                <Link
                  to="/pravaha-tattva"
                  className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Consultancy</h4>
                  <p className="text-xs text-muted-foreground mt-1">Pravaha Tattva</p>
                </Link>
              </div>

              {/* Technical Stack */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  Technical Expertise
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.03 }}
                      className="px-3 py-1.5 text-sm bg-card/50 border border-border/50 rounded-lg text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-500">Available for new projects</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
