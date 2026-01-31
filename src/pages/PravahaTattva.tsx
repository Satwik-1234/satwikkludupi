import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { 
  ArrowLeft, Waves, Mountain, 
  Plane, Camera, Ruler, Phone, Mail, MessageCircle, ExternalLink,
  ArrowRight, ArrowUpRight, Droplets, Layers, Satellite, FlaskConical,
  Terminal, ChevronRight, Github, Linkedin, ArrowUp
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
    description: 'Vegetation health assessment using multispectral indices for precision agriculture.',
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
  { label: 'SolidWorks', category: 'CAD' },
  { label: 'Python', category: 'Programming' },
  { label: 'JavaScript', category: 'Programming' }
];

const PravahaTattva = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20geospatial%20consulting%20services`;
  const googleFormUrl = 'https://forms.gle/SCyQeFigrgsPft9D9';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {/* Terminal-style Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-sm text-white/90 font-medium">pravaha-tattva</span>
                <ChevronRight className="w-3 h-3 text-white/40" />
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-1">
              <a href="#services" className="px-3 py-1.5 text-xs font-mono text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                .services()
              </a>
              <a href="#expertise" className="px-3 py-1.5 text-xs font-mono text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                .expertise()
              </a>
              <a href="#contact" className="px-3 py-1.5 text-xs font-mono text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                .contact()
              </a>
            </nav>

            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-[#0a0f1a] text-xs font-mono font-medium hover:bg-cyan-400 transition-all duration-300"
            >
              get_quote()
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </header>

        {/* Hero - Terminal Style */}
        <section className="relative min-h-screen flex items-center pt-16">
          {/* Grid background */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Gradient orb */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
          
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Terminal badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs text-white/50 font-mono">status: "accepting_projects"</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 tracking-tight">
                  <span className="text-white/50 font-mono text-lg block mb-2">{"// Geospatial Solutions"}</span>
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Pravaha Tattva
                  </span>
                  <motion.span 
                    className="inline-block w-0.5 h-10 bg-cyan-400 ml-2 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </h1>
                
                {/* Terminal-style description */}
                <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4 mb-8 font-mono text-sm">
                  <div className="text-white/50">
                    <span className="text-cyan-400">const</span> services = {'{'} 
                  </div>
                  <div className="pl-4 text-white/70">
                    <span className="text-white/50">focus:</span> <span className="text-green-400">"Water Resources & GIS"</span>,
                  </div>
                  <div className="pl-4 text-white/70">
                    <span className="text-white/50">approach:</span> <span className="text-green-400">"Precision Engineering"</span>
                  </div>
                  <div className="text-white/50">{'}'}</div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={googleFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-[#0a0f1a] font-mono text-sm font-medium hover:bg-cyan-400 transition-all"
                  >
                    start_project()
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white/80 font-mono text-sm hover:bg-white/5 transition-all"
                  >
                    view_services()
                  </a>
                </div>
              </motion.div>
              
              {/* Right - Drone visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="absolute w-[400px] h-[400px] rounded-full border border-cyan-500/10" />
                <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-500/20" />
                
                <motion.img 
                  src={droneHeroImg} 
                  alt="UAV Survey Drone"
                  className="relative z-10 w-[300px] drop-shadow-2xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" ref={servicesRef} className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-4">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-white/50 font-mono">$ ls services/</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
                Technical <span className="font-semibold text-cyan-400">Services</span>
              </h2>
              <p className="text-white/40 max-w-xl text-sm font-light">
                End-to-end geospatial solutions powered by industry-standard tools.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300 overflow-hidden">
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
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                            <service.icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-medium text-white group-hover:text-cyan-400 transition-colors font-mono">
                              {service.title}
                            </h3>
                            <p className="text-xs text-white/40">{service.subtitle}</p>
                          </div>
                        </div>
                        <span className="text-2xl font-light text-white/10 group-hover:text-cyan-500/20 transition-colors font-mono">
                          {service.id}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/50 text-sm leading-relaxed mb-4 font-light">
                        {service.description}
                      </p>
                      
                      {/* Capabilities */}
                      <div className="flex flex-wrap gap-1.5">
                        {service.capabilities.map((cap) => (
                          <span 
                            key={cap}
                            className="px-2 py-1 rounded-md text-[10px] bg-white/5 text-white/50 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400/80 transition-all font-mono"
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

        {/* Expertise */}
        <section id="expertise" className="py-24 bg-[#080c14]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-4">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-white/50 font-mono">$ cat tech-stack.json</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                Tools & <span className="font-semibold text-cyan-400">Expertise</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {expertise.map((tool, index) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm font-mono">{tool.label}</span>
                  <span className="text-white/30 text-xs ml-2 font-mono">{tool.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Terminal Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-white/40 ml-3 font-mono">contact.sh</span>
                </div>
                
                <div className="p-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    Ready to <span className="font-semibold text-cyan-400">Collaborate?</span>
                  </h2>
                  <p className="text-white/40 text-sm max-w-md mx-auto mb-8 font-light">
                    Whether it's flood analysis, GIS mapping, or drone surveys—precision solutions tailored to your needs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <a 
                      href={googleFormUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-[#0a0f1a] font-mono text-sm font-medium hover:bg-cyan-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      request_quote()
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white/80 font-mono text-sm hover:bg-white/5 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      whatsapp()
                    </a>
                  </div>
                  
                  {/* Contact links */}
                  <div className="flex flex-wrap justify-center gap-6 text-white/40 text-xs font-mono">
                    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                      <Phone className="w-3 h-3" />
                      +91 9834300849
                    </a>
                    <a href="mailto:satwikudupi@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                      <Mail className="w-3 h-3" />
                      satwikudupi@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terminal-style Footer */}
        <footer className="border-t border-white/5 bg-[#080c14]">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-xs text-white/40 ml-3 font-mono">footer.sh</span>
                </div>
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan-400 transition-colors font-mono"
                >
                  <ArrowUp className="w-3 h-3" />
                  scroll_top()
                </button>
              </div>
              
              <div className="p-5 font-mono text-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span className="text-xs text-cyan-400">pravaha-tattva</span>
                    </div>
                    <span className="text-white/30 text-xs">© {new Date().getFullYear()}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/satwik-udupi-37304a231"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com/Satwik-1234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <Link 
                      to="/" 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      back_to_portfolio()
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PravahaTattva;
