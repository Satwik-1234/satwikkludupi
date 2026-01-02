import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { 
  ArrowLeft, Waves, Mountain, Map, FileSpreadsheet, Cog, 
  Plane, Camera, Scan, Phone, Mail, MessageCircle, ExternalLink,
  CheckCircle, Github
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import droneImage from '@/assets/drone-mapping.png';

// Service images
import floodplainImg from '@/assets/services/floodplain-mapping.png';
import rainfallRunoffImg from '@/assets/services/rainfall-runoff.png';
import soilErosionImg from '@/assets/services/soil-erosion.png';
import gisAnalysisImg from '@/assets/services/gis-analysis.png';
import cfdAnalysisImg from '@/assets/services/cfd-analysis.png';
import dronePhotogrammetryImg from '@/assets/services/drone-photogrammetry.png';
import droneMappingImg from '@/assets/services/drone-mapping.png';
import multispectralImg from '@/assets/services/multispectral.png';

// Lazy load 3D drone scene
const DroneScene = lazy(() => import('@/components/DroneScene'));

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
  'End-to-end project delivery from data collection to final deliverables',
  'Expertise in industry-standard tools: HEC-RAS, HEC-HMS, ArcGIS Pro, QGIS',
  'Quick turnaround with 24-hour response guarantee',
  'Affordable rates with transparent, upfront pricing',
  'Academic foundation combined with practical consulting experience',
  'Customized solutions tailored to your specific project needs'
];

const PravahaTattva = () => {
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

      <div className="min-h-screen bg-background">
        {/* Hero Section with Drone Background */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${droneImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          
          {/* Animated Drone */}
          <motion.div
            className="absolute top-20 z-20"
            animate={{ x: ['-10%', '110%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-16 h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-lg relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-slate-800 rounded-b-lg">
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-60"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                <div className="absolute -top-1 left-2 flex gap-1">
                  {['red', 'green', 'blue'].map((color, i) => (
                    <motion.div
                      key={color}
                      className={`w-1.5 h-1.5 rounded-full bg-${color}-500`}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <motion.div
                  className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-purple-500/80"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <div className="absolute -top-1 -left-4 w-8 h-1 bg-slate-600 rounded">
                <motion.div
                  className="absolute -top-0.5 left-0 w-3 h-3 border-2 border-slate-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="absolute -top-1 -right-4 w-8 h-1 bg-slate-600 rounded">
                <motion.div
                  className="absolute -top-0.5 right-0 w-3 h-3 border-2 border-slate-400 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="text-[10px] text-cyan-400/80 font-mono">LiDAR + Multispectral</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="container mx-auto px-4 relative z-10 pt-16">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="ghost"
                asChild
                className="mb-8 hover:bg-card/50"
              >
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
              >
                <span className="gradient-text">Pravaha Tattva</span>
                <span className="block text-2xl md:text-3xl mt-3 text-foreground/90">Solutions</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mb-2"
              >
                Professional GIS & Hydrology Consulting
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-primary font-medium"
              >
                Founded by Satwik Udupi
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-foreground/80 mt-8 max-w-2xl mx-auto leading-relaxed"
              >
                Advanced geospatial solutions powered by cutting-edge drone technology, 
                LiDAR mapping, and multispectral imaging for precision agriculture, 
                watershed management, and environmental monitoring.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button
                  size="lg"
                  className="bg-gradient-accent text-primary-foreground font-semibold"
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
                  className="border-border/50 bg-card/50 backdrop-blur"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section with 3D Drone */}
        <section className="py-20 relative overflow-hidden">
          {/* 3D Drone Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          </div>
          
          {/* Interactive 3D Drone */}
          <div className="container mx-auto px-4 mb-16">
            <Suspense fallback={
              <div className="h-[420px] rounded-2xl bg-gradient-to-b from-[#0b1c2d] to-[#020b14] flex items-center justify-center">
                <div className="text-cyan-400/50 animate-pulse">Loading 3D Drone...</div>
              </div>
            }>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-[420px] rounded-2xl bg-gradient-to-b from-[#0b1c2d] to-[#020b14] overflow-hidden border border-cyan-500/20"
              >
                <DroneScene className="w-full h-full cursor-pointer" />
              </motion.div>
            </Suspense>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Interactive 3D Drone Model — Hover to interact
            </p>
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive geospatial and engineering solutions tailored to your project needs
              </p>
            </motion.div>

            {/* Large Service Cards with Background Images */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content - Centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-foreground/80 mb-6 max-w-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="px-3 py-1 text-xs bg-card/80 backdrop-blur border border-border/50 rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
              <div className="section-divider" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Start Your <span className="gradient-text">Project?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Get in touch for a free consultation. I'll respond within 24 hours with a detailed proposal.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-accent text-primary-foreground font-semibold"
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

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9834300849
                </a>
                <a href="mailto:satwikudupi@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  satwikudupi@gmail.com
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
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
