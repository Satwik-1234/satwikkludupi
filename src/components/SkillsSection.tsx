import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: "GIS & Remote Sensing",
    skills: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "Google Earth Pro", "ArcMap"]
  },
  {
    name: "Hydrological Modeling",
    skills: ["HEC-HMS", "HEC-RAS", "Floodplain Mapping", "RUSLE Modeling", "Watershed Analysis"]
  },
  {
    name: "CAD/CAE/CFD",
    skills: ["SolidWorks", "ANSYS Workbench", "FEA Analysis", "CFD Simulation", "NX CAD"]
  },
  {
    name: "Data & Analysis",
    skills: ["Spatial Analysis", "NDVI/NDWI", "Statistical Analysis", "Data Visualization", "Satellite Imagery"]
  },
  {
    name: "Photogrammetry",
    skills: ["Agisoft Metashape", "WebODM", "DSM Generation", "Orthomosaic", "Point Cloud"]
  },
  {
    name: "Programming & Tools",
    skills: ["Google Colab", "Python", "Java Libraries", "DGPS Survey", "LISEM"]
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
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
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

          {/* Skills Grid - Clean Circles */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.08 }}
                className="flex flex-col items-center"
              >
                {/* Circle with skills */}
                <div className="relative w-32 h-32 md:w-36 md:h-36 group">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
                  
                  {/* Inner circle */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm border border-border/30 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-all">
                    <span className="text-xs md:text-sm font-semibold text-center px-3 text-foreground/90 leading-tight">
                      {category.name}
                    </span>
                  </div>
                  
                  {/* Skill dots around circle */}
                  {category.skills.slice(0, 5).map((_, i) => {
                    const angle = (i * 72 - 90) * (Math.PI / 180);
                    const radius = 58;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary/60"
                        style={{
                          left: `calc(50% + ${x}px - 4px)`,
                          top: `calc(50% + ${y}px - 4px)`,
                        }}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + categoryIndex * 0.1 + i * 0.05 }}
                      />
                    );
                  })}
                </div>

                {/* Skills list below circle */}
                <div className="mt-4 text-center">
                  {category.skills.map((skill, i) => (
                    <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                      {skill}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills - Minimal Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
          >
            {additionalSkills.map((skill, i) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-muted/30 text-muted-foreground text-xs border border-border/20 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
