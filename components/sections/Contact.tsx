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
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  organization: z.string().optional(),
  email: z.string().email({ message: "Adresse email invalide." }),
  needType: z.string().min(1, { message: "Veuillez sélectionner un type de besoin." }),
  message: z.string().min(10, { message: "Votre message doit comporter au moins 10 caractères." }),
});

type FormData = z.infer<typeof formSchema>;

const needOptions = [
  "Architecture Web & Full Stack",
  "Conception d'APIs & Services Back-end",
  "Modélisation de Données & SQL",
  "Optimisation & Audit de Performance",
  "Collaboration en Entreprise / Recrutement",
  "Autre projet",
];

const contactChannels = [
  {
    icon: <Mail className="w-4 h-4 text-[#d4af37]" />,
    label: "Email direct",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: <Phone className="w-4 h-4 text-[#d4af37]" />,
    label: "Téléphone & WhatsApp",
    value: siteConfig.contact.phone,
    href: "https://wa.me/22393973071",
  },
  {
    icon: <MapPin className="w-4 h-4 text-[#d4af37]" />,
    label: "Localisation",
    value: "Bamako, Mali",
  },
  {
    icon: <Icons.github className="w-4 h-4 text-[#d4af37]" />,
    label: "Dépôts GitHub",
    value: "github.com/Khalifa223",
    href: siteConfig.links.github,
  },
  {
    icon: <Icons.linkedin className="w-4 h-4 text-[#d4af37]" />,
    label: "Réseau LinkedIn",
    value: "linkedin.com/in/fatoma-n-daou",
    href: siteConfig.links.linkedin,
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      needType: needOptions[0],
    },
  });

  const formValues = watch();

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Construct WhatsApp prefilled message
    const waText = encodeURIComponent(
      `Bonjour Fatoma,\n\nJe vous contacte de la part de : ${values.name}${values.organization ? ` (${values.organization})` : ""}.\nEmail : ${values.email}\nBesoin : ${values.needType}\n\nMessage :\n${values.message}`
    );
    window.open(`https://wa.me/22393973071?text=${waText}`, "_blank");

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
    <section id="contact" className="py-28 relative overflow-hidden bg-[#0c0e13]/60 border-t border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Échange & Collaboration"
          title="Discutons de Votre Projet"
          subtitle="Une vision à concrétiser, un besoin d'architecture technique ou une opportunité d'ingénierie ? Transmettez votre brief."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Credentials & Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-[#111319]/80 border border-white/[0.08] backdrop-blur-xl">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-2 block">
                Canaux Privilégiés
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-foreground mb-3">
                Prendre Contact Directement
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                Pour toute demande urgente ou échange préliminaire, je réponds activement par messagerie instantanée ou par e-mail.
              </p>

              <div className="space-y-3">
                {contactChannels.map((item, idx) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/30 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-xs font-medium text-foreground hover:text-[#d4af37] transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-xs font-medium text-foreground truncate block">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(item.value, idx)}
                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      title="Copier"
                      aria-label="Copier"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action WhatsApp Direct */}
            <a
              href="https://wa.me/22393973071?text=Bonjour%20Fatoma,%20je%20souhaite%20échanger%20avec%20vous%20concernant%20un%20projet."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#111319]/80 border border-[#d4af37]/30 hover:border-[#d4af37] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-foreground">
                    Discuter via WhatsApp
                  </div>
                  <div className="text-[11px] text-muted-foreground font-light">
                    Réponse réactive sous 24h
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: High-End Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#111319]/80 backdrop-blur-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Votre nom & prénom <span className="text-[#d4af37]">*</span>
                    </label>
                    <Input
                      placeholder="Ex: Moussa Diarra"
                      className="h-11 rounded-xl bg-white/[0.02] border-white/[0.08] text-xs focus:border-[#d4af37]/50"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Organisation ou Entreprise
                    </label>
                    <Input
                      placeholder="Nom de la structure"
                      className="h-11 rounded-xl bg-white/[0.02] border-white/[0.08] text-xs focus:border-[#d4af37]/50"
                      {...register("organization")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Adresse email <span className="text-[#d4af37]">*</span>
                    </label>
                    <Input
                      placeholder="contact@domaine.com"
                      type="email"
                      className="h-11 rounded-xl bg-white/[0.02] border-white/[0.08] text-xs focus:border-[#d4af37]/50"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Type de besoin <span className="text-[#d4af37]">*</span>
                    </label>
                    <select
                      className="w-full h-11 rounded-xl bg-[#111319] border border-white/[0.08] px-3 text-xs text-foreground focus:border-[#d4af37]/50 outline-none"
                      {...register("needType")}
                    >
                      {needOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111319] text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                    Description de votre projet ou opportunité <span className="text-[#d4af37]">*</span>
                  </label>
                  <Textarea
                    placeholder="Précisez le contexte, les fonctionnalités attendues ou le calendrier estimé..."
                    className="min-h-[130px] resize-none rounded-xl bg-white/[0.02] border-white/[0.08] text-xs focus:border-[#d4af37]/50"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-[#090a0d] font-semibold text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmission en cours...</span>
                  ) : (
                    <>
                      <span>Transmettre la demande</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Votre demande a été préparée. Je vous recontacte dans les plus brefs délais.</span>
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
