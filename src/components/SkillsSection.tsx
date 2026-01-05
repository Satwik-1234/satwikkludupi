import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Map, Droplets, Cog, Database, Camera, Code,
  Globe, Layers, Mountain, Cpu
} from 'lucide-react';
import hydrologyBg from '@/assets/hydrology-background.jpg';

const skillCategories = [
  {
    name: "GIS & Remote Sensing",
    icon: Map,
    color: "from-blue-500 to-cyan-500",
    skills: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "Google Earth Pro", "ArcMap"]
  },
  {
    name: "Hydrological Modeling",
    icon: Droplets,
    color: "from-cyan-500 to-teal-500",
    skills: ["HEC-HMS", "HEC-RAS", "Floodplain Mapping", "RUSLE Modeling", "Watershed Analysis"]
  },
  {
    name: "CAD/CAE/CFD",
    icon: Cog,
    color: "from-teal-500 to-green-500",
    skills: ["SolidWorks", "ANSYS Workbench", "FEA Analysis", "CFD Simulation", "NX CAD"]
  },
  {
    name: "Data & Analysis",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["Spatial Analysis", "NDVI/NDWI", "Statistical Analysis", "Data Visualization", "Satellite Imagery"]
  },
  {
    name: "Photogrammetry",
    icon: Camera,
    color: "from-emerald-500 to-teal-500",
    skills: ["Agisoft Metashape", "WebODM", "DSM Generation", "Orthomosaic", "Point Cloud"]
  },
  {
    name: "Programming & Tools",
    icon: Code,
    color: "from-teal-500 to-blue-500",
    skills: ["Google Colab", "Python", "Java Libraries", "DGPS Survey", "LISEM"]
  }
];

const dataTools = [
  { icon: Globe, name: "SRTM DEM", desc: "Elevation data" },
  { icon: Layers, name: "Sentinel-2", desc: "Multispectral imagery" },
  { icon: Mountain, name: "Landsat", desc: "Historical data" },
  { icon: Cpu, name: "CHIRPS", desc: "Rainfall analysis" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hydrologyBg})` }}
      />
      <div className="absolute inset-0 bg-background/92 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4"
            >
              Technical Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Skills & <span className="gradient-text">Proficiency</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.08 }}
                className="group"
              >
                <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-6 h-full hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + categoryIndex * 0.05 + i * 0.03 }}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data & Satellite Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-8">
              <h3 className="text-center font-display font-bold text-xl mb-6 text-foreground">
                Satellite Data & Remote Sensing Tools
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dataTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="text-center p-4 rounded-xl bg-card/50 border border-border/20 hover:border-primary/30 transition-all group"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;