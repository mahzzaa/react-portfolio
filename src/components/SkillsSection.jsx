import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  // name , level/number based from 100 , category
  // frontend
  // svelte , skeleton, lucide icons ,

  //   vue.js
  { name: "Vue.js", level: 80, category: "frontend" },
  // { name: "Nuxt.js", level: 80, category: "frontend" },
  // { name: "Vite", level: 80, category: "frontend" },
  //
  { name: "Svelte", level: 80, category: "frontend" },
  { name: "SvelteKit", level: 80, category: "frontend" },
  { name: "Skeleton", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  // {name: "Next.js", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 70, category: "frontend" },
  { name: "Sass", level: 70, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  // animated CSS
  { name: "GSAP", level: 70, category: "frontend" },
  { name: "Three.js", level: 70, category: "frontend" },

  // backend
  // svelte kit ,
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "REST API", level: 80, category: "backend" },

  // tools
  { name: "Git", level: 80, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
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
  { name: "Procreate", level: 70, category: "tools" },
  { name: "Aseprite", level: 70, category: "tools" },
  { name: "GIMP", level: 70, category: "tools" },
  // 3d design
  { name: "Blender", level: 70, category: "tools" },
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
  const [activeCategory, setActiveCategory] = useState("all");

  // vue.js
  //  { name: "Vue.js", level: 80, category: "frontend" },
  // { name: "Nuxt.js", level: 80, category: "frontend" },
  // { name: "Vite", level: 80, category: "frontend" },
  const [isTransitioning, setIsTransitioning] = useState(false);
  //
  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsTransitioning(false);
      }, 300); // Match the animation duration
    }
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
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-gray-800/30 backdrop-blur-md text-gray-300 hover:bg-gray-700 hover:text-white"
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
              className="p-6 rounded-lg shadow-xs bg-card/50 backdrop-blur-lg card-hover"
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
                      className="absolute left-1/2 -bottom-2.5 -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "8px solid #9282cb", // match bg-primary
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
      </div>
    </section>
  );
};
