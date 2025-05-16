import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  // id, title,description,image ,tags[what it made with], github url, demo url
  // a website for a vryptocurrency commiunity which name is "TheBirbNest" made by svelte , sveltekit , tailwindcss ,skeleton
  {
    id: 0,
    name: "The Birb Nest",
    description:
      "A sleek platform for 'TheBirbNest' crypto community, offering resources, insights, and tools. Built with Svelte, SvelteKit, Tailwind CSS, and Skeleton.",
    image: "../../public/theBirbNest.png",
    tags: ["Svelte", "SvelteKit", "Tailwind CSS", "Skeleton"],
    githubUrl: "",
    demoUrl: "https://www.thebirbnest.com/",
  },
  {
    // apple selling phone website, made with react , three js , tailwind css , gsap
    id: 1,
    name: "Apple Store",
    description:
      "An immersive Apple product showcase with smooth 3D interactions and animations. Developed with React, Three.js, Tailwind CSS, and GSAP.",
    image: "../../public/apple.png",
    tags: ["React", "Three.js", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/mahzzaa/apple-website",
    demoUrl: "https://apple-website-kappa-ten.vercel.app/",
  },
  {
    //    a website for renting and buying houses , villas and apartments made by html , css , javascript , animation
    id: 2,
    name: "Real Estate",
    description:
      "A modern platform to browse, rent, and buy houses, villas, and apartments. Built with HTML, CSS, JavaScript, and animations.",

    image: "../../public/architecture.png",
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    githubUrl: "https://github.com/mahzzaa/architecture",
    demoUrl: "https://architecture-olive.vercel.app/",
  },
  {
    // an education website for students and their family to get information about their school and teachers made by html , css , javascript

    id: 3,
    name: "School Website",
    description:
      "An informative school website for students and families to access news, schedules, and teacher profiles. Created with HTML, CSS, and JavaScript.",
    image: "../../public/education.png",
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    githubUrl: "https://github.com/mahzzaa/educationWebsite",
    demoUrl: "https://education-website-gules.vercel.app/",
  },
  {
    //  a website for an startup company named"two Robots" made by html , css, tailwindcss , javascript
    id: 4,
    name: "Two Robots",
    description:
      "A clean and responsive website for the 'Two Robots' startup, designed with HTML, CSS, Tailwind CSS, and JavaScript.",
    image: "../../public/robots.png",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/mahzzaa/twoRobots",
    demoUrl: "https://two-robots.vercel.app/",
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
            >
              <div className="relative w-full h-48 overflow-hidden transition-shadow duration-500 rounded-md shadow-lg group-hover:shadow-xl">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
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
                      style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.8)" }}
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
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded text-foreground bg-primary/40 hover:bg-primary/80"
                    >
                      <ExternalLink className="inline-block w-4 h-4 mr-1" />
                      <p>Live Preview</p>{" "}
                    </a>
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
          >
            Check out my GitHub{" "}
            <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
