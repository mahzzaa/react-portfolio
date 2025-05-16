import { useState } from "react";
import { cn } from "../lib/utils";

// Skill descriptions for tooltips
const skillDescriptions = {
  "Vue.js": "A progressive JavaScript framework for building user interfaces.",
  Svelte:
    "A compiler that builds fast, minimal web apps with no runtime overhead.",
  SvelteKit:
    "A full-stack framework for building web applications with Svelte.",
  Skeleton:
    "A UI toolkit combining Svelte and Tailwind CSS for modern web design.",
  "Tailwind CSS":
    "A utility-first CSS framework for rapidly building custom user interfaces.",
  HTML: "The standard markup language for structuring web content.",
  CSS: "A style sheet language for describing the presentation of web documents.",
  JavaScript:
    "A programming language that enables dynamic and interactive web pages.",
  React: "A JavaScript library for building interactive user interfaces.",
  Bootstrap:
    "A popular CSS framework for building responsive and mobile-first websites.",
  Sass: "A CSS preprocessor that adds variables, nesting, and other features to CSS.",
  TypeScript:
    "A superset of JavaScript that adds static typing for better tooling and scalability.",
  GSAP: "A high-performance JavaScript library for creating advanced animations.",
  "Three.js":
    "A JavaScript library for creating and displaying 3D graphics in the browser.",
  PostgreSQL:
    "A powerful open-source relational database system with advanced features.",
  MySQL: "A widely-used open-source relational database management system.",
  GraphQL:
    "A query language and runtime for APIs, enabling flexible data fetching.",
  "REST API":
    "An architectural style for building web services based on HTTP requests.",
  Git: "A distributed version control system for tracking and managing source code changes.",
  GitHub: "A platform for hosting and collaborating on Git repositories.",
  Figma: "A cloud-based collaborative design tool for UI and UX design.",
  Procreate: "A professional digital illustration and painting app for iPad.",
  Aseprite: "A pixel art editor for creating 2D sprites and animations.",
  GIMP: "A free and open-source image editor for photo retouching and graphics creation.",
  Blender:
    "An open-source 3D creation suite for modeling, animation, rendering, and more.",
};

const skills = [
  // name , level/number based from 100 , category
  // frontend
  // svelte , skeleton, lucide icons ,

  //   vue.js
  { name: "Vue.js", level: 60, category: "frontend" },
  // { name: "Nuxt.js", level: 80, category: "frontend" },
  // { name: "Vite", level: 80, category: "frontend" },
  //
  { name: "Svelte", level: 99, category: "frontend" },
  { name: "SvelteKit", level: 99, category: "frontend" },
  { name: "Skeleton", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "HTML", level: 100, category: "frontend" },
  { name: "CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  // {name: "Next.js", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 100, category: "frontend" },
  { name: "Sass", level: 95, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  // animated CSS
  { name: "GSAP", level: 90, category: "frontend" },
  { name: "Three.js", level: 70, category: "frontend" },

  // backend
  // svelte kit ,
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "REST API", level: 80, category: "backend" },

  // tools
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 100, category: "tools" },
  { name: "Figma", level: 90, category: "tools" },
  // tools for design ui/ux
  // {name: "Adobe XD", level: 70, category: "tools" },
  // {name: "Adobe Illustrator", level: 70, category: "tools" },
  // {name: "Adobe Photoshop", level: 70, category: "tools" },
  // {name: "Adobe After Effects", level: 70, category: "tools" },

  // logo design
  // {name: "Adobe XD", level: 70, category: "tools" },
  // {name: "Adobe After Effects", level: 70, category: "tools" },
  // {name: "Adobe Premiere Pro", level: 70, category: "tools" },

  // {name: "Photoshop", level: 70, category: "tools" },
  // {name: "Illustrator", level: 70, category: "tools" },
  // {name: "Canva", level: 70, category: "tools" },
  { name: "Procreate", level: 100, category: "tools" },
  { name: "Aseprite", level: 70, category: "tools" },
  { name: "GIMP", level: 70, category: "tools" },
  // 3d design
  { name: "Blender", level: 60, category: "tools" },
  // {name: "Unity", level: 70, category: "tools" },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Tools", value: "tools" },
];

