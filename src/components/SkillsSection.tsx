import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Waves, Mountain, Map, Satellite, Camera, FlaskConical, 
  Code, Database, Layers, Ruler
} from 'lucide-react';

const skillCategories = [
  {
    name: "Hydraulic & Hydrological Modeling",
    icon: Waves,
    tools: ["HEC-RAS", "HEC-HMS", "SWAT", "LISEM"],
    description: "Flood simulation, rainfall-runoff analysis, and water resource assessment",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "GIS & Remote Sensing",
    icon: Satellite,
    tools: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "ERDAS Imagine"],
    description: "Spatial analysis, satellite imagery processing, and thematic mapping",
    color: "from-emerald-500 to-teal-400"
  },
  {
    name: "Photogrammetry & Surveying",
    icon: Camera,
    tools: ["Agisoft Metashape", "WebODM", "Pix4D", "DGPS"],
    description: "UAV data processing, orthomosaic generation, and terrain modeling",
    color: "from-violet-500 to-purple-400"
  },
  {
    name: "CAD & Simulation",
    icon: Ruler,
    tools: ["SolidWorks", "ANSYS CFD", "NX CAD"],
    description: "3D modeling and computational fluid dynamics",
    color: "from-orange-500 to-amber-400"
  },
  {
    name: "Programming & Scripting",
    icon: Code,
    tools: ["Python", "JavaScript", "Google Colab", "Jupyter"],
    description: "Geospatial scripting, automation, and analytical workflows",
    color: "from-pink-500 to-rose-400"
  },
  {
    name: "Satellite Data & Analysis",
    icon: Database,
    tools: ["Sentinel-2", "Landsat", "SRTM DEM", "CHIRPS"],
    description: "Multi-temporal analysis and environmental monitoring",
    color: "from-indigo-500 to-blue-400"
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Capabilities</span>
            <motion.div 
              className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
            Technical <span className="font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl">
            Industry-standard tools and methodologies for comprehensive geospatial and hydrological analysis.
          </p>
        </motion.div>

        {/* Skills Grid - Hexagonal-inspired layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card */}
                <motion.div 
                  className="relative p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 h-full"
                  whileHover={{ 
                    borderColor: 'hsl(var(--primary) / 0.4)',
                    backgroundColor: 'hsl(var(--card) / 0.8)',
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Animated border glow */}
                  <motion.div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 -z-10`}
                  />

                  {/* Icon with floating animation */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-[1px] mb-4`}
                    animate={isHovered ? { y: -4, rotate: 5 } : { y: 0, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </motion.div>
                  
                  {/* Category name with underline effect */}
                  <h3 className="text-lg font-medium text-foreground mb-2 relative inline-block">
                    {category.name}
                    <motion.span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${category.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: isHovered ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 font-light leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Tools with stagger animation */}
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: index * 0.1 + toolIndex * 0.05,
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: 'hsl(var(--primary) / 0.15)',
                        }}
                        className="px-3 py-1.5 text-xs rounded-full border border-border/50 bg-background/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>

                  {/* Corner decoration */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-5 rounded-bl-full`}
                    animate={isHovered ? { scale: 1.5, opacity: 0.1 } : { scale: 1, opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ 
                          x: 100 + i * 30, 
                          y: 100,
                          opacity: 0 
                        }}
                        animate={{ 
                          y: [100, 20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ 
                          duration: 1,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Terminal-style code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-border/30 bg-card/80 backdrop-blur-sm overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">expertise.py</span>
            </div>
            
            {/* Code content */}
            <div className="p-4 font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-pink-400">class</span>{' '}
                <span className="text-yellow-400">HydrologistGIS</span>
                <span className="text-foreground">:</span>
              </div>
              <div className="pl-4 mt-1">
                <span className="text-muted-foreground">skills</span>
                <span className="text-foreground"> = </span>
                <span className="text-cyan-400">[</span>
                <span className="text-green-400">"GIS"</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">"Hydrology"</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">"Remote Sensing"</span>
                <span className="text-cyan-400">]</span>
              </div>
              <div className="pl-4 mt-1">
                <span className="text-muted-foreground">status</span>
                <span className="text-foreground"> = </span>
                <span className="text-green-400">"Available for projects"</span>
                <motion.span 
                  className="inline-block w-2 h-4 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
