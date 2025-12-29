import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  const phases = [
    { label: 'Initializing River Flow...', icon: 'river' },
    { label: 'Running CFD Simulation...', icon: 'cfd' },
    { label: 'Analyzing Hydraulics...', icon: 'hydraulic' },
    { label: 'Processing Hydrology...', icon: 'hydrology' },
    { label: 'Rendering CAD Structures...', icon: 'cad' },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const phaseThresholds = [20, 40, 60, 80, 100];
    const currentPhase = phaseThresholds.findIndex(threshold => progress < threshold);
    setPhase(currentPhase === -1 ? 4 : currentPhase);

    if (progress >= 100) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  // River Flow SVG Animation
  const RiverFlow = () => (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64">
      <defs>
        <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--hydro-500))" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(var(--hydro-400))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--hydro-500))" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Animated River Paths */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M-50,${80 + i * 10} Q100,${60 + i * 15} 200,${90 + i * 8} T450,${75 + i * 12}`}
          fill="none"
          stroke="url(#riverGradient)"
          strokeWidth={4 - i * 0.5}
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0.3, 0.8, 0.3],
            pathOffset: [0, -1],
          }}
          transition={{
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            pathOffset: { duration: 3, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}
      
      {/* Particles flowing */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          r={2 + Math.random() * 2}
          fill="hsl(var(--hydro-300))"
          filter="url(#glow)"
          initial={{ cx: -20, cy: 70 + Math.random() * 60 }}
          animate={{ 
            cx: [0, 420],
            cy: [70 + Math.random() * 60, 90 + Math.random() * 40, 80 + Math.random() * 50]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear"
          }}
        />
      ))}
    </svg>
  );

  // CFD Simulation Grid
  const CFDSimulation = () => (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64">
      <defs>
        <linearGradient id="velocityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="25%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="75%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      
      {/* Grid mesh */}
      {[...Array(12)].map((_, i) => (
        <motion.line
          key={`h-${i}`}
          x1="0" y1={i * 18} x2="400" y2={i * 18}
          stroke="hsl(var(--hydro-500))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <motion.line
          key={`v-${i}`}
          x1={i * 22} y1="0" x2={i * 22} y2="200"
          stroke="hsl(var(--hydro-500))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
        />
      ))}
      
      {/* Velocity vectors */}
      {[...Array(8)].map((_, row) =>
        [...Array(12)].map((_, col) => (
          <motion.g
            key={`arrow-${row}-${col}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + (row * 12 + col) * 0.01, duration: 0.3 }}
          >
            <motion.line
              x1={20 + col * 32}
              y1={20 + row * 22}
              x2={20 + col * 32 + 15 + Math.sin(row + col) * 5}
              y2={20 + row * 22 + Math.cos(row + col) * 8}
              stroke="url(#velocityGradient)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              animate={{
                x2: [20 + col * 32 + 15, 20 + col * 32 + 20, 20 + col * 32 + 15],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        ))
      )}
      
      {/* Color bar legend */}
      <rect x="320" y="20" width="15" height="160" fill="url(#velocityGradient)" rx="2" />
      <text x="340" y="30" fill="hsl(var(--foreground))" fontSize="8">High</text>
      <text x="340" y="180" fill="hsl(var(--foreground))" fontSize="8">Low</text>
    </svg>
  );

  // Hydraulic Flow
  const HydraulicFlow = () => (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64">
      {/* Dam structure */}
      <motion.path
        d="M150,180 L150,80 L160,80 L160,180 Z"
        fill="hsl(var(--hydro-700))"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: 'bottom' }}
      />
      
      {/* Reservoir water */}
      <motion.path
        d="M0,100 Q75,90 150,100 L150,180 L0,180 Z"
        fill="hsl(var(--hydro-400))"
        fillOpacity="0.6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ transformOrigin: 'right' }}
      />
      
      {/* Water waves in reservoir */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={`wave-${i}`}
          d={`M${10 + i * 40},${95 + i * 5} Q${30 + i * 40},${90 + i * 5} ${50 + i * 40},${95 + i * 5}`}
          fill="none"
          stroke="hsl(var(--hydro-200))"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3], y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      
      {/* Spillway flow */}
      <motion.path
        d="M160,100 Q200,80 250,120 Q300,160 380,150"
        fill="none"
        stroke="hsl(var(--hydro-400))"
        strokeWidth="20"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      
      {/* Spray particles */}
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={`spray-${i}`}
          r={1 + Math.random() * 2}
          fill="hsl(var(--hydro-200))"
          initial={{ cx: 160, cy: 100, opacity: 0 }}
          animate={{
            cx: [160, 200 + Math.random() * 80],
            cy: [100, 80 + Math.random() * 60],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: 1 + i * 0.1,
          }}
        />
      ))}
      
      {/* Depth markers */}
      {[0, 1, 2, 3].map((i) => (
        <motion.g key={`depth-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.2 }}>
          <line x1="5" y1={110 + i * 18} x2="20" y2={110 + i * 18} stroke="hsl(var(--foreground))" strokeWidth="1" />
          <text x="25" y={114 + i * 18} fill="hsl(var(--muted-foreground))" fontSize="8">{(4 - i) * 5}m</text>
        </motion.g>
      ))}
    </svg>
  );

  // Hydrologic Cycle
  const HydrologyCycle = () => (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64">
      {/* Mountains */}
      <motion.path
        d="M50,180 L100,100 L150,180 M120,180 L180,80 L240,180 M200,180 L270,90 L340,180"
        fill="none"
        stroke="hsl(var(--hydro-600))"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Sun */}
      <motion.circle
        cx="350" cy="40" r="25"
        fill="#fbbf24"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.line
          key={`ray-${i}`}
          x1={350 + Math.cos(i * Math.PI / 4) * 30}
          y1={40 + Math.sin(i * Math.PI / 4) * 30}
          x2={350 + Math.cos(i * Math.PI / 4) * 40}
          y2={40 + Math.sin(i * Math.PI / 4) * 40}
          stroke="#fbbf24"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      
      {/* Cloud */}
      <motion.g
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ellipse cx="100" cy="50" rx="30" ry="20" fill="hsl(var(--muted))" />
        <ellipse cx="130" cy="55" rx="35" ry="22" fill="hsl(var(--muted))" />
        <ellipse cx="80" cy="55" rx="25" ry="18" fill="hsl(var(--muted))" />
      </motion.g>
      
      {/* Rain drops */}
      {[...Array(12)].map((_, i) => (
        <motion.line
          key={`rain-${i}`}
          x1={70 + i * 10}
          y1={75}
          x2={70 + i * 10 - 5}
          y2={85}
          stroke="hsl(var(--hydro-400))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      
      {/* Evaporation arrows */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={`evap-${i}`}
          d={`M${280 + i * 20},180 L${285 + i * 20},160 L${290 + i * 20},180`}
          fill="none"
          stroke="hsl(var(--hydro-300))"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -30 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      
      {/* River at base */}
      <motion.path
        d="M0,185 Q100,175 200,185 Q300,195 400,180"
        fill="none"
        stroke="hsl(var(--hydro-400))"
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </svg>
  );

  // CAD Structures
  const CADStructures = () => (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--hydro-500))" strokeWidth="0.5" strokeOpacity="0.2" />
        </pattern>
      </defs>
      
      {/* Grid background */}
      <rect width="400" height="200" fill="url(#grid)" />
      
      {/* 3D Dam structure */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Front face */}
        <motion.path
          d="M100,180 L100,80 L200,80 L200,180 Z"
          fill="hsl(var(--hydro-600))"
          stroke="hsl(var(--hydro-400))"
          strokeWidth="2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: 'bottom' }}
        />
        
        {/* Top face (3D effect) */}
        <motion.path
          d="M100,80 L130,60 L230,60 L200,80 Z"
          fill="hsl(var(--hydro-500))"
          stroke="hsl(var(--hydro-400))"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
        
        {/* Side face */}
        <motion.path
          d="M200,80 L230,60 L230,160 L200,180 Z"
          fill="hsl(var(--hydro-700))"
          stroke="hsl(var(--hydro-400))"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      </motion.g>
      
      {/* Spillway gates */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={`gate-${i}`}
          x={115 + i * 30}
          y={100}
          width="20"
          height="40"
          fill="hsl(var(--hydro-800))"
          stroke="hsl(var(--hydro-300))"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1 + i * 0.2 }}
          style={{ transformOrigin: 'top' }}
        />
      ))}
      
      {/* Dimension lines */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        {/* Horizontal dimension */}
        <line x1="100" y1="190" x2="200" y2="190" stroke="hsl(var(--primary))" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
        <text x="140" y="198" fill="hsl(var(--foreground))" fontSize="10">100m</text>
        
        {/* Vertical dimension */}
        <line x1="90" y1="80" x2="90" y2="180" stroke="hsl(var(--primary))" strokeWidth="1" />
        <text x="70" y="135" fill="hsl(var(--foreground))" fontSize="10" transform="rotate(-90, 70, 135)">100m</text>
      </motion.g>
      
      {/* Technical annotations */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <circle cx="280" cy="100" r="30" fill="none" stroke="hsl(var(--hydro-400))" strokeWidth="1" strokeDasharray="4,2" />
        <text x="265" y="105" fill="hsl(var(--muted-foreground))" fontSize="8">Detail A</text>
        <line x1="200" y1="120" x2="250" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" strokeDasharray="2,2" />
      </motion.g>
      
      {/* CAD cursor animation */}
      <motion.g
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 50, 100, 50, 0], y: [0, 30, 0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <line x1="300" y1="140" x2="320" y2="140" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="310" y1="130" x2="310" y2="150" stroke="hsl(var(--primary))" strokeWidth="1" />
      </motion.g>
    </svg>
  );

  const renderPhaseAnimation = () => {
    switch (phase) {
      case 0: return <RiverFlow />;
      case 1: return <CFDSimulation />;
      case 2: return <HydraulicFlow />;
      case 3: return <HydrologyCycle />;
      case 4: return <CADStructures />;
      default: return <RiverFlow />;
    }
  };

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-hydro-900/20 via-background to-hydro-800/20" />
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-hydro-400/30"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                animate={{
                  y: [null, -20],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-2xl px-6">
            {/* Logo/Title */}
            <motion.div
              className="text-center mb-8"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
                Satwik<span className="text-hydro-400">.</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Agricultural Engineer | GIS & Hydrology Expert
              </p>
            </motion.div>

            {/* Animation Container */}
            <motion.div
              className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-hydro-500/20 p-4 mb-8 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderPhaseAnimation()}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Phase Indicators */}
            <div className="flex justify-center gap-2 mb-6">
              {phases.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === phase 
                      ? 'w-8 bg-hydro-400' 
                      : i < phase 
                        ? 'w-2 bg-hydro-600' 
                        : 'w-2 bg-muted'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>

            {/* Current Phase Label */}
            <motion.p
              key={phase}
              className="text-center text-sm md:text-base text-hydro-300 font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {phases[phase]?.label}
            </motion.p>

            {/* Progress Bar */}
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-hydro-600 via-hydro-400 to-hydro-300 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ width: '30%' }}
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.p
              className="text-center text-xs text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {progress}%
            </motion.p>
          </div>

          {/* Bottom Branding */}
          <motion.div
            className="absolute bottom-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-xs text-muted-foreground">
              Powered by Passion for Water Resources Engineering
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
