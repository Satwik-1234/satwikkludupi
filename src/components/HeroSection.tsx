import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, ChevronDown, Download, MapPin, Droplets } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* GIS-inspired grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Topographic contour lines effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/5"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 1 }}
          />
        ))}
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-border/50 ring-offset-4 ring-offset-background">
                <img 
                  src={profilePhoto} 
                  alt="Satwik Udupi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status indicator */}
              <motion.div 
                className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-1 bg-card border border-border rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-muted-foreground font-medium">Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4"
          >
            <span className="text-foreground">Satwik </span>
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Udupi
            </span>
          </motion.h1>

          {/* Title with GIS icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Droplets className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-medium text-primary">Hydrologist</span>
            </div>
            <span className="text-muted-foreground/40">•</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span className="text-sm font-medium text-accent">GIS Analyst</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground font-light max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Engineering sustainable solutions for water resource management 
            through precision mapping and geospatial analysis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <a 
              href="https://drive.google.com/file/d/1Ns1JzNY85B7dB2IXNR4OtxlAOuPR1PAL/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>

            <a 
              href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-border/50 bg-card/30 text-foreground font-medium hover:bg-card/60 hover:border-primary/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              Connect
            </a>

            <Link 
              to="/pravaha-tattva"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-muted-foreground hover:text-foreground font-medium transition-all"
            >
              Consulting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-border/30"
          >
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '14+', label: 'Tools Mastered' },
              { value: '20+', label: 'Projects Delivered' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
