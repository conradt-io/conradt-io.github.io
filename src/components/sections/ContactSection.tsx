import { Mail, MapPin, ExternalLink, Linkedin, Github, Phone } from "lucide-react";
import mathiasImage from "@/assets/mathias_themed.png";

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
    <section id="contact" className="py-24 md:py-32 section-teal relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-foreground mb-16 md:mb-20">
          CONTACT
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex gap-6 md:gap-8">
            <img
              src={mathiasImage}
              alt="Mathias Conradt"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0 border-2 border-accent transition-all duration-300 hover:scale-110 hover:border-accent/80 hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)]"
            />
            <div>
              <h3 className="font-display text-3xl md:text-4xl tracking-wide text-accent mb-6">
                MATHIAS CONRADT
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/90 text-lg">
                      Obere Burghalde 76/1<br />
                      71229 Leonberg<br />
                      Germany
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:info@conradt.io"
                  className="flex items-center gap-4 group hover:text-accent transition-colors"
                >
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/90 text-lg group-hover:text-accent transition-colors">
                    info@conradt.io
                  </span>
                  <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="tel:+4971523834605"
                  className="flex items-center gap-4 group hover:text-accent transition-colors"
                >
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/90 text-lg group-hover:text-accent transition-colors">
                    +49 179 2976974
                  </span>
                  <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://linkedin.com/in/mathiasconradt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/mathiasconradt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://x.com/mathiasconradt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
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
              className="inline-flex items-center gap-4 px-10 py-5 border-2 border-accent bg-accent/10 hover:bg-accent hover:text-accent-foreground font-display text-xl tracking-widest transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground text-sm">
            © 1998-{new Date().getFullYear()} Mathias Conradt. All rights reserved. <span className="mx-2">|</span> <a href="/impressum" className="hover:text-accent transition-colors">Impressum</a> <span className="mx-2">|</span> <a href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</a>
          </p>
        </div>
      </div>
    </section >
  );
};
