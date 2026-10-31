"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight, MapPin, Sparkles, Star, Code2, Database, ShieldCheck } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Particles } from "@/components/ui/particles";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  const typedText = useTypewriter(
    ["Front-end Réactif", "Back-end Scalable", "Bases de Données SQL", "Architecture API REST"],
    110,
    70,
    2400
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Luxury ambient spotlights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <Particles />

      <div className="container relative mx-auto px-4 md:px-8 z-10 flex flex-col items-center text-center">
        {/* Status radar pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-card/70 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              {siteConfig.contact.location}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-foreground font-semibold text-xs">Disponible pour projets</span>
          </div>
        </motion.div>

        {/* Profile Avatar with Luxury Multi-Ring Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 blur-xl opacity-30 animate-pulse" />

          {/* Golden Ring Frame */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-200 to-amber-600 shadow-2xl shadow-amber-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-card p-1">
              <img
                src="/fatoma.jpg"
                alt="Fatoma N’DAOU"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

          {/* Floating Trust Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-3 px-3 py-1 rounded-full bg-card/90 border border-amber-500/30 backdrop-blur-md shadow-xl flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold text-foreground">Full Stack 5★</span>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground mb-3 block">
            Bonjour & Bienvenue, je suis
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 drop-shadow-sm">
              {siteConfig.name}
            </span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-5">
            Développeur Full Stack Web & Solutions de Données
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Passionné et polyvalent, j&apos;excelle dans la transformation d&apos;idées
            en applications web fluides, performantes et sécurisées qui répondent avec précision
            aux enjeux métiers.
          </p>
        </motion.div>

        {/* Dynamic Typewriter Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-card/60 border border-white/10 backdrop-blur-xl shadow-lg"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Expertise :
          </span>
          <span className="text-sm sm:text-base font-bold text-amber-400 font-mono">
            {typedText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="w-1.5 h-4 bg-amber-500 rounded-sm"
          />
        </motion.div>

        {/* Luxury CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16"
        >
          <Link
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] transition-all duration-300"
          >
            <span>Découvrir mes projets</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="/cv.pdf"
            target="_blank"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/10 bg-card/60 backdrop-blur-xl hover:bg-card/90 hover:border-amber-500/40 text-foreground font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
          >
            <Download className="h-4 w-4 text-amber-400" />
            <span>Télécharger mon CV</span>
          </a>
        </motion.div>

        {/* Executive Highlights Bar (CV Pillars) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { label: "Front-end", note: "5/5 Étoiles", icon: <Code2 className="w-4 h-4 text-amber-400" /> },
            { label: "Back-end", note: "4/5 Étoiles", icon: <ShieldCheck className="w-4 h-4 text-blue-400" /> },
            { label: "Base de données", note: "4/5 Étoiles", icon: <Database className="w-4 h-4 text-emerald-400" /> },
            { label: "Architecture API", note: "4/5 Étoiles", icon: <Sparkles className="w-4 h-4 text-indigo-400" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-amber-500/20 transition-all duration-300 text-left flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">{item.label}</div>
                <div className="text-[11px] text-amber-400/90 font-mono flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {item.note}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
