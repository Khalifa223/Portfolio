"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Monitor, Server, Smartphone, Wrench } from "lucide-react";

const categoryConfig: Record<
  string,
  { icon: React.ReactNode; gradient: string }
> = {
  Frontend: {
    icon: <Monitor className="h-5 w-5" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  Backend: {
    icon: <Server className="h-5 w-5" />,
    gradient: "from-violet-500 to-purple-500",
  },
  Mobile: {
    icon: <Smartphone className="h-5 w-5" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  Tools: {
    icon: <Wrench className="h-5 w-5" />,
    gradient: "from-orange-500 to-amber-500",
  },
};

export function Skills() {
  const categories = ["Frontend", "Backend", "Mobile", "Tools"] as const;

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Compétences Techniques"
          subtitle="Un aperçu des technologies que j'utilise au quotidien pour donner vie à vos projets."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => {
            const config = categoryConfig[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {config.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>

                <div className="flex flex-col gap-3 flex-grow">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.1 + index * 0.05,
                        }}
                        className="group p-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-sm"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">
                            {skill.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="text-xs font-mono"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`bg-gradient-to-r ${config.gradient} h-full rounded-full`}
                          />
                        </div>
                        {skill.description && (
                          <p className="text-xs text-muted-foreground mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
