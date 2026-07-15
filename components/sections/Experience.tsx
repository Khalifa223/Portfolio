"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { educations } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Parcours"
          subtitle="Un résumé de mes expériences professionnelles et de ma formation."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Expérience</h3>
                <p className="text-sm text-muted-foreground">
                  Professionnelle
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-border/50 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/30" />

                  <div className="p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <div className="flex items-center text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-10 mt-12 md:mt-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Formation</h3>
                <p className="text-sm text-muted-foreground">
                  Diplômes & Certifications
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-border/50 space-y-10">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-secondary ring-4 ring-background shadow-lg shadow-secondary/30" />

                  <div className="p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <div className="flex items-center text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      {edu.school}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
