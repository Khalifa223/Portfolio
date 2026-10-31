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
        className={`mx-auto max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 h-14 md:h-16 ${
          isScrolled
            ? "bg-card/75 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
            : "bg-card/50 backdrop-blur-md border border-white/5 shadow-lg shadow-black/10"
        }`}
      >
        <Link
          href="/"
          className="font-bold text-lg md:text-xl tracking-tight text-foreground flex items-center gap-1.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-400 group-hover:scale-125 transition-transform" />
          <span>{siteConfig.name.split(" ")[0]}</span>
          <span className="text-amber-500 font-semibold">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" role="navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-amber-400"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20 shadow-sm shadow-amber-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="/cv.pdf"
            target="_blank"
            download
            className="hidden sm:inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs md:text-sm font-semibold shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.03] transition-all duration-300"
          >
            <Download className="h-3.5 w-3.5 stroke-[2.5]" />
            <span>Mon CV</span>
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
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/20"
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
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/20"
                >
                  <Download className="h-4 w-4" />
                  Télécharger mon CV
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
