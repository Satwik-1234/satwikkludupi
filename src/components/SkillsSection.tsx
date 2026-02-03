import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Waves, Satellite, Camera, Ruler, Code, BarChart3,
  Layers, Cloud, Zap
} from 'lucide-react';

const skillDomains = [
  {
    id: 'hydrology',
    name: 'Hydrological Modeling',
    icon: Waves,
    description: 'Rainfall-runoff analysis, peak discharge estimation, and watershed response modeling',
    gradient: 'from-blue-500 to-cyan-400',
    color: 'blue'
  },
  {
    id: 'flood',
    name: 'Flood Inundation Mapping',
    icon: Cloud,
    description: 'Floodplain delineation, depth-velocity analysis, and risk zone classification',
    gradient: 'from-cyan-500 to-teal-400',
    color: 'cyan'
  },
  {
    id: 'gis',
    name: 'GIS & Remote Sensing',
    icon: Satellite,
    description: 'Spatial analysis, LULC classification, and multi-temporal change detection',
    gradient: 'from-emerald-500 to-green-400',
    color: 'emerald'
  },
  {
    id: 'photogrammetry',
    name: 'Photogrammetry',
    icon: Camera,
    description: 'UAV surveys, orthomosaic generation, DSM/DTM creation, and volumetric analysis',
    gradient: 'from-violet-500 to-purple-400',
    color: 'violet'
  },
  {
    id: 'cad',
    name: 'CAD & Design',
    icon: Ruler,
    description: '2D/3D modeling, technical drafting, and engineering documentation',
    gradient: 'from-orange-500 to-amber-400',
    color: 'orange'
  },
  {
    id: 'cfd',
    name: 'CFD Simulations',
    icon: Zap,
    description: 'Computational fluid dynamics, flow analysis, and thermal simulations',
    gradient: 'from-red-500 to-pink-400',
    color: 'red'
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: Code,
    description: 'Python automation, geospatial scripting, and data processing pipelines',
    gradient: 'from-pink-500 to-rose-400',
    color: 'pink'
  },
  {
    id: 'statistics',
    name: 'Statistical Modeling',
    icon: BarChart3,
    description: 'Trend analysis, regression modeling, and environmental data analytics',
    gradient: 'from-indigo-500 to-blue-400',
    color: 'indigo'
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Expertise Areas</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
            Specialized <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Domains</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Core competencies in water resource engineering and geospatial technologies
          </p>
        </motion.div>

        {/* Skills Grid - Hexagon-inspired layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillDomains.map((domain, index) => {
            const Icon = domain.icon;
            const isHovered = hoveredId === domain.id;
            
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onMouseEnter={() => setHoveredId(domain.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group"
              >
                <motion.div 
                  className="relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden h-full transition-all duration-300 hover:border-border"
                  animate={isHovered ? { y: -4 } : { y: 0 }}
                >
                  {/* Gradient glow on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 transition-opacity duration-500 -z-10`}
                    animate={{ opacity: isHovered ? 0.08 : 0 }}
                  />

                  {/* Icon */}
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient} p-[1px] mb-4`}
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {domain.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="flex -space-x-1">
              {skillDomains.slice(0, 4).map((domain, i) => {
                const Icon = domain.icon;
                return (
                  <div 
                    key={domain.id}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${domain.gradient} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-foreground" />
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">8</span> specialized domains
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
