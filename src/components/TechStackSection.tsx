import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
  { name: 'Python', logo: pythonLogo, category: 'Programming' },
  { name: 'JavaScript', logo: javascriptLogo, category: 'Programming' },
  { name: 'R Studio', logo: rstudioLogo, category: 'Programming' },
  { name: 'Google Colab', logo: googleColabLogo, category: 'Development' },
  { name: 'ArcGIS Pro', logo: arcgisProLogo, category: 'GIS' },
  { name: 'QGIS', logo: qgisLogo, category: 'GIS' },
  { name: 'ArcMap', logo: arcmapLogo, category: 'GIS' },
  { name: 'ArcGIS Online', logo: arcgisOnlineLogo, category: 'Cloud GIS' },
  { name: 'Google Earth Engine', logo: googleEarthEngineLogo, category: 'Remote Sensing' },
  { name: 'Google Earth Pro', logo: googleEarthProLogo, category: 'Visualization' },
  { name: 'HEC-HMS', logo: hecHmsLogo, category: 'Hydrology' },
  { name: 'HEC-RAS', logo: hecRasLogo, category: 'Hydraulics' },
  { name: 'Agisoft Metashape', logo: agisoftLogo, category: 'Photogrammetry' },
  { name: 'ANSYS', logo: ansysLogo, category: 'CFD Simulation' },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Double the array for seamless loop
  const doubledStack = [...techStack, ...techStack];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Technology Stack
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Tools I <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Master</span>
          </h2>
        </motion.div>

        {/* Floating Orbit Animation */}
        <div className="relative h-[400px] flex items-center justify-center mb-8">
          {/* Central glow */}
          <div className="absolute w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          
          {/* Orbiting logos */}
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            {techStack.map((tech, index) => {
              const angle = (index * 360) / techStack.length;
              const radius = 140;
              const radiusMd = 175;
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? {
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 360],
                  } : {}}
                  transition={{
                    opacity: { delay: index * 0.05, duration: 0.3 },
                    scale: { delay: index * 0.05, duration: 0.5, type: "spring" },
                    rotate: {
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.1
                    }
                  }}
                  style={{
                    transformOrigin: '0 0',
                  }}
                >
                  <motion.div
                    className="group relative -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180 + (Date.now() / 60000) * 2 * Math.PI) * (window.innerWidth >= 768 ? radiusMd : radius) - 28,
                      y: Math.sin((angle * Math.PI) / 180 + (Date.now() / 60000) * 2 * Math.PI) * (window.innerWidth >= 768 ? radiusMd : radius) - 28,
                    }}
                    whileHover={{ scale: 1.3, zIndex: 50 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`
                      w-14 h-14 md:w-16 md:h-16 rounded-2xl 
                      bg-card/90 backdrop-blur-md border border-border/40
                      flex items-center justify-center p-2.5
                      transition-all duration-300
                      group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]
                      ${hoveredIndex === index ? 'ring-2 ring-primary/30' : ''}
                    `}>
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pointer-events-none z-50"
                    >
                      <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                        <p className="text-xs font-medium text-foreground">{tech.name}</p>
                        <p className="text-[10px] text-primary/80">{tech.category}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {techStack.length}+
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Horizontal Infinite Scroll */}
        <div className="relative mt-8">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {doubledStack.map((tech, index) => (
                <motion.div
                  key={`scroll-${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/40 hover:bg-card/80 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-background/50 p-1 flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Programming', 'GIS', 'Hydrology', 'Remote Sensing', 'CFD'].map((cat, i) => (
            <motion.span
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-muted-foreground border border-border/30 hover:border-primary/40 hover:text-foreground transition-all cursor-default"
            >
              {cat}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
