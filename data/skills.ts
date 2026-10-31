export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "Front-end" | "Back-end" | "Base de données" | "API" | "Langues";
  description: string;
  stars?: number;
}

export const skillCategoriesSummary = [
  { name: "Front-end", stars: 5, maxStars: 5, label: "5/5" },
  { name: "Back-end", stars: 4, maxStars: 5, label: "4/5" },
  { name: "Base de données", stars: 4, maxStars: 5, label: "4/5" },
  { name: "API", stars: 4, maxStars: 5, label: "4/5" },
];

export const languages = [
  { name: "Français", level: "Langue courante / maternelle", stars: 5 },
  { name: "Anglais", level: "Technique & professionnel", stars: 4 },
];

export const skills: Skill[] = [
  // Front-end (5/5 étoiles sur le CV)
  {
    name: "Architecture Front-end",
    icon: "code",
    level: 96,
    category: "Front-end",
    stars: 5,
    description: "Conception d'interfaces modulaires, réactives et ergonomiques",
  },
  {
    name: "HTML5 & CSS3",
    icon: "html5",
    level: 95,
    category: "Front-end",
    stars: 5,
    description: "Structure sémantique, accessibilité web et animations modernes",
  },
  {
    name: "JavaScript ES6+ / TypeScript",
    icon: "javascript",
    level: 92,
    category: "Front-end",
    stars: 5,
    description: "Développement moderne : async/await, typage fort et modularité",
  },
  {
    name: "Design Réactif & UI Moderne",
    icon: "responsive",
    level: 94,
    category: "Front-end",
    stars: 5,
    description: "Adaptation parfaite sur mobile, tablette et écran d'ordinateur",
  },
  {
    name: "React & Frameworks Front-end",
    icon: "react",
    level: 88,
    category: "Front-end",
    stars: 5,
    description: "Composants dynamiques, gestion d'état et routage",
  },

  // Back-end (4/5 étoiles sur le CV)
  {
    name: "Architecture Back-end",
    icon: "server",
    level: 88,
    category: "Back-end",
    stars: 4,
    description: "Architecture serveur robuste, évolutive et performante",
  },
  {
    name: "Python & Django",
    icon: "python",
    level: 86,
    category: "Back-end",
    stars: 4,
    description: "Développement web back-end structuré avec ORM et sécurité",
  },
  {
    name: "Node.js & Express",
    icon: "nodejs",
    level: 84,
    category: "Back-end",
    stars: 4,
    description: "Services asynchrones, microservices et logique métier",
  },
  {
    name: "Sécurité & Authentification",
    icon: "security",
    level: 85,
    category: "Back-end",
    stars: 4,
    description: "JWT, gestion des sessions, hachage et protection des routes",
  },

  // Base de données (4/5 étoiles sur le CV)
  {
    name: "Modélisation des données",
    icon: "database",
    level: 88,
    category: "Base de données",
    stars: 4,
    description: "Conception de schémas relationnels, MCD/MLD et intégrité",
  },
  {
    name: "SQL & Requêtes avancées",
    icon: "sql",
    level: 85,
    category: "Base de données",
    stars: 4,
    description: "Jointures, indexation, procédures et optimisation des temps d'accès",
  },
  {
    name: "PostgreSQL & MySQL",
    icon: "postgresql",
    level: 84,
    category: "Base de données",
    stars: 4,
    description: "Administration, transactions ACID et migrations fiables",
  },
  {
    name: "Gestion & Persistance des flux",
    icon: "data-flow",
    level: 85,
    category: "Base de données",
    stars: 4,
    description: "Traçabilité des données, synchronisation et rapports",
  },

  // API (4/5 étoiles sur le CV)
  {
    name: "Conception d'APIs RESTful",
    icon: "api",
    level: 90,
    category: "API",
    stars: 4,
    description: "Points de terminaison REST normalisés, codes HTTP et architecture claire",
  },
  {
    name: "Intégration & Consommation d'APIs",
    icon: "integration",
    level: 90,
    category: "API",
    stars: 4,
    description: "Connexion fluide entre interfaces client et serveurs distants",
  },
  {
    name: "Documentation OpenAPI / Swagger",
    icon: "doc",
    level: 85,
    category: "API",
    stars: 4,
    description: "Spécification claire des requêtes, schémas et réponses",
  },
  {
    name: "Gestion des erreurs & Validation",
    icon: "check",
    level: 88,
    category: "API",
    stars: 4,
    description: "Validation des charges utiles entrantes et retours d'erreurs explicites",
  },
];
