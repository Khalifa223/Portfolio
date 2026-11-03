"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { ExternalLink, Search, Folder, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Tous", "Front-end", "Back-end", "API", "Full Stack"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "Tous" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Réalisations & Études de Cas"
          title="Projets & Architectures Déployées"
          subtitle="Une sélection de réalisations représentatives, alliant intégrité des données, performance et ergonomie."
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-14 max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-[#111319]/80 border border-white/[0.08] backdrop-blur-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-4 py-1.5 text-xs tracking-wider uppercase font-medium rounded-full transition-all duration-300 ${
                  filter === category
                    ? "text-[#090a0d] bg-[#d4af37] font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Rechercher une technologie, un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 rounded-full bg-[#111319]/80 backdrop-blur-xl border-white/[0.08] text-xs focus:border-[#d4af37]/50"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group"
              >
                <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111319]/70 backdrop-blur-xl hover:border-[#d4af37]/40 transition-all duration-500 hover:-translate-y-1">
                  {/* Thumbnail Cover */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-[#111319]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Chip */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold bg-[#111319]/90 backdrop-blur-md border border-white/[0.08] text-[#d4af37]">
                        {project.category}
                      </span>
                    </div>

                    {/* Fast Action Buttons on Image Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111319]/95 text-foreground text-xs font-medium hover:text-[#d4af37] transition-colors backdrop-blur-md border border-white/[0.12]"
                          >
                            <Icons.github className="w-3.5 h-3.5" />
                            <span>Code Source</span>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4af37] text-[#090a0d] text-xs font-semibold hover:bg-[#c5a059] transition-colors backdrop-blur-md"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Démo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-editorial text-2xl font-medium text-foreground mb-2 group-hover:text-[#d4af37] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#d4af37] transition-colors shrink-0 ml-1 opacity-0 group-hover:opacity-100" />
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-light line-clamp-3">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="mb-4 space-y-1.5">
                        {project.features.slice(0, 2).map((feat, i) => (
                          <li
                            key={i}
                            className="text-xs text-foreground/80 flex items-center gap-2 font-light"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 items-center">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.02] border border-white/[0.06] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Folder className="w-14 h-14 mx-auto text-muted-foreground/30 mb-3" />
            <p className="text-muted-foreground text-sm font-light">
              Aucun projet ne correspond à votre recherche.
            </p>
          </motion.div>
        )}

        {/* High-End Banner Linking to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl p-8 bg-[#111319]/80 border border-white/[0.08] backdrop-blur-xl text-center relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-1 block">
                Open Source & Code
              </span>
              <h4 className="font-editorial text-2xl font-medium text-foreground">
                Explorer l&apos;intégralité des dépôts de code
              </h4>
              <p className="text-xs text-muted-foreground font-light mt-1">
                Consultez l&apos;architecture de mes projets, contributions et documentations techniques sur GitHub.
              </p>
            </div>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#090a0d] font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              <Icons.github className="w-4 h-4" />
              <span>GitHub @Khalifa223</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
