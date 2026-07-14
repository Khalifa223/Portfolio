import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Mail } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tighter text-primary mb-4 block">
              {siteConfig.name.split(" ")[0]}
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Compétences</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projets</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Expériences</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Développement Frontend</span></li>
              <li><span className="text-muted-foreground">Développement Backend</span></li>
              <li><span className="text-muted-foreground">Développement Mobile</span></li>
              <li><span className="text-muted-foreground">Consulting SEO</span></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{siteConfig.contact.email}</li>
              <li className="text-muted-foreground">{siteConfig.contact.phone}</li>
              <li className="text-muted-foreground">{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
