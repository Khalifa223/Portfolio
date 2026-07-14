import { Globe, Server, Smartphone, Rocket, Code2, PenTool } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any; // ReactNode or Lucide icon reference
}

export const services: Service[] = [
  {
    id: "1",
    title: "Développement Frontend",
    description: "Création d'interfaces web modernes, responsives et accessibles avec React, Next.js et Angular.",
    icon: Globe,
  },
  {
    id: "2",
    title: "Développement Backend",
    description: "Conception d'APIs robustes, sécurisées et évolutives avec Node.js, Python et Django.",
    icon: Server,
  },
  {
    id: "3",
    title: "Développement Mobile",
    description: "Applications iOS et Android performantes et natives avec Flutter et Dart.",
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Optimisation & SEO",
    description: "Amélioration des performances web (Core Web Vitals) et optimisation pour les moteurs de recherche.",
    icon: Rocket,
  },
  {
    id: "5",
    title: "Architecture Logicielle",
    description: "Conseil technique et mise en place de structures de code maintenables et évolutives.",
    icon: Code2,
  },
  {
    id: "6",
    title: "UI/UX Design Integration",
    description: "Intégration fidèle au pixel près de maquettes Figma avec des animations fluides.",
    icon: PenTool,
  },
];
