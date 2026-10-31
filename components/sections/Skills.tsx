"use client";

import { motion } from "framer-motion";
import { skills, skillCategoriesSummary } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Monitor, Server, Database, Webhook, Star, Sparkles } from "lucide-react";

const categoryConfig: Record<
  string,
  { icon: React.ReactNode; gradient: string; stars: number; accentColor: string }
> = {
  "Front-end": {
    icon: <Monitor className="h-5 w-5 text-amber-400" />,
    gradient: "from-amber-500 to-amber-300",
    stars: 5,
    accentColor: "border-amber-500/30 hover:border-amber-500/60 shadow-amber-500/10",
  },
  "Back-end": {
    icon: <Server className="h-5 w-5 text-blue-400" />,
    gradient: "from-blue-500 to-cyan-400",
    stars: 4,
    accentColor: "border-blue-500/30 hover:border-blue-500/60 shadow-blue-500/10",
  },
  "Base de données": {
    icon: <Database className="h-5 w-5 text-emerald-400" />,
    gradient: "from-emerald-500 to-teal-400",
    stars: 4,
    accentColor: "border-emerald-500/30 hover:border-emerald-500/60 shadow-emerald-500/10",
  },
  API: {
    icon: <Webhook className="h-5 w-5 text-indigo-400" />,
    gradient: "from-indigo-500 to-purple-400",
    stars: 4,
    accentColor: "border-indigo-500/30 hover:border-indigo-500/60 shadow-indigo-500/10",
  },
};

export function Skills() {
  const categories = ["Front-end", "Back-end", "Base de données", "API"] as const;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-muted/20">
      {/* Background ambient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Expertise Technique"
          title="Compétences & Niveaux de Maîtrise"
          subtitle="Directement alignées sur les 4 pôles majeurs de mon CV avec leurs évaluations détaillées."
        />

        {/* Executive Scorecard Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-card/60 border border-white/10 backdrop-blur-xl shadow-2xl max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Synthèse Officielle CV
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Évaluation des Pôles Clés
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Notation standardisée sur les compétences fondamentales
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
              {skillCategoriesSummary.map((cat) => (
                <div
                  key={cat.name}
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all text-center min-w-[120px]"
                >
                  <span className="text-xs font-bold text-foreground mb-1.5">
                    {cat.name}
                  </span>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: cat.maxStars }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < cat.stars
                            ? "text-amber-400 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
                            : "text-muted-foreground/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-400">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, catIndex) => {
            const config = categoryConfig[category];
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`rounded-3xl p-6 bg-card/50 backdrop-blur-xl border ${config.accentColor} transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                        {config.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground">
                          {category}
                        </h3>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < config.stars
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-muted-foreground/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      {config.stars}/5
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className="group/item">
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className="font-semibold text-foreground/90 group-hover/item:text-amber-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar with Glowing Tip */}
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                            className={`bg-gradient-to-r ${config.gradient} h-full rounded-full relative`}
                          />
                        </div>

                        {skill.description && (
                          <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
