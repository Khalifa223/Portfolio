"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search, Folder } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Tous",
    "Frontend",
    "Backend",
    "Mobile",
    "API",
    "Full Stack",
  ];

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
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Mes Projets"
          subtitle="Découvrez une sélection de mes réalisations récentes, illustrant mon expertise technique."
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`inline-flex items-center justify-center h-9 px-5 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                    : "border border-border bg-card/50 backdrop-blur-sm hover:bg-muted hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full bg-card/50 backdrop-blur-sm border-border/50"
            />
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium rounded-full bg-background/80 backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Icons.github className="mr-1.5 h-4 w-4" /> Code
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                          >
                            <ExternalLink className="mr-1.5 h-4 w-4" /> Démo
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-md bg-background/70 border-none text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs font-normal"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Folder className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-lg">
              Aucun projet ne correspond à votre recherche.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
