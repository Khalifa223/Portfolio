"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = ["Frontend", "Backend", "Mobile", "Tools"];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Compétences Techniques</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un aperçu des technologies que j'utilise au quotidien pour donner vie à vos projets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {category.charAt(0)}
                </span>
                {category}
              </h3>
              
              <div className="flex flex-col gap-4 flex-grow">
                {skills.filter(s => s.category === category).map((skill, index) => (
                  <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
