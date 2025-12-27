import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronRight, MapPin, Calendar, Target, Database, Wrench, BarChart3, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  shortTitle: string;
  duration: string;
  association?: string;
  objectives: string[];
  datasets: string[];
  methodology: string[];
  analysis: string[];
  results: string[];
  skills: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Hydraulic Assessment of Koyna Dam - Breach Scenarios Using HEC-RAS and HEC-HMS",
    shortTitle: "Koyna Dam Breach Analysis",
    duration: "Feb 2025 - May 2025",
    association: "Sahyadri College of Agricultural Engineering and Technology",
    objectives: [
      "Assess Probable Maximum Precipitation and Flood for Koyna Dam Catchment",
      "Evaluate spillway performance and flood buffering capacity",
      "Prepare floodplain inundation maps for various breach scenarios"
    ],
    datasets: [
      "Historical rainfall & stream gauge records (IMD)",
      "Probable Maximum Precipitation (PMP) estimates",
      "SRTM GL1 Digital Elevation Model",
      "Globecover v200 Land use land cover data"
    ],
    methodology: [
      "Hydrological simulations in HEC-HMS for PMF hydrographs",
      "Breach modeling in HEC-RAS 2D for overtopping scenarios",
      "Reservoir routing in HEC-HMS for spillway capacity testing"
    ],
    analysis: [
      "Spillway found inadequate for PMP-based floods",
      "Reservoir levels approached 657m (near 661.3m max)",
      "Peak breach discharges exceeded 66,000 m³/s",
      "Downstream inundation depths reached 18+ meters"
    ],
    results: [
      "Reduced flood buffering due to sedimentation",
      "Dam breach and Inundation maps for downstream basin",
      "PMF Hydrographs for 1-2-3 day intervals",
      "Proposed spillway expansion and EAPs for downstream safety"
    ],
    skills: ["HEC-HMS", "HEC-RAS", "Floodplain Mapping", "Dam Safety Analysis"],
    featured: true
  },
  {
    title: "Floodplain Risk Zonation Mapping of Mula Mutha River Basin",
    shortTitle: "Mula Mutha Flood Risk Mapping",
    duration: "Nov 2024 - Dec 2024",
    objectives: [
      "Assess flood risks across the Mula–Mutha basin",
      "Integrate hydraulic modeling with GIS-based decision analysis",
      "Support disaster preparedness and urban planning"
    ],
    datasets: [
      "River discharge data for multiple return periods",
      "DEM-based elevation & slope layers",
      "Land use/land cover (LULC) maps",
      "Proximity-to-river spatial layers"
    ],
    methodology: [
      "HEC-RAS 1D steady flow simulations for flood inundation",
      "ArcGIS mapping of terrain & land-use factors",
      "AHP-based multi-criteria analysis with weighted factors",
      "Weighted overlay to produce Flood Risk Index maps"
    ],
    analysis: [
      "Identified inundation patterns across basin floodplains",
      "Assigned relative influence of slope, elevation, LULC",
      "Created risk categories: low, moderate, high, very high"
    ],
    results: [
      "Detailed flood risk maps for urban Pune",
      "Highlighted vulnerability of rapidly developing areas",
      "Integration of hydraulic + spatial analysis for better planning"
    ],
    skills: ["AHP", "Supervised Classification", "ArcGIS Desktop", "HEC-RAS"],
    featured: true
  },
  {
    title: "Spatiotemporal Analysis and RUSLE Assessment of Panchganga River Basin",
    shortTitle: "Panchganga River RUSLE Analysis",
    duration: "Aug 2024 - Sep 2024",
    objectives: [
      "Investigate temporal shifts in river flow patterns (1994–2024)",
      "Assess erosion and accretion dynamics using satellite data",
      "Estimate average annual soil loss for watershed management"
    ],
    datasets: [
      "Landsat 5 & 9 imagery (1994–2024)",
      "NDWI-derived waterbody layers",
      "Vectorized channel boundaries",
      "Soil, rainfall & topographic datasets for RUSLE"
    ],
    methodology: [
      "NDWI & vector analysis for erosion–accretion mapping",
      "Temporal river channel shift detection",
      "RUSLE model applied in ArcGIS for annual soil loss",
      "Spatial overlay of hydrological & terrain parameters"
    ],
    analysis: [
      "Detected channel migration and morphological changes",
      "Identified critical erosion-prone and deposition zones",
      "Estimated spatial soil loss rates across the basin"
    ],
    results: [
      "Mapped 30-year morphodynamic changes in lower Panchganga",
      "Quantified erosion–accretion hotspots",
      "Insights for soil conservation & sustainable planning"
    ],
    skills: ["Spatial Analysis", "ArcGIS Desktop", "RUSLE", "Change Detection"],
    featured: true
  },
  {
    title: "Revolving Type Sprinkler Design for Irrigation",
    shortTitle: "Sprinkler Design (SolidWorks)",
    duration: "Academic Project",
    objectives: [
      "Design efficient revolving type sprinkler for irrigation",
      "Calculate discharge flow and pressure requirements"
    ],
    datasets: [],
    methodology: [
      "Discharge flow calculations",
      "Pressure calculations for real-world irrigation",
      "3D modeling in SolidWorks"
    ],
    analysis: [],
    results: [
      "Functional sprinkler design for agricultural applications",
      "Optimized for water efficiency"
    ],
    skills: ["SolidWorks", "Irrigation Systems", "Fluid Mechanics"],
    featured: false
  },
  {
    title: "Tractor Rear Mounted Leveler/Grader Design",
    shortTitle: "Leveler/Grader Design",
    duration: "Mini Project",
    objectives: [
      "Design functional tractor-mounted grader/leveler",
      "Consider real-world farming and earthmoving applications"
    ],
    datasets: [],
    methodology: [
      "Functional design considering cost economics",
      "3D modeling in SolidWorks",
      "Load and stress analysis"
    ],
    analysis: [],
    results: [
      "Complete design for tractor-mounted leveler",
      "Cost-effective solution for farming operations"
    ],
    skills: ["SolidWorks", "Agricultural Machinery", "Mechanical Design"],
    featured: false
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground">
              <span className="text-2xl font-bold text-primary">6+</span> Major GIS & Hydrology Projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="glass-card overflow-hidden"
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        {project.shortTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {project.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-primary transition-transform ${
                          expandedProject === project.title ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-border/50"
                  >
                    {project.association && (
                      <p className="text-sm text-secondary mt-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {project.association}
                      </p>
                    )}

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Objectives */}
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                          <Target className="w-4 h-4 text-primary" />
                          Objectives
                        </h4>
                        <ul className="space-y-2">
                          {project.objectives.map((obj, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">🎯</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Datasets */}
                      {project.datasets.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                            <Database className="w-4 h-4 text-primary" />
                            Datasets
                          </h4>
                          <ul className="space-y-2">
                            {project.datasets.map((data, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-secondary">📊</span>
                                <span>{data}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Methodology */}
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                          <Wrench className="w-4 h-4 text-primary" />
                          Methodology
                        </h4>
                        <ul className="space-y-2">
                          {project.methodology.map((method, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-secondary">⚙️</span>
                              <span>{method}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Analysis */}
                      {project.analysis.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                            <BarChart3 className="w-4 h-4 text-primary" />
                            Key Analysis
                          </h4>
                          <ul className="space-y-2">
                            {project.analysis.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-secondary">🔍</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Results */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Results & Outcomes
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.results.map((result, i) => (
                          <div key={i} className="text-sm text-muted-foreground flex items-start gap-2 bg-muted/30 rounded-lg p-3">
                            <span className="text-green-400">✅</span>
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-center text-muted-foreground">
              Other Academic Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 hover:border-primary/50 transition-all"
                >
                  <h4 className="font-semibold text-foreground mb-2">{project.shortTitle}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
