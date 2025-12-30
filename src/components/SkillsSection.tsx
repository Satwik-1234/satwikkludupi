import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Map, Waves, Cog, BarChart3, Camera, Code 
} from 'lucide-react';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

interface SkillCategory {
  name: string;
  icon: typeof Map;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "GIS & Remote Sensing",
    icon: Map,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "ArcGIS Pro/Desktop", level: "Expert" },
      { name: "QGIS", level: "Expert" },
      { name: "Google Earth Engine", level: "Advanced" },
      { name: "Google Earth Pro", level: "Expert" },
      { name: "ArcMap", level: "Expert" },
    ]
  },
  {
    name: "Hydrological Modeling",
    icon: Waves,
    color: "from-teal-500 to-emerald-500",
    skills: [
      { name: "HEC-HMS", level: "Expert" },
      { name: "HEC-RAS", level: "Expert" },
      { name: "Floodplain Mapping", level: "Advanced" },
      { name: "RUSLE Modeling", level: "Advanced" },
      { name: "Watershed Analysis", level: "Expert" },
    ]
  },
  {
    name: "CAD/CAE/CFD",
    icon: Cog,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "SolidWorks", level: "Advanced" },
      { name: "ANSYS Workbench", level: "Advanced" },
      { name: "FEA Analysis", level: "Proficient" },
      { name: "CFD Simulation", level: "Proficient" },
      { name: "NX CAD", level: "Proficient" },
    ]
  },
  {
    name: "Data & Analysis",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Spatial Analysis", level: "Expert" },
      { name: "NDVI/NDWI Analysis", level: "Expert" },
      { name: "Statistical Analysis", level: "Advanced" },
      { name: "Data Visualization", level: "Advanced" },
      { name: "Satellite Imagery", level: "Expert" },
    ]
  },
  {
    name: "Photogrammetry",
    icon: Camera,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Agisoft Metashape", level: "Advanced" },
      { name: "WebODM", level: "Proficient" },
      { name: "DSM Generation", level: "Advanced" },
      { name: "Orthomosaic Creation", level: "Advanced" },
      { name: "Point Cloud Processing", level: "Proficient" },
    ]
  },
  {
    name: "Programming & Tools",
    icon: Code,
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Google Colab", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "Java Libraries", level: "Proficient" },
      { name: "DGPS Survey", level: "Expert" },
      { name: "LISEM", level: "Proficient" },
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert': return 'bg-primary text-primary-foreground';
    case 'Advanced': return 'bg-secondary text-secondary-foreground';
    case 'Proficient': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Skills Grid - Clean 3x2 layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.08 }}
                className="glass-card p-6 hover:border-primary/30 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                    >
                      <span className="text-sm text-foreground/90">{skill.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills - Compact Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <h4 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
              Also Proficient In
            </h4>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[
                "SRTM DEM", "Sentinel-2", "Landsat", "CHIRPS Data",
                "Camera Trap Analysis", "Tractor Maintenance", "Irrigation Systems",
                "Drip & Sprinkler Design", "Lift Irrigation"
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                  className="px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
