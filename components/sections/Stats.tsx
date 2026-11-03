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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl bg-[#111319]/60 border border-white/[0.06] flex flex-col items-center justify-center text-center hover:border-[#d4af37]/30 transition-all duration-300"
    >
      <div className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#d4af37] mb-1.5 flex items-baseline tracking-tight">
        {stat.prefix && <span className="text-2xl mr-0.5">{stat.prefix}</span>}
        <span className="tabular-nums">{count}</span>
        {stat.suffix && <span className="text-xl ml-0.5">{stat.suffix}</span>}
      </div>

      <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-[0.18em]">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
