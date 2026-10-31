export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Moussa Traoré",
    role: "Chef de Projet Digital",
    company: "NG System",
    content:
      "Fatoma a fait un travail remarquable sur l'application de gestion de données. Sa rigueur sur le front-end comme sur le back-end et sa rapidité de compréhension des besoins ont grandement contribué à la réussite du projet.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    id: "2",
    name: "Amadou Diallo",
    role: "Responsable Technique",
    company: "Telnet Africa",
    content:
      "Fatoma s'est illustré par sa capacité à transformer des besoins complexes en une application web de gestion financière fluide et intuitive. Ses compétences en APIs et bases de données sont solides.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: "3",
    name: "Awa Konaté",
    role: "Lead Développeuse",
    company: "Tech Innovation",
    content:
      "Collaborer avec Fatoma est un vrai plaisir. Il applique les meilleures pratiques de développement, écrit un code clair et maintenable, et fait preuve d'un grand sens de l'écoute.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
];
