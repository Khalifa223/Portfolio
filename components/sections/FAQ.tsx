"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 relative overflow-hidden bg-[#0c0e13]/60 border-t border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Éclaircissements"
          title="Questions Fréquentes"
          subtitle="Des réponses précises sur les modalités d'intervention, disponibilités et méthodologie."
        />

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#d4af37]/40 bg-[#111319]/90 shadow-xl backdrop-blur-xl"
                    : "border-white/[0.06] bg-[#111319]/50 backdrop-blur-md hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle
                      className={`shrink-0 h-4 w-4 transition-colors duration-300 ${
                        isOpen ? "text-[#d4af37]" : "text-muted-foreground"
                      }`}
                    />
                    <span className="font-editorial text-lg sm:text-xl font-medium text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`shrink-0 h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#d4af37]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed border-t border-white/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
