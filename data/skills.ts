export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "Frontend" | "Backend" | "Mobile" | "Tools";
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    icon: "html5",
    level: 95,
    category: "Frontend",
    description: "Structure sémantique et accessible pour le web moderne",
  },
  {
    name: "CSS3",
    icon: "css3",
    level: 90,
    category: "Frontend",
    description: "Mise en page avancée avec Flexbox, Grid et animations",
  },
  {
    name: "JavaScript ES6+",
    icon: "javascript",
    level: 92,
    category: "Frontend",
    description: "Programmation moderne avec async/await, modules et destructuring",
  },
  {
    name: "Angular",
    icon: "angular",
    level: 85,
    category: "Frontend",
    description: "Framework robuste pour applications d'entreprise scalables",
  },
  {
    name: "Responsive Design",
    icon: "responsive",
    level: 90,
    category: "Frontend",
    description: "Interfaces adaptatives pour tous les écrans et appareils",
  },
  {
    name: "REST API Integration",
    icon: "api",
    level: 88,
    category: "Frontend",
    description: "Consommation et intégration fluide d'APIs côté client",
  },

  // Backend
  {
    name: "Node.js",
    icon: "nodejs",
    level: 85,
    category: "Backend",
    description: "Serveurs performants avec Express, NestJS et écosystème npm",
  },
  {
    name: "Python",
    icon: "python",
    level: 88,
    category: "Backend",
    description: "Développement backend, scripting et automatisation avancée",
  },
  {
    name: "Django",
    icon: "django",
    level: 80,
    category: "Backend",
    description: "Framework Python complet pour applications web robustes",
  },
  {
    name: "Django REST Framework",
    icon: "drf",
    level: 82,
    category: "Backend",
    description: "APIs RESTful puissantes avec sérialisation et permissions",
  },
  {
    name: "Authentification JWT",
    icon: "jwt",
    level: 85,
    category: "Backend",
    description: "Sécurisation des APIs avec tokens et gestion de sessions",
  },
  {
    name: "API REST",
    icon: "rest",
    level: 90,
    category: "Backend",
    description: "Conception d'APIs conformes aux standards REST et OpenAPI",
  },
  {
    name: "Gestion des bases de données",
    icon: "database",
    level: 80,
    category: "Backend",
    description: "Modélisation, requêtes optimisées et migrations SQL/NoSQL",
  },
  {
    name: "Sécurité",
    icon: "security",
    level: 78,
    category: "Backend",
    description: "Protection OWASP, chiffrement et audit de vulnérabilités",
  },

  // Mobile
  {
    name: "Flutter",
    icon: "flutter",
    level: 85,
    category: "Mobile",
    description: "Applications cross-platform performantes avec un seul codebase",
  },
  {
    name: "Dart",
    icon: "dart",
    level: 82,
    category: "Mobile",
    description: "Langage optimisé pour le développement UI réactif",
  },
  {
    name: "Développement Android & iOS",
    icon: "mobile",
    level: 80,
    category: "Mobile",
    description: "Publication et déploiement sur Google Play et App Store",
  },
  {
    name: "Responsive Mobile",
    icon: "responsive-mobile",
    level: 85,
    category: "Mobile",
    description: "Interfaces mobiles adaptatives pour tablettes et smartphones",
  },
  {
    name: "Consommation d'API REST",
    icon: "api-mobile",
    level: 88,
    category: "Mobile",
    description: "Intégration d'APIs distantes avec gestion du cache et hors-ligne",
  },

  // Tools
  {
    name: "Git & GitHub",
    icon: "git",
    level: 90,
    category: "Tools",
    description: "Versioning, branches, pull requests et workflows CI/CD",
  },
  {
    name: "VS Code",
    icon: "vscode",
    level: 95,
    category: "Tools",
    description: "Environnement de développement personnalisé et productif",
  },
  {
    name: "Docker",
    icon: "docker",
    level: 70,
    category: "Tools",
    description: "Conteneurisation d'applications pour le déploiement",
  },
  {
    name: "Linux",
    icon: "linux",
    level: 72,
    category: "Tools",
    description: "Administration système et scripting shell",
  },
  {
    name: "SQL",
    icon: "sql",
    level: 80,
    category: "Tools",
    description: "Requêtes complexes, optimisation et gestion de bases relationnelles",
  },
];
