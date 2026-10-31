"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Mail, ArrowUp } from "lucide-react";
import { Icons } from "@/components/ui/icons";

const footerNavLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
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
    <footer className="border-t border-white/10 bg-card/40 backdrop-blur-xl relative">
      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="font-bold text-xl tracking-tight text-foreground flex items-center gap-1.5 mb-2 group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-400 group-hover:scale-125 transition-transform" />
              <span>{siteConfig.name.split(" ")[0]}</span>
              <span className="text-amber-500 font-semibold">.dev</span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-sm">
              Développeur Full Stack Web & Solutions de Données basé à Bamako (Magnambougou).
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-2">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
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
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:scale-110 transition-all ml-1"
              title="Retour en haut"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span>Conçu avec rigueur & passion</span>
            <span className="text-amber-500">•</span>
            <span>Bamako, Mali</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
