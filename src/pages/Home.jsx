import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* theme toggle */}

      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        {/* Hero */}
        <HeroSection />
        {/* <AboutMe /> */}
        <AboutSection />
        {/* Skill */}
        <SkillsSection />
        {/* <Projects /> */}
        <ProjectSection />
        {/* <Contact /> */}
        <ContactSection />
      </main>
      {/* Footer */}
    </div>
  );
};
