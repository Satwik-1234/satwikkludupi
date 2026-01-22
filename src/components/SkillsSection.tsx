import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: "Hydraulic & Hydrological Modeling",
    tools: ["HEC-RAS", "HEC-HMS", "SWAT", "LISEM"],
    description: "Flood simulation, rainfall-runoff analysis, and water resource assessment"
  },
  {
    name: "GIS & Remote Sensing",
    tools: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "ERDAS Imagine"],
    description: "Spatial analysis, satellite imagery processing, and thematic mapping"
  },
  {
    name: "Photogrammetry & Surveying",
    tools: ["Agisoft Metashape", "WebODM", "Pix4D", "DGPS"],
    description: "UAV data processing, orthomosaic generation, and terrain modeling"
  },
  {
    name: "CAD & Simulation",
    tools: ["AutoCAD", "SolidWorks", "ANSYS CFD", "NX CAD"],
    description: "Technical drafting, 3D modeling, and computational fluid dynamics"
  },
  {
    name: "Data & Programming",
    tools: ["Python", "Google Colab", "Statistical Analysis", "Data Visualization"],
    description: "Geospatial scripting, automation, and analytical workflows"
  },
  {
    name: "Satellite Data Sources",
    tools: ["Sentinel-2", "Landsat", "SRTM DEM", "CHIRPS"],
    description: "Multi-temporal analysis and environmental monitoring"
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
            Technical <span className="font-semibold">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl">
            Industry-standard tools and methodologies for comprehensive geospatial and hydrological analysis.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-2xl border border-border/30 bg-background/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Category name */}
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 font-light">
                {category.description}
              </p>
              
              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs rounded-full border border-border/50 bg-card/50 text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
