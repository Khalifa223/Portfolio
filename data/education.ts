export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
  type: "diploma" | "certification" | "bootcamp" | "self-taught";
}

export const educations: Education[] = [
  {
    id: "1",
    degree: "Master Ingénierie Logicielle",
    school: "École Supérieure d'Informatique",
    period: "2016 - 2018",
    description:
      "Spécialisation en architecture logicielle, bases de données avancées, sécurité informatique et gestion de projets agiles. Mémoire sur l'optimisation des performances des APIs REST.",
    type: "diploma",
  },
  {
    id: "2",
    degree: "Licence Informatique",
    school: "Université des Sciences",
    period: "2013 - 2016",
    description:
      "Fondamentaux de l'informatique : algorithmique, programmation orientée objet, structures de données, réseaux et systèmes d'exploitation.",
    type: "diploma",
  },
  {
    id: "3",
    degree: "Bootcamp Flutter Mobile",
    school: "Tech Academy",
    period: "2019",
    description:
      "Formation intensive de 12 semaines sur le développement d'applications mobiles cross-platform avec Flutter, Dart et Firebase.",
    type: "bootcamp",
  },
  {
    id: "4",
    degree: "Certifications AWS Cloud",
    school: "Amazon Web Services",
    period: "2021",
    description:
      "Certification AWS Cloud Practitioner et AWS Solutions Architect Associate. Maîtrise des services cloud : EC2, S3, Lambda, RDS et CloudFront.",
    type: "certification",
  },
];
