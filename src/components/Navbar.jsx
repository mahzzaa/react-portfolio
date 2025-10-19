import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { trackSectionView, trackEvent } from "../lib/analytics";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check which section is currently in view
      const sections = navItems.map((item) => item.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some offset)
          const offset = 100; // Adjust this value as needed
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            trackSectionView(section); // Track section view
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-40 w-full transition-all duration-300 backdrop-blur",
        isScrolled
          ? "py-3 bg-background/85 shadow-xs"
          : "py-4 bg-background/65 border-b border-border/40"
      )}
    >
      <div className="container flex items-center justify-between gap-4 px-4 mx-auto md:px-6">
        <a
          className="flex items-center text-xl font-bold text-primary"
          href="#home"
        >
          <span className="relative z-10 `">
            <span className="text-2xl text-foreground text-glow">My</span> {""}
            <span className="text-2xl font-bold text-accent">Portfolio</span>
          </span>
        </a>
        {/* desktop nav */}
        <div className="items-center hidden gap-6 md:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                className={cn(
                  "transition-colors duration-300 hover:text-primary",
                  activeSection === item.href.substring(1)
                    ? "text-primary font-bold text-glow"
                    : "text-foreground/80"
                )}
                key={item.name}
                href={item.href}
                onClick={() => trackEvent("nav_click", { section: item.name })}
              >
                {item.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
        {/* mobile nav */}
        <button
          className="flex items-center justify-center p-2 transition-colors duration-300 rounded-md md:hidden text-foreground/80 hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/70 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden ",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <button
            className="absolute p-2 transition-colors duration-300 rounded-md top-5 right-5 text-foreground/80 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <ThemeToggle className="md:hidden mb-12" />

          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                className={cn(
                  "transition-colors duration-300 hover:text-primary",
                  activeSection === item.href.substring(1)
                    ? "text-primary font-bold text-glow"
                    : "text-foreground/80"
                )}
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  trackEvent("nav_click_mobile", { section: item.name });
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
