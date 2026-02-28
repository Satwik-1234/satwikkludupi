import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Waves, Satellite, Camera, Ruler, Code, BarChart3,
  Layers, Cloud, Zap, ArrowUpRight
} from 'lucide-react';

const skillDomains = [
  {
    id: 'hydrology',
    name: 'Hydrological Modeling',
    icon: Waves,
    description: 'Rainfall-runoff analysis, peak discharge estimation, and watershed response modeling using HEC-HMS.',
    tags: ['HEC-HMS', 'SCS-CN', 'Unit Hydrograph'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'flood',
    name: 'Flood Inundation Mapping',
    icon: Cloud,
    description: 'Floodplain delineation, depth-velocity analysis, dam break simulations, and risk zone classification.',
    tags: ['HEC-RAS', 'Dam Break', 'Floodplain'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'gis',
    name: 'GIS & Remote Sensing',
    icon: Satellite,
    description: 'Spatial analysis, LULC classification, multi-temporal change detection, and thematic cartography.',
    tags: ['ArcGIS Pro', 'QGIS', 'GEE'],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    id: 'photogrammetry',
    name: 'Photogrammetry',
    icon: Camera,
    description: 'UAV surveys, orthomosaic generation, DSM/DTM creation, volumetric analysis, and contour mapping.',
    tags: ['Agisoft', 'Drone Survey', 'DSM'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'cad',
    name: 'CAD & Design',
    icon: Ruler,
    description: '2D/3D modeling, technical drafting, assembly drawings, and engineering design documentation.',
    tags: ['SolidWorks', 'AutoCAD', '3D Modeling'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'cfd',
    name: 'CFD Simulations',
    icon: Zap,
    description: 'Computational fluid dynamics, flow analysis, thermal simulations, and design optimization.',
    tags: ['ANSYS', 'Flow Sim', 'FEA'],
    gradient: 'from-red-500 to-pink-500',
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: Code,
    description: 'Python automation, geospatial scripting, data processing pipelines, and web development.',
    tags: ['Python', 'JavaScript', 'R'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'statistics',
    name: 'Statistical Modeling',
    icon: BarChart3,
    description: 'Trend analysis, regression modeling, environmental data analytics, and predictive modeling.',
    tags: ['R Studio', 'Regression', 'Time Series'],
    gradient: 'from-indigo-500 to-blue-500',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

        {/* Skills Grid - Pellet cards like featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillDomains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Inner card */}
                <div className="relative m-[1px] rounded-2xl bg-card h-full p-5 flex flex-col">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${domain.gradient} bg-opacity-20 flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {domain.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {domain.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-muted/60 text-muted-foreground border border-border/40">
                        {tag}
                      </span>
                    ))}
                  </div>
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
