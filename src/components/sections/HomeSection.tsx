import { ChevronDown } from "lucide-react";
import eagleBg from "../../assets/eagle.png";

export const HomeSection = () => {
  const handleScrollDown = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-teal relative overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${eagleBg})`,
        backgroundSize: '100% auto'
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-foreground mb-6 animate-fade-in-up"
        >
          MATHIAS<br />
          <span className="text-accent text-glow">CONRADT</span>
        </h1>

        <p
          className="font-display text-xl sm:text-2xl md:text-3xl tracking-widest text-cyan-400 uppercase animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Principal Application Security Consultant
        </p>

        <p
          className="font-display text-xl sm:text-2xl md:text-3xl tracking-widest text-gray-400 uppercase animate-fade-in-up mt-4"
          style={{ animationDelay: "0.2s" }}
        >
          Stuttgart // Germany
        </p>

        <div
          className="mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 border-2 border-accent/30 hover:border-accent hover:border-glow transition-all duration-300 cursor-pointer group"
            onClick={handleScrollDown}
          >
            <span className="font-display text-lg tracking-widest text-foreground/80 group-hover:text-accent transition-colors">
              EXPLORE SERVICES
            </span>
            <ChevronDown className="text-accent animate-bounce" size={24} />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};
