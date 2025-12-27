import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: string[];
  category: 'gis' | 'hydrology' | 'cad' | 'other';
}

const certifications: Certification[] = [
  { name: "ArcGIS Online Basics", issuer: "Esri", date: "Aug 2025", category: "gis" },
  { name: "ArcGIS-Pro Basics", issuer: "Esri", date: "Aug 2025", category: "gis" },
  { name: "Flood Hazard and Exposure Mapping", issuer: "UNESCO", date: "Aug 2025", skills: ["QGIS", "LISEM"], category: "hydrology" },
  { name: "Application of AI/ML in Acreage Mapping of Crops", issuer: "IIRS, ISRO", date: "Jul 2025", category: "gis" },
  { name: "Resilient Rivers: Watershed-based Management", issuer: "FAO", date: "May 2025", category: "hydrology" },
  { name: "Guide to Developing Resilient Watershed Management Plan", issuer: "FAO", date: "Apr 2025", category: "hydrology" },
  { name: "Landslide Risk Assessment, Monitoring, and Forecasting", issuer: "UNESCO", date: "Apr 2025", category: "hydrology" },
  { name: "WaterShed Yatra Quiz Competition", issuer: "MoRD, GoI", date: "Apr 2025", skills: ["Watershed Planning"], category: "hydrology" },
  { name: "Beyond the Visible - Hyperspectral Remote Sensing", issuer: "EO College", date: "Feb 2025", category: "gis" },
  { name: "Course in GIS Analysis", issuer: "Geological Survey of India", date: "Feb 2025", category: "gis" },
  { name: "Fundamentals of GIS", issuer: "Geological Survey of India", date: "Feb 2025", category: "gis" },
  { name: "LAND IN FOCUS - Basics of Remote Sensing", issuer: "EO College", date: "Feb 2025", category: "gis" },
  { name: "Integrated Drought Management: Monitoring & Early Warning", issuer: "UNDP", date: "Oct 2024", category: "hydrology" },
  { name: "ANSYS FEA", issuer: "Indo-German Tool Room", date: "Jul 2024", category: "cad" },
  { name: "SOLIDWORKS", issuer: "Indo-German Tool Room", date: "Jul 2024", category: "cad" },
  { name: "ANSYS Static & Vibrational Analysis", issuer: "Skyy Skill Academy", date: "May 2024", category: "cad" },
  { name: "Industrial CAD Using NX", issuer: "Skyy Skill Academy", date: "May 2024", category: "cad" },
  { name: "Introduction to GIS", issuer: "GEO University", date: "May 2024", category: "gis" },
  { name: "Geospatial Data Analysis with ChatGPT and GEE", issuer: "UNU-INWEH", date: "Jan 2024", category: "gis" },
  { name: "Hydrologic Modeling with HEC-HMS", issuer: "UNESCO", date: "Dec 2023", category: "hydrology" },
  { name: "Academic Level Course (A-1)", issuer: "CFMTTI", date: "Oct 2023", category: "other" },
  { name: "MS-CIT", issuer: "MSBTE", date: "Jul 2018", category: "other" },
  { name: "Intermediate Grade Drawing Examination", issuer: "Govt. of Maharashtra", date: "Jul 2016", category: "other" },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'gis', label: 'GIS & Remote Sensing' },
  { id: 'hydrology', label: 'Hydrology' },
  { id: 'cad', label: 'CAD/CAE' },
  { id: 'other', label: 'Other' },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCerts = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(c => c.category === activeFilter);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Licenses & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground">
              <span className="text-2xl font-bold text-primary">20+</span> Professional Certifications
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-gradient-accent text-primary-foreground shadow-button'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                layout
                className="glass-card p-4 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-secondary mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.skills && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 text-[10px] rounded bg-muted text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
