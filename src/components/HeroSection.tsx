import { motion } from 'framer-motion';
import { Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-watershed.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      </div>

      {/* Animated Water Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 wave-bg animate-wave" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Photo Placeholder */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-full bg-gradient-accent p-1 shadow-glow"
          >
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
              <span className="text-5xl md:text-6xl font-display font-bold gradient-text">SU</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
          >
            Satwik <span className="gradient-text">Udupi</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-2 font-body"
          >
            Agricultural Engineer | GIS & Hydrology Specialist
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl font-display font-medium gradient-text mb-4"
          >
            Delivering Sustainable Land & Water Solutions
          </motion.p>

          {/* Tech Stack */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Expert in HEC-HMS, HEC-RAS, ArcGIS/QGIS, Google Earth Engine, CAD/CFD
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-accent text-primary-foreground shadow-button hover:opacity-90 transition-opacity min-w-[180px]"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 bg-primary/10 hover:bg-primary/20 text-foreground min-w-[180px]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
