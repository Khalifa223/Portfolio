import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: string; // We'll use simple string for icon name or image path later, for now string works. We can map it to Lucide icons.
  level: number;
  category: "Frontend" | "Backend" | "Mobile" | "Tools";
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "html5", level: 95, category: "Frontend" },
  { name: "CSS3", icon: "css3", level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: "javascript", level: 90, category: "Frontend" },
  { name: "React / Next.js", icon: "react", level: 85, category: "Frontend" },
  { name: "Angular", icon: "angular", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", level: 95, category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: "nodejs", level: 85, category: "Backend" },
  { name: "Python", icon: "python", level: 80, category: "Backend" },
  { name: "Django", icon: "django", level: 75, category: "Backend" },
  { name: "PostgreSQL", icon: "postgresql", level: 80, category: "Backend" },
  { name: "REST APIs", icon: "api", level: 90, category: "Backend" },
  
  // Mobile
  { name: "Flutter", icon: "flutter", level: 85, category: "Mobile" },
  { name: "Dart", icon: "dart", level: 80, category: "Mobile" },
  
  // Tools
  { name: "Git & GitHub", icon: "git", level: 90, category: "Tools" },
  { name: "Docker", icon: "docker", level: 70, category: "Tools" },
];
