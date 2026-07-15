"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const { ref, count } = useCountUp(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center text-center p-6"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex items-baseline">
        <span className="text-muted-foreground text-3xl md:text-4xl">
          {stat.prefix}
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent tabular-nums">
          {count}
        </span>
        <span className="text-muted-foreground text-2xl md:text-3xl">
          {stat.suffix}
        </span>
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
