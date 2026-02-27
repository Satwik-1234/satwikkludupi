import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Waves, Satellite, Camera, Ruler, Code, BarChart3,
  Layers, Cloud, Zap, ChevronRight
} from 'lucide-react';

const skillDomains = [
  {
    id: 'hydrology',
    name: 'Hydrological Modeling',
    icon: Waves,
    description: 'Rainfall-runoff analysis, peak discharge estimation, and watershed response modeling using HEC-HMS.',
    tags: ['HEC-HMS', 'SCS-CN', 'Unit Hydrograph'],
    color: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    id: 'flood',
    name: 'Flood Inundation Mapping',
    icon: Cloud,
    description: 'Floodplain delineation, depth-velocity analysis, dam break simulations, and risk zone classification.',
    tags: ['HEC-RAS', 'Dam Break', 'Floodplain'],
    color: 'from-cyan-500/20 to-teal-500/20',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'gis',
    name: 'GIS & Remote Sensing',
    icon: Satellite,
    description: 'Spatial analysis, LULC classification, multi-temporal change detection, and thematic cartography.',
    tags: ['ArcGIS Pro', 'QGIS', 'GEE'],
    color: 'from-emerald-500/20 to-green-500/20',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'photogrammetry',
    name: 'Photogrammetry',
    icon: Camera,
    description: 'UAV surveys, orthomosaic generation, DSM/DTM creation, volumetric analysis, and contour mapping.',
    tags: ['Agisoft', 'Drone Survey', 'DSM'],
    color: 'from-violet-500/20 to-purple-500/20',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    id: 'cad',
    name: 'CAD & Design',
    icon: Ruler,
    description: '2D/3D modeling, technical drafting, assembly drawings, and engineering design documentation.',
    tags: ['SolidWorks', 'AutoCAD', '3D Modeling'],
    color: 'from-orange-500/20 to-amber-500/20',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    id: 'cfd',
    name: 'CFD Simulations',
    icon: Zap,
    description: 'Computational fluid dynamics, flow analysis, thermal simulations, and design optimization.',
    tags: ['ANSYS', 'Flow Sim', 'FEA'],
    color: 'from-red-500/20 to-pink-500/20',
    iconBg: 'bg-red-500/10 border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: Code,
    description: 'Python automation, geospatial scripting, data processing pipelines, and web development.',
    tags: ['Python', 'JavaScript', 'R'],
    color: 'from-pink-500/20 to-rose-500/20',
    iconBg: 'bg-pink-500/10 border-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    id: 'statistics',
    name: 'Statistical Modeling',
    icon: BarChart3,
    description: 'Trend analysis, regression modeling, environmental data analytics, and predictive modeling.',
    tags: ['R Studio', 'Regression', 'Time Series'],
    color: 'from-indigo-500/20 to-blue-500/20',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    iconColor: 'text-indigo-400',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
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

        {/* Skills — Expandable cards like Projects */}
        <div className="space-y-3">
          {skillDomains.map((domain, index) => {
            const Icon = domain.icon;
            const isExpanded = expandedId === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className={`relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 ${
                    isExpanded ? 'border-primary/40' : ''
                  }`}
                >
                  {/* Gradient accent bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Header row */}
                  <div
                    className="relative p-5 md:p-6 cursor-pointer flex items-center justify-between gap-4"
                    onClick={() => setExpandedId(isExpanded ? null : domain.id)}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${domain.iconBg} border flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${domain.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {domain.name}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {domain.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-foreground/5 text-muted-foreground border border-border/30">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-foreground/5 border border-border/30 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-90' : ''
                    }`}>
                      <ChevronRight className="w-4 h-4 text-foreground/60" />
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative border-t border-border/20"
                      >
                        <div className="p-5 md:p-6">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {domain.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