export const SkillsSection = () => {
  // activeCategory useState
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Tooltip state
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsTransitioning(false);
      }, 300); // Match the animation duration
    }
  };

  // Tooltip handlers
  const showTooltip = (e, skillName) => {
    const description =
      skillDescriptions[skillName] || `Details about ${skillName}`;

    // Calculate position relative to mouse
    const offsetX = 15; // offset from cursor
    const offsetY = 10;

    // Ensure tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const tooltipWidth = 250; // max-width from the styles

    // Adjust X position if it would go beyond right edge of viewport
    let x = e.clientX + offsetX;
    if (x + tooltipWidth > viewportWidth) {
      x = e.clientX - tooltipWidth - offsetX;
    }

    setTooltipInfo({
      visible: true,
      content: description,
      x: x,
      y: e.clientY - offsetY,
    });
  };

  const hideTooltip = () => {
    setTooltipInfo({
      ...tooltipInfo,
      visible: false,
    });
  };

  // filter skills based on activeCategory
  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") {
      return true;
    }
    return skill.category === activeCategory;
  });
  return (
    <section id="skills" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          My
          <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={cn(
                "px-5 py-2 rounded-full text-sm capitalize transition-transform duration-300",
                activeCategory === category.value
                  ? "bg-primary text-black dark:text-primary-foreground scale-105"
                  : "bg-gray-800/30 backdrop-blur-md ttext-gray-300 hover:bg-gray-700 hover:text-white"
              )}
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div
          className={cn(
            "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100"
          )}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="relative p-6 rounded-lg shadow-xs bg-card/50 backdrop-blur-lg card-hover"
              onMouseMove={(e) => showTooltip(e, skill.name)}
              onMouseLeave={hideTooltip}
            >
              <div className="mb-4 text-left">
                <h3 className="mb-2 font-semibold ">{skill.name}</h3>
              </div>
              <div className="relative w-full h-2 overflow-visible bg-gray-700 rounded-full">
                {/* Move the pointer number above the bar */}
                <span
                  className="absolute -top-10"
                  style={{
                    left: `calc(${skill.level}% - 1.5rem)`,
                    minWidth: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  <span
                    className="relative inline-block px-2 py-1 text-xs font-semibold text-white rounded pointer-events-none bg-primary"
                    style={{ borderRadius: "6px" }}
                  >
                    {skill.level}%
                    <span
                      className="absolute left-1/2 -bottom-2.5 -translate-x-1/2 w-0 h-0 dark:[--tooltip-color:#9282cb]"
                      style={{
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "8px solid var(--tooltip-color, #d1d5db)", // light gray in light mode
                        content: '""',
                        display: "block",
                      }}
                    />
                  </span>
                </span>
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow-1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Floating tooltip that follows mouse position */}
        {tooltipInfo.visible && (
          <div
            className="fixed z-50 px-4 py-3 text-sm font-medium border rounded-lg shadow-lg pointer-events-none bg-card/60 backdrop-blur-sm border-primary/30 text-foreground"
            style={{
              left: `${tooltipInfo.x}px`,
              top: `${tooltipInfo.y}px`,
              transform: "translate(0, -100%)",
              maxWidth: "250px",
              animation: "fadeIn 0.2s ease-out",
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="flex flex-col gap-1">
              <div className="text-sm text-primary/80">About this skill:</div>
              <div>{tooltipInfo.content}</div>
            </div>
            <div className="absolute bottom-0 w-3 h-3 rotate-45 -translate-x-1/2 translate-y-1/2 border-b border-r left-1/2 bg-card/90 border-primary/30" />
          </div>
        )}
      </div>
    </section>
  );
};
