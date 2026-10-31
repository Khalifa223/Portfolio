"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Services"
          title="Prestations & Solutions Logicielles"
          subtitle="Des interventions ciblées ou complètes pour transformer vos ambitions en applications performantes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative p-7 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top glow line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />

                <div>
                  <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-400 transition-colors opacity-0 group-hover:opacity-100" />
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
