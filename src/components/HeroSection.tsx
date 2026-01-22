import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, FileDown, ChevronDown, ChevronUp, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';
import FloatingParticles from './FloatingParticles';
import TextReveal from './TextReveal';

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
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 70%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Available for Projects</span>
          </motion.div>

          {/* Profile Photo with animated ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
          >
            {/* Animated rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-secondary/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-secondary to-accent animate-gradient-x">
              <div className="w-full h-full rounded-full bg-background p-1">
                <img 
                  src={profilePhoto} 
                  alt="Satwik Udupi" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full animate-glow-pulse" />
          </motion.div>

          {/* Name with reveal animation */}
          <TextReveal delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight">
              <span className="text-foreground">Satwik </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-gradient-animate">
                Udupi
              </span>
            </h1>
          </TextReveal>

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              Agricultural Engineer • GIS & Hydrology Professional
            </p>
          </motion.div>

          {/* Tagline with gradient */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-2xl md:text-3xl font-display font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Delivering Sustainable Land & Water Solutions
            </span>
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto"
          >
            {['HEC-HMS', 'HEC-RAS', 'ArcGIS Pro', 'QGIS', 'Google Earth Engine', 'CAD/CFD'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons - Enterprise Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="btn-enterprise text-primary-foreground min-w-[200px] h-14 text-base font-semibold rounded-xl group"
                asChild
              >
                <a href="https://www.linkedin.com/in/satwik-udupi-37304a231" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            
            {/* Resume Dropdown */}
            <div className="relative">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card hover:border-primary/50 text-foreground min-w-[200px] h-14 text-base font-semibold rounded-xl"
                  onClick={() => setShowResumeOptions(!showResumeOptions)}
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Resume
                  {showResumeOptions ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </motion.div>
              
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute top-full left-0 right-0 mt-2 glass-morphism rounded-xl overflow-hidden shadow-2xl z-20"
                >
                  {resumeLinks.map((resume, index) => (
                    <a
                      key={index}
                      href={resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-3 text-sm font-medium transition-all ${
                        resume.highlight 
                          ? 'bg-primary/20 text-foreground hover:bg-primary/30 border-l-2 border-primary' 
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {resume.highlight && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded mr-2">NEW</span>
                      )}
                      {resume.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Consultancy Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground min-w-[200px] h-14 text-base font-semibold rounded-xl group"
                asChild
              >
                <Link to="/pravaha-tattva">
                  <Briefcase className="w-5 h-5 mr-2" />
                  My Consultancy
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 group"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 flex justify-center p-2 transition-colors">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
