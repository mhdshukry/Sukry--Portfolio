import MeshBackground from "@/components/MeshBackground";
import CommandHeader from "@/components/CommandHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <MeshBackground />
      <CommandHeader />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsMarquee />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
