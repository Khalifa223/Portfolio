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
    title: "ShopFlow – Plateforme E-Commerce",
    description:
      "Plateforme e-commerce complète avec gestion des produits, panier intelligent, paiement sécurisé via Stripe et tableau de bord administrateur en temps réel. Optimisée pour le SEO et les performances avec un score Lighthouse de 95+.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Paiement sécurisé avec Stripe Checkout",
      "Tableau de bord admin avec analytics",
      "Recherche et filtres avancés avec facettes",
      "Système de notifications par email",
    ],
  },
  {
    id: "2",
    title: "TaskMaster – Gestion de Tâches",
    description:
      "Application mobile de productivité permettant aux équipes de collaborer, gérer leurs projets et suivre l'avancement en temps réel. Synchronisation cloud avec mode hors-ligne et notifications push intelligentes.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
    githubUrl: "https://github.com",
    features: [
      "Synchronisation temps réel avec Firestore",
      "Notifications push contextuelles",
      "Mode hors-ligne avec synchronisation différée",
      "Tableaux Kanban avec drag & drop",
    ],
  },
  {
    id: "3",
    title: "BookNow – API de Réservation Hôtelière",
    description:
      "API RESTful robuste pour la gestion de réservations d'hôtels avec authentification JWT, gestion des rôles, disponibilité en temps réel et documentation Swagger. Conteneurisée avec Docker pour un déploiement simplifié.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
    category: "API",
    githubUrl: "https://github.com",
    features: [
      "Authentification JWT avec refresh tokens",
      "Documentation interactive Swagger/OpenAPI",
      "Tests unitaires et d'intégration complets",
      "Déploiement containerisé avec Docker Compose",
    ],
  },
  {
    id: "4",
    title: "DataViz – Dashboard Analytique",
    description:
      "Interface d'administration frontend avec graphiques interactifs, visualisation de données complexes et export multi-format. Thème sombre/clair avec personnalisation des widgets et filtres dynamiques.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Angular", "TypeScript", "Chart.js", "Tailwind CSS"],
    category: "Frontend",
    demoUrl: "https://example.com",
    features: [
      "Graphiques interactifs en temps réel",
      "Export des données en PDF, CSV et Excel",
      "Thème sombre et clair personnalisable",
      "Widgets configurables par glisser-déposer",
    ],
  },
  {
    id: "5",
    title: "ConnectHub – Réseau Social",
    description:
      "Application de réseau social avec fil d'actualité en temps réel, messagerie instantanée, partage de médias et système de notifications. Architecture temps réel basée sur WebSocket pour une expérience fluide.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Messagerie instantanée avec Socket.io",
      "Fil d'actualité avec infinite scroll",
      "Upload et optimisation d'images",
      "Système de likes, commentaires et partages",
    ],
  },
  {
    id: "6",
    title: "FitTrack – Suivi Fitness",
    description:
      "Application mobile de suivi d'activité physique intégrée à Google Fit API. Visualisation des progrès, objectifs personnalisés, historique d'entraînement et statistiques détaillées avec graphiques motivants.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Flutter", "Dart", "Google Fit API"],
    category: "Mobile",
    githubUrl: "https://github.com",
    features: [
      "Intégration Google Fit et données santé",
      "Objectifs personnalisés avec suivi de progression",
      "Graphiques et statistiques détaillés",
      "Historique d'entraînement avec calendrier",
    ],
  },
  {
    id: "7",
    title: "ArticleForge – Plateforme CMS Blog",
    description:
      "Système de gestion de contenu complet pour blogs avec éditeur WYSIWYG, gestion des catégories, commentaires modérés et cache Redis pour des performances optimales. Interface d'administration intuitive.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Django", "Python", "PostgreSQL", "Redis"],
    category: "Backend",
    githubUrl: "https://github.com",
    features: [
      "Éditeur WYSIWYG avec aperçu en direct",
      "Cache Redis pour des temps de chargement rapides",
      "Système de commentaires avec modération",
      "API REST pour consommation headless",
    ],
  },
  {
    id: "8",
    title: "HomeFinder – Portail Immobilier",
    description:
      "Plateforme immobilière avec recherche géolocalisée, carte interactive MapBox, filtres avancés et système d'alertes. Gestion complète des annonces avec photos, plans et visites virtuelles.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Next.js", "Node.js", "Prisma", "MapBox"],
    category: "Full Stack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Carte interactive avec géolocalisation MapBox",
      "Filtres avancés multi-critères",
      "Système d'alertes email personnalisées",
      "Galerie photos avec visite virtuelle 360°",
    ],
  },
];
