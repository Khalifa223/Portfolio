"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    { icon: <Code2 className="h-6 w-6 text-primary" />, title: "Qualité du code", desc: "Clean code & Bonnes pratiques" },
    { icon: <Laptop className="h-6 w-6 text-primary" />, title: "Apprentissage", desc: "Veille technologique constante" },
    { icon: <Users className="h-6 w-6 text-primary" />, title: "Travail d'équipe", desc: "Méthodes Agiles & Collaboration" },
    { icon: <Rocket className="h-6 w-6 text-primary" />, title: "Résolution", desc: "Approche orientée solutions" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionné par la création d'expériences numériques exceptionnelles, je transforme des idées complexes en applications élégantes et performantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-2 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" 
                alt="Espace de travail développeur" 
                className="w-full h-auto rounded-xl relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold">Développeur Full Stack & UX/UI Designer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Avec plusieurs années d'expérience dans le développement web et mobile, j'ai acquis une solide expertise dans la conception d'architectures logicielles modernes. Mon approche combine rigueur technique et sensibilité design pour livrer des produits finis haut de gamme.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je crois fermement que le code doit être non seulement fonctionnel, mais aussi maintenable et évolutif. J'accorde une importance particulière à l'accessibilité (WCAG), au SEO et aux performances (Core Web Vitals).
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-background border-none shadow-sm">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
