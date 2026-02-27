import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layers, Code, Droplets, Satellite, Cpu } from 'lucide-react';

// Tech stack logos
import pythonLogo from '@/assets/tech/python.png';
import javascriptLogo from '@/assets/tech/javascript.png';
import googleEarthProLogo from '@/assets/tech/google-earth-pro.png';
import googleEarthEngineLogo from '@/assets/tech/google-earth-engine.png';
import hecHmsLogo from '@/assets/tech/hec-hms.png';
import hecRasLogo from '@/assets/tech/hec-ras.png';
import agisoftLogo from '@/assets/tech/agisoft-metashape.png';
import arcgisProLogo from '@/assets/tech/arcgis-pro.png';
import arcmapLogo from '@/assets/tech/arcmap.png';
import qgisLogo from '@/assets/tech/qgis.png';
import arcgisOnlineLogo from '@/assets/tech/arcgis-online.png';
import googleColabLogo from '@/assets/tech/google-colab.png';
import ansysLogo from '@/assets/tech/ansys.png';
import rstudioLogo from '@/assets/tech/rstudio.png';

const categories = [
  {
    id: 'gis',
    name: 'GIS & Mapping',
    icon: Layers,
    accent: 'hsl(160, 60%, 45%)',
    tools: [
      { name: 'ArcGIS Pro', logo: arcgisProLogo },
      { name: 'QGIS', logo: qgisLogo },
      { name: 'ArcMap', logo: arcmapLogo },
      { name: 'ArcGIS Online', logo: arcgisOnlineLogo },
    ]
  },
  {
    id: 'hydrology',
    name: 'Hydrology',
    icon: Droplets,
    accent: 'hsl(200, 80%, 50%)',
    tools: [
      { name: 'HEC-HMS', logo: hecHmsLogo },
      { name: 'HEC-RAS', logo: hecRasLogo },
      { name: 'ANSYS', logo: ansysLogo },
    ]
  },
  {
    id: 'remote',
    name: 'Remote Sensing',
    icon: Satellite,
    accent: 'hsl(265, 60%, 55%)',
    tools: [
      { name: 'Google Earth Engine', logo: googleEarthEngineLogo },
      { name: 'Google Earth Pro', logo: googleEarthProLogo },
      { name: 'Agisoft Metashape', logo: agisoftLogo },
    ]
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: Code,
    accent: 'hsl(340, 65%, 55%)',
    tools: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'R Studio', logo: rstudioLogo },
      { name: 'Google Colab', logo: googleColabLogo },
    ]
  },
];

const allTools = categories.flatMap(c => c.tools);

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('gis');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      {/* Background pattern - subtle topographic lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technology Stack</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
            Tools & <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Industry-standard software for geospatial analysis and hydrological modeling
          </p>
        </motion.div>

        {/* Category Tabs - Pill style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechTab"
                      className="absolute inset-0 rounded-xl bg-primary shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{cat.name}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tools Grid - Animated swap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {activeData?.tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="group cursor-default"
                >
                  <motion.div
                    className="relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
                    animate={hoveredTool === tool.name ? { y: -6 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 40%, ${activeData.accent}15 0%, transparent 70%)`
                      }}
                    />

                    <div className="relative">
                      {/* Logo - white bg for visibility */}
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl bg-background p-3 flex items-center justify-center border border-border/30 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-105">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tool.name}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Infinite Marquee - All tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border/20"
        >
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8">
            Complete Toolkit — {allTools.length} professional tools
          </p>

          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-[marquee_25s_linear_infinite] gap-8">
              {[...allTools, ...allTools].map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-full border border-border/30 bg-card/30 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-background p-1.5 flex items-center justify-center border border-border/20">
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
