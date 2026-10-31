import {
  Globe,
  Server,
  Smartphone,
  Webhook,
  AppWindow,
  Wrench,
  Zap,
  RefreshCw,
  MessageSquareCode,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Développement Front-end",
    description:
      "Création d'interfaces web modernes, réactives et accessibles avec HTML5, CSS3, JavaScript et TypeScript. Expérience utilisateur optimale sur tous les appareils.",
    icon: Globe,
  },
  {
    id: "2",
    title: "Développement Back-end",
    description:
      "Conception d'architectures serveur robustes, sécurisées et évolutives avec Python (Django), Node.js et Java. Architecture pensée pour la performance et la maintenabilité à long terme.",
    icon: Server,
  },
  {
    id: "3",
    title: "Conception & Modélisation de Données",
    description:
      "Structuration, conception relationnelle (SQL, PostgreSQL, MySQL) et sécurisation des bases de données d'entreprise avec requêtes optimisées.",
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Création d'APIs RESTful",
    description:
      "Conception et développement d'APIs RESTful conformes aux standards OpenAPI. Documentation interactive Swagger, authentification JWT et sécurisation des flux.",
    icon: Webhook,
  },
  {
    id: "5",
    title: "Applications Web sur mesure",
    description:
      "Développement de solutions web personnalisées adaptées à vos besoins métier spécifiques. De la conception à la mise en production avec accompagnement complet.",
    icon: AppWindow,
  },
  {
    id: "6",
    title: "Maintenance & Évolution Applicative",
    description:
      "Suivi, correction de bugs, mises à jour de sécurité et évolution continue de vos applications existantes. Monitoring proactif et support technique réactif.",
    icon: Wrench,
  },
  {
    id: "7",
    title: "Optimisation des Performances",
    description:
      "Audit et amélioration des performances web : temps de chargement, accessibilité, SEO technique et bonnes pratiques logicielles. Résultats mesurables et durables.",
    icon: Zap,
  },
  {
    id: "8",
    title: "Refonte de Sites Web",
    description:
      "Modernisation de sites web existants avec les technologies actuelles. Migration technique, refonte UI/UX et amélioration de l'architecture globale.",
    icon: RefreshCw,
  },
  {
    id: "9",
    title: "Conseil & Accompagnement Technique",
    description:
      "Accompagnement stratégique sur les choix technologiques, l'architecture logicielle et les bonnes pratiques. Audits de code et recommandations personnalisées.",
    icon: MessageSquareCode,
  },
];
