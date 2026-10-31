"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const techStack = [
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "Django REST", color: "#A30000" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Node.js", color: "#339933" },
  { name: "Java", color: "#ED8B00" },
  { name: "SQL", color: "#00758F" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MySQL", color: "#00618A" },
  { name: "API REST", color: "#F59E0B" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#E6EDF3" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "Linux", color: "#FCC624" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Postman", color: "#FF6C37" },
  { name: "WebSocket", color: "#00E676" },
  { name: "OpenAPI", color: "#85EA2D" },
];

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Écosystème"
          title="Technologies & Outils Maîtrisés"
          subtitle="Les langages, frameworks et outils logiciels déployés dans mes projets."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="p-3.5 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 flex items-center gap-3 group cursor-default"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                {tech.name.substring(0, 2)}
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors truncate">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
