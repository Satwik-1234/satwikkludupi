import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Award, FolderGit2 } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: '6+', label: 'Major Projects' },
  { icon: Award, value: '20+', label: 'Certifications' },
  { icon: Briefcase, value: '4+', label: 'Organizations' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  An <span className="text-primary font-semibold">Agricultural Engineer</span> 🌾👷🏞️, 
                  I am passionate about leveraging technology for sustainable land and water management. 
                  My expertise spans agricultural machinery design, irrigation systems, and soil and water 
                  conservation, with advanced skills in <span className="text-secondary font-semibold">GIS 
                  (ArcGIS, QGIS)</span>, hydrological modeling <span className="text-secondary font-semibold">
                  (HEC-HMS, HEC-RAS)</span>, and CAD/CFD simulations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I have successfully contributed to 6+ projects in LULC and GIS modeling, hydrological 
                  assessments, and conservation planning, collaborating with leading institutions such as 
                  Shivaji University and the Forest department, Government of Maharashtra.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My hands-on experience includes developing hydrological models, performing spatial analysis, 
                  and supporting field data collection using DGPS and other advanced instruments. Driven by 
                  curiosity and a commitment to innovation, I continually seek to expand my technical toolkit 
                  and apply creative problem-solving to real-world environmental challenges.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Junnar, Maharashtra, India</span>
              </div>
            </motion.div>

            {/* Right: Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center shadow-button group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold gradient-text">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}

              {/* Collaboration CTA */}
              <div className="glass-card p-6 border-secondary/30">
                <p className="text-sm text-muted-foreground">
                  💡 I excel in collaborative environments and am eager to connect with professionals 
                  and organizations dedicated to advancing sustainable agriculture. Let's connect to 
                  explore opportunities for collaboration, project support, or knowledge exchange in 
                  GIS, hydrology, and agricultural engineering.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
