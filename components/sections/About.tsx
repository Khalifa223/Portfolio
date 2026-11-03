"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  Quote,
  Briefcase,
  Compass,
  Cpu,
  Layers,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/siteConfig";

const methodSteps = [
  {
    num: "01",
    title: "Comprendre & Cadrer",
    desc: "Analyse des objectifs stratégiques, modélisation des entités et choix rigoureux des technologies adaptées.",
    icon: <Compass className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    num: "02",
    title: "Architecturer & Sécuriser",
    desc: "Conception de bases de données normalisées, APIs RESTful documentées et sécurisation des accès (JWT).",
    icon: <Cpu className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    num: "03",
    title: "Concevoir & Pérenniser",
    desc: "Développement d'interfaces ergonomiques, tests de performance et code modulaire pensé pour évoluer.",
    icon: <Layers className="w-4 h-4 text-[#d4af37]" />,
  },
];

const credentials = [
  {
    year: "2025",
    role: "Diplôme en Génie Informatique",
    institution: "Institut des Sciences Appliquées (ISA) · Bamako",
    detail: "Formation d'ingénierie : architecture logicielle, bases de données relationnelles, sécurité web.",
  },
  {
    year: "2024 — 2025",
    role: "Développeur Web & Données",
    institution: "NG System",
    detail: "Conception et implémentation d'une plateforme de supervision et manipulation de flux de données.",
  },
  {
    year: "2024",
    role: "Développeur d'Applications",
    institution: "Telnet Africa",
    detail: "Développement full stack d'un système de suivi budgétaire et de modélisation financière.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Vision & Démarche"
          title="L'Ingénierie au Service de la Valeur"
          subtitle="Allier rigueur scientifique, sens du détail et vision produit pour concevoir des systèmes pérennes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Identity Profile */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#111319]/80 border border-white/[0.08] backdrop-blur-xl"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.08] mb-6">
              <img
                src="/fatoma.jpg"
                alt="Fatoma N’DAOU"
                className="w-full h-full object-cover grayscale contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 text-[11px] tracking-widest uppercase font-semibold text-[#d4af37] px-3 py-1 rounded-full bg-[#111319]/90 border border-white/[0.08]">
                Ingénieur Diplômé
              </div>
            </div>

            <h3 className="font-editorial text-3xl font-medium text-foreground mb-1">
              {siteConfig.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-6">
              Ingénieur Logiciel & Architecte Web
            </p>

            <div className="space-y-3 text-xs text-muted-foreground font-light mb-8">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Basé à {siteConfig.contact.location} (Mobilité & Remote)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Licence d&apos;Ingénierie en Génie Informatique (ISA)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Disponible pour missions d&apos;ingénierie & conseil technique</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                Langues de travail
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="font-medium text-foreground">Français</div>
                  <div className="text-[11px] text-muted-foreground font-light">Courant / Maternel</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="font-medium text-foreground">Anglais</div>
                  <div className="text-[11px] text-muted-foreground font-light">Technique & Opérationnel</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Manifesto + Method + Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Editorial Manifesto Quote */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#111319]/80 border border-white/[0.08] relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#d4af37]/15 pointer-events-none" />

              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37] block mb-3">
                Manifeste
              </span>

              <blockquote className="font-editorial text-2xl sm:text-3xl text-foreground font-light italic leading-snug mb-5">
                « Un code robuste ne se mesure pas au volume des lignes écrites, mais à la clarté avec laquelle il résout un problème métier complexe et résiste à l’épreuve du temps. »
              </blockquote>

              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Formé à l’analyse rigoureuse et fort de réalisations en entreprise chez <strong>NG System</strong> et <strong>Telnet Africa</strong>, j&apos;envisage chaque mission comme un partenariat d&apos;ingénierie : comprendre les enjeux de votre organisation avant d&apos;écrire la moindre ligne de code.
              </p>
            </motion.div>

            {/* 3 Step Method */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#111319]/60 border border-white/[0.08]"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Méthode de travail
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {methodSteps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#d4af37]/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-editorial text-lg text-[#d4af37] font-light">
                        {step.num}
                      </span>
                      {step.icon}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1 group-hover:text-[#d4af37] transition-colors">
                      {step.title}
                    </div>
                    <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Credentials Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#111319]/60 border border-white/[0.08]"
            >
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Parcours Académique & Expériences
                </span>
              </div>

              <div className="space-y-4">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="text-sm font-semibold text-foreground">
                        {cred.role}
                      </div>
                      <span className="text-[10px] font-mono text-[#d4af37] px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 w-fit">
                        {cred.year}
                      </span>
                    </div>
                    <div className="text-xs text-[#d4af37] font-medium mb-1">
                      {cred.institution}
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {cred.detail}
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
