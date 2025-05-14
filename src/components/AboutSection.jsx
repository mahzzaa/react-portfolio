import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 hover:cursor-default select-none"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center space-x-2 ">
          About <span className="text-primary ">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">
              Fueled by curiosity and a passion for technology
            </h3>
            <p className="text-muted-foreground">
              I am a full-stack web developer dedicated to building engaging and
              robust web applications. With hands-on experience across both
              front-end and back-end, I thrive on learning new tools and
              delivering impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#projects" className="cosmic-button w-full sm:w-auto">
                See My Works
              </a>
              <a
                href="#contact"
                className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 "
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className=" gradient-border p-6 card-hover rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Full Stack Developer
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Skilled in both front-end and back-end development to
                    deliver complete solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                  <p className="text-muted-foreground text-sm">
                    Experienced in crafting intuitive and visually appealing
                    user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Problem Solver</h4>
                  <p className="text-muted-foreground text-sm">
                    Adept at tackling complex challenges and delivering
                    effective solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
