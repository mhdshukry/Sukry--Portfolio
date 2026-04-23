import MeshBackground from "@/components/MeshBackground";
import CommandHeader from "@/components/CommandHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { Download } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <MeshBackground />
      <CommandHeader />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <FooterSection />
      <a
        href="/SKR_CV.pdf"
        download
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-red-500/40 via-pink-500/40 to-cyan-400/40 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm font-semibold text-foreground shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/20 text-red-200">
            <Download size={18} strokeWidth={1.6} />
          </span>
          Download CV
        </span>
      </a>
    </div>
  );
};

export default Index;
