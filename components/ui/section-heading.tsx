"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 max-w-3xl mx-auto ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 shadow-sm shadow-amber-500/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
        {title}
      </h2>

      <div className="flex items-center justify-center gap-2 mb-5">
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
        <div className="w-2 h-2 rounded-full bg-amber-500 shadow-sm shadow-amber-400" />
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
      </div>

      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
