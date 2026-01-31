import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, ChevronDown } from 'lucide-react';
import ProfileCard3D from './ProfileCard3D';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
        >
          {/* Left side - Clean text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Minimal Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-muted-foreground font-light tracking-wide">Open to Opportunities</span>
            </motion.div>

            {/* Name - Large & Clean */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-3"
            >
              <span className="text-foreground">Satwik</span>
              <br />
              <span className="font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Udupi
              </span>
            </motion.h1>

            {/* Title - Minimal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-light mb-8"
            >
              Hydrologist & GIS Analyst
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground/80 font-light max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Engineering sustainable solutions for water resource management through precision mapping and analysis.
            </motion.p>

            {/* CTA Buttons - Clean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-[0_20px_40px_-15px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                Connect
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>

              <Link 
                to="/pravaha-tattva"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full border border-border/50 bg-card/30 text-foreground font-medium hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              >
                Consulting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <ProfileCard3D variant="portfolio" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Minimal */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground/40" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
