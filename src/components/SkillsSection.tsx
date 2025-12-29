import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "GIS & Remote Sensing",
    skills: [
      { name: "ArcGIS Desktop/Pro", level: 90 },
      { name: "QGIS", level: 85 },
      { name: "Google Earth Engine", level: 80 },
      { name: "Google Earth Pro", level: 90 },
      { name: "ArcMap", level: 85 },
    ]
  },
  {
    name: "Hydrological Modeling",
    skills: [
      { name: "HEC-HMS", level: 90 },
      { name: "HEC-RAS", level: 85 },
      { name: "Floodplain Mapping", level: 85 },
      { name: "RUSLE Modeling", level: 80 },
      { name: "Watershed Analysis", level: 85 },
    ]
  },
  {
    name: "CAD/CAE/CFD",
    skills: [
      { name: "SolidWorks", level: 80 },
      { name: "ANSYS Workbench", level: 75 },
      { name: "FEA Analysis", level: 75 },
      { name: "CFD Simulation", level: 70 },
      { name: "NX CAD", level: 65 },
    ]
  },
  {
    name: "Data Analysis",
    skills: [
      { name: "Spatial Analysis", level: 85 },
      { name: "Satellite Imagery", level: 80 },
      { name: "NDVI/NDWI Analysis", level: 85 },
      { name: "Statistical Analysis", level: 75 },
      { name: "Data Visualization", level: 80 },
    ]
  }
];

const AnimatedCounter = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1500;
    const steps = 50;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <span>{count}%</span>;
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-display font-bold mb-6 gradient-text">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          <AnimatedCounter value={skill.level} isInView={isInView} />
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h4 className="text-lg font-display font-semibold mb-4 text-muted-foreground">
              Also proficient in
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "DGPS Survey", "LISEM", "Agisoft Metashape", "DSM Generation",
                "CHIRPS Data", "SRTM DEM", "Sentinel-2", "Landsat",
                "Camera Trap Analysis", "Tractor Maintenance", "Irrigation Systems"
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
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
