import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <ReferencesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
