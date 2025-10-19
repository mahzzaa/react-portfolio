import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const variantClasses = {
  inline:
    "flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-background/70 text-foreground shadow-sm hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
  floating:
    "fixed top-5 right-6 z-50 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-background/80 text-foreground shadow-lg backdrop-blur",
};

export const ThemeToggle = ({ variant = "inline", className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // always set the initial theme to dark
  useEffect(() => {
    // Always set dark mode regardless of stored preference
    setIsDarkMode(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark"); // Store dark theme as preference
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); //store the theme in local storage
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); //store the theme in local storage
      setIsDarkMode(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "transition-colors duration-300 ease-in-out",
        variantClasses[variant] || variantClasses.inline,
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};
