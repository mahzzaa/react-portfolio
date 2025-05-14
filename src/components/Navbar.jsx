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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      <div className="container mx-auto flex justify-between items-center ">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 `">
            <span className="text-2xl text-foreground text-glow">My</span> {""}
            <span className="text-2xl text-accent font-bold">Portfolio</span>
          </span>
        </a>
        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              key={item.name}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile nav */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-primary transition-colors duration-300"
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
            className="absolute top-5 right-5 p-2 rounded-md text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>

          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
