"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Download, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 140) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 md:pt-4 px-4 sm:px-6">
      <div
        className={`mx-auto max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-5 sm:px-7 h-14 md:h-16 ${
          isScrolled
            ? "bg-[#111319]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-[#111319]/50 backdrop-blur-md border border-white/[0.06]"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span className="font-editorial text-lg tracking-[0.12em] uppercase font-semibold text-foreground group-hover:text-[#d4af37] transition-colors">
            Fatoma N’Daou
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1.5" role="navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-[#d4af37]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#090a0d] text-xs tracking-wider uppercase font-semibold transition-all duration-300"
          >
            Échanger
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto max-w-5xl mt-2 rounded-3xl bg-card/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  download
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] font-medium text-sm tracking-wide"
                >
                  <Download className="h-4 w-4" />
                  Consulter le CV (PDF)
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
