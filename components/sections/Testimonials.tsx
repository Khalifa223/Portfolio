"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Témoignages"
          title="Retours de Collaborateurs & Partenaires"
          subtitle="Ce que mes collègues et responsables disent de ma rigueur et de la qualité de mes livrables."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-3 sm:p-6">
                    <div className="relative p-8 sm:p-12 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl text-center">
                      <Quote className="absolute top-6 left-8 w-12 h-12 text-amber-500/10 pointer-events-none" />

                      {/* Golden Stars */}
                      <div className="flex gap-1.5 mb-6 justify-center">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]"
                          />
                        ))}
                      </div>

                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-relaxed mb-8 italic max-w-2xl mx-auto">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="flex items-center justify-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40 shadow-md"
                          loading="lazy"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-sm text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role} • <span className="text-amber-400 font-medium">{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-card/80 border-white/10 text-foreground hover:bg-amber-500 hover:text-slate-950 transition-colors" />
            <CarouselNext className="hidden md:flex -right-6 bg-card/80 border-white/10 text-foreground hover:bg-amber-500 hover:text-slate-950 transition-colors" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
