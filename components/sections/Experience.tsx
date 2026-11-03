"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { educations } from "@/data/education";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#0c0e13]/60 border-t border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Trajectoire & Fondations"
          title="Expériences & Formation Académique"
          subtitle="Un parcours alliant pratique en entreprise et cursus scientifique rigoureux en génie informatique."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Column 1: Expérience Professionnelle */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#d4af37]">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-medium text-foreground">
                  Expériences en Entreprise
                </h3>
                <p className="text-xs text-muted-foreground font-light">
                  Missions, réalisations logicielles & responsabilités
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-7">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Subtle Node on Timeline */}
                  <div className="absolute -left-[calc(1.5rem+4.5px)] sm:-left-[calc(2rem+4.5px)] top-2 w-2 h-2 rounded-full bg-[#d4af37]" />

                  {/* Card */}
                  <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111319]/80 backdrop-blur-xl hover:border-[#d4af37]/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-editorial text-xl font-medium text-foreground group-hover:text-[#d4af37] transition-colors">
                        {exp.role}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-0.5 rounded-full w-fit">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-3">
                      <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed font-light mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.02] border border-white/[0.06] text-muted-foreground"
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
              <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#d4af37]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-medium text-foreground">
                  Formation Académique
                </h3>
                <p className="text-xs text-muted-foreground font-light">
                  Diplômes d&apos;ingénierie & socle scientifique
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-7">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Subtle Node on Timeline */}
                  <div className="absolute -left-[calc(1.5rem+4.5px)] sm:-left-[calc(2rem+4.5px)] top-2 w-2 h-2 rounded-full bg-[#d4af37]" />

                  {/* Card */}
                  <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111319]/80 backdrop-blur-xl hover:border-[#d4af37]/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-editorial text-xl font-medium text-foreground group-hover:text-[#d4af37] transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-0.5 rounded-full w-fit">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-3">
                      <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{edu.school}</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
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
