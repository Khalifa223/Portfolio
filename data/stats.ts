export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export const stats: Stat[] = [
  { id: "1", label: "Projets", value: 30, prefix: "+" },
  { id: "2", label: "Technologies maîtrisées", value: 10, prefix: "+" },
  { id: "3", label: "Heures de développement", value: 1000, prefix: "+" },
  { id: "4", label: "Passion", value: 100, suffix: " %" },
];
