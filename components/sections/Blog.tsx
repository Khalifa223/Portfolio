"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Blog & Articles"
          subtitle="Je partage mes découvertes, astuces et retours d'expérience sur le développement logiciel."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={post.url} className="block h-full">
                <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-md bg-background/70 border-none text-xs"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:underline mt-auto">
                      Lire l&apos;article
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
