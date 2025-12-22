import { Shield, Code, Brain, FileSearch, Lock, Workflow } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Application Security Assessment",
    description: "Comprehensive security evaluations of web, mobile, and API applications. Identify vulnerabilities before attackers do through manual penetration testing and automated scanning, delivering actionable remediation guidance aligned with industry standards."
  },
  {
    icon: Code,
    title: "Developer Security Awareness",
    description: "Hands-on Capture The Flag (CTF) sessions designed to elevate security awareness through practical exploitation challenges. Leverage platforms like HackTheBox and TryHackMe to train development teams in identifying and mitigating real-world vulnerabilities, building a security-first mindset from the code up."
  },
  {
    icon: Brain,
    title: "AI & LLM Security",
    description: "Specialized security assessments for AI-powered applications and Large Language Model implementations. Protect against prompt injection, data leakage, and model manipulation using frameworks like OWASP Top 10 for LLMs, MITRE ATLAS, and emerging AI security standards."
  },
  {
    icon: Workflow,
    title: "DevSecOps Integration",
    description: "Embed security seamlessly into your CI/CD pipeline. Design and implement automated security testing, vulnerability management workflows, and security gates that enable rapid development without compromising application resilience."
  },
  {
    icon: FileSearch,
    title: "Threat Modeling",
    description: "Systematic identification of potential threats and attack vectors specific to your application architecture. Leverage methodologies like STRIDE and PASTA to prioritize security investments and design robust defensive measures from the ground up."
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory landscapes including CRA, NIS2, DORA, and the EU AI Act. Ensure your applications meet mandatory security requirements through gap analysis, control implementation, and compliance documentation support."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 section-black relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-foreground mb-16 md:mb-24">
          SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 border border-border hover:border-accent/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon
                className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
