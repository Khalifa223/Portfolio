export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "Frontend" | "Backend" | "Mobile" | "API" | "Full Stack";
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Plateform",
    description: "Plateforme e-commerce complète avec gestion des produits, panier, paiement Stripe et tableau de bord administrateur.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Paiement sécurisé", "Tableau de bord Admin", "Recherche filtrée"],
  },
  {
    id: "2",
    title: "Application de Gestion de Tâches",
    description: "Application mobile de productivité permettant aux équipes de collaborer et de gérer leurs projets en temps réel.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
    githubUrl: "https://github.com",
    features: ["Temps réel", "Notifications push", "Mode hors-ligne"],
  },
  {
    id: "3",
    title: "API RESTful pour Réservation",
    description: "Une API robuste pour la gestion de réservations d'hôtels avec authentification JWT et rôles utilisateurs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
    category: "Backend",
    githubUrl: "https://github.com",
    features: ["Authentification JWT", "Documentation Swagger", "Tests unitaires"],
  },
  {
    id: "4",
    title: "Dashboard Analytique",
    description: "Interface d'administration frontend avec graphiques interactifs et visualisation de données complexes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Angular", "TypeScript", "Chart.js", "Tailwind CSS"],
    category: "Frontend",
    demoUrl: "https://example.com",
    features: ["Graphiques en temps réel", "Export PDF/CSV", "Thème sombre/clair"],
  },
];
