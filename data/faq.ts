export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "Quels types de projets développez-vous ?",
    answer: "En tant que Développeur Full Stack, je conçois des applications web complètes : interfaces utilisateurs réactives (Front-end), serveurs et logique métier (Back-end), modélisation et gestion de données (Base de données) et architectures d'APIs RESTful.",
  },
  {
    id: "2",
    question: "Où êtes-vous basé et acceptez-vous les projets à distance ?",
    answer: "Je suis basé à Bamako (Magnambougou) au Mali. Je suis disponible aussi bien pour des missions en présentiel que pour des collaborations à distance (télétravail) avec des équipes locales et internationales.",
  },
  {
    id: "3",
    question: "Quelles sont vos technologies clés ?",
    answer: "Je maîtrise l'écosystème web moderne : JavaScript, TypeScript, Python, Django, Node.js, SQL (PostgreSQL, MySQL), la conception et l'intégration d'APIs REST ainsi que les architectures de données.",
  },
  {
    id: "4",
    question: "Quelles langues maîtrisez-vous pour collaborer ?",
    answer: "Je travaille couramment en Français et j'utilise l'Anglais technique et professionnel pour la documentation, les échanges et le code.",
  },
  {
    id: "5",
    question: "Comment vous contacter pour une opportunité ou un projet ?",
    answer: "Vous pouvez me joindre directement par email à fatomandaou5@gmail.com, par téléphone au +223 93 97 30 71 ou via le formulaire de contact en bas de page.",
  },
];
