import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { 
  ArrowLeft, Waves, Mountain, Map, FileSpreadsheet, Cog, 
  Plane, Camera, Ruler, Phone, Mail, MessageCircle, ExternalLink,
  CheckCircle, Github, Sun, Moon, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Service images
import floodplainImg from '@/assets/services/floodplain-mapping.png';
import rainfallRunoffImg from '@/assets/services/rainfall-runoff.png';
import soilErosionImg from '@/assets/services/soil-erosion.png';
import gisAnalysisImg from '@/assets/services/gis-analysis.png';
import cfdAnalysisImg from '@/assets/services/cfd-analysis.png';
import dronePhotogrammetryImg from '@/assets/services/drone-photogrammetry.png';
import droneMappingImg from '@/assets/services/drone-mapping.png';
import multispectralImg from '@/assets/services/multispectral.png';

// Drone hero image
import droneHeroImg from '@/assets/drone-hero.png';

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
    icon: Ruler,
    title: 'CAD Design',
    description: 'Professional 2D/3D CAD drafting for agricultural machinery, irrigation systems, and infrastructure.',
    features: ['Technical drawings', '3D modeling', 'Design documentation'],
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

      <div className="min-h-screen bg-[hsl(var(--services-navy))]">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--services-navy))]/95 backdrop-blur-xl border-b border-[hsl(var(--services-blue))]/10">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:text-[hsl(var(--services-cyan))] transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="bg-gradient-to-r from-[hsl(var(--services-blue-light))] to-[hsl(var(--services-cyan))] bg-clip-text text-transparent">
                  PT
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#services" className="text-white/70 text-sm hover:text-[hsl(var(--services-cyan))] transition-colors">Services</a>
                <a href="#about" className="text-white/70 text-sm hover:text-[hsl(var(--services-cyan))] transition-colors">About</a>
                <a href="#contact" className="text-white/70 text-sm hover:text-[hsl(var(--services-cyan))] transition-colors">Contact</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-white/60 hover:text-[hsl(var(--services-cyan))] hover:bg-[hsl(var(--services-blue))]/10"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[hsl(var(--services-blue))] to-[hsl(var(--services-cyan))] text-white font-semibold hover:opacity-90 shadow-[0_4px_20px_hsl(var(--services-blue)/0.4)]"
                asChild
              >
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section - 3D Drone with Blue Theme */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[hsl(var(--services-blue))]/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(var(--services-cyan))]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--services-blue) / 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--services-blue) / 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[85vh]">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--services-blue))]/10 border border-[hsl(var(--services-blue))]/30 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-[hsl(var(--services-cyan))]" />
                  <span className="text-sm text-[hsl(var(--services-cyan))]">Pravaha Tattva Solutions</span>
                </motion.div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                  Your Trusted
                  <br />
                  <span className="bg-gradient-to-r from-[hsl(var(--services-blue-light))] via-[hsl(var(--services-cyan))] to-[hsl(var(--services-blue))] bg-clip-text text-transparent">
                    Geospatial
                  </span>
                  <br />
                  Partner
                </h1>
                
                <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
                  Empowering decisions with precision GIS mapping, advanced hydrology modeling, 
                  and cutting-edge drone technology. We transform complex spatial data into 
                  actionable insights for sustainable land and water management.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[hsl(var(--services-blue))] to-[hsl(var(--services-cyan))] text-white font-semibold hover:opacity-90 shadow-[0_8px_30px_hsl(var(--services-blue)/0.4)] px-8"
                    asChild
                  >
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Request Consultation
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[hsl(var(--services-blue))]/40 text-white hover:bg-[hsl(var(--services-blue))]/10 hover:border-[hsl(var(--services-cyan))] px-8"
                    asChild
                  >
                    <a href="#services">
                      View Services
                    </a>
                  </Button>
                </div>
                
              </motion.div>
              
              {/* Right - 3D Drone Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative flex items-center justify-center"
              >
                {/* Glow ring behind drone */}
                <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-[hsl(var(--services-cyan))]/20 animate-pulse" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-[hsl(var(--services-blue))]/30" />
                
                {/* Main drone image with 3D effect */}
                <motion.div
                  className="relative z-10"
                  animate={{ 
                    y: [0, -20, 0],
                    rotateY: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                  style={{ perspective: '1000px' }}
                >
                  <img 
                    src={droneHeroImg} 
                    alt="Professional Survey Drone"
                    className="w-[500px] max-w-full drop-shadow-[0_35px_60px_hsl(var(--services-blue)/0.5)]"
                    style={{
                      filter: 'drop-shadow(0 0 40px hsl(var(--services-cyan) / 0.3))'
                    }}
                  />
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-4 h-4 rounded-full bg-[hsl(var(--services-cyan))]"
                    animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-20 -left-10 w-3 h-3 rounded-full bg-[hsl(var(--services-blue-light))]"
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Consultancy Section */}
        <section className="py-20 relative bg-gradient-to-b from-[hsl(var(--services-navy))] to-[hsl(220_50%_8%)]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Expert <span className="bg-gradient-to-r from-[hsl(var(--services-blue-light))] to-[hsl(var(--services-cyan))] bg-clip-text text-transparent">Consultancy</span> Services
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                At Pravaha Tattva Solutions, we bring together cutting-edge geospatial technology 
                and deep domain expertise to deliver transformative solutions for land and water management. 
                Our consultancy services are designed to bridge the gap between complex spatial data and 
                actionable insights that drive sustainable development.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                Whether you're a government agency seeking flood risk assessments, an agricultural enterprise 
                optimizing land use, or a research institution requiring advanced GIS analysis—we provide 
                end-to-end support from project conceptualization to final deliverable. Our commitment to 
                quality, transparency, and innovation ensures that every project exceeds expectations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative bg-[hsl(220_50%_8%)]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-[hsl(var(--services-blue-light))] to-[hsl(var(--services-cyan))] bg-clip-text text-transparent">Services</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--services-blue))] via-[hsl(var(--services-cyan))] to-[hsl(var(--services-blue))] mx-auto mb-6 rounded-full" />
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Comprehensive geospatial and engineering solutions tailored to your project needs
              </p>
            </motion.div>

            {/* Service Cards Grid - Redesigned */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-white/[0.05] to-transparent border border-[hsl(var(--services-blue))]/20 hover:border-[hsl(var(--services-cyan))]/50 transition-all duration-500 hover:shadow-[0_20px_50px_hsl(var(--services-blue)/0.2)]"
                >
                  {/* Background Image */}
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--services-navy))] via-[hsl(var(--services-navy))]/80 to-transparent" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--services-blue))]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--services-blue))] to-[hsl(var(--services-cyan))] flex items-center justify-center mb-4 shadow-[0_8px_25px_hsl(var(--services-blue)/0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[hsl(var(--services-cyan))] transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description - Shown on hover */}
                      <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-48 opacity-0 group-hover:opacity-100">
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span 
                              key={feature} 
                              className="px-3 py-1.5 text-xs bg-[hsl(var(--services-blue))]/20 border border-[hsl(var(--services-cyan))]/30 rounded-full text-[hsl(var(--services-cyan))]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-24 relative bg-[hsl(var(--services-navy))]">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-[hsl(var(--services-blue-light))] to-[hsl(var(--services-cyan))] bg-clip-text text-transparent">Us</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--services-blue))] via-[hsl(var(--services-cyan))] to-[hsl(var(--services-blue))] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-gradient-to-b from-white/[0.05] to-transparent border border-[hsl(var(--services-blue))]/20 rounded-2xl p-6 hover:border-[hsl(var(--services-cyan))]/50 transition-all hover:shadow-[0_15px_40px_hsl(var(--services-blue)/0.15)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--services-blue))] to-[hsl(var(--services-cyan))] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_8px_20px_hsl(var(--services-blue)/0.3)]">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative bg-[hsl(220_50%_8%)]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-white/[0.05] to-transparent border border-[hsl(var(--services-blue))]/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                  Ready to Start Your <span className="bg-gradient-to-r from-[hsl(var(--services-blue-light))] to-[hsl(var(--services-cyan))] bg-clip-text text-transparent">Project?</span>
                </h2>
                <p className="text-white/50 max-w-xl mx-auto">
                  Get in touch for a free consultation. I'll respond within 24 hours with a detailed proposal.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--services-blue))] to-[hsl(var(--services-cyan))] text-white font-semibold hover:opacity-90 shadow-[0_8px_30px_hsl(var(--services-blue)/0.4)]"
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
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10"
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
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-[hsl(var(--services-blue))]/20 hover:border-[hsl(var(--services-cyan))]/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[hsl(var(--services-cyan))]" />
                  <span className="text-sm text-white/80">+91 9834300849</span>
                </a>
                <a 
                  href="mailto:satwikudupi@gmail.com" 
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-[hsl(var(--services-blue))]/20 hover:border-[hsl(var(--services-cyan))]/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[hsl(var(--services-cyan))]" />
                  <span className="text-sm text-white/80">satwikudupi@gmail.com</span>
                </a>
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-[hsl(var(--services-blue))]/20 hover:border-[hsl(var(--services-cyan))]/50 transition-colors"
                >
                  <Github className="w-5 h-5 text-[hsl(var(--services-cyan))]" />
                  <span className="text-sm text-white/80">GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-[hsl(var(--services-blue))]/10 bg-[hsl(var(--services-navy))]">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Pravaha Tattva Solutions. Founded by Satwik Udupi.
            </p>
            <Link to="/" className="text-[hsl(var(--services-cyan))] text-sm hover:underline mt-2 inline-block">
              ← Back to Academic Portfolio
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PravahaTattva;
