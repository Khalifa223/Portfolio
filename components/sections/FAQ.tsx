"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Questions Fréquentes"
          subtitle="Vous avez une question ? Vous trouverez probablement la réponse ici."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-primary/30 bg-card shadow-lg shadow-primary/5"
                  : "border-border/50 bg-card/50 backdrop-blur-sm"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle
                    className={`shrink-0 h-5 w-5 transition-colors duration-300 ${
                      openIndex === index
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span className="text-base font-semibold">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`shrink-0 h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pl-14 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
