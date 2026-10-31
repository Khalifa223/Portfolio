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
  Copy,
  Check,
  Sparkles,
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

const contactItems = [
  {
    icon: <Mail className="w-5 h-5 text-amber-400" />,
    label: "Email direct",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: <Phone className="w-5 h-5 text-emerald-400" />,
    label: "Téléphone & WhatsApp",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <MapPin className="w-5 h-5 text-rose-400" />,
    label: "Localisation principale",
    value: `${siteConfig.contact.location}, Mali`,
  },
  {
    icon: <Icons.github className="w-5 h-5 text-indigo-400" />,
    label: "Profil GitHub",
    value: "github.com/Khalifa223",
    href: siteConfig.links.github,
  },
  {
    icon: <Icons.linkedin className="w-5 h-5 text-sky-400" />,
    label: "Profil LinkedIn",
    value: "linkedin.com/in/fatoma-n-daou",
    href: siteConfig.links.linkedin,
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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
    await new Promise((resolve) => setTimeout(resolve, 1400));
    console.log(values);
    setIsSubmitting(false);
    setSubmitStatus("success");
    reset();
    setTimeout(() => setSubmitStatus("idle"), 6000);
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="Contact & Collaboration"
          title="Discutons de Votre Projet"
          subtitle="Une opportunité en entreprise, un projet applicatif ou un besoin technique ? Je suis à votre écoute."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div>
              <div className="p-6 sm:p-8 rounded-3xl bg-card/60 border border-white/10 backdrop-blur-xl shadow-xl mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2 block">
                  Coordonnées directes
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Restons en contact
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Que ce soit pour un entretien, une offre de poste ou une collaboration, vous pouvez me joindre directement via ces canaux.
                </p>

                <div className="space-y-4 mt-6">
                  {contactItems.map((item, idx) => (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-[11px] font-medium text-muted-foreground">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-xs sm:text-sm font-semibold text-foreground hover:text-amber-400 transition-colors truncate block"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-xs sm:text-sm font-semibold text-foreground truncate block">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => copyToClipboard(item.value, idx)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                        title="Copier"
                        aria-label="Copier"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-md flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Réponse garantie sous <strong>24 à 48 heures</strong>. Disponible pour des missions à Bamako et à distance.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Votre nom <span className="text-amber-500">*</span>
                    </label>
                    <Input
                      placeholder="Ex: Moussa Diarra"
                      className="h-11 rounded-xl bg-white/[0.03] border-white/10 text-sm focus:border-amber-500/50"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Votre adresse email <span className="text-amber-500">*</span>
                    </label>
                    <Input
                      placeholder="nom@entreprise.com"
                      type="email"
                      className="h-11 rounded-xl bg-white/[0.03] border-white/10 text-sm focus:border-amber-500/50"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                    Objet de votre message <span className="text-amber-500">*</span>
                  </label>
                  <Input
                    placeholder="Opportunité de poste, collaboration technique, devis..."
                    className="h-11 rounded-xl bg-white/[0.03] border-white/10 text-sm focus:border-amber-500/50"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                    Votre message <span className="text-amber-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Décrivez votre besoin, les technologies souhaitées ou les détails du poste..."
                    className="min-h-[140px] resize-none rounded-xl bg-white/[0.03] border-white/10 text-sm focus:border-amber-500/50"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Votre message a été envoyé avec succès ! Je reviens vers vous rapidement.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
