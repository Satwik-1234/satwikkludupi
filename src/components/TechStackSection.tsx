import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layers, Code, Droplets, Satellite, Cpu, ChevronRight } from 'lucide-react';

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
    gradient: 'from-emerald-500 to-teal-400',
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
    gradient: 'from-blue-500 to-cyan-400',
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
    gradient: 'from-violet-500 to-purple-400',
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
    gradient: 'from-pink-500 to-rose-400',
    tools: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'R Studio', logo: rstudioLogo },
      { name: 'Google Colab', logo: googleColabLogo },
    ]
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('gis');

  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/5 via-transparent to-card/5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  group flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-foreground text-background shadow-lg' 
                    : 'bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-card/80'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-background' : ''}`} />
                {cat.name}
                {isActive && <ChevronRight className="w-4 h-4 text-background/60" />}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tools Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Active Category Tools - Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {activeData?.tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 text-center hover:border-border hover:bg-card/70 transition-all duration-300 h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${activeData.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  <div className="relative">
                    {/* Logo container with proper background for visibility */}
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-2xl bg-white/90 dark:bg-white/10 p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Tools Grid - Scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-foreground mb-2">Complete Toolkit</h3>
            <p className="text-sm text-muted-foreground">All 14+ professional tools at a glance</p>
          </div>
          
          {/* Infinite scroll marquee */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-[scroll_30s_linear_infinite] gap-6">
              {[...categories.flatMap(c => c.tools), ...categories.flatMap(c => c.tools)].map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/90 dark:bg-white/10 p-3 flex items-center justify-center shadow-sm border border-border/30"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    title={tool.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Custom animation for scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
