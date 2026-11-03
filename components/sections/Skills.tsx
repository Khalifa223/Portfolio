"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Monitor, Server, Database, Webhook, CheckCircle2 } from "lucide-react";

interface CompetencyDomain {
  domain: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  technologies: string[];
  capabilities: string[];
}

const competencies: CompetencyDomain[] = [
  {
    domain: "01",
    category: "Architecture Front-end & UI",
    icon: <Monitor className="h-5 w-5 text-[#d4af37]" />,
    summary: "Conception d'interfaces réactives, performantes et axées sur l'ergonomie.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    capabilities: [
      "Composants réutilisables & design system",
      "Optimisation SEO & Core Web Vitals",
      "Rendu hybride (SSR, SSG, CSR)",
      "Ergonomie & responsive design sur-mesure",
    ],
  },
  {
    domain: "02",
    category: "Ingénierie Back-end & Logique",
    icon: <Server className="h-5 w-5 text-[#d4af37]" />,
    summary: "Développement de services fiables, maintenables et scalables.",
    technologies: ["Python / Django", "Node.js", "Java", "Express"],
    capabilities: [
      "Architecture logicielle modulaire & propre",
      "Traitement et validation rigoureuse des données",
      "Sécurité des accès & authentification (JWT)",
      "Gestion optimisée des erreurs et des logs",
    ],
  },
  {
    domain: "03",
    category: "Bases de Données & Données",
    icon: <Database className="h-5 w-5 text-[#d4af37]" />,
    summary: "Modélisation relationnelle et structuration pérenne des schémas.",
    technologies: ["PostgreSQL", "MySQL", "SQL", "ORM (Prisma, Django)"],
    capabilities: [
      "Conception de schémas relationnels normalisés",
      "Optimisation des requêtes & indexation",
      "Garantie de l'intégrité et de la cohérence",
      "Stratégies de sauvegarde et migration",
    ],
  },
  {
    domain: "04",
    category: "Architecture API & Intégrations",
    icon: <Webhook className="h-5 w-5 text-[#d4af37]" />,
    summary: "Interopérabilité sans friction entre systèmes et applications.",
    technologies: ["API RESTful", "JSON / XML", "OpenAPI / Swagger", "Postman"],
    capabilities: [
      "Conception de points d'accès REST conformes",
      "Documentation exhaustive (Docstrings / OpenAPI)",
      "Gestion des permissions & limitations de débit",
      "Intégrations de services tiers & webhooks",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#0c0e13]/60 border-y border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Domaines d'Intervention"
          title="Expertise Technique & Ingénierie"
          subtitle="Une approche globale articulée autour des quatre piliers fondamentaux du développement moderne."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => (
            <motion.div
              key={comp.domain}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#111319]/70 border border-white/[0.07] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="font-editorial text-xl font-light text-[#d4af37]">
                    {comp.domain}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    {comp.icon}
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-foreground mb-2 group-hover:text-[#d4af37] transition-colors leading-snug">
                  {comp.category}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed font-light mb-6">
                  {comp.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {comp.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/85 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] tracking-widest uppercase font-semibold text-muted-foreground mb-2">
                  Environnements clés
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {comp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
