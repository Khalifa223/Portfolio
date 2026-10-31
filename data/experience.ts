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
    role: "Développeur Web",
    company: "NG System",
    period: "Novembre 2024 - Février 2025",
    description:
      "Conception et développement d'une application web pour la gestion des données. Mise en place de l'architecture applicative, conception des composants front-end, sécurisation des flux de données et intégration des points de terminaison API.",
    technologies: ["Front-end", "Back-end", "Base de données", "API REST", "Application Web"],
    type: "work",
  },
  {
    id: "2",
    role: "Développeur Web",
    company: "Telnet Africa",
    period: "Juillet - Octobre 2024",
    description:
      "Conception et développement d'une application web pour la gestion des finances personnelles. Élaboration des interfaces utilisateur intuitives, modélisation des schémas de données financières et intégration de tableaux de bord interactifs.",
    technologies: ["Front-end", "Back-end", "API", "Base de données", "Application Finance"],
    type: "work",
  },
];
