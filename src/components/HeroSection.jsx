import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
            <span className="opacity-0 text-primary animate-fade-in-delay-1 transition-opacity duration-1000">
              Hello, I'm
            </span>{" "}
            <span className="text-accent opacity-0 text-glow animate-fade-in-delay-2 transition-opacity duration-1000">
              Moon
            </span>{" "}
            <span className="text-accent opacity-0 animate-fade-in-delay-3 text-primary transition-opacity duration-1000">
              like
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 transition-opacity duration-1000">
            I'm a <span className="text-accent">Full-stack web developer</span>{" "}
            based in <span className="text-accent">Turkey</span>.
            <br />I specialize in creating beautiful and functional web
            applications
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-8">
            <a className=" cosmic-button" href="#projects">
              View my work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground mb-1 ">Scroll</span>
        <ArrowDown className="h-6 w-6 text-accent text-primary" />
      </div>
    </section>
  );
};
