"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { educations } from "@/data/education";
import { Briefcase, GraduationCap, Calendar, Sparkles, Building2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-muted/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Parcours"
          title="Expériences & Formation Académique"
          subtitle="Mon parcours professionnel et les fondations scientifiques qui forgent mon savoir-faire."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Column 1: Expérience Professionnelle */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/20">
                <Briefcase className="h-6 w-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Expériences Professionnelles
                </h3>
                <p className="text-xs text-muted-foreground">
                  Projets d&apos;entreprise & réalisations
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-amber-500 shadow-md shadow-amber-400 group-hover:scale-125 transition-transform" />

                  {/* Card */}
                  <div className="p-6 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-amber-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                      <Building2 className="w-3.5 h-3.5 text-amber-500" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/5 text-muted-foreground group-hover:border-amber-500/20 transition-colors"
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

          {/* Column 2: Formation Académique */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                <GraduationCap className="h-6 w-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Formation Académique
                </h3>
                <p className="text-xs text-muted-foreground">
                  Diplômes & excellence scientifique
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-md shadow-blue-400 group-hover:scale-125 transition-transform" />

                  {/* Card */}
                  <div className="p-6 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                      <span>{edu.school}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
