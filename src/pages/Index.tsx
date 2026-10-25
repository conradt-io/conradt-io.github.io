import { Header } from "@/components/Header";
import { HelixBackground } from "@/components/HelixBackground";
import { HomeSection } from "@/components/sections/HomeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HelixBackground />
      <Header />
      <main className="relative z-10">
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
