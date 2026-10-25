import { Mail, MapPin, ExternalLink, Linkedin, Github, Phone } from "lucide-react";
import mathiasImage from "@/assets/mathias_cartoonized.jpeg";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
export const ContactSection = () => {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-accent/80">Contact</p>
        <h2 className="mb-16 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Let’s compare notes.</h2>

        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-[#111318]/42 p-8 backdrop-blur-md md:grid-cols-2 md:p-10 lg:gap-20">
          <div className="flex gap-6 md:gap-8">
            <img
              src={mathiasImage}
              alt="Mathias Conradt"
              className="h-24 w-24 flex-shrink-0 rounded-3xl border border-accent/40 object-cover transition-all duration-300 hover:scale-105 hover:border-accent/80 hover:shadow-[0_0_28px_rgba(63,212,230,0.35)] md:h-32 md:w-32"
            />
            <div>
              <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.28em] text-accent">
                MATHIAS CONRADT
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-white/75">
                    Greater Stuttgart area incl. Leonberg and Gerlingen
                  </span>
                </div>

                <a
                  href="mailto:info@conradt.io"
                  className="group flex items-center gap-4 transition-colors hover:text-accent"
                >
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-white/75 transition-colors group-hover:text-accent">
                    info@conradt.io
                  </span>
                  <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="tel:+4971523834605"
                  className="group flex items-center gap-4 transition-colors hover:text-accent"
                >
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-white/75 transition-colors group-hover:text-accent">
                    +49 7152 3834605
                  </span>
                  <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://linkedin.com/in/mathiasconradt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-white/[0.018] p-3 transition-all duration-300 hover:border-accent hover:bg-accent/10"
                  >
                    <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/mathiasconradt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-white/[0.018] p-3 transition-all duration-300 hover:border-accent hover:bg-accent/10"
                  >
                    <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://x.com/mathiasconradt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-white/[0.018] p-3 transition-all duration-300 hover:border-accent hover:bg-accent/10"
                  >
                    <XIcon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <a
              href="mailto:info@conradt.io"
              className="group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white px-10 py-5 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/10 pt-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-white/45">
            © 1998-{new Date().getFullYear()} Mathias Conradt. All rights reserved. <span className="mx-2">|</span> <a href="/impressum" className="hover:text-accent transition-colors">Impressum</a> <span className="mx-2">|</span> <a href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</a>
          </p>
        </div>
      </div>
    </section >
  );
};
