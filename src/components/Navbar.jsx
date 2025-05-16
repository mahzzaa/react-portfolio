import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";
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
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between mx-auto ">
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
        <div className="hidden space-x-8 md:flex">
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
            >
              {item.name}
            </a>
          ))}
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
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
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
          <ThemeToggle />

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
                onClick={() => setIsMenuOpen(false)}
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
