"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]"></div>

      <div className="container relative mx-auto px-4 md:px-8 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 p-1 bg-card">
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
               alt="Avatar" 
               className="w-full h-full object-cover rounded-full"
             />
          </div>
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="absolute -bottom-2 -right-2 text-4xl"
          >
             👋
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        >
          Bonjour, je suis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            John Doe
          </span>.
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground mt-2 block">
            Développeur Full Stack.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Je conçois des applications web et mobiles modernes, performantes, sécurisées et évolutives.
          Spécialisé en{" "}
          <span className="text-primary font-semibold">React</span>,{" "}
          <span className="text-secondary font-semibold">Node.js</span> et{" "}
          <span className="text-accent font-semibold">Flutter</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base transition-colors"
          >
            Voir mes projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            download
            className="inline-flex items-center justify-center h-11 px-8 rounded-full border border-border bg-background hover:bg-muted font-medium text-base transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Télécharger mon CV
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mt-12"
        >
          {["Frontend", "Backend", "Mobile", "API REST"].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-border">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 1.5 }}
           className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
