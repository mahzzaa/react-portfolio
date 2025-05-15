import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative flex flex-wrap items-center justify-between px-4 py-6 pt-8 mt-12 border-t bg-card border-border">
      <div className="container max-w-5xl mx-auto text-center">
        <p className="text-sm text-glow text-muted-foreground">
          &copy; {new Date().getFullYear()} MoonLike. All rights reserved.
        </p>
        <p className="text-sm text-glow">Made with ❤️</p>
      </div>

      <div className="absolute bottom-1/3 right-4">
        <a href="#Hero">
          <ArrowUp className="text-sm text-glow animate-bounce" />
        </a>
      </div>
    </footer>
  );
};
