import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
        {/* <Contact /> */}
      </main>
      {/* Footer */}
    </div>
  );
};
