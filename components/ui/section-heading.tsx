"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${isLeft ? "text-left max-w-3xl" : "text-center max-w-3xl mx-auto"} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${isLeft ? "" : "justify-center"}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#d4af37]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
