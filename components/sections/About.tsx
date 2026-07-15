"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Rocket, Users, Heart, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Passion",
    desc: "Le code est mon métier et ma passion",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Qualité du code",
    desc: "Clean code & bonnes pratiques",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: <Laptop className="h-5 w-5" />,
    title: "Apprentissage continu",
    desc: "Veille technologique constante",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Travail d'équipe",
    desc: "Méthodes Agiles & collaboration",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Résolution",
    desc: "Approche orientée solutions",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Sécurité",
    desc: "Sécurité & performance au cœur",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const timeline = [
  { year: "2018", label: "Début de carrière" },
  { year: "2019", label: "Freelance Mobile" },
  { year: "2020", label: "Dev Frontend" },
  { year: "2022", label: "Full Stack Senior" },
  { year: "2024", label: "Lead & Conseil" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="À propos de moi"
          subtitle="Passionné par la création d'expériences numériques exceptionnelles, je transforme des idées complexes en applications élégantes et performantes."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-2 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt="Espace de travail développeur"
                className="w-full h-auto rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Mon parcours
              </h4>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 shrink-0"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-primary">
                        {item.year}
                      </span>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-8 h-px bg-gradient-to-r from-primary/50 to-border" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Développeur Full Stack &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Passionné du Web
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Avec plusieurs années d&apos;expérience dans le développement web
              et mobile, j&apos;ai acquis une solide expertise dans la
              conception d&apos;architectures logicielles modernes. Mon approche
              combine rigueur technique et sensibilité design pour livrer des
              produits finis haut de gamme.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je crois fermement que le code doit être non seulement fonctionnel,
              mais aussi maintenable et évolutif. J&apos;accorde une importance
              particulière à l&apos;accessibilité (WCAG), au SEO et aux
              performances (Core Web Vitals).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  className="group/card p-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-sm"
                >
                  <div
                    className={`${item.bg} ${item.color} w-9 h-9 rounded-lg flex items-center justify-center mb-2 group-hover/card:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
