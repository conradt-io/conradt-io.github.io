import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Software engineering and architecture",
  "Entrepreneurial product thinking",
  "Application security and DevSecOps",
  "AI/LLM security and governance",
  "Open-source building and self-hosted workflows",
  "Security research with CVE credits pending",
];

const cves = [
  {
    id: "CVE-2026-109856",
    title: "Apache OFBiz — details to be announced once the CVE record is published.",
  },
  {
    id: "CVE-2026-114272",
    title: "Apache OFBiz — details to be announced once the CVE record is published.",
  },
  {
    id: "CVE-2026-114271",
    title: "Apache OFBiz — details to be announced once the CVE record is published.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#111318]/42 p-8 backdrop-blur-md md:p-10">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-accent/80">Profile</p>
            <h2 className="mb-8 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Technical depth. Independent thinking.</h2>
            <p className="text-lg leading-8 text-white/70">
              I work best at the edge of disciplines: turning complex technology into usable systems, translating risk into engineering action, and keeping independence through hands-on building.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/70">
              My background spans software engineering, consulting, IT project management, entrepreneurship, and application security. The current direction is clear: Quantum / AI / Security — together and independently.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/12 p-8 backdrop-blur-md md:p-10">
            <h3 className="mb-8 font-mono text-sm uppercase tracking-[0.28em] text-white/70">Operating principles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.018] p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="leading-7 text-white/75">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber-200/80">Vulnerability research</p>
              <p className="mt-3 text-white/75">Upcoming CVE credits under my name for Apache OFBiz. Details will be announced after publication, following responsible disclosure practice.</p>
              <div className="mt-4 space-y-3">
                {cves.map((cve) => (
                  <div key={cve.id} className="rounded-xl border border-amber-200/10 bg-black/10 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-100">{cve.id}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{cve.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-white/60">
              For the full curriculum vitae, see my <a href="https://linkedin.com/in/mathiasconradt" target="_blank" rel="noopener noreferrer" className="text-accent transition hover:text-white">LinkedIn profile</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
