import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, 
  ExternalLink, Github, Briefcase, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import hydrologyBg from '@/assets/hydrology-background.jpg';

const techStack = [
  { name: 'HEC-HMS', category: 'Hydrology' },
  { name: 'HEC-RAS', category: 'Hydrology' },
  { name: 'ArcGIS Pro', category: 'GIS' },
  { name: 'QGIS', category: 'GIS' },
  { name: 'Google Earth Engine', category: 'Remote Sensing' },
  { name: 'SolidWorks', category: 'CAD' },
  { name: 'ANSYS', category: 'CFD/FEA' },
  { name: 'Agisoft Metashape', category: 'Photogrammetry' },
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hydrologyBg})` }}
      />
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Ready to collaborate? Reach out for GIS, hydrology, or agricultural engineering consulting.
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
              <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-3xl p-8">
                <h3 className="text-xl font-display font-bold mb-1">Satwik Udupi</h3>
                <p className="text-primary font-medium text-sm mb-6">Agricultural Engineer & GIS Specialist</p>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-4 p-3 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+91 9834300849</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:satwikudupi@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">satwikudupi@gmail.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-card/50 border border-border/30">
                    <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Karad, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-6">
                  <a 
                    href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href={githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-3xl p-2 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60977.03894508831!2d74.13721279375474!3d17.291079747055163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183e3a1e4f953%3A0x9987a0e03a00e22b!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karad, Maharashtra Location"
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
              <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-3">
                    Start Your <span className="gradient-text">Project</span>
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm max-w-md mx-auto">
                    Fill out the project quote form and I'll get back to you within 24 hours with a detailed proposal.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-accent text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Get a Project Quote
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
                  className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-5 text-center hover:border-green-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">WhatsApp</h4>
                  <p className="text-xs text-muted-foreground mt-1">Quick chat</p>
                </a>

                <Link
                  to="/pravaha-tattva"
                  className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-5 text-center hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">Consultancy</h4>
                  <p className="text-xs text-muted-foreground mt-1">Pravaha Tattva</p>
                </Link>
              </div>

              {/* Resume Download Card - 3D Effect */}
              <div className="relative duration-300 hover:-rotate-0 [transform:rotate3d(1,-1,1,15deg)] group border-4 border-primary/60 overflow-hidden rounded-2xl h-52 bg-gradient-to-br from-primary to-primary/80 p-5 flex flex-col items-start gap-4 hover:shadow-[0_20px_50px_hsl(var(--primary)/0.4)] transition-all">
                <div className="text-primary-foreground">
                  <span className="font-display font-bold text-4xl">SU</span>
                  <p className="text-xs opacity-90">Agricultural Engineer</p>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1example/view" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duration-300 hover:bg-primary border border-primary-foreground/30 hover:text-primary-foreground bg-background/95 font-semibold text-foreground px-4 py-2.5 flex flex-row items-center gap-3 rounded-lg group/btn"
                >
                  Download CV 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    className="w-5 h-5 fill-current group-hover/btn:animate-bounce"
                  >
                    <path fillRule="evenodd" d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" />
                  </svg>
                </a>
                {/* Decorative person silhouette */}
                <svg 
                  viewBox="0 0 64 64" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-background/90 stroke-primary/60"
                >
                  <path 
                    strokeWidth={5} 
                    strokeMiterlimit={10} 
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" 
                  />
                </svg>
                <svg 
                  viewBox="0 0 64 64" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-background/90 stroke-primary/30"
                >
                  <path 
                    strokeWidth={2} 
                    strokeMiterlimit={10} 
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" 
                  />
                </svg>
              </div>

              {/* Technical Stack */}
              <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-3xl p-6">
                <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                  <span>Technical Stack</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-sm bg-card/50 border border-border/50 rounded-full text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
