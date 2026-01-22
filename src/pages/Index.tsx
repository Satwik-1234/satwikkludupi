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

      {/* Main Content */}
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsla(222, 47%, 6%, 0.75), hsla(222, 47%, 6%, 0.75)), url(${hydrologyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navbar />
        <main className="space-y-0">
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
    </>
  );
};

export default Index;
