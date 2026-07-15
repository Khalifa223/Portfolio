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
    title: "Développement Frontend",
    description:
      "Création d'interfaces web modernes, responsives et accessibles avec Angular, React et les dernières technologies CSS. Expérience utilisateur optimale sur tous les appareils.",
    icon: Globe,
  },
  {
    id: "2",
    title: "Développement Backend",
    description:
      "Conception d'APIs robustes, sécurisées et évolutives avec Node.js, Python et Django. Architecture pensée pour la performance et la maintenabilité à long terme.",
    icon: Server,
  },
  {
    id: "3",
    title: "Développement Mobile Flutter",
    description:
      "Applications iOS et Android performantes et élégantes avec Flutter et Dart. Un seul codebase pour les deux plateformes avec une expérience native.",
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Création d'API REST",
    description:
      "Conception et développement d'APIs RESTful conformes aux standards OpenAPI. Documentation Swagger, authentification JWT et tests automatisés inclus.",
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
    title: "Maintenance applicative",
    description:
      "Suivi, correction de bugs, mises à jour de sécurité et évolution continue de vos applications existantes. Monitoring proactif et support technique réactif.",
    icon: Wrench,
  },
  {
    id: "7",
    title: "Optimisation des performances",
    description:
      "Audit et amélioration des performances web et mobile : temps de chargement, Core Web Vitals, SEO technique. Résultats mesurables et durables.",
    icon: Zap,
  },
  {
    id: "8",
    title: "Refonte de sites web",
    description:
      "Modernisation de sites web existants avec les technologies actuelles. Migration technique, redesign UI/UX et amélioration de l'architecture globale.",
    icon: RefreshCw,
  },
  {
    id: "9",
    title: "Conseil technique",
    description:
      "Accompagnement stratégique sur les choix technologiques, l'architecture logicielle et les bonnes pratiques. Audits de code et recommandations personnalisées.",
    icon: MessageSquareCode,
  },
];
