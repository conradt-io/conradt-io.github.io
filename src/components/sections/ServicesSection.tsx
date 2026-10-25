import { useState } from "react";
import { Atom, Bot, Fingerprint, Lock, Network, Shield } from "lucide-react";

const focusAreas = [
  {
    id: "quantum",
    label: "Quantum",
    icon: Atom,
    headline: "Quantum technology without the mysticism.",
    copy: "Exploring quantum computing as an engineering discipline: concepts, developer tooling, security implications, and the transition path from classical systems to quantum-aware architecture.",
    points: ["Quantum-safe thinking", "Developer enablement", "Research-to-prototype translation"],
  },
  {
    id: "ai",
    label: "AI",
    icon: Bot,
    headline: "AI as leverage — agentic, useful, and inspectable.",
    copy: "From software engineering automation to LLM application design: practical AI systems that increase independence and velocity while keeping quality, privacy, and explainability visible.",
    points: ["LLM application architecture", "Agent workflows", "Open-source experimentation"],
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    headline: "Application security from code to operating model.",
    copy: "Deep AppSec and DevSecOps experience across product security, secure SDLC, AI/LLM security, threat modeling, compliance, and vulnerability research.",
    points: ["AppSec assessments", "AI & LLM security", "DevSecOps and governance"],
  },
] as const;

const intersections = [
  { icon: Lock, title: "Quantum / Security", text: "Post-quantum readiness, cryptographic migration, and risk translation for engineering leaders." },
  { icon: Fingerprint, title: "AI / Security", text: "Prompt injection, model abuse, data leakage, secure agent design, and AI governance." },
  { icon: Network, title: "Quantum / AI", text: "New computational models, optimization patterns, and experiments that connect emerging fields." },
];

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState<(typeof focusAreas)[number]["id"]>("security");
  const active = focusAreas.find((area) => area.id === activeId) ?? focusAreas[0];
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-accent/80">Focus architecture</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Three fields. One operating system.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/65">
            Each domain stands on its own. My focus is the intersection: building, securing, and explaining Quantum, AI, and Security through practical engineering.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#111318]/42 p-4 backdrop-blur-md">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              const isActive = area.id === activeId;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveId(area.id)}
                  className={`mb-3 flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                    isActive ? "border-accent/60 bg-accent/10 text-white shadow-[0_0_30px_rgba(63,212,230,0.12)]" : "border-white/10 bg-white/[0.018] text-white/60 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isActive ? "text-accent" : "text-white/40"}`} />
                  <span className="font-mono text-sm uppercase tracking-[0.25em]">{area.label}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#111318]/42 p-8 backdrop-blur-md md:p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
              <ActiveIcon className="h-8 w-8" />
            </div>
            <h3 className="mb-5 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">{active.headline}</h3>
            <p className="max-w-3xl text-lg leading-8 text-white/70">{active.copy}</p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {active.points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-black/10 p-4 font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {intersections.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-white/10 bg-black/12 p-6 backdrop-blur-md transition hover:border-accent/40 hover:bg-white/[0.04]">
              <item.icon className="mb-5 h-7 w-7 text-accent" />
              <h3 className="mb-3 font-mono text-sm uppercase tracking-[0.22em] text-white">{item.title}</h3>
              <p className="leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
