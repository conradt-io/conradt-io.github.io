import { CheckCircle } from "lucide-react";

const highlights = [
  "DevSecOps & AppSec",
  "OWASP SAMM & DSOMM",
  "Vendor & Tool Selection (SAST, SCA, DAST, ASPM, CSPM)",
  "CRA Compliance (CRA, DORA, NIS2, EU AI Act)",
  "OWASP Top 10 for LLMs & MITRE ATLAS",
  "Threat Modeling"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-teal relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 transform skew-x-12" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-foreground mb-16 md:mb-20">
          ABOUT
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              As a <span className="text-accent font-medium">Principal Application Security Consultant</span>, I specialize in securing custom software applications across the entire stack. My approach centers on a robust <span className="text-accent font-medium">DevSecOps philosophy</span>, embedding security directly into the engineering lifecycle to ensure resilience without sacrificing velocity.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              Beyond traditional vulnerabilities, I help organizations navigate the modern attack surface by <span className="text-accent font-medium">securing AI and LLM implementations</span> against emerging threats.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              By applying frameworks like the <span className="text-accent font-medium">OWASP Top 10 for LLMs</span> and <span className="text-accent font-medium">MITRE ATLAS</span> alongside deep-dive threat modeling and pipeline automation, I ensure that innovation and security move at the same pace, while maintaining alignment with key regulatory mandates, such as <span className="text-accent font-medium">CRA</span> (Cyber Resilience Act), <span className="text-accent font-medium">DORA</span> (Digital Operational Resilience Act), <span className="text-accent font-medium">NIS2</span> (Network Information Security), <span className="text-accent font-medium">EU AI Act</span>.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mt-8">
              With <span className="text-accent font-medium">28 years of experience</span> spanning software engineering, consulting, IT project management, and application security, I bring a comprehensive technical background backed by industry-leading <span className="text-accent font-medium">certifications</span>, including AWS, Google, PRINCE2, ITIL, and Scrum.
            </p>
          </div>

          <div className="bg-card/40 border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-accent mb-8">
              EXPERTISE & WORKSHOPS
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-accent mb-8 mt-12">
              CURRICULUM VITAE
            </h3>

            <p className="text-lg text-foreground/90 leading-relaxed">
              For a full curriculum vitae, see my <a href="https://linkedin.com/in/mathiasconradt" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">LinkedIn profile</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
