"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Mail, ArrowUp } from "lucide-react";
import { Icons } from "@/components/ui/icons";

const footerNavLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "Démarche" },
  { href: "#skills", label: "Expertise" },
  { href: "#services", label: "Solutions" },
  { href: "#projects", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: <Icons.github className="h-4 w-4" />,
    href: siteConfig.links.github,
    label: "GitHub",
  },
  {
    icon: <Icons.linkedin className="h-4 w-4" />,
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    href: `mailto:${siteConfig.contact.email}`,
    label: "Email",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#090a0d] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="flex items-center gap-2 mb-2 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="font-editorial text-2xl tracking-wider uppercase font-semibold text-foreground group-hover:text-[#d4af37] transition-colors">
                Fatoma N’Daou
              </span>
            </Link>
            <p className="text-xs text-muted-foreground font-light max-w-sm">
              Ingénieur en Génie Informatique & Développeur Full Stack · Structurer. Sécuriser. Sublimer.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#090a0d] transition-all ml-1"
              title="Retour en haut"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left font-light">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Conçu avec rigueur & excellence technique</span>
            <span className="text-[#d4af37]">•</span>
            <span>Bamako, Mali</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
