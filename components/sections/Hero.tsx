"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Particles } from "@/components/ui/particles";

export function Hero() {
  const typedText = useTypewriter(
    ["Frontend", "Backend", "Mobile", "API REST"],
    120,
    80,
    2500
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,rgba(139,92,246,0.06),transparent)]" />

      <Particles />

      <div className="container relative mx-auto px-4 md:px-8 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 p-1 bg-card shadow-xl shadow-primary/10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
              alt="Photo de profil"
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 text-4xl select-none"
            aria-hidden="true"
          >
            👋
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            Disponible pour des missions freelance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        >
          Bonjour, je suis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Développeur
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Full Stack
          </span>
          <span className="text-muted-foreground">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
        >
          Je conçois des applications web et mobiles modernes, performantes,
          sécurisées et évolutives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold mb-10 h-8"
        >
          <span className="text-primary">Spécialisé en </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            {typedText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Voir mes projets
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-muted font-medium text-base transition-all duration-300 hover:scale-105"
          >
            Me contacter
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mt-12"
        >
          {["Frontend", "Backend", "Mobile", "API REST"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-card/80 backdrop-blur-sm text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
