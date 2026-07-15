"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expériences" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
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
        if (rect.top <= 100) {
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter text-primary z-50 relative"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-foreground">.dev</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" role="navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:text-primary ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary/5 rounded-lg"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/cv.pdf"
            target="_blank"
            download
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Mon CV
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors z-50 relative"
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-background/95 backdrop-blur-xl lg:hidden z-40"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 flex flex-col gap-3"
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  download
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger mon CV
                </a>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-border bg-card font-medium transition-all duration-300 hover:bg-muted"
                >
                  Me contacter
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
