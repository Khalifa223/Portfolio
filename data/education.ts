export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const educations: Education[] = [
  {
    id: "1",
    degree: "Master en Ingénierie Logicielle",
    school: "École Supérieure d'Informatique",
    period: "2016 - 2018",
    description: "Spécialisation en architecture logicielle, bases de données avancées et gestion de projets agiles.",
  },
  {
    id: "2",
    degree: "Licence Informatique",
    school: "Université des Sciences",
    period: "2013 - 2016",
    description: "Fondamentaux de l'informatique, algorithmique, programmation orientée objet et réseaux.",
  },
  {
    id: "3",
    degree: "Bootcamp Développement Mobile",
    school: "Tech Academy",
    period: "2019",
    description: "Formation intensive sur le développement d'applications mobiles cross-platform avec Flutter.",
  },
];
