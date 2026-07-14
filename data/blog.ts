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
    title: "Optimiser les performances d'une application React en 2024",
    excerpt: "Découvrez les meilleures pratiques et les nouvelles fonctionnalités de React pour rendre vos applications plus rapides que jamais.",
    date: "12 Octobre 2024",
    readTime: "5 min de lecture",
    category: "Performance Web",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "2",
    title: "Pourquoi j'ai choisi Flutter pour le développement mobile",
    excerpt: "Un retour d'expérience sur l'utilisation de Flutter en production pour des applications cross-platform.",
    date: "28 Septembre 2024",
    readTime: "8 min de lecture",
    category: "Flutter",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
  {
    id: "3",
    title: "Architecture Hexagonale avec Node.js et TypeScript",
    excerpt: "Comment structurer votre code backend pour le rendre maintenable, testable et indépendant des frameworks.",
    date: "15 Août 2024",
    readTime: "10 min de lecture",
    category: "Architecture Logicielle",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    url: "#",
  },
];
