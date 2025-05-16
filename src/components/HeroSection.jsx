import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 select-none hover:cursor-default"
    >
      <div className="container z-10 max-w-4xl mx-auto text-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl ">
            <span className="transition-opacity duration-1000 opacity-0 text-primary animate-fade-in-delay-1">
              Hello, I'm
            </span>{" "}
            <span className="transition-opacity duration-1000 opacity-0 text-accent text-glow animate-fade-in-delay-2">
              Moon
            </span>{" "}
            <span className="transition-opacity duration-1000 opacity-0 text-accent animate-fade-in-delay-3 text-primary">
              like
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg transition-opacity duration-1000 opacity-0 md:text-xl text-muted-foreground animate-fade-in-delay-4">
            I'm a <span className="text-accent">Full-stack Web Developer</span>{" "}
            based in <span className="text-accent">Turkey</span>.
            <br />I build modern, responsive, and user-friendly web applications
            with attention to detail and performance.
          </p>

          <div className="pt-8 opacity-0 animate-fade-in-delay-4">
            <a className=" cosmic-button" href="#projects">
              View my work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <span className="mb-1 text-sm text-foreground ">Scroll</span>
        <ArrowDown className="w-6 h-6 text-accent text-primary" />
      </div>
    </section>
  );
};
