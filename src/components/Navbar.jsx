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
    <>
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
          <button
            className="flex items-center justify-center p-2 transition-colors duration-300 rounded-md md:hidden text-foreground/80 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />

        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <button
            className="absolute top-4 right-4 p-2 transition-colors duration-300 rounded-md text-foreground/80 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <ThemeToggle className="mb-12" />

          <div className="flex flex-col items-center space-y-6 text-2xl">
            {navItems.map((item) => (
              <a
                className={cn(
                  "transition-colors duration-300 hover:text-primary text-center",
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
    </>
  );
};
