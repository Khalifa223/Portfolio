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
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Témoignages"
          subtitle="Ce que mes clients et collaborateurs disent de mon travail."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                  <div className="p-2 md:p-6">
                    <div className="relative p-8 md:p-10 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                      <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />

                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <p className="text-lg md:text-xl text-center leading-relaxed mb-8 text-foreground/90 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20 shadow-lg shadow-primary/10">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 bg-card border-border/50 hover:bg-primary hover:text-white hover:border-primary" />
              <CarouselNext className="static translate-y-0 bg-card border-border/50 hover:bg-primary hover:text-white hover:border-primary" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
