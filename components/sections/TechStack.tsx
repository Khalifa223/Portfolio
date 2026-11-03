"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const techStack = [
  { name: "TypeScript", role: "Langage · Typage strict" },
  { name: "JavaScript ES6+", role: "Langage · Web moderne" },
  { name: "Python", role: "Langage · Back-end & Data" },
  { name: "Django & DRF", role: "Framework · APIs RESTful" },
  { name: "Next.js", role: "Framework · SSR & Architecture" },
  { name: "React", role: "Bibliothèque · Composants UI" },
  { name: "Node.js", role: "Runtime · Services backend" },
  { name: "Java", role: "Langage · Architecture orientée objet" },
  { name: "PostgreSQL", role: "Base de données relationnelle" },
  { name: "MySQL", role: "Base de données relationnelle" },
  { name: "SQL & Modélisation", role: "Requêtes & Schémas complexes" },
  { name: "API REST & OpenAPI", role: "Spécification & Documentation" },
  { name: "Tailwind CSS", role: "Framework de style utilitaire" },
  { name: "Docker", role: "Conteneurisation d'applications" },
  { name: "Git & GitHub", role: "Contrôle de version collaboratif" },
  { name: "Linux & Bash", role: "Environnement & Automatisation" },
  { name: "Postman", role: "Test & Validation d'APIs" },
  { name: "Framer Motion", role: "Animations d'interface fluides" },
];

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0e13]/40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Écosystème & Stack"
          title="Technologies & Outils de Production"
          subtitle="Un environnement technologique maîtrisé pour garantir maintenabilité, robustesse et vélocité."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="p-3.5 rounded-xl border border-white/[0.06] bg-[#111319]/60 backdrop-blur-md hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div className="text-xs font-semibold text-foreground group-hover:text-[#d4af37] transition-colors mb-1 truncate">
                {tech.name}
              </div>
              <div className="text-[10px] text-muted-foreground font-light truncate">
                {tech.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
