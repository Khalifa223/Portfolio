"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Solutions & Engagements"
          title="Offres & Interventions Logicielles"
          subtitle="Des réponses architecturales adaptées aux exigences des entreprises et des plateformes en forte croissance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const indexStr = (index + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative p-7 rounded-2xl border border-white/[0.08] bg-[#111319]/70 backdrop-blur-xl hover:border-[#d4af37]/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-xl font-light text-[#d4af37]">
                      {indexStr}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-foreground mb-3 group-hover:text-[#d4af37] transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#d4af37] transition-colors opacity-0 group-hover:opacity-100 shrink-0 ml-1" />
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
