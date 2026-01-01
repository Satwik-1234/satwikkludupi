import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, 
  Waves, Map, FileSpreadsheet, Mountain, Cog, ExternalLink, FileText, Github, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import hydrologyBg from '@/assets/hydrology-background.jpg';

const services = [
  {
    icon: Waves,
    title: 'Flood Risk Mapping',
    description: 'Floodplain inundation & risk zonation mapping',
  },
  {
    icon: Mountain,
    title: 'Watershed Analysis',
    description: 'Hydrological modeling & rainfall-runoff analysis',
  },
  {
    icon: Map,
    title: 'Soil Erosion Assessment',
    description: 'RUSLE-based soil loss estimation & planning',
  },
  {
    icon: FileSpreadsheet,
    title: 'GIS Spatial Analysis',
    description: 'LULC mapping & spatial data analysis',
  },
  {
    icon: Cog,
    title: 'CAD/CFD Simulations',
    description: 'Machinery design & fluid flow simulations',
  }
];

const impactMetrics = [
  { value: 6, suffix: '+', label: 'Major Projects' },
  { value: 20, suffix: '+', label: 'Certifications' },
  { value: 5, suffix: '+', label: 'Organizations' },
  { value: 24, suffix: 'hrs', label: 'Response Time' }
];

const techStack = [
  { name: 'HEC-HMS', category: 'Hydrology' },
  { name: 'HEC-RAS', category: 'Hydrology' },
  { name: 'ArcGIS Pro', category: 'GIS' },
  { name: 'QGIS', category: 'GIS' },
  { name: 'Google Earth Engine', category: 'Remote Sensing' },
  { name: 'SolidWorks', category: 'CAD' },
  { name: 'ANSYS', category: 'CFD/FEA' },
  { name: 'Agisoft Metashape', category: 'Photogrammetry' },
  { name: 'WebODM', category: 'Photogrammetry' },
  { name: 'Google Colab', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';
  const githubUrl = 'https://github.com/Satwik-1234';

  return (
    <>
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-muted-foreground max-w-xl mx-auto">
                <span className="font-semibold text-primary">Pravaha Tattva Solutions</span> — 
                Professional GIS, hydrology, and agricultural engineering consulting
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Founded by <span className="font-medium text-foreground">Satwik Udupi</span>
              </p>
            </div>

            {/* Impact Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {impactMetrics.map((metric, index) => (
                <div key={index} className="glass-card p-5 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {metric.value}{metric.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Service Offerings - with background image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 relative rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${hydrologyBg})` }}
              />
              <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-display font-bold text-center mb-8">
                  Service <span className="gradient-text">Offerings</span>
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="glass-card p-5 hover:border-primary/50 transition-all group text-center"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-sm">{service.title}</h4>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-display font-bold text-center mb-6">
                Technical <span className="gradient-text">Stack</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="glass-card px-3 py-1.5 flex items-center gap-2 hover:border-primary/50 transition-all text-sm"
                  >
                    <span className="text-xs text-primary/70">{tech.category}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-5"
              >
                <div className="glass-card p-6">
                  <h3 className="text-xl font-display font-bold mb-1">Satwik Udupi</h3>
                  <p className="text-primary font-medium mb-5 text-sm">Founder, Pravaha Tattva Solutions</p>
                  
                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">Phone</p>
                        <a 
                          href={`tel:${phoneNumber}`}
                          className="text-primary hover:underline text-sm"
                        >
                          +91 9834300849
                        </a>
                        <div className="flex gap-2 mt-1.5">
                          <a 
                            href={`tel:${phoneNumber}`}
                            className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            Call
                          </a>
                          <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full hover:bg-green-500/20 transition-colors"
                          >
                            <MessageCircle className="w-3 h-3" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Email</p>
                        <a 
                          href="mailto:satwikudupi@gmail.com" 
                          className="text-primary hover:underline text-sm block"
                        >
                          satwikudupi@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn & GitHub */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/satwik-udupi-37304a231"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Github className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">GitHub</p>
                        <a 
                          href={githubUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          View my code & scripts
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Location</p>
                        <p className="text-muted-foreground text-sm">
                          Krishna Canal, Vidyanagar Road<br />
                          Karad, Maharashtra 415124
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="glass-card p-1.5 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60977.03894508831!2d74.13721279375474!3d17.291079747055163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183e3a1e4f953%3A0x9987a0e03a00e22b!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karad, Maharashtra Location"
                  />
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-5"
              >
                {/* Main CTA Card */}
                <div className="glass-card p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-5">
                      <FileText className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      Ready to Start Your <span className="gradient-text">Project?</span>
                    </h3>
                    <p className="text-muted-foreground mb-5 text-sm max-w-md mx-auto">
                      Fill out the project quote form and I'll get back to you within 24 hours with a detailed proposal.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-accent text-primary-foreground font-semibold px-8 hover:scale-105 transition-transform"
                    >
                      <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Get a Project Quote
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quick Action Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-5 text-center hover:border-green-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">WhatsApp</h4>
                    <p className="text-xs text-muted-foreground">Quick questions? Message directly</p>
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-5 text-center hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">GitHub</h4>
                    <p className="text-xs text-muted-foreground">View my code & projects</p>
                  </a>
                </div>

                {/* Pravaha Tattva CTA */}
                <Link
                  to="/pravaha-tattva"
                  className="glass-card p-5 text-center hover:border-primary/50 transition-all group block"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1 text-sm">Pravaha Tattva Solutions</h4>
                  <p className="text-xs text-muted-foreground">Explore my consultancy services</p>
                </Link>

                {/* Why Work With Me */}
                <div className="glass-card p-5">
                  <h4 className="font-display font-bold mb-3 text-center text-sm">Why Work With Me?</h4>
                  <div className="space-y-2">
                    {[
                      'End-to-end project delivery from data collection to final maps',
                      'Expertise in HEC-RAS, HEC-HMS, ArcGIS Pro & Google Earth Engine',
                      'Quick turnaround with 24-hour response guarantee',
                      'Affordable rates with transparent pricing'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/90 backdrop-blur-lg border-t border-border/50 md:hidden z-40">
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-accent text-primary-foreground py-3 px-6 rounded-lg font-semibold"
        >
          <ExternalLink className="w-5 h-5" />
          Get Project Quote
        </a>
      </div>
    </>
  );
};

export default ContactSection;
