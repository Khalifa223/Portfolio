export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "freelance" | "internship" | "personal";
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Développeur Full Stack Senior",
    company: "TechCorp",
    period: "2022 - Présent",
    description:
      "Conception et développement d'applications SaaS B2B à forte charge. Migration de l'architecture monolithique vers des microservices, amélioration des performances de 40% et mise en place de pipelines CI/CD automatisés.",
    technologies: ["Angular", "Node.js", "Python", "Django", "PostgreSQL", "Docker"],
    type: "work",
  },
  {
    id: "2",
    role: "Développeur Frontend",
    company: "Agence Digitale XYZ",
    period: "2020 - 2022",
    description:
      "Création d'interfaces utilisateurs dynamiques et responsives pour des clients de divers secteurs. Optimisation SEO, accessibilité WCAG 2.1 et intégration de systèmes de design réutilisables.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "REST API", "Figma"],
    type: "work",
  },
  {
    id: "3",
    role: "Développeur Mobile Freelance",
    company: "Divers Clients",
    period: "2019 - 2020",
    description:
      "Développement d'applications mobiles iOS et Android sur mesure avec Flutter. Publication sur les stores, intégration d'APIs tierces et accompagnement client de la conception à la livraison.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Google Maps API"],
    type: "freelance",
  },
  {
    id: "4",
    role: "Stagiaire Développeur Backend",
    company: "StartUp Innovation",
    period: "2018 - 2019",
    description:
      "Participation au développement d'une API REST avec Django REST Framework. Implémentation de l'authentification JWT, écriture de tests unitaires et mise en place de la documentation Swagger.",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Git"],
    type: "internship",
  },
];
