import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, FileDown, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeLinks = [
    {
      label: 'Latest Version',
      url: 'https://drive.google.com/file/d/1QKJ2Jedd6gD6DlIUq_5cKwgcCxyfzex5/view?usp=sharing',
      highlight: true
    },
    {
      label: 'Previous Version',
      url: 'https://drive.google.com/file/d/1fQkKLO9cvtzinM8TW27u6cWow8OS3sXN/view?usp=sharing',
      highlight: false
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
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
            <div className="w-full h-full rounded-full glass-card-light flex items-center justify-center overflow-hidden">
              <span className="text-5xl md:text-6xl font-display font-bold gradient-text">SU</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight text-white"
          >
            Satwik <span className="gradient-text">Udupi</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-2 font-body font-medium tracking-wide"
          >
            Agricultural Engineer | GIS & Hydrology Professional
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl font-display font-semibold gradient-text mb-4"
          >
            Delivering Sustainable Land & Water Solutions
          </motion.p>

          {/* Tech Stack */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm md:text-base text-white/70 mb-8 max-w-2xl mx-auto font-body"
          >
            Fluent in HEC-HMS, HEC-RAS, ArcGIS/QGIS, Google Earth Engine, CAD/CFD
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            <Button 
              size="lg" 
              className="bg-gradient-accent text-primary-foreground shadow-button hover:opacity-90 transition-all min-w-[180px] font-semibold"
              asChild
            >
              <a href="https://www.linkedin.com/in/satwik-udupi-37304a231" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            
            {/* Resume Dropdown */}
            <div className="relative">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white min-w-[180px] font-semibold"
                onClick={() => setShowResumeOptions(!showResumeOptions)}
              >
                <FileDown className="w-5 h-5 mr-2" />
                Resume
                {showResumeOptions ? (
                  <ChevronUp className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-2" />
                )}
              </Button>
              
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 glass-card-light overflow-hidden shadow-lg z-20"
                >
                  {resumeLinks.map((resume, index) => (
                    <a
                      key={index}
                      href={resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        resume.highlight 
                          ? 'bg-primary/20 text-white hover:bg-primary/30 border-l-2 border-primary' 
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {resume.highlight && <span className="text-xs bg-primary/30 text-primary-foreground px-2 py-0.5 rounded mr-2">NEW</span>}
                      {resume.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Pravaha Tattva Button */}
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 bg-primary/10 hover:bg-primary/20 text-white min-w-[180px] font-semibold"
              asChild
            >
              <Link to="/pravaha-tattva">
                <Briefcase className="w-5 h-5 mr-2" />
                My Consultancy
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-primary transition-colors"
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
