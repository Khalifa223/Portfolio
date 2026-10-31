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
    degree: "Licence en Génie Informatique",
    school: "Institut des Sciences Appliquées (ISA)",
    period: "Diplômé en Avril 2025",
    description:
      "Formation d'ingénierie et de licence en informatique : architecture logicielle, génie logiciel, algorithmique avancée, bases de données, sécurité informatique et développement web moderne.",
    type: "diploma",
  },
  {
    id: "2",
    degree: "Baccalauréat en Sciences Physiques",
    school: "Lycée Kankou Moussa",
    period: "Octobre 2020",
    description:
      "Baccalauréat en sciences physiques : socle rigoureux en mathématiques appliquées, physique et analyse logique de problèmes complexes.",
    type: "diploma",
  },
];
