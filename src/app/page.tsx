"use client";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { HighlightsSection } from "@/components/landingPage/HighlightsSection";
import { SkillsSection } from "@/components/landingPage/SkillsSection";
import { EducationSection } from "@/components/landingPage/EducationSection";
import { ProjectsSection } from "@/components/landingPage/ProjectsSection";
import Footer from "@/components/landingPage/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* <AreebaAssistant /> */}
      <main className="container mx-auto space-y-16">
        <HeroSection />
        <HighlightsSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
