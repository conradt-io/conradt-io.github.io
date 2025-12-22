import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "References", href: "#references" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-display text-2xl md:text-3xl tracking-wider text-foreground group transition-colors flex items-center gap-4"
          >
            <div className="relative w-auto h-8 md:h-10">
              <img
                src="/conradt-logo-vector-white.png"
                alt="Logo"
                className="h-full w-auto transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/conradt-logo-vector-yellow.png"
                alt="Logo Hover"
                className="h-full w-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <span className="group-hover:text-accent transition-colors">Mathias Conradt</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="font-display text-lg tracking-widest text-foreground/80 hover:text-accent nav-link-hover transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="font-display text-2xl tracking-widest text-foreground/80 hover:text-accent transition-colors uppercase animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
