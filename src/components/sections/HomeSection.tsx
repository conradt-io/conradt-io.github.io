import { ArrowDown, Github, Linkedin, ShieldCheck, Sparkles } from "lucide-react";

export const HomeSection = () => {
  const handleScrollDown = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-[#111318]/42 p-7 shadow-2xl shadow-black/40 backdrop-blur-md md:p-12 lg:p-16">
          <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
              Mathias Conradt
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <a href="https://github.com/mathiasconradt" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-accent/60 hover:text-accent">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/mathiasconradt" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-accent/60 hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <p className="mb-6 font-mono text-sm uppercase tracking-[0.4em] text-accent/80">Independent IT Professional</p>
              <h1 className="whitespace-nowrap text-[clamp(2.15rem,7.4vw,6.75rem)] font-black leading-[0.98] tracking-[-0.065em] text-white">
                Quantum <span className="text-accent/65">/</span> AI <span className="text-accent/65">/</span> Security
              </h1>
              <p className="mt-10 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                Personal brand of <span className="text-white">Mathias CONRADT</span> — software engineer, entrepreneur, open-source builder, and application security professional working where deep technology, autonomy, and trustworthy systems meet.
              </p>
              <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/60">
                <span>28 years experience</span>
                <span className="text-white/25">·</span>
                <span>Germany-based</span>
                <span className="text-white/25">·</span>
                <span>Germany / Hong Kong / China / US experience</span>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-white/10 bg-black/12 p-5 shadow-xl shadow-black/30 md:p-6 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.018] p-4 text-accent">
                <Sparkles className="mb-4 h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-[0.28em]">Signal</span>
              </div>
              <p className="rounded-2xl border border-white/10 bg-white/[0.018] p-4 text-sm leading-6 text-white/70">Three independent focus areas. Strongest when combined.</p>
              <p className="rounded-2xl border border-white/10 bg-white/[0.018] p-4 text-sm leading-6 text-white/70">Security depth from AppSec, DevSecOps, AI/LLM risks, vulnerability research, and upcoming CVE credits.</p>
              <p className="rounded-2xl border border-white/10 bg-white/[0.018] p-4 text-sm leading-6 text-white/70">Quantum and AI as pragmatic fields for experimentation, engineering leverage, and future-proof architecture.</p>
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200 lg:col-span-4">
                <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                CVE credits pending: CVE-2026-109856 · CVE-2026-114271 · CVE-2026-114272 · Apache OFBiz authorization research
              </div>
            </div>
          </div>

          <button
            onClick={handleScrollDown}
            className="mt-14 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-accent"
          >
            Explore focus areas
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
