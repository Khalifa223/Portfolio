export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export const stats: Stat[] = [
  { id: "1", label: "Pôles d'expertise", value: 4 },
  { id: "2", label: "Technologies maîtrisées", value: 10, prefix: "+" },
  { id: "3", label: "Applications Web", value: 10, prefix: "+" },
  { id: "4", label: "Engagement Qualité", value: 100, suffix: " %" },
];
