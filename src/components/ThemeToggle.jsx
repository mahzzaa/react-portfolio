import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // set the initial theme based on the user's preference or default to dark
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode if no preference is stored or is set to dark
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      if (!storedTheme) {
        localStorage.setItem("theme", "dark"); // Store the default preference
      }
    }
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
