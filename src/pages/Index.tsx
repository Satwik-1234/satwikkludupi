import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import MapGallerySection from '@/components/MapGallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import hydrologyBackground from '@/assets/hydrology-background.jpg';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Satwik Udupi | Agricultural Engineer | GIS & Hydrology Expert</title>
        <meta 
          name="description" 
          content="Agricultural Engineer specializing in GIS, Hydrology, HEC-HMS, HEC-RAS, ArcGIS/QGIS. Expert in sustainable land and water management solutions in Maharashtra, India." 
        />
        <meta name="keywords" content="GIS hydrology engineer Maharashtra, HEC-HMS, HEC-RAS, ArcGIS, QGIS, watershed management, flood mapping, agricultural engineering" />
        <link rel="canonical" href="https://satwikudupi.com" />
      </Helmet>

      {/* Main Content */}
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsla(222, 47%, 6%, 0.85), hsla(222, 47%, 6%, 0.85)), url(${hydrologyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated accent lines */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)'
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(var(--secondary)), transparent)'
            }}
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <Navbar />
        <main className="space-y-0 relative z-10">
          <HeroSection />
          
          {/* Section with animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
          
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <CertificationsSection />
          <ProjectsSection />
          <MapGallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
