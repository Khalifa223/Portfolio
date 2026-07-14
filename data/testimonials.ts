export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Dubois",
    role: "Directrice Produit",
    company: "Innovatech",
    content: "Travailler avec ce développeur a été un véritable plaisir. Son expertise technique et sa capacité à comprendre nos besoins métier ont grandement contribué au succès de notre projet.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Marc Leroux",
    role: "CTO",
    company: "StartUp Nation",
    content: "Un code propre, une architecture solide et une excellente communication. Je recommande vivement pour tout projet nécessitant une expertise Full Stack pointue.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "3",
    name: "Julie Martin",
    role: "Fondatrice",
    company: "E-Shop Pro",
    content: "La plateforme e-commerce développée a dépassé nos attentes. Les performances sont excellentes et le back-office est très intuitif pour notre équipe.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];
