"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
