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
const techStack = [{
  name: 'Python',
  logo: pythonLogo,
  category: 'Programming'
}, {
  name: 'JavaScript',
  logo: javascriptLogo,
  category: 'Programming'
}, {
  name: 'ArcGIS Pro',
  logo: arcgisProLogo,
  category: 'GIS'
}, {
  name: 'QGIS',
  logo: qgisLogo,
  category: 'GIS'
}, {
  name: 'ArcMap',
  logo: arcmapLogo,
  category: 'GIS'
}, {
  name: 'Google Earth Engine',
  logo: googleEarthEngineLogo,
  category: 'Remote Sensing'
}, {
  name: 'Google Earth Pro',
  logo: googleEarthProLogo,
  category: 'Visualization'
}, {
  name: 'HEC-HMS',
  logo: hecHmsLogo,
  category: 'Hydrology'
}, {
  name: 'HEC-RAS',
  logo: hecRasLogo,
  category: 'Hydraulics'
}, {
  name: 'Agisoft Metashape',
  logo: agisoftLogo,
  category: 'Photogrammetry'
}];
const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 my-[3px]">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Tools I <span className="font-semibold">Work With</span>
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos */}
          <div className="overflow-hidden my-[6px]">
            <motion.div className="flex gap-8 py-4" animate={{
            x: [0, -1200]
          }} transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}>
              {/* First set */}
              {techStack.map((tech, index) => <motion.div key={`first-${tech.name}`} className="flex-shrink-0" whileHover={{
              scale: 1.1,
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}>
                  <div className="group relative">
                    {/* 3D Card Effect */}
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-4 flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_-15px_hsl(var(--primary)/0.3)]" style={{
                  transformStyle: 'preserve-3d',
                  perspective: '500px'
                }}>
                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-card border border-border/50 rounded-lg px-3 py-1.5 shadow-xl whitespace-nowrap">
                        <p className="text-xs font-medium text-foreground">{tech.name}</p>
                        <p className="text-[10px] text-muted-foreground">{tech.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
              
              {/* Duplicate set for seamless loop */}
              {techStack.map((tech, index) => <motion.div key={`second-${tech.name}`} className="flex-shrink-0" whileHover={{
              scale: 1.1,
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}>
                  <div className="group relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-4 flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_-15px_hsl(var(--primary)/0.3)]">
                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-card border border-border/50 rounded-lg px-3 py-1.5 shadow-xl whitespace-nowrap">
                        <p className="text-xs font-medium text-foreground">{tech.name}</p>
                        <p className="text-[10px] text-muted-foreground">{tech.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </div>

        {/* Static grid for mobile / alternative view */}
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        delay: 0.3
      }} className="mt-16 grid grid-cols-5 md:grid-cols-10 gap-4">
          {techStack.map((tech, index) => <motion.div key={`grid-${tech.name}`} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 0.1 + index * 0.05
        }} className="group relative aspect-square" whileHover={{
          scale: 1.15,
          rotateY: 10,
          rotateX: -5
        }} style={{
          transformStyle: 'preserve-3d',
          perspective: '500px'
        }}>
              <div className="w-full h-full rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-2 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/60 group-hover:shadow-lg">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default TechStackSection;