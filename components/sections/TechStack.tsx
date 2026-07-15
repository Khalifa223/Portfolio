"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const techStack = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Angular", color: "#DD0031" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#808080" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "DRF", color: "#A30000" },
  { name: "Flutter", color: "#02569B" },
  { name: "Dart", color: "#0175C2" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#808080" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "REST API", color: "#3B82F6" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Linux", color: "#FCC624" },
  { name: "SQL", color: "#CC6699" },
];

export function TechStack() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Stack Technique"
          subtitle="Les technologies et outils que j'utilise pour construire des applications modernes."
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: tech.color + "20" }}
              >
                <span
                  className="text-lg font-black"
                  style={{ color: tech.color }}
                >
                  {tech.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
