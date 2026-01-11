import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { 
  ArrowLeft, Waves, Mountain, Map, FileSpreadsheet, Cog, 
  Plane, Camera, Ruler, Phone, Mail, MessageCircle, ExternalLink,
  CheckCircle, Github, Sun, Moon
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

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '25+', label: 'Active Clients' },
  { value: '1,000+', label: 'Hectares Mapped' }
];

const capabilities = [
  ['GIS Analysis', 'Watershed Modeling', 'LULC Mapping', 'DEM Processing', 'Risk Assessment'],
  ['Real-time monitoring', 'Detailed land parcel insights', 'Interactive map view']
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

      <div className="min-h-screen bg-[hsl(0_0%_5%)]">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_5%)]/90 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-white font-bold text-xl tracking-tight">
                PT
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <span className="text-white text-sm font-medium">Home</span>
                <a href="#services" className="text-white/60 text-sm hover:text-white transition-colors">Services</a>
                <a href="#about" className="text-white/60 text-sm hover:text-white transition-colors">About</a>
                <a href="#contact" className="text-white/60 text-sm hover:text-white transition-colors">Contact</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                size="sm"
                className="bg-[hsl(var(--gold))] text-black font-semibold hover:bg-[hsl(var(--gold-light))] shadow-[var(--shadow-gold)]"
                asChild
              >
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                  Request a demo
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section - Bold Typography with Drone */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          {/* Grid background pattern */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(0 0% 15% / 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(0 0% 15% / 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            {/* Radial gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(0_0%_5%)]/50 to-[hsl(0_0%_5%)]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 min-h-[80vh]">
              {/* Left side - Main headline */}
              <div className="lg:text-left text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[0.95] tracking-tight"
                >
                  We are your
                  <br />
                  <span className="text-[hsl(var(--gold))]">geospatial</span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 lg:mt-12"
                >
                  <p className="text-white/60 text-lg mb-6 max-w-sm">
                    Efficient flood mapping<br />
                    and watershed management
                  </p>
                  
                  <div className="flex flex-wrap gap-3 lg:justify-start justify-center">
                    <Button
                      size="lg"
                      className="bg-[hsl(var(--gold))] text-black font-semibold hover:bg-[hsl(var(--gold-light))] shadow-[var(--shadow-gold)] px-8"
                      asChild
                    >
                      <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                        Request a demo
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8"
                      asChild
                    >
                      <a href="#services">
                        See services
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              {/* Center - Drone Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative lg:w-[400px] xl:w-[500px]"
              >
                <motion.img 
                  src={droneHeroImg} 
                  alt="Professional Survey Drone"
                  className="w-full drop-shadow-[0_25px_60px_rgba(200,170,50,0.3)]"
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [-0.5, 0.5, -0.5]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                />
              </motion.div>
              
              {/* Right side - "partner" text and stats */}
              <div className="lg:text-right text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[0.95] tracking-tight"
                >
                  partner
                </motion.h1>
                
                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-12 space-y-8 lg:text-right text-center"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                    >
                      <div className="text-4xl md:text-5xl font-display font-light text-white">
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/10"
          >
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-between items-start gap-8">
                <div className="text-white/40 text-xs">V.01.24</div>
                <div className="flex gap-16">
                  <div>
                    {capabilities[0].map(cap => (
                      <div key={cap} className="text-white/50 text-sm">{cap}</div>
                    ))}
                  </div>
                  <div>
                    {capabilities[1].map(cap => (
                      <div key={cap} className="text-white/50 text-sm">{cap}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative bg-[hsl(0_0%_5%)]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-4">
                Our <span className="text-[hsl(var(--gold))]">Services</span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto mb-6" />
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Comprehensive geospatial and engineering solutions tailored to your project needs
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/[0.02] border border-white/5 hover:border-[hsl(var(--gold))]/30 transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%)]/70 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold))] flex items-center justify-center mb-4 shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-black" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description - Hidden by default, shown on hover */}
                      <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                        <p className="text-white/70 text-sm mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1.5">
                          {service.features.map((feature) => (
                            <span 
                              key={feature} 
                              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/60"
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
        <section id="about" className="py-24 relative bg-[hsl(0_0%_3%)]">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-4">
                Why Choose <span className="text-[hsl(var(--gold))]">Us</span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-[hsl(var(--gold))]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[hsl(var(--gold))] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative bg-[hsl(0_0%_5%)]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-4">
                  Ready to Start Your <span className="text-[hsl(var(--gold))]">Project?</span>
                </h2>
                <p className="text-white/50 max-w-xl mx-auto">
                  Get in touch for a free consultation. I'll respond within 24 hours with a detailed proposal.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--gold))] text-black font-semibold hover:bg-[hsl(var(--gold-light))] shadow-[var(--shadow-gold)]"
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
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[hsl(var(--gold))]/30 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[hsl(var(--gold))]" />
                  <span className="text-sm text-white/80">+91 9834300849</span>
                </a>
                <a 
                  href="mailto:satwikudupi@gmail.com" 
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[hsl(var(--gold))]/30 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[hsl(var(--gold))]" />
                  <span className="text-sm text-white/80">satwikudupi@gmail.com</span>
                </a>
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[hsl(var(--gold))]/30 transition-colors"
                >
                  <Github className="w-5 h-5 text-[hsl(var(--gold))]" />
                  <span className="text-sm text-white/80">GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5 bg-[hsl(0_0%_3%)]">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Pravaha Tattva Solutions. Founded by Satwik Udupi.
            </p>
            <Link to="/" className="text-[hsl(var(--gold))] text-sm hover:underline mt-2 inline-block">
              ← Back to Academic Portfolio
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PravahaTattva;
