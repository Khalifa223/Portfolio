"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Heart } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { motion } from "framer-motion";

const footerNavLinks = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expériences" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: <Icons.github className="h-5 w-5" />,
    href: siteConfig.links.github,
    label: "GitHub",
  },
  {
    icon: <Icons.linkedin className="h-5 w-5" />,
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <Icons.twitter className="h-5 w-5" />,
    href: siteConfig.links.twitter,
    label: "X (Twitter)",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: `mailto:${siteConfig.contact.email}`,
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-bold text-xl tracking-tighter text-primary mb-4 block"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Développeur Full Stack passionné, spécialisé dans la création
              d&apos;applications web et mobiles modernes et performantes.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">
              Liens utiles
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  download
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Télécharger le CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-muted-foreground">
                {siteConfig.contact.phone}
              </li>
              <li className="text-muted-foreground">
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
          <p className="flex items-center gap-1">
            © {currentYear} {siteConfig.name}. Conçu avec
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            </motion.span>
            et beaucoup de café.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-primary transition-colors text-xs"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="hover:text-primary transition-colors text-xs"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
