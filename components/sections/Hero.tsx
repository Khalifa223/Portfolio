"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin, Database, Shield, LayoutGrid } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Atmospheric ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#d4af37]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center text-center">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-medium bg-[#111319]/80 border border-white/[0.08] backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              {siteConfig.contact.location}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-foreground tracking-wide">
              Disponible pour projets & collaborations
            </span>
          </div>
        </motion.div>

        {/* Portrait & Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 border border-[#d4af37]/30 bg-gradient-to-b from-[#d4af37]/20 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111319]">
              <img
                src="/fatoma.jpg"
                alt="Fatoma N’DAOU"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-4 block">
            Ingénierie Logicielle & Architecture Web
          </span>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-foreground mb-6 leading-[1.05]">
            Fatoma <span className="italic font-light text-[#d4af37]">N’Daou</span>
          </h1>

          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-foreground/90 font-light max-w-3xl mx-auto mb-6 leading-snug">
            Concevoir des architectures numériques fiables, scalables et des interfaces à forte valeur ajoutée.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Diplômé en Génie Informatique, j’accompagne entreprises et porteurs de projet dans la réalisation d’écosystèmes web robustes — de la modélisation rigoureuse des données à l’expérience utilisateur.
          </p>
        </motion.div>

        {/* High-End CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-20"
        >
          <Link
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-[#090a0d] font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20"
          >
            <span>Explorer les réalisations</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/10 bg-[#111319]/60 hover:bg-[#111319] hover:border-[#d4af37]/40 text-foreground font-medium text-xs tracking-wider uppercase transition-all duration-300"
          >
            <span>Initier un échange</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#d4af37]" />
          </a>
        </motion.div>

        {/* 3 Signature Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/[0.08] pt-10"
        >
          {[
            {
              num: "01",
              title: "Structurer",
              subtitle: "Modélisation de données & Architecture Back-end",
              icon: <Database className="w-4 h-4 text-[#d4af37]" />,
            },
            {
              num: "02",
              title: "Sécuriser",
              subtitle: "APIs RESTful fiables, logiques métier & scalabilité",
              icon: <Shield className="w-4 h-4 text-[#d4af37]" />,
            },
            {
              num: "03",
              title: "Sublimer",
              subtitle: "Interfaces fluides, performantes & soignées",
              icon: <LayoutGrid className="w-4 h-4 text-[#d4af37]" />,
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              className="p-5 rounded-2xl bg-[#111319]/40 border border-white/[0.06] text-left hover:border-[#d4af37]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-editorial text-xl font-light text-[#d4af37]">
                  {pillar.num}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="font-editorial text-xl font-medium text-foreground mb-1 group-hover:text-[#d4af37] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
