"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/data/siteConfig";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  Globe,
} from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  subject: z
    .string()
    .min(5, { message: "Le sujet doit contenir au moins 5 caractères." }),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Téléphone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Localisation",
    value: siteConfig.contact.location,
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: "Portfolio",
    value: siteConfig.url,
    href: siteConfig.url,
  },
];

const socialLinks = [
  {
    icon: <Icons.github className="h-5 w-5" />,
    href: siteConfig.links.github,
    label: "GitHub",
  },
  {
    icon: <Icons.linkedin className="h-5 w-5" />,
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <Icons.twitter className="h-5 w-5" />,
    href: siteConfig.links.twitter,
    label: "X (Twitter)",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    setSubmitStatus("success");
    reset();
    setTimeout(() => setSubmitStatus("idle"), 5000);
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Me Contacter"
          subtitle="Un projet en tête ? N'hésitez pas à m'envoyer un message, je vous répondrai dans les plus brefs délais."
        />

        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-0.5">
                      {item.label}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/50">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Réseaux sociaux
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Nom <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Votre nom"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="votre@email.com"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Sujet <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="Demande de devis, collaboration, question..."
                    className="bg-background/50 border-border/50 focus:border-primary"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="min-h-[150px] resize-none bg-background/50 border-border/50 focus:border-primary"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-500 text-sm flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Votre message a été envoyé avec succès !
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Une erreur est survenue. Veuillez réessayer.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
