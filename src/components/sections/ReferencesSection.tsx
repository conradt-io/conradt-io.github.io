import { ExternalLink, FileAudio, Github, KanbanSquare, MousePointer2, PackageOpen, ShieldCheck } from "lucide-react";

const featuredProjects = [
  {
    icon: PackageOpen,
    title: "Tektite",
    repo: "mathiasconradt/tektite",
    href: "https://github.com/mathiasconradt/tektite",
    language: "JavaScript",
    text: "Minimalistic, lightweight Markdown knowledge base app for macOS and Linux. A local-first, open-source Obsidian alternative: folders, Markdown, live preview, graph, Git-friendly storage.",
  },
  {
    icon: MousePointer2,
    title: "Screen Cursor",
    repo: "mathiasconradt/screencursor",
    href: "https://github.com/mathiasconradt/screencursor",
    language: "Swift",
    text: "Native macOS menu bar app that draws a configurable highlight circle around the cursor, with an optional mouse jiggler function for demos, recordings, and visibility.",
  },
];

const pinnedProjects = [
  {
    icon: KanbanSquare,
    title: "KanbanQube",
    href: "https://github.com/mathiasconradt/kanbanqube",
    text: "Local-first Kanban board for solo users and very small teams, stored as regular files in a vault folder.",
  },
  {
    icon: FileAudio,
    title: "pdf2audio",
    href: "https://github.com/mathiasconradt/pdf2audio",
    text: "Convert PDF documents to audio using fully local, offline text-to-speech. No cloud, no API keys.",
  },
  {
    icon: ShieldCheck,
    title: "CycloneDX Sunshine for SonarQube",
    href: "https://github.com/mathiasconradt/sonarqube-cdx-sunshine-plugin",
    text: "SonarQube plugin that brings CycloneDX Sunshine SBOM visualization directly into SonarQube projects.",
  },
];

export const ReferencesSection = () => {
  return (
    <section id="references" className="relative px-6 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="rounded-[28px] border border-white/10 bg-[#111318]/42 p-8 backdrop-blur-md md:p-10">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-accent/80">Open source</p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Tools that stay local, useful, and yours.</h2>
            </div>
            <a
              href="https://github.com/mathiasconradt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-accent/60 hover:text-accent"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-white/10 bg-black/12 p-6 transition hover:border-accent/50 hover:bg-white/[0.04]"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <project.icon className="h-9 w-9 text-accent" />
                  <ExternalLink className="h-5 w-5 text-white/35 transition group-hover:text-accent" />
                </div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-white/45">{project.repo}</p>
                <h3 className="mb-4 text-3xl font-black tracking-[-0.04em] text-white">{project.title}</h3>
                <p className="leading-7 text-white/65">{project.text}</p>
                <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.018] px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                  {project.language}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pinnedProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-white/10 bg-black/12 p-6 transition hover:border-accent/50 hover:bg-white/[0.04]"
              >
                <project.icon className="mb-6 h-7 w-7 text-accent" />
                <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-white">{project.title}</h3>
                <p className="leading-7 text-white/60">{project.text}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.018] p-5 text-white/65">
            These projects reflect the same pattern: local-first workflows, practical tooling, open source, and independence from unnecessary cloud or account dependencies.
          </div>
        </div>
      </div>
    </section>
  );
};
