import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Award, FolderGit2, Target, Lightbulb } from 'lucide-react';
import hydrologyBg from '@/assets/hydrology-background.jpg';

const stats = [
  { icon: FolderGit2, value: '6+', label: 'Major Projects', color: 'primary' },
  { icon: Award, value: '20+', label: 'Certifications', color: 'secondary' },
  { icon: Briefcase, value: '4+', label: 'Organizations', color: 'accent' },
];

const highlights = [
  { icon: Target, title: 'Mission', text: 'Leveraging technology for sustainable land and water management' },
  { icon: Lightbulb, title: 'Approach', text: 'Creative problem-solving for real-world environmental challenges' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Passionate About <span className="gradient-text">Innovation</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Main Card */}
              <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
                
                <div className="space-y-5 text-foreground/90">
                  <p className="text-lg leading-relaxed">
                    As an <span className="text-primary font-semibold">Agricultural Engineer</span>, 
                    I am passionate about leveraging technology for sustainable land and water management. 
                    My expertise spans agricultural machinery design, irrigation systems, and soil and water 
                    conservation.
                  </p>
                  
                  <p className="leading-relaxed text-muted-foreground">
                    I possess advanced skills in <span className="text-secondary font-medium">GIS (ArcGIS, QGIS)</span>, 
                    hydrological modeling <span className="text-secondary font-medium">(HEC-HMS, HEC-RAS)</span>, 
                    and CAD/CFD simulations. I have successfully contributed to 6+ projects in LULC and GIS modeling, 
                    hydrological assessments, and conservation planning.
                  </p>
                  
                  <p className="leading-relaxed text-muted-foreground">
                    My hands-on experience includes developing hydrological models, performing spatial analysis, 
                    and supporting field data collection using DGPS and other advanced instruments. Driven by 
                    curiosity and a commitment to innovation, I continually seek to expand my technical toolkit.
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/30">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Karad, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-5 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Stats & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Stats Cards */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-6 flex items-center gap-6 group hover:border-primary/40 transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-button group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-4xl font-display font-bold gradient-text">{stat.value}</p>
                      <p className="text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Collaboration CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="relative z-10">
                  <h4 className="font-display font-bold text-lg mb-3 gradient-text">Let's Collaborate</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I excel in collaborative environments and am eager to connect with professionals 
                    and organizations dedicated to advancing sustainable agriculture. Let's explore 
                    opportunities for collaboration in GIS, hydrology, and agricultural engineering.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;