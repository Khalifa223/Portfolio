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
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5500, stopOnInteraction: true })
  );

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Confiance & Témoignages"
          title="Appréciations & Retours de Collaborateurs"
          subtitle="La perspective de responsables techniques et partenaires sur la rigueur et l'engagement apportés."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                    <div className="relative p-8 sm:p-14 rounded-3xl border border-white/[0.08] bg-[#111319]/80 backdrop-blur-xl text-center">
                      <Quote className="absolute top-6 left-8 w-12 h-12 text-[#d4af37]/15 pointer-events-none" />

                      <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-foreground/95 font-light leading-relaxed mb-8 italic max-w-2xl mx-auto">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="flex items-center justify-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border border-[#d4af37]/40 grayscale"
                          loading="lazy"
                        />
                        <div className="text-left">
                          <h4 className="font-editorial text-lg font-medium text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground font-light">
                            {testimonial.role} · <span className="text-[#d4af37] font-medium">{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-5 bg-[#111319] border-white/[0.08] text-foreground hover:bg-[#d4af37] hover:text-[#090a0d] transition-colors" />
            <CarouselNext className="hidden md:flex -right-5 bg-[#111319] border-white/[0.08] text-foreground hover:bg-[#d4af37] hover:text-[#090a0d] transition-colors" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
