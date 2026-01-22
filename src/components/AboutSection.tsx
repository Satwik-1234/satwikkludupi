import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Droplets, Layers, Mountain, ArrowUpRight } from 'lucide-react';

const metrics = [
  { value: '6+', label: 'Major Projects', sublabel: 'Completed' },
  { value: '20+', label: 'Certifications', sublabel: 'Earned' },
  { value: '4+', label: 'Organizations', sublabel: 'Collaborated' },
];

const focus = [
  { 
    icon: Droplets, 
    title: 'Hydraulic Engineering', 
    description: 'Flood risk assessment, dam break analysis, and water resource infrastructure planning.' 
  },
  { 
    icon: Mountain, 
    title: 'Watershed Management', 
    description: 'Catchment analysis, runoff modeling, and sustainable land-water conservation strategies.' 
  },
  { 
    icon: Layers, 
    title: 'Geospatial Intelligence', 
    description: 'Remote sensing, LULC classification, and spatial data analysis for informed decision-making.' 
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">About</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
            Agricultural Engineer with a focus on
            <br />
            <span className="font-semibold">Water Resource Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl leading-relaxed">
            Combining field expertise with advanced geospatial tools to deliver data-driven solutions 
            for sustainable land and water management across Maharashtra.
          </p>
        </motion.div>

        {/* Metrics - Minimal horizontal display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-8 mb-20 py-12 border-y border-border/30"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-light text-foreground mb-2">{metric.value}</p>
              <p className="text-foreground font-medium">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {focus.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group p-8 rounded-2xl border border-border/30 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Content - Two column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed font-light">
              With a foundation in <span className="font-medium">Agricultural Engineering</span> and specialized 
              training in GIS and hydrological modeling, I bridge the gap between field-level challenges and 
              technology-driven solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans collaborative projects with Shivaji University, the Forest Department of Maharashtra, 
              and various research institutions—focusing on watershed conservation, flood risk assessment, and 
              sustainable agricultural practices.
            </p>
            
            {/* Tech stack */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {['HEC-RAS', 'HEC-HMS', 'ArcGIS Pro', 'QGIS', 'Google Earth Engine', 'ANSYS CFD'].map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Location & CTA */}
          <div className="space-y-6">
            {/* Location */}
            <div className="p-6 rounded-2xl border border-border/30 bg-card/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="text-lg font-medium text-foreground">Karad, Maharashtra</p>
                  <p className="text-sm text-muted-foreground mt-1">Available for remote & on-site projects across India</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h4 className="text-foreground font-medium mb-2">Looking to Collaborate?</h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Open to consulting opportunities, research collaborations, and projects focused on 
                sustainable water resource management.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
