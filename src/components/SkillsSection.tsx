import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: "GIS & Remote Sensing",
    skills: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "Google Earth Pro", "ArcMap"],
    color: "from-primary to-primary/60"
  },
  {
    name: "Hydrological Modeling",
    skills: ["HEC-HMS", "HEC-RAS", "Floodplain Mapping", "RUSLE Modeling", "Watershed Analysis"],
    color: "from-secondary to-secondary/60"
  },
  {
    name: "CAD/CAE/CFD",
    skills: ["SolidWorks", "ANSYS Workbench", "FEA Analysis", "CFD Simulation", "NX CAD"],
    color: "from-accent to-accent/60"
  },
  {
    name: "Data & Analysis",
    skills: ["Spatial Analysis", "NDVI/NDWI", "Statistical Analysis", "Data Visualization", "Satellite Imagery"],
    color: "from-primary to-secondary"
  },
  {
    name: "Photogrammetry",
    skills: ["Agisoft Metashape", "WebODM", "DSM Generation", "Orthomosaic", "Point Cloud"],
    color: "from-secondary to-accent"
  },
  {
    name: "Programming & Tools",
    skills: ["Google Colab", "Python", "Java Libraries", "DGPS Survey", "LISEM"],
    color: "from-accent to-primary"
  }
];

const additionalSkills = [
  "SRTM DEM", "Sentinel-2", "Landsat", "CHIRPS Data",
  "Camera Trap Analysis", "Irrigation Systems", "Drip & Sprinkler Design"
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Skills Grid - Card Based */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
                className="group glass-card-light p-6 hover:border-primary/40 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="font-display font-bold text-white text-lg">
                    {category.name}
                  </h3>
                </div>

                {/* Skills as Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + categoryIndex * 0.1 + i * 0.05 }}
                      className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className={`mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${category.color} rounded-full`} />
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-white/60 text-sm mb-4 font-medium">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {additionalSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 text-white/70 text-sm hover:text-white hover:border-primary/30 transition-all"
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
