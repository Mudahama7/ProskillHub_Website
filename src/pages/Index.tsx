import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import RealisationsSection from "@/components/RealisationsSection";
import PolitiquesSection from "@/components/PolitiquesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <RealisationsSection />
        <PolitiquesSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
