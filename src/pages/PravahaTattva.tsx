import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { 
  ArrowLeft, Waves, Mountain, Map, 
  Plane, Camera, Ruler, Phone, Mail, MessageCircle, ExternalLink,
  ArrowRight, ArrowUpRight, Droplets, Layers, Satellite, FlaskConical,
  User, Briefcase, Award, MapPin, GraduationCap
} from 'lucide-react';

// Service images
import floodplainImg from '@/assets/services/floodplain-mapping.png';
import rainfallRunoffImg from '@/assets/services/rainfall-runoff.png';
import soilErosionImg from '@/assets/services/soil-erosion.png';
import gisAnalysisImg from '@/assets/services/gis-analysis.png';
import cfdAnalysisImg from '@/assets/services/cfd-analysis.png';
import dronePhotogrammetryImg from '@/assets/services/drone-photogrammetry.png';
import droneMappingImg from '@/assets/services/drone-mapping.png';
import multispectralImg from '@/assets/services/multispectral.png';
import droneHeroImg from '@/assets/drone-hero.png';
import profilePhoto from '@/assets/profile-photo.png';

const services = [
  {
    id: '01',
    icon: Waves,
    title: 'Hydraulic Modeling',
    subtitle: 'HEC-RAS & Flood Analysis',
    description: 'Precision flood risk assessment and floodplain delineation using industry-standard hydraulic modeling.',
    capabilities: ['Flood Extent Mapping', 'Depth-Velocity Analysis', 'Dam Break Simulation', 'Bridge Hydraulics'],
    image: floodplainImg
  },
  {
    id: '02',
    icon: Mountain,
    title: 'Watershed Hydrology',
    subtitle: 'HEC-HMS & Runoff Modeling',
    description: 'Comprehensive hydrological analysis from catchment delineation to peak discharge estimation.',
    capabilities: ['Basin Delineation', 'Rainfall-Runoff Modeling', 'SCS-CN Method', 'Unit Hydrograph'],
    image: rainfallRunoffImg
  },
  {
    id: '03',
    icon: Layers,
    title: 'Erosion Assessment',
    subtitle: 'RUSLE & Soil Conservation',
    description: 'Quantitative soil loss estimation using empirical models integrated with remote sensing data.',
    capabilities: ['RUSLE Modeling', 'Sediment Yield', 'Conservation Planning', 'Priority Mapping'],
    image: soilErosionImg
  },
  {
    id: '04',
    icon: Satellite,
    title: 'Geospatial Analysis',
    subtitle: 'ArcGIS Pro & QGIS',
    description: 'Advanced spatial analysis and thematic mapping leveraging multi-temporal satellite imagery.',
    capabilities: ['LULC Classification', 'Change Detection', 'Spatial Modeling', 'Cartographic Design'],
    image: gisAnalysisImg
  },
  {
    id: '05',
    icon: Plane,
    title: 'UAV Photogrammetry',
    subtitle: 'Drone Surveys & Mapping',
    description: 'High-resolution aerial surveys with centimeter-level accuracy for terrain analysis.',
    capabilities: ['Orthomosaic Generation', 'DSM/DTM Creation', 'Volumetric Analysis', 'Contour Mapping'],
    image: dronePhotogrammetryImg
  },
  {
    id: '06',
    icon: FlaskConical,
    title: 'CFD Simulations',
    subtitle: 'Computational Fluid Dynamics',
    description: 'Flow simulation and thermal analysis for agricultural machinery and irrigation infrastructure.',
    capabilities: ['Flow Simulation', 'Thermal Analysis', 'Design Optimization', 'Performance Validation'],
    image: cfdAnalysisImg
  },
  {
    id: '07',
    icon: Camera,
    title: 'Multispectral Imaging',
    subtitle: 'NDVI & Crop Health',
    description: 'Vegetation health assessment using multispectral indices for agricultural optimization.',
    capabilities: ['NDVI/NDWI Analysis', 'Crop Health Mapping', 'Stress Detection', 'Yield Prediction'],
    image: multispectralImg
  },
  {
    id: '08',
    icon: Ruler,
    title: 'Technical Drafting',
    subtitle: 'CAD & Design Documentation',
    description: 'Professional 2D/3D CAD services for irrigation systems and civil infrastructure.',
    capabilities: ['2D Drafting', '3D Modeling', 'Assembly Drawings', 'Design Documentation'],
    image: droneMappingImg
  }
];

const expertise = [
  { label: 'HEC-RAS', category: 'Hydraulics' },
  { label: 'HEC-HMS', category: 'Hydrology' },
  { label: 'ArcGIS Pro', category: 'GIS' },
  { label: 'QGIS', category: 'GIS' },
  { label: 'Google Earth Engine', category: 'Remote Sensing' },
  { label: 'Agisoft Metashape', category: 'Photogrammetry' },
  { label: 'ANSYS CFD', category: 'Simulation' },
  { label: 'SolidWorks', category: 'CAD' }
];

