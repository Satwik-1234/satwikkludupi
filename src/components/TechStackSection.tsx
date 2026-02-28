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
    tools: [
      { name: 'HEC-HMS', logo: hecHmsLogo },
      { name: 'HEC-RAS', logo: hecRasLogo },
      { name: 'ANSYS Fluent', logo: ansysLogo },
    ]
  },
  {
    id: 'remote',
    name: 'Remote Sensing',
    icon: Satellite,
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
    <section className="py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
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

        {/* Category Tabs */}
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

        {/* Tools Grid - Large visible cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {activeData?.tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08, type: "spring", bounce: 0.3 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group cursor-default"
                >
                  <div className="relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 md:p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      {/* Logo container - LARGE with white bg for visibility */}
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 rounded-2xl bg-background p-4 flex items-center justify-center border border-border/40 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tool.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All tools summary strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {categories.flatMap(c => c.tools).map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-background p-1 flex items-center justify-center border border-border/30">
                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
