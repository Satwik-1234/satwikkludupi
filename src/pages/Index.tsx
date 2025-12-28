import { Helmet } from 'react-helmet-async';
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

      <div className="min-h-screen bg-background relative">
        {/* Background Image */}
        <div 
          className="fixed inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${hydrologyBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection />
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
      </div>
    </>
  );
};

export default Index;
