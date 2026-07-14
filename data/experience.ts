export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Développeur Full Stack Senior",
    company: "Tech Corp",
    period: "2021 - Présent",
    description: "Conception et développement d'applications SaaS B2B. Migration de l'architecture vers des microservices et amélioration des performances de 40%.",
    technologies: ["React", "Node.js", "TypeScript", "Docker"],
  },
  {
    id: "2",
    role: "Développeur Frontend",
    company: "Agence Digitale",
    period: "2019 - 2021",
    description: "Création d'interfaces utilisateurs dynamiques et responsives pour des clients de divers secteurs. Optimisation SEO et accessibilité.",
    technologies: ["Angular", "JavaScript", "SCSS", "Figma"],
  },
  {
    id: "3",
    role: "Développeur Mobile (Freelance)",
    company: "Divers Clients",
    period: "2018 - 2019",
    description: "Développement d'applications mobiles iOS et Android sur mesure avec publication sur les stores.",
    technologies: ["Flutter", "Dart", "Firebase API"],
  },
];
