import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const techStack = [
  { name: 'Python', logo: pythonLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'R Studio', logo: rstudioLogo },
  { name: 'Google Colab', logo: googleColabLogo },
  { name: 'ArcGIS Pro', logo: arcgisProLogo },
  { name: 'QGIS', logo: qgisLogo },
  { name: 'ArcMap', logo: arcmapLogo },
  { name: 'ArcGIS Online', logo: arcgisOnlineLogo },
  { name: 'Google Earth Engine', logo: googleEarthEngineLogo },
  { name: 'Google Earth Pro', logo: googleEarthProLogo },
  { name: 'HEC-HMS', logo: hecHmsLogo },
  { name: 'HEC-RAS', logo: hecRasLogo },
  { name: 'Agisoft Metashape', logo: agisoftLogo },
  { name: 'ANSYS', logo: ansysLogo },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header - Terminal style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-card/50 border border-border/30 mb-4">
            <span className="text-xs text-muted-foreground font-mono">$ cat tech-stack.json</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            My <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Clean Grid Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 md:gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="aspect-square rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 p-3 flex items-center justify-center hover:border-primary/40 hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <div className="bg-card border border-border/50 rounded-md px-2 py-1 shadow-lg whitespace-nowrap">
                  <span className="text-[10px] font-mono text-foreground">{tech.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated line below */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default TechStackSection;
