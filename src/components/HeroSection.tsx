import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ChevronDown, ArrowRight, Droplets, MapPin } from 'lucide-react';
import ProfileCard3D from './ProfileCard3D';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const expertise = ['Hydraulic Modeling', 'Watershed Hydrology', 'GIS Analysis', 'Remote Sensing', 'Drone Mapping'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Gradient orbs - subtle */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4"
            >
              <span className="text-foreground">Satwik </span>
              <span className="font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Udupi
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Droplets className="w-4 h-4 text-primary" />
                <span className="text-lg font-light">Hydrologist</span>
              </div>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-lg font-light text-muted-foreground">GIS Analyst</span>
              <span className="text-muted-foreground/30">•</span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-lg font-light">Maharashtra, India</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Engineering sustainable solutions for 
              <span className="text-foreground font-medium"> water resource management </span>
              through precision mapping and hydrological analysis.
            </motion.p>

            {/* Expertise Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
            >
              {expertise.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/30 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-[0_20px_40px_-15px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Consultancy Button */}
              <Link 
                to="/pravaha-tattva"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-secondary/30 bg-secondary/10 text-foreground font-medium hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300"
              >
                Consulting Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <ProfileCard3D variant="portfolio" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 group"
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
