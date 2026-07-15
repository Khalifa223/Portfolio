export interface TechStackItem {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Mobile" | "Tools" | "Database";
}

export const techStack: TechStackItem[] = [
  // Frontend
  { name: "HTML", icon: "html5", category: "Frontend" },
  { name: "CSS", icon: "css3", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "Angular", icon: "angular", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "Python", icon: "python", category: "Backend" },
  { name: "Django", icon: "django", category: "Backend" },
  { name: "Django REST Framework", icon: "drf", category: "Backend" },
  { name: "REST API", icon: "rest", category: "Backend" },
  { name: "JSON", icon: "json", category: "Backend" },

  // Mobile
  { name: "Flutter", icon: "flutter", category: "Mobile" },
  { name: "Dart", icon: "dart", category: "Mobile" },

  // Database
  { name: "PostgreSQL", icon: "postgresql", category: "Database" },
  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "Firebase", icon: "firebase", category: "Database" },
  { name: "SQL", icon: "sql", category: "Database" },

  // Tools
  { name: "Git", icon: "git", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "VS Code", icon: "vscode", category: "Tools" },
  { name: "Docker", icon: "docker", category: "Tools" },
  { name: "Linux", icon: "linux", category: "Tools" },
];
