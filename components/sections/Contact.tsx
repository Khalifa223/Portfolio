"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/data/siteConfig";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    
    // In a real app, integrate with Formspree, EmailJS, or an API route here
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    reset();
    setTimeout(() => setSubmitStatus("idle"), 5000);
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Me Contacter</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un projet en tête ? N'hésitez pas à m'envoyer un message, je vous répondrai dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Téléphone</h4>
                    <p className="text-foreground">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Localisation</h4>
                    <p className="text-foreground">{siteConfig.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm"
          >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nom</label>
                    <Input placeholder="John Doe" className="bg-background" {...register("name")} />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input placeholder="john@example.com" className="bg-background" {...register("email")} />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Sujet</label>
                  <Input placeholder="Demande de devis pour un projet React" className="bg-background" {...register("subject")} />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Parlez-moi de votre projet..." 
                    className="min-h-[150px] resize-none bg-background" 
                    {...register("message")} 
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-success text-sm mt-4">Votre message a été envoyé avec succès !</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-destructive text-sm mt-4">Une erreur est survenue. Veuillez réessayer.</p>
                )}
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
