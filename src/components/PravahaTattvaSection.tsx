import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import droneImage from '@/assets/drone-mapping.png';

const PravahaTattvaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pravaha-tattva" className="py-20 relative overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${droneImage})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Animated Drone */}
      <motion.div
        className="absolute top-8 z-20"
        animate={{
          x: ['-10%', '110%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative">
          {/* Drone Body */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Main drone body */}
            <div className="w-16 h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-lg relative">
              {/* Camera/Sensor pod */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-slate-800 rounded-b-lg">
                {/* LiDAR beam */}
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-60"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              
              {/* Multispectral sensor indicators */}
              <div className="absolute -top-1 left-2 flex gap-1">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-red-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                />
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-blue-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                />
              </div>
              
              {/* NIR sensor */}
              <div className="absolute -top-1 right-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-purple-500/80"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
            
            {/* Propeller arms */}
            <div className="absolute -top-1 -left-4 w-8 h-1 bg-slate-600 rounded">
              <motion.div
                className="absolute -top-0.5 left-0 w-3 h-3 border-2 border-slate-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="absolute -top-1 -right-4 w-8 h-1 bg-slate-600 rounded">
              <motion.div
                className="absolute -top-0.5 right-0 w-3 h-3 border-2 border-slate-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            {/* Status lights */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Sensor label */}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-[10px] text-cyan-400/80 font-mono">LiDAR + Multispectral</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto pt-20"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Pravaha Tattva</span>
              <span className="block text-2xl md:text-3xl mt-2 text-foreground/90">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Founded by <span className="text-primary font-semibold">Satwik Udupi</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed"
          >
            Advanced geospatial solutions powered by cutting-edge drone technology, 
            LiDAR mapping, and multispectral imaging for precision agriculture, 
            watershed management, and environmental monitoring.
          </motion.p>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: 'LiDAR Mapping', desc: 'High-precision elevation models and terrain analysis' },
              { title: 'Multispectral Imaging', desc: 'NDVI, crop health, and vegetation analysis' },
              { title: 'Photogrammetry', desc: 'Orthomosaics, 3D models, and volumetric surveys' },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PravahaTattvaSection;
