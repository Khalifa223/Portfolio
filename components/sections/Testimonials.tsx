"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Témoignages</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ce que mes clients et collaborateurs disent de mon travail.
          </p>
        </motion.div>

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
                    <Card className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-8 flex flex-col items-center text-center">
                        <div className="flex gap-1 mb-6 text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl text-foreground italic mb-8 relative">
                          <span className="text-4xl text-primary/20 absolute -top-4 -left-6 font-serif">"</span>
                          {testimonial.content}
                          <span className="text-4xl text-primary/20 absolute -bottom-6 -right-4 font-serif">"</span>
                        </p>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8 gap-4">
              <CarouselPrevious className="position-static transform-none bg-background border-border/50 hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="position-static transform-none bg-background border-border/50 hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
