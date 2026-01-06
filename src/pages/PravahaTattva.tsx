import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { 
  ArrowLeft, Waves, Mountain, Map, FileSpreadsheet, Cog, 
  Plane, Camera, Scan, Phone, Mail, MessageCircle, ExternalLink,
  CheckCircle, Github, Sun, Moon, Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import IntroAnimation from '@/components/IntroAnimation';

// Service images
import floodplainImg from '@/assets/services/floodplain-mapping.png';
import rainfallRunoffImg from '@/assets/services/rainfall-runoff.png';
import soilErosionImg from '@/assets/services/soil-erosion.png';
import gisAnalysisImg from '@/assets/services/gis-analysis.png';
import cfdAnalysisImg from '@/assets/services/cfd-analysis.png';
import dronePhotogrammetryImg from '@/assets/services/drone-photogrammetry.png';
import droneMappingImg from '@/assets/services/drone-mapping.png';
import multispectralImg from '@/assets/services/multispectral.png';

// Drone video
import droneVideo from '@/assets/drone-video.mp4';
import hydrologyBackground from '@/assets/hydrology-background.jpg';

const services = [
  {
    icon: Waves,
    title: 'Flood Risk Mapping',
    description: 'Comprehensive floodplain inundation mapping, risk zonation, and hazard assessment using HEC-RAS hydraulic modeling.',
    features: ['Flood extent mapping', 'Depth & velocity analysis', 'Risk zone classification'],
    image: floodplainImg
  },
  {
    icon: Mountain,
    title: 'Watershed Analysis',
    description: 'Hydrological modeling and rainfall-runoff analysis using HEC-HMS for effective water resource planning.',
    features: ['Basin delineation', 'Runoff estimation', 'Peak flow analysis'],
    image: rainfallRunoffImg
  },
  {
    icon: Map,
    title: 'Soil Erosion Assessment',
    description: 'RUSLE-based soil loss estimation and conservation planning for sustainable land management.',
    features: ['Erosion hotspot mapping', 'Conservation planning', 'Priority area identification'],
    image: soilErosionImg
  },
  {
    icon: FileSpreadsheet,
    title: 'GIS Spatial Analysis',
    description: 'Land use/land cover mapping, change detection, and comprehensive spatial data analysis.',
    features: ['LULC classification', 'Change detection', 'Thematic mapping'],
    image: gisAnalysisImg
  },
  {
    icon: Cog,
    title: 'CAD/CFD Simulations',
    description: 'Precision machinery design and computational fluid dynamics for agricultural applications.',
    features: ['3D modeling', 'Flow simulation', 'Design optimization'],
    image: cfdAnalysisImg
  },
  {
    icon: Plane,
    title: 'Drone Mapping',
    description: 'UAV-based aerial surveys with photogrammetry processing for high-resolution orthomosaics.',
    features: ['Orthomosaic generation', 'DEM/DSM creation', 'Volumetric analysis'],
    image: dronePhotogrammetryImg
  },
  {
    icon: Scan,
    title: 'LiDAR Processing',
    description: 'High-precision elevation models and terrain analysis from LiDAR point cloud data.',
    features: ['Point cloud processing', 'Terrain modeling', 'Feature extraction'],
    image: droneMappingImg
  },
  {
    icon: Camera,
    title: 'Multispectral Analysis',
    description: 'Vegetation health assessment and crop monitoring using multispectral imaging.',
    features: ['NDVI analysis', 'Crop health mapping', 'Stress detection'],
    image: multispectralImg
  }
];

const whyChooseUs = [
  { title: 'End-to-End Delivery', desc: 'Complete project lifecycle from data collection to final deliverables' },
  { title: 'Industry Tools', desc: 'HEC-RAS, HEC-HMS, ArcGIS Pro, QGIS expertise' },
  { title: '24hr Response', desc: 'Quick turnaround with guaranteed response time' },
  { title: 'Transparent Pricing', desc: 'Affordable rates with upfront cost estimates' },
  { title: 'Academic Foundation', desc: 'Research-backed practical consulting' },
  { title: 'Custom Solutions', desc: 'Tailored to your specific project needs' }
];

const PravahaTattva = () => {
  const { theme, setTheme } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20Pravaha%20Tattva%20Solutions%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';
  const githubUrl = 'https://github.com/Satwik-1234';

  return (
    <>
      <Helmet>
        <title>Pravaha Tattva Solutions | GIS & Hydrology Consulting by Satwik Udupi</title>
        <meta 
          name="description" 
          content="Pravaha Tattva Solutions offers professional GIS, hydrology, drone mapping, and environmental consulting services. Founded by Satwik Udupi." 
        />
        <meta name="keywords" content="GIS consulting, hydrology services, drone mapping, flood risk assessment, watershed analysis, Maharashtra" />
        <link rel="canonical" href="https://satwikudupi.com/pravaha-tattva" />
      </Helmet>

      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <div 
        className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsla(222, 47%, 6%, 0.75), hsla(222, 47%, 6%, 0.75)), url(${hydrologyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Button
              variant="ghost"
              asChild
              className="hover:bg-card/50"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Portfolio
              </Link>
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium gradient-text hidden sm:block">Pravaha Tattva Solutions</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:bg-card/50"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={droneVideo} type="video/mp4" />
            </video>
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              {/* Glassmorphism Card */}
              <div className="bg-card/30 backdrop-blur-2xl border border-border/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Play className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Professional GIS & Hydrology Consulting</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
                >
                  <span className="gradient-text">Pravaha Tattva</span>
                  <span className="block text-2xl md:text-3xl mt-3 text-foreground/90">Solutions</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-primary font-medium mb-6"
                >
                  Founded by Satwik Udupi
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8"
                >
                  Cutting-edge drone technology, LiDAR mapping, and multispectral imaging 
                  for precision agriculture, watershed management, and environmental monitoring.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    asChild
                  >
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Get a Quote
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-card/50 backdrop-blur border-border/50"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 rounded-full bg-foreground/50" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive geospatial and engineering solutions tailored to your project needs
              </p>
            </motion.div>

            {/* Service Cards - Modern App-like Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Icon */}
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform"
                      >
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description - Hidden by default, shown on hover */}
                      <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                        <p className="text-foreground/80 text-sm mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1.5">
                          {service.features.map((feature) => (
                            <span 
                              key={feature} 
                              className="px-2 py-1 text-xs bg-card/80 backdrop-blur border border-border/50 rounded-full text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - App-style Cards */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
              <div className="section-divider" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card/30 backdrop-blur-xl border border-border/30 rounded-2xl p-6 hover:border-primary/50 hover:bg-card/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Glassmorphism */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/30 backdrop-blur-2xl border border-border/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Start Your <span className="gradient-text">Project?</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Get in touch for a free consultation. I'll respond within 24 hours with a detailed proposal.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-gradient-accent text-primary-foreground font-semibold shadow-lg"
                  asChild
                >
                  <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get a Project Quote
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500/50 text-green-500 hover:bg-green-500/10"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              {/* Contact Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">+91 9834300849</span>
                </a>
                <a 
                  href="mailto:satwikudupi@gmail.com" 
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">satwikudupi@gmail.com</span>
                </a>
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pravaha Tattva Solutions. Founded by Satwik Udupi.
            </p>
            <Link to="/" className="text-primary text-sm hover:underline mt-2 inline-block">
              ← Back to Academic Portfolio
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PravahaTattva;
