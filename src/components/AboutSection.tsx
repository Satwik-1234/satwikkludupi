import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Award, FolderGit2, Sparkles, Target, Lightbulb } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: '6+', label: 'Major Projects', color: 'from-blue-500 to-cyan-400' },
  { icon: Award, value: '20+', label: 'Certifications', color: 'from-purple-500 to-pink-400' },
  { icon: Briefcase, value: '4+', label: 'Organizations', color: 'from-orange-500 to-yellow-400' },
];

const highlights = [
  { 
    icon: Target, 
    title: 'Mission', 
    text: 'Leveraging technology for sustainable land and water management solutions.' 
  },
  { 
    icon: Lightbulb, 
    title: 'Expertise', 
    text: 'GIS, hydrological modeling, CAD/CFD simulations, and drone mapping.' 
  },
  { 
    icon: Sparkles, 
    title: 'Passion', 
    text: 'Creative problem-solving for real-world environmental challenges.' 
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Agricultural <span className="gradient-text">Engineer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate about leveraging technology for sustainable land and water management
            </p>
          </div>

          {/* Stats Row - Prominent Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <p className="text-3xl md:text-5xl font-display font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: About Text Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass-card-light p-8 rounded-3xl relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px]" />
                
                <div className="relative z-10 space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    An <span className="text-primary font-semibold">Agricultural Engineer</span> 🌾👷🏞️, 
                    I am passionate about leveraging technology for sustainable land and water management. 
                    My expertise spans agricultural machinery design, irrigation systems, and soil and water 
                    conservation.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['ArcGIS', 'QGIS', 'HEC-HMS', 'HEC-RAS', 'AutoCAD', 'CFD'].map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    I have successfully contributed to 6+ projects in LULC and GIS modeling, hydrological 
                    assessments, and conservation planning, collaborating with leading institutions such as 
                    Shivaji University and the Forest department, Government of Maharashtra.
                  </p>

                  {/* Location Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Based in</p>
                      <p className="font-medium text-foreground">Karad, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card-light p-6 rounded-2xl flex gap-5 group hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-button group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Collaboration CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="glass-card-light p-6 rounded-2xl border-secondary/30 bg-gradient-to-br from-secondary/5 to-primary/5"
              >
                <p className="text-foreground leading-relaxed">
                  💡 <span className="font-medium">Let's collaborate!</span> I excel in collaborative environments and am eager to connect with professionals 
                  and organizations dedicated to advancing sustainable agriculture.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
