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
    name: "Sophie Dubois",
    role: "Directrice Produit",
    company: "Innovatech",
    content:
      "Travailler avec John a été un véritable plaisir. Son expertise technique et sa capacité à comprendre nos besoins métier ont grandement contribué au succès de notre plateforme e-commerce. Les délais ont été respectés et la qualité du code est irréprochable.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: "2",
    name: "Marc Leroux",
    role: "CTO",
    company: "StartUp Nation",
    content:
      "Un code propre, une architecture solide et une excellente communication tout au long du projet. John a su proposer des solutions techniques innovantes qui ont fait la différence. Je recommande vivement pour tout projet Full Stack ambitieux.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    id: "3",
    name: "Julie Martin",
    role: "Fondatrice",
    company: "E-Shop Pro",
    content:
      "La plateforme e-commerce développée par John a dépassé nos attentes. Les performances sont excellentes, le back-office est très intuitif pour notre équipe et le support après livraison a été exceptionnel.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    id: "4",
    name: "Thomas Bernard",
    role: "Chef de Projet Digital",
    company: "Agence Webflow",
    content:
      "John a développé notre application mobile Flutter en un temps record. L'application est fluide, bien structurée et nos utilisateurs l'adorent. Sa maîtrise de Flutter et de l'écosystème mobile est impressionnante.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: "5",
    name: "Camille Rousseau",
    role: "Responsable IT",
    company: "DataCorp Solutions",
    content:
      "L'API REST conçue par John pour notre système de réservation est robuste, bien documentée et performante. Il a su intégrer toutes nos contraintes de sécurité tout en gardant une architecture claire et maintenable.",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
  },
];
