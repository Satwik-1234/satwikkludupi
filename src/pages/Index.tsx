import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