const PravahaTattva = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  
  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20geospatial%20consulting%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Ambika+Bhavan+Krishna+Canal+Vidyanagar+Saidapur+Karad+Maharashtra';

  return (
    <>
      <Helmet>
        <title>Pravaha Tattva Solutions | Geospatial & Hydrology Consulting</title>
        <meta 
          name="description" 
          content="Professional GIS, hydraulic modeling, and drone mapping services. Expertise in HEC-RAS, HEC-HMS, ArcGIS, and remote sensing for sustainable water resource management." 
        />
        <link rel="canonical" href="https://satwikudupi.com/pravaha-tattva" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0f1a] text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold tracking-tight">Pravaha Tattva</span>
                <span className="text-xs text-white/40 block -mt-0.5">Geospatial Solutions</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">Services</a>
              <a href="#expertise" className="text-sm text-white/60 hover:text-white transition-colors">Expertise</a>
              <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
            </nav>

            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0a0f1a] text-sm font-medium hover:bg-cyan-400 transition-all duration-300"
            >
              Get Quote
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </header>

        {/* Hero - Clean & Professional */}
        <section className="relative min-h-screen flex items-center pt-20">
          {/* Subtle grid */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Gradient orbs */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Copy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs text-white/60 uppercase tracking-widest">Available for Projects</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6 tracking-tight">
                  Precision
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Geospatial
                  </span>
                  <br />
                  Intelligence
                </h1>
                
                <p className="text-base md:text-lg text-white/50 max-w-md mb-10 leading-relaxed font-light">
                  Transforming complex hydrological data into strategic insights. 
                  From watershed analysis to flood risk mapping—engineering solutions 
                  for sustainable water resource management.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href={googleFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.4)] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <a 
                    href="#services"
                    className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/10 text-white/80 font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    Explore Services
                  </a>
                </div>
              </motion.div>
              
              {/* Right - Floating Drone */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                {/* Decorative circles */}
                <div className="absolute w-[400px] h-[400px] rounded-full border border-cyan-500/10" />
                <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-500/20" />
                <div className="absolute w-[240px] h-[240px] rounded-full border border-cyan-500/10" />
                
                {/* Floating drone image */}
                <motion.img 
                  src={droneHeroImg} 
                  alt="UAV Survey Drone"
                  className="w-[280px] md:w-[320px] drop-shadow-2xl"
                  animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </div>
          </motion.div>
        </section>

        {/* About / Background Section */}
        <section id="about" ref={aboutRef} className="py-24 md:py-32 relative bg-[#080c14]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Founder Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                  {/* Profile */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-cyan-500/30 ring-offset-4 ring-offset-[#080c14] flex-shrink-0">
                      <img 
                        src={profilePhoto} 
                        alt="Satwik Udupi - Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                        <User className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-cyan-400 font-medium">Founder</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Satwik Udupi</h3>
                      <p className="text-white/50 text-sm mt-1">Agricultural Engineer & GIS Specialist</p>
                    </div>
                  </div>
                  
                  {/* Info grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <GraduationCap className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-white/40 mb-1">Education</p>
                      <p className="text-sm text-white font-medium">B.Tech Agricultural Engg.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <MapPin className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-white/40 mb-1">Location</p>
                      <p className="text-sm text-white font-medium">Karad, Maharashtra</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <Briefcase className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-white/40 mb-1">Experience</p>
                      <p className="text-sm text-white font-medium">2+ Years</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <Award className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-xs text-white/40 mb-1">Certifications</p>
                      <p className="text-sm text-white font-medium">20+ Professional</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">Our Background</span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                  Engineering <span className="font-semibold">Sustainable Solutions</span>
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Pravaha Tattva Solutions bridges the gap between field-level agricultural challenges 
                    and cutting-edge geospatial technology. Founded by Satwik Udupi, we specialize in 
                    delivering data-driven insights for water resource management.
                  </p>
                  <p>
                    With expertise spanning hydrological modeling, GIS analysis, drone surveys, and 
                    CFD simulations, we've collaborated with institutions like Shivaji University and 
                    the Forest Department of Maharashtra on critical watershed conservation projects.
                  </p>
                  <p>
                    Our mission: Transform complex environmental data into actionable intelligence 
                    for sustainable land and water management across India.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Watershed Management', 'Flood Risk Analysis', 'Precision Agriculture'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" ref={servicesRef} className="py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-20"
            >
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">What We Deliver</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4">
                Technical <span className="font-semibold">Services</span>
              </h2>
              <p className="text-white/40 max-w-xl text-base md:text-lg font-light">
                End-to-end geospatial solutions powered by industry-standard tools and methodologies.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="relative p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden h-full">
                    {/* Background image on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                            <service.icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-xs md:text-sm text-white/40">{service.subtitle}</p>
                          </div>
                        </div>
                        <span className="text-2xl md:text-3xl font-light text-white/10 group-hover:text-cyan-500/20 transition-colors">
                          {service.id}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/50 text-sm leading-relaxed mb-4 md:mb-6 font-light">
                        {service.description}
                      </p>
                      
                      {/* Capabilities */}
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((cap) => (
                          <span 
                            key={cap}
                            className="px-3 py-1.5 rounded-full text-xs bg-white/5 text-white/50 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400/80 transition-all"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 md:py-32 bg-[#080c14]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">Technical Stack</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4">
                Tools & <span className="font-semibold">Expertise</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {expertise.map((tool, index) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm md:text-base">{tool.label}</span>
                  <span className="text-white/30 text-xs ml-2">{tool.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] to-[#0a0f1a]" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">Let's Collaborate</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
                Ready to Start Your
                <br />
                <span className="font-semibold">Next Project?</span>
              </h2>
              <p className="text-white/40 text-base md:text-lg font-light max-w-xl mx-auto mb-10 md:mb-12">
                Whether it's flood risk analysis, watershed modeling, or drone surveys—
                I'm here to deliver precision solutions tailored to your needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
                <motion.a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>
              </div>
              
              {/* Contact Details with Map Link */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <a href={`tel:${phoneNumber}`} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white/60 text-sm">+91 9834300849</span>
                </a>
                <a href="mailto:satwikudupi@gmail.com" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white/60 text-sm">satwikudupi@gmail.com</span>
                </a>
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white/60 text-sm text-center">Ambika Bhavan, Karad</span>
                  <span className="text-cyan-400 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Open in Maps <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} Pravaha Tattva Solutions
            </p>
            <Link to="/" className="text-sm text-white/40 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PravahaTattva;
