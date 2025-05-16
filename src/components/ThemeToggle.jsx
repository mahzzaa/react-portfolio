import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
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
      onClick={toggleTheme}
      className={cn(
        " fixed max-sm:hidden top-5 z-50 right-6 rounded-full  transition-colors duration-300 ease-in-out",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-primary" />
      )}
    </button>
  );
};
