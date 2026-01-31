import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Waves, Satellite, Camera, Ruler, Code, Database
} from 'lucide-react';

const skillCategories = [
  {
    name: "Hydraulic Modeling",
    icon: Waves,
    tools: ["HEC-RAS", "HEC-HMS", "SWAT"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "GIS & Remote Sensing",
    icon: Satellite,
    tools: ["ArcGIS Pro", "QGIS", "Google Earth Engine"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    name: "Photogrammetry",
    icon: Camera,
    tools: ["Agisoft Metashape", "WebODM", "Pix4D"],
    color: "from-violet-500 to-purple-400"
  },
  {
    name: "CAD & CFD",
    icon: Ruler,
    tools: ["SolidWorks", "ANSYS CFD"],
    color: "from-orange-500 to-amber-400"
  },
  {
    name: "Programming",
    icon: Code,
    tools: ["Python", "JavaScript", "R"],
    color: "from-pink-500 to-rose-400"
  },
  {
    name: "Data Analysis",
    icon: Database,
    tools: ["Google Colab", "Jupyter", "Pandas"],
    color: "from-indigo-500 to-blue-400"
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            What I <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Specialize In</span>
          </h2>
        </motion.div>

        {/* Skills Grid - Clean Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div 
                  className="relative p-5 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden h-full transition-all duration-300"
                  whileHover={{ 
                    borderColor: 'hsl(var(--primary) / 0.3)',
                    y: -4
                  }}
                >
                  {/* Gradient glow on hover */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-0 blur-xl transition-opacity duration-500 -z-10`}
                    animate={{ opacity: isHovered ? 0.15 : 0 }}
                  />

                  {/* Header with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-[1px]`}
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </motion.div>
                    <h3 className="text-base font-medium text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: index * 0.08 + toolIndex * 0.04,
                        }}
                        className="px-3 py-1.5 text-xs rounded-full border border-border/40 bg-background/60 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Code Snippet - Professional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <div className="rounded-xl border border-border/30 bg-card/60 backdrop-blur-sm overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/20 bg-card/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="text-xs text-muted-foreground/60 ml-2 font-mono">profile.py</span>
            </div>
            
            {/* Code content */}
            <div className="p-4 font-mono text-sm">
              <div className="text-muted-foreground/80">
                <span className="text-pink-400">class</span>{' '}
                <span className="text-yellow-400">HydrologistGIS</span>
                <span className="text-foreground/60">:</span>
              </div>
              <div className="pl-4 mt-1 text-muted-foreground/80">
                <span className="text-foreground/50">focus</span>
                <span className="text-foreground/40"> = </span>
                <span className="text-green-400">"Water + GIS + Data"</span>
              </div>
              <div className="pl-4 mt-1 text-muted-foreground/80">
                <span className="text-foreground/50">status</span>
                <span className="text-foreground/40"> = </span>
                <span className="text-green-400">"Available"</span>
                <motion.span 
                  className="inline-block w-1.5 h-4 bg-primary/70 ml-1 align-middle"
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
