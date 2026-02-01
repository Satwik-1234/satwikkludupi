import { motion, useInView } from 'framer-motion';
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
    color: 'primary',
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
    color: 'accent',
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
    color: 'secondary',
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
    color: 'primary',
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
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* GIS grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Technology Stack</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
            Tools & <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Specialized software ecosystem for geospatial analysis and hydrological modeling
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-foreground text-background' 
                    : 'bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border'
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-background' : 'text-muted-foreground group-hover:text-foreground'}`} />
                {cat.name}
              </button>
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
          {/* Active Category Tools */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeData?.tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 hover:bg-card/80 transition-all h-full">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-background/50 border border-border/30 p-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-foreground">{tool.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center gap-12 mt-16 pt-8 border-t border-border/30"
        >
          {[
            { value: '14+', label: 'Professional Tools' },
            { value: '4', label: 'Specializations' },
            { value: '5+', label: 'Years Combined' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
