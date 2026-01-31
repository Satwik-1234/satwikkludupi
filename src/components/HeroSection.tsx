import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, ChevronDown, Terminal, Code2 } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Terminal grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-card/50 border border-border/30">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-muted-foreground font-mono">~/satwik-udupi</span>
            </div>
          </motion.div>

          {/* Name with typing effect style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-primary font-mono text-sm mb-2 block">{"// Hydrologist & GIS Engineer"}</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
              <span className="text-muted-foreground font-mono text-lg md:text-xl mr-2">$</span>
              <span className="font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Satwik Udupi
              </span>
              <motion.span 
                className="inline-block w-0.5 h-12 md:h-14 bg-primary ml-2 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </h1>
          </motion.div>

          {/* Code-style tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto mb-10"
          >
            <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-lg p-4 text-left font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-pink-400">const</span>{' '}
                <span className="text-yellow-400">engineer</span>{' '}
                <span className="text-foreground/60">=</span>{' '}
                <span className="text-foreground/60">{'{'}</span>
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-foreground/70">focus</span>
                <span className="text-foreground/40">: </span>
                <span className="text-green-400">"Water Resources & GIS"</span>
                <span className="text-foreground/40">,</span>
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-foreground/70">tools</span>
                <span className="text-foreground/40">: </span>
                <span className="text-foreground/60">[</span>
                <span className="text-green-400">"HEC-RAS"</span>
                <span className="text-foreground/40">, </span>
                <span className="text-green-400">"ArcGIS"</span>
                <span className="text-foreground/40">, </span>
                <span className="text-green-400">"Python"</span>
                <span className="text-foreground/60">]</span>
                <span className="text-foreground/40">,</span>
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-foreground/70">status</span>
                <span className="text-foreground/40">: </span>
                <span className="text-green-400">"Open to Opportunities"</span>
              </div>
              <div className="text-foreground/60">{'}'}</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium font-mono text-sm hover:bg-primary/90 transition-all duration-300"
            >
              <Code2 className="w-4 h-4" />
              <span>connect()</span>
              <Linkedin className="w-4 h-4" />
            </a>

            <Link 
              to="/pravaha-tattva"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/30 text-foreground font-medium font-mono text-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
            >
              <span>services()</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8 mt-12 font-mono text-xs"
          >
            {[
              { label: 'Projects', value: '20+' },
              { label: 'Tools', value: '14+' },
              { label: 'Experience', value: '2+ yrs' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-primary text-lg font-semibold">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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
            <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
