export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Maîtriser Angular : les meilleures pratiques en 2025",
    excerpt:
      "Découvrez les patterns avancés d'Angular, les signaux, le lazy loading et les stratégies de gestion d'état pour des applications d'entreprise performantes.",
    date: "15 Mars 2025",
    readTime: "8 min de lecture",
    category: "Angular",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "2",
    title: "Flutter : construire des apps mobiles cross-platform de qualité",
    excerpt:
      "Retour d'expérience sur l'utilisation de Flutter en production. Architecture, gestion d'état avec Riverpod et optimisation des performances.",
    date: "28 Janvier 2025",
    readTime: "10 min de lecture",
    category: "Flutter",
    image:
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "3",
    title: "Python avancé : astuces pour un code propre et performant",
    excerpt:
      "Explorez les fonctionnalités avancées de Python : décorateurs, générateurs, context managers et optimisation mémoire pour des applications robustes.",
    date: "10 Décembre 2024",
    readTime: "7 min de lecture",
    category: "Python",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "4",
    title: "Créer une API REST robuste avec Django REST Framework",
    excerpt:
      "Guide complet pour concevoir des APIs performantes avec DRF : sérialisation, permissions, pagination, throttling et documentation Swagger.",
    date: "5 Octobre 2024",
    readTime: "12 min de lecture",
    category: "Django",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "5",
    title: "Node.js en production : architecture et scalabilité",
    excerpt:
      "Comment structurer un projet Node.js pour la production : clustering, gestion des erreurs, logging, monitoring et déploiement avec Docker.",
    date: "18 Août 2024",
    readTime: "9 min de lecture",
    category: "Node.js",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "6",
    title: "Les bonnes pratiques du développement web moderne",
    excerpt:
      "Clean code, tests automatisés, CI/CD, code review et documentation. Les habitudes essentielles pour livrer du code de qualité en équipe.",
    date: "2 Juin 2024",
    readTime: "6 min de lecture",
    category: "Bonnes pratiques",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
];
