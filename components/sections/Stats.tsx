"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center">
                {stat.prefix}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {stat.value}
                </span>
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
