import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, FileDown, ChevronDown, ChevronUp, Briefcase, MapPin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hydrologyBg from '@/assets/hydrology-background.jpg';

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

  const techItems = [
    'HEC-HMS', 'HEC-RAS', 'ArcGIS Pro', 'QGIS', 'Google Earth Engine', 'CAD/CFD'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hydrologyBg})` }}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/60"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-3 h-3 rounded-full bg-secondary/60"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/60"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line 
            x1="10%" y1="20%" x2="30%" y2="80%" 
            stroke="hsl(var(--primary))" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line 
            x1="90%" y1="30%" x2="70%" y2="70%" 
            stroke="hsl(var(--secondary))" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-xl border border-border/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for Projects</span>
            </div>
          </motion.div>

          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-accent p-1 shadow-glow">
                <div className="w-full h-full rounded-full bg-card/90 backdrop-blur-xl flex items-center justify-center border border-border/30 overflow-hidden">
                  <span className="text-4xl md:text-5xl font-display font-bold gradient-text">SU</span>
                </div>
              </div>
              {/* Status ring */}
              <motion.div 
                className="absolute -inset-2 rounded-full border-2 border-primary/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight">
              Satwik <span className="gradient-text">Udupi</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Agricultural Engineer • GIS & Hydrology Professional
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>

            <p className="text-2xl md:text-3xl font-display font-semibold gradient-text mb-4">
              Delivering Sustainable Land & Water Solutions
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Karad, Maharashtra, India</span>
            </div>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {techItems.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="px-3 py-1.5 text-sm rounded-full bg-card/50 backdrop-blur-xl border border-border/30 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-accent text-primary-foreground shadow-button hover:opacity-90 transition-all min-w-[180px] font-semibold h-12"
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
                className="border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card/80 text-foreground min-w-[180px] font-semibold h-12"
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
                  className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden shadow-card z-20"
                >
                  {resumeLinks.map((resume, index) => (
                    <a
                      key={index}
                      href={resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        resume.highlight 
                          ? 'bg-primary/10 text-primary hover:bg-primary/20 border-l-2 border-primary' 
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      {resume.highlight && <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded mr-2">NEW</span>}
                      {resume.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary/50 bg-secondary/10 hover:bg-secondary/20 text-secondary min-w-[180px] font-semibold h-12"
              asChild
            >
              <Link to="/pravaha-tattva">
                <Briefcase className="w-5 h-5 mr-2" />
                My Consultancy
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full border border-border/50 group-hover:border-primary/50 transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;