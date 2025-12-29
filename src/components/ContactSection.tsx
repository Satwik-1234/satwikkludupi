import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, Calendar, 
  Waves, Map, FileSpreadsheet, Mountain, Cog, ExternalLink, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Waves,
    title: 'Flood Risk Mapping',
    description: 'HEC-RAS based floodplain inundation & risk zonation mapping',
    tools: ['HEC-RAS', 'ArcGIS', 'QGIS']
  },
  {
    icon: Mountain,
    title: 'Watershed Analysis',
    description: 'Hydrological modeling, rainfall-runoff analysis & PMF estimation',
    tools: ['HEC-HMS', 'GEE', 'SRTM DEM']
  },
  {
    icon: Map,
    title: 'Soil Erosion Assessment',
    description: 'RUSLE-based soil loss estimation & conservation planning',
    tools: ['RUSLE', 'GEE', 'CHIRPS']
  },
  {
    icon: FileSpreadsheet,
    title: 'GIS Spatial Analysis',
    description: 'LULC mapping, change detection & spatial data analysis',
    tools: ['ArcGIS Pro', 'QGIS', 'Sentinel-2']
  },
  {
    icon: Cog,
    title: 'CAD/CFD Simulations',
    description: 'Agricultural machinery design & fluid flow simulations',
    tools: ['SolidWorks', 'ANSYS', 'NX CAD']
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
  { name: 'Agisoft Metashape', category: 'Photogrammetry' }
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const calendlyUrl = 'https://calendly.com/satwikudupi';
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';

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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-muted-foreground max-w-xl mx-auto">
                <span className="font-semibold text-primary">PravahaTattva Solutions</span> — 
                Professional GIS, hydrology, and agricultural engineering consulting
              </p>
            </div>

            {/* Impact Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
            >
              {impactMetrics.map((metric, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {metric.value}{metric.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Service Offerings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
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
                    className="glass-card p-6 hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-display font-bold text-center mb-8">
                Technical <span className="gradient-text">Stack</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="glass-card px-4 py-2 flex items-center gap-2 hover:border-primary/50 transition-all"
                  >
                    <span className="text-xs text-primary/70">{tech.category}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="glass-card p-8">
                  <h3 className="text-xl font-display font-bold mb-2">Satwik Udupi</h3>
                  <p className="text-primary font-medium mb-6">PravahaTattva Solutions</p>
                  
                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">Phone</p>
                        <a 
                          href={`tel:${phoneNumber}`}
                          className="text-primary hover:underline font-medium"
                        >
                          +91 9834300849
                        </a>
                        <div className="flex gap-2 mt-2">
                          <a 
                            href={`tel:${phoneNumber}`}
                            className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            Call Now
                          </a>
                          <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-3 py-1.5 rounded-full hover:bg-green-500/20 transition-colors"
                          >
                            <MessageCircle className="w-3 h-3" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a 
                          href="mailto:Sarwikudupi@gmail.com" 
                          className="text-primary hover:underline block"
                        >
                          Satwikudupi@gmail.com
                        </a>
                        <a 
                          href="mailto:satwikudupi2018@gmail.com" 
                          className="text-primary hover:underline text-sm"
                        >
                          satwikudupi2018@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/satwik-udupi-37304a231"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">
                          Krishna Canal, Vidyanagar Road<br />
                          Karad, Maharashtra 415124
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Calendly Button */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <a 
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <Calendar className="w-5 h-5" />
                      Book a Consultation
                    </a>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="glass-card p-2 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60977.03894508831!2d74.13721279375474!3d17.291079747055163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183e3a1e4f953%3A0x9987a0e03a00e22b!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karad, Maharashtra Location"
                  />
                </div>

                {/* LinkedIn Embed Badge */}
                <div className="glass-card p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">Connect on LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/satwik-udupi-37304a231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    Satwik Udupi
                  </a>
                </div>
              </motion.div>

              {/* Engaging CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-6"
              >
                {/* Main CTA Card */}
                <div className="glass-card p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">
                      Ready to Start Your <span className="gradient-text">Project?</span>
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Fill out the quick project quote form and I'll get back to you within 24 hours with a detailed proposal.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-accent text-primary-foreground font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform"
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
                    className="glass-card p-6 text-center hover:border-green-500/50 transition-all group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-7 h-7 text-green-500" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Chat on WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">Quick questions? Message me directly</p>
                  </a>

                  <a
                    href={`tel:${phoneNumber}`}
                    className="glass-card p-6 text-center hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Call Directly</h4>
                    <p className="text-sm text-muted-foreground">+91 9834300849</p>
                  </a>
                </div>

                {/* Why Work With Me */}
                <div className="glass-card p-6">
                  <h4 className="font-display font-bold mb-4 text-center">Why Work With Me?</h4>
                  <div className="space-y-3">
                    {[
                      'End-to-end project delivery from data collection to final maps',
                      'Expertise in HEC-RAS, HEC-HMS, ArcGIS Pro & Google Earth Engine',
                      'Quick turnaround with 24-hour response guarantee',
                      'Affordable rates with transparent pricing'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-primary-foreground font-bold">✓</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 p-4 z-40">
        <div className="flex gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-accent text-primary-foreground py-3 px-4 rounded-lg font-medium"
          >
            <FileText className="w-5 h-5" />
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
