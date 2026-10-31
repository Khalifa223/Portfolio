"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Sparkles,
  MapPin,
  CheckCircle2,
  Shield,
  Zap,
  Globe2,
  Users2,
  Layers,
  Star,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/siteConfig";
import { Icons } from "@/components/ui/icons";

const corePillars = [
  {
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    title: "Code Propre & Robuste",
    desc: "Architecture modulaire, lisible, maintenable et testable.",
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-400" />,
    title: "Performance & Scalabilité",
    desc: "Optimisation des temps de rendu et des requêtes serveur.",
  },
  {
    icon: <Shield className="w-5 h-5 text-emerald-400" />,
    title: "Sécurité des Flux",
    desc: "Authentification JWT, protection des données et validation.",
  },
  {
    icon: <Users2 className="w-5 h-5 text-purple-400" />,
    title: "Sens Métier & Écoute",
    desc: "Compréhension fine des objectifs d'affaires et collaboration.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Diplômé en Génie Informatique",
    place: "Institut des Sciences Appliquées (ISA)",
    desc: "Licence d'ingénierie : architecture logicielle, bases de données, sécurité web.",
  },
  {
    year: "2024 - 2025",
    title: "Développeur Web",
    place: "NG System",
    desc: "Conception et développement d'une application web pour la gestion de données.",
  },
  {
    year: "2024",
    title: "Développeur Web",
    place: "Telnet Africa",
    desc: "Conception d'une application web de gestion des finances personnelles.",
  },
  {
    year: "2020",
    title: "Baccalauréat Sciences Physiques",
    place: "Lycée Kankou Moussa",
    desc: "Socle scientifique d'excellence, rigueur mathématique et analytique.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="À propos"
          title="Mon Profil & Ma Vision"
          subtitle="Découvrez les fondations de mon parcours, mes convictions techniques et ma méthode de travail."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Executive Portrait & Quick Connect (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-3xl p-6 bg-card/50 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 p-1 bg-gradient-to-tr from-amber-500/20 to-white/5 mb-6 group">
                <img
                  src="/fatoma.jpg"
                  alt="Fatoma N’DAOU"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-amber-400">
                  Full Stack
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1">
                {siteConfig.name}
              </h3>
              <p className="text-sm text-amber-400 font-medium mb-4">
                Développeur Web & Architecte de Données
              </p>

              <div className="space-y-2.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{siteConfig.contact.location}, Mali</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Diplômé de l&apos;ISA (Avril 2025)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prêt pour missions en entreprise & remote</span>
                </div>
                <div className="pt-1">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Icons.linkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/fatoma-n-daou</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Languages Bar */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Langues de travail
                </span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Français</span>
                    <span className="text-amber-400 font-mono">Courant / Maternel (5/5)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Anglais</span>
                    <span className="text-amber-400 font-mono">Technique & Professionnel (4/5)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (8 cols): Philosophy, Journey & Pillars */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Card 2: Executive Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-card/60 to-card/40 border border-amber-500/20 backdrop-blur-xl relative shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-500/15 pointer-events-none" />

              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Philosophie du profil
                </span>
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-foreground leading-relaxed italic mb-4">
                « Développeur Full Stack passionné et polyvalent, j&apos;excelle dans
                la transformation d&apos;idées en applications pleinement
                fonctionnelles, ergonomiques et conviviales. Doté d&apos;une solide
                maîtrise du développement front-end et back-end, je me consacre à la
                création de solutions performantes et évolutives qui offrent des
                expériences utilisateur fluides et répondent parfaitement aux
                objectifs métiers. »
              </blockquote>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Fort de mes expériences chez <strong>NG System</strong> et{" "}
                <strong>Telnet Africa</strong>, j&apos;aborde chaque projet avec
                une vision 360° : de la modélisation de données à l&apos;architecture d&apos;APIs sécurisées
                jusqu&apos;à l&apos;ergonomie finale de l&apos;interface.
              </p>
            </motion.div>

            {/* Card 3: 4 Core Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Card 4: Trajectory timeline snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Étapes clés du parcours
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-foreground">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                        {item.year}
                      </span>
                    </div>
                    <div className="text-[11px] text-muted-foreground font-medium mb-1">
                      {item.place}
                    </div>
                    <p className="text-[11px] text-muted-foreground/80 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
