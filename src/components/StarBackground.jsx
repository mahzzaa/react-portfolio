import React, { useEffect, useState } from "react";

// id , size , x, y , opacity ,animation duration ->star
// id , size , x, y , delay ,animation duration -> meteor

export const StarBackground = () => {
  const [star, setStar] = useState([]);
  const [meteor, setMeteor] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode status
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      window.innerWidth * window.innerHeight * 0.0001
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.3 + 0.7, // Higher base opacity
        animationDuration: Math.random() * 6 + 1, // More varied animation durations
      });
    }
    setStar(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 7; // Increased number of meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteor(newMeteors);
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {star.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteor.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration * 0.75}s`,
          }}
        />
      ))}
    </div>
  );
};
