export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "Travaillez-vous en freelance ?",
    answer: "Oui, je suis disponible pour des missions en freelance. N'hésitez pas à me contacter pour discuter de votre projet et de vos besoins spécifiques.",
  },
  {
    id: "2",
    question: "Acceptez-vous des missions à distance ?",
    answer: "Absolument. J'ai l'habitude de travailler à 100% en remote avec des clients situés partout dans le monde, en utilisant les outils de communication asynchrone et synchrone.",
  },
  {
    id: "3",
    question: "Quels frameworks utilisez-vous principalement ?",
    answer: "Pour le frontend, j'utilise principalement React (avec Next.js) et Angular. Pour le backend, je privilégie Node.js (Express/NestJS) et Python (Django).",
  },
  {
    id: "4",
    question: "Développez-vous des applications mobiles ?",
    answer: "Oui, je développe des applications mobiles cross-platform pour iOS et Android en utilisant le framework Flutter.",
  },
  {
    id: "5",
    question: "Pouvez-vous créer une API REST ?",
    answer: "Tout à fait. La création d'APIs RESTful (et GraphQL) fait partie intégrante de mon expertise backend, incluant l'authentification, la sécurité et la documentation.",
  },
];
