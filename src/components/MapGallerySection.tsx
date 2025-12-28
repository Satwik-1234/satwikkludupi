import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, MessageCircle, Phone } from 'lucide-react';

// Import all map images
import controlledReleaseMap from '@/assets/maps/controlled-release-map.jpg';
import damOvertoppingDepth from '@/assets/maps/dam-overtopping-depth.jpg';
import damSeismicDepth from '@/assets/maps/dam-seismic-depth.jpg';
import floodRiskMap from '@/assets/maps/flood-risk-map.jpg';
import lulc2024Map from '@/assets/maps/lulc-2024-map.png';
import koynaRiverBasin from '@/assets/maps/koyna-river-basin.jpg';
import soilLossClass from '@/assets/maps/soil-loss-class.jpg';
import krishnaLulcMap from '@/assets/maps/krishna-lulc-map.jpg';
import urbanIndexMap from '@/assets/maps/urban-index-map.jpg';

const maps = [
  { id: 1, src: controlledReleaseMap, alt: 'Controlled Release Flood Depth Map' },
  { id: 2, src: damOvertoppingDepth, alt: 'Dam Overtopping Failure Scenario Depth Map' },
  { id: 3, src: damSeismicDepth, alt: 'Dam Seismic Collapse Scenario Depth Map' },
  { id: 4, src: floodRiskMap, alt: 'Flood Risk Map - Mula Mutha Basin' },
  { id: 5, src: lulc2024Map, alt: 'LULC 2024 Map - Pravara River Basin' },
  { id: 6, src: koynaRiverBasin, alt: 'Koyna River Basin Location Map' },
  { id: 7, src: soilLossClass, alt: 'Soil Loss Class - Panchganga Basin' },
  { id: 8, src: krishnaLulcMap, alt: 'Land Use Land Cover Map - Krishna Upper Reach Basin' },
  { id: 9, src: urbanIndexMap, alt: 'Urban Index Map - Kolhapur' },
];

const MapGallerySection = () => {
  const [selectedMap, setSelectedMap] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/919834300849?text=${encodeURIComponent('Hi Satwik, I viewed your GIS portfolio and would like to discuss a project.')}`;

  const openModal = (index: number) => {
    setSelectedMap(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMap(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedMap !== null) {
      setSelectedMap(selectedMap === 0 ? maps.length - 1 : selectedMap - 1);
    }
  };

  const goToNext = () => {
    if (selectedMap !== null) {
      setSelectedMap(selectedMap === maps.length - 1 ? 0 : selectedMap + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMap === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMap]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    setTouchStart(null);
  };

  const downloadMap = () => {
    if (selectedMap === null) return;
    const link = document.createElement('a');
    link.href = maps[selectedMap].src;
    link.download = `map-${selectedMap + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef}
      id="previous-work" 
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(217_70%_8%)] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Previous <span className="gradient-text">Work</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual portfolio of GIS and hydrological mapping projects
          </p>
        </motion.div>

        {/* Map Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {maps.map((map, index) => (
            <motion.div
              key={map.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-card border border-border/50"
            >
              <img
                src={map.src}
                alt={map.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Hover overlay with hydrology blue glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_60px_hsl(217_91%_60%/0.3)]" />
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedMap !== null && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-card/80 hover:bg-card border border-border text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 hover:bg-card border border-border text-foreground transition-colors hidden md:block"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 hover:bg-card border border-border text-foreground transition-colors hidden md:block"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image container */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-12">
              <motion.img
                key={selectedMap}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={maps[selectedMap].src}
                alt={maps[selectedMap].alt}
                className="max-w-full max-h-[calc(100vh-180px)] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Bottom CTA bar */}
            <div className="p-4 md:p-6 bg-card/80 backdrop-blur-md border-t border-border">
              <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Map counter */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-foreground font-semibold">{selectedMap + 1}</span>
                  <span>/</span>
                  <span>{maps.length}</span>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={downloadMap}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  
                  <a
                    href="tel:+919834300849"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Call Now</span>
                  </a>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MapGallerySection;
