"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search, Folder, Sparkles, ArrowUpRight } from "lucide-react";
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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projets & Réalisations Web"
          subtitle="Découvrez une sélection de mes réalisations concrètes issues de mes dépôts GitHub officiels."
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-12 max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-card/60 border border-white/10 backdrop-blur-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  filter === category
                    ? "text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une technologie, un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 rounded-full bg-card/60 backdrop-blur-xl border-white/10 text-xs sm:text-sm focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="h-full flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
                  {/* Thumbnail Cover */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Chip */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md border border-white/10 text-amber-400">
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
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 text-white text-xs font-semibold hover:bg-amber-500 hover:text-slate-950 transition-colors backdrop-blur-md border border-white/10"
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
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors backdrop-blur-md"
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
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-400 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-400 transition-colors shrink-0 ml-1 opacity-0 group-hover:opacity-100" />
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="mb-4 space-y-1.5">
                        {project.features.slice(0, 2).map((feat, i) => (
                          <li
                            key={i}
                            className="text-xs text-muted-foreground/90 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/5 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-amber-400 bg-amber-500/10">
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
            <Folder className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-base">
              Aucun projet ne correspond à votre recherche.
            </p>
          </motion.div>
        )}

        {/* High-End Banner Linking to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl p-8 bg-gradient-to-r from-card/80 via-card/50 to-card/80 border border-white/10 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1 block">
                Open Source & Code
              </span>
              <h4 className="text-xl font-bold text-foreground">
                Envie d&apos;explorer plus de réalisations ?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Retrouvez l&apos;ensemble de mes dépôts publics et projets sur mon profil GitHub officiel.
              </p>
            </div>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all"
            >
              <Icons.github className="w-4 h-4" />
              <span>GitHub @Khalifa223</span>
              <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
