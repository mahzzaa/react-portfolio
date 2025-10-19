import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { trackProjectView, trackEvent } from "../lib/analytics";

const projects = [
  // Carefully ordered: 1) BirbNest 2) Open Power 3) Tradle 4) Hollow Knight 5) Titanium Apple 6) Real Estate 7) Two Robots 8) School
  {
    id: 0,
    name: "The Birb Nest",
    description:
      "A sleek platform for 'TheBirbNest' crypto community, offering resources, insights, and tools. Built with Svelte, SvelteKit, Tailwind CSS, and Skeleton.",
    image: "/theBirbNest.png",
    tags: ["Svelte", "SvelteKit", "Tailwind CSS", "Skeleton"],
    githubUrl: "",
    demoUrl: "https://www.thebirbnest.com/",
  },
  {
    id: 1,
    name: "OpenPower Website",
    description:
      "Built a fast, responsive marketing site for Open Power (UK) using Svelte + Tailwind + Skeleton—clear value prop, clean UI, and lead-capture pages ready to scale.",
    image: "/open-power.png",
    tags: ["Svelte", "Skeleton", "Tailwind CSS"],
    githubUrl: "",
    demoUrl: "https://open-power.co.uk/",
  },
  {
    id: 2,
    name: "Tradle.online",
    description:
      "Built Tradle—a gamified web app for daily trading challenges using real market data and TradingView charts; users set entry/stop/target and simulate trades risk-free to build skills.",
    image: "/tradle.png",
    tags: ["Svelte", "Skeleton", "Tailwind CSS"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 3,
    name: "Hollow Knight",
    description:
      "A website inspired by the Hollow Knight game, built with React, Tailwind CSS, and GSAP for smooth animations and responsive design.",
    image: "/hollowKnight.jpeg",
    tags: ["React", "GSAP", "Tailwind CSS"],
    githubUrl: "https://github.com/mahzzaa/hollowKnight",
    demoUrl: "https://hollow-knight-theta.vercel.app/",
  },
  {
    id: 4,
    name: "Titanium Apple",
    description:
      "An immersive Apple product showcase with smooth 3D interactions and animations. Developed with React, Three.js, Tailwind CSS, and GSAP.",
    image: "/apple.png",
    tags: ["React", "Three.js", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/mahzzaa/apple-website",
    demoUrl: "https://apple-website-kappa-ten.vercel.app/",
  },
  {
    id: 5,
    name: "Real Estate",
    description:
      "A modern platform to browse, rent, and buy houses, villas, and apartments. Built with HTML, CSS, JavaScript, and animations.",
    image: "/architecture.png",
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    githubUrl: "https://github.com/mahzzaa/architecture",
    demoUrl: "https://architecture-olive.vercel.app/",
  },
  {
    id: 6,
    name: "Two Robots",
    description:
      "A clean and responsive website for the 'Two Robots' startup, designed with HTML, CSS, Tailwind CSS, and JavaScript.",
    image: "/robots.png",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/mahzzaa/twoRobots",
    demoUrl: "https://two-robots.vercel.app/",
  },
  {
    id: 7,
    name: "School Website",
    description:
      "A website that we made during our front-end course made with HTML, CSS, and JavaScript, featuring a responsive layout.",
    image: "/education.png",
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    githubUrl: "https://github.com/mahzzaa/educationWebsite",
    demoUrl: "https://education-website-gules.vercel.app/",
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="mb-12 text-glow ">
          Here are some of my projects that I have worked on. You can find more
          on my GitHub.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 overflow-hidden rounded-lg shadow-xs card-hover bg-card/50 backdrop-blur-lg group "
              onMouseEnter={() => trackProjectView(project.name)}
            >
              <div className="relative w-full h-48 overflow-hidden transition-shadow duration-500 rounded-md shadow-lg group-hover:shadow-xl">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
                <div className="absolute z-10 top-3 right-3">
                  {project.demoUrl ? (
                    <span className="flex items-center gap-1 px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-emerald-500/30 text-emerald-100 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-emerald-400 animate-ping"></span>
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                      </span>
                      Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-slate-900/40 text-slate-200/80 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                      <span className="inline-flex w-2 h-2 rounded-full bg-slate-500"></span>
                      Upcoming
                    </span>
                  )}
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-48 transition-transform duration-500 rounded-lg group-hover:scale-110 "
                />
              </div>
              <div className="p-6 px-1">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-[10px] font-thin border rounded-full text-secondary-foreground bg-secondary border-secondary opacity-60"
                      style={{
                        textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 text-xl font-semibold">{project.name}</h3>
                <p className="h-16 mb-10 text-xs text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex justify-between w-full space-x-3 ">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 mr-2 text-sm font-semibold rounded text-foreground bg-primary/40 hover:bg-primary/80"
                        onClick={() =>
                          trackEvent("project_github_click", {
                            project: project.name,
                          })
                        }
                      >
                        <GithubIcon className="inline-block w-4 h-4 mr-1" />
                        <p>GitHub</p>{" "}
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center px-4 py-2 mr-2 text-sm font-semibold rounded cursor-not-allowed text-foreground/50 bg-primary/40 opacity-80"
                      >
                        <GithubIcon className="inline-block w-4 h-4 mr-1" />
                        <p>GitHub</p>{" "}
                      </button>
                    )}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded text-foreground bg-primary/40 hover:bg-primary/80"
                        onClick={() =>
                          trackEvent("project_demo_click", {
                            project: project.name,
                          })
                        }
                      >
                        <ExternalLink className="inline-block w-4 h-4 mr-1" />
                        <p>Live Preview</p>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded cursor-not-allowed text-foreground/50 bg-primary/40 opacity-80"
                      >
                        <ExternalLink className="inline-block w-4 h-4 mr-1" />
                        <p>Live Preview</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* check my github */}
        <div className="flex items-center justify-center mt-12">
          <a
            href="https://github.com/mahzzaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mx-auto cosmic-button w-fit"
            onClick={() => trackEvent("profile_github_click")}
          >
            Check out my GitHub{" "}
            <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
