export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "Front-end" | "Back-end" | "API" | "Full Stack";
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FinancePersonnel – Suivi Budgétaire & Finances",
    description:
      "Application web et back-end conçue pour la gestion des finances personnelles. Permet d'enregistrer, catégoriser et visualiser en temps réel les entrées et sorties d'argent avec des tableaux de bord interactifs.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
    technologies: ["TypeScript", "Python", "API REST", "Base de données", "Design UI/UX"],
    category: "Full Stack",
    githubUrl: "https://github.com/Khalifa223/FinancePersoApp",
    features: [
      "Suivi des flux financiers personnels en temps réel",
      "Tableau de bord dynamique et graphiques analytiques",
      "Modélisation optimisée des transactions budgétaires",
      "Interface réactive développée avec TypeScript",
    ],
  },
  {
    id: "2",
    title: "Gestion de Centre de Données – NG System",
    description:
      "Solution web complète pour la gestion, la centralisation et la manipulation des données d'entreprise (projet NG System). Intègre des composants de filtrage avancé, de reporting et de sécurisation des accès.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    technologies: ["TypeScript", "Java / Back-end", "Base de données", "API REST", "SQL"],
    category: "Full Stack",
    githubUrl: "https://github.com/Khalifa223/data-center",
    features: [
      "Architecture centralisée pour la supervision des données",
      "Gestion des utilisateurs et rôles avec sécurisation des points d'accès",
      "Tableaux de bord d'analyse avec filtres multicritères",
      "Persistance et intégrité rigoureuse des données",
    ],
  },
  {
    id: "3",
    title: "LearnDRFByDocString – API REST Django",
    description:
      "Conception et implémentation d'une API RESTful robuste basée sur Django REST Framework. Mise en œuvre des sérialiseurs, permissions, documentation exhaustive par docstrings et normalisation OpenAPI.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Python", "Django", "Django REST Framework", "API REST", "PostgreSQL"],
    category: "API",
    githubUrl: "https://github.com/Khalifa223/LearnDRFByDocString",
    features: [
      "Architecture RESTful propre et modulaire",
      "Validation des schémas de données et sérialisation avancée",
      "Documentation complète intégrée via DocStrings",
      "Gestion rigoureuse des réponses HTTP et erreurs",
    ],
  },
  {
    id: "4",
    title: "Boutique Électronique Bamako – E-Commerce",
    description:
      "Site e-commerce et vitrine dédié à la vente de matériel informatique et électronique à Bamako. Catalogue de produits, filtres interactifs, présentation détaillée et interface adaptée aux mobiles.",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Design Réactif", "E-Commerce"],
    category: "Front-end",
    githubUrl: "https://github.com/Khalifa223/demo_electronicshop_bamako",
    features: [
      "Catalogue dynamique de produits électroniques",
      "Navigation intuitive et recherche multicritères",
      "Design 100% responsive optimisé pour mobile",
      "Panier d'achat interactif côté client",
    ],
  },
  {
    id: "5",
    title: "Application Vente Automobile – UI Véhicules",
    description:
      "Interface utilisateur moderne pour une plateforme de vente et d'achat de véhicules. Composants modulaires, filtres par marque, modèle et budget avec visualisation fluide des galeries photos.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Design UI/UX"],
    category: "Front-end",
    githubUrl: "https://github.com/Khalifa223/car-selling-app",
    features: [
      "Interface épurée et moderne avec micro-interactions",
      "Filtres de véhicules dynamiques en temps réel",
      "Fiches techniques détaillées avec galerie photos",
      "Architecture de composants TypeScript réutilisables",
    ],
  },
  {
    id: "6",
    title: "Site Vitrine Restauration – Saveurs de Bamako",
    description:
      "Site vitrine élégant créé pour les restaurateurs au Mali (Bamako). Mise en valeur des spécialités culinaires locales et internationales, consultation des menus et formulaire de contact / réservation.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Design Réactif", "SEO"],
    category: "Front-end",
    githubUrl: "https://github.com/Khalifa223/restaurantwebsite",
    features: [
      "Présentation immersive de la carte et des menus",
      "Design soigné mettant en valeur les spécialités",
      "Optimisation SEO local pour Bamako",
      "Formulaire interactif de contact et réservation",
    ],
  },
  {
    id: "7",
    title: "AppTask – Gestionnaire de Tâches & Productivité",
    description:
      "Application interactive de gestion de tâches permettant aux utilisateurs d'organiser, planifier et suivre leurs activités quotidiennes avec catégorisation et filtres de statut.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop",
    technologies: ["TypeScript", "JavaScript", "Productivité", "Stockage Local"],
    category: "Front-end",
    githubUrl: "https://github.com/Khalifa223/AppTask",
    features: [
      "Création, édition et suppression de tâches en direct",
      "Organisation par catégories et priorités",
      "Suivi de progression et statut d'accomplissement",
      "Persistance locale des données utilisateur",
    ],
  },
  {
    id: "8",
    title: "Formation DevOps & Conteneurisation Docker",
    description:
      "Projet dédié aux pratiques DevOps et à la conteneurisation : automatisation du cycle de vie des applications, écriture de Dockerfiles optimisés et configuration d'environnements reproductibles.",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Docker", "DevOps", "CI/CD", "Linux", "Scripting"],
    category: "Back-end",
    githubUrl: "https://github.com/Khalifa223/Formation-DevOps",
    features: [
      "Conteneurisation d'applications multi-services",
      "Réduction de la taille des images et sécurité Docker",
      "Gestion des volumes et réseaux virtuels",
      "Scripting et automatisation des déploiements",
    ],
  },
  {
    id: "9",
    title: "WebSocket – Service Temps Réel",
    description:
      "Service back-end de communication bidirectionnelle en temps réel via WebSockets, permettant la transmission instantanée de messages et de notifications d'événements sans rechargement.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Java", "WebSocket", "API Temps Réel", "Concurrence"],
    category: "Back-end",
    githubUrl: "https://github.com/Khalifa223/WebSocket",
    features: [
      "Communication bidirectionnelle complète en direct",
      "Diffusion de messages multi-clients (broadcast / publish-subscribe)",
      "Gestion de la reconnexion automatique et des sessions",
      "Performances élevées avec faible latence",
    ],
  },
];
