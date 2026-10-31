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
  const { ref, count } = useCountUp(stat.value, 1800);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-xl flex flex-col items-center justify-center text-center hover:border-amber-500/20 transition-all duration-300"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-1.5 flex items-baseline tracking-tight">
        {stat.prefix && (
          <span className="text-amber-500 text-2xl sm:text-3xl mr-0.5">
            {stat.prefix}
          </span>
        )}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 tabular-nums">
          {count}
        </span>
        {stat.suffix && (
          <span className="text-amber-500 text-xl sm:text-2xl ml-0.5">
            {stat.suffix}
          </span>
        )}
      </div>

      <div className="text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
