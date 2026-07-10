"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { cloudinary } from "@/lib/claudinary";

export function ContactContent() {
  const { t, locale } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: "dariodanielbenitezsosa@gmail.com",
      href: "mailto:dariodanielbenitezsosa@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: "+5493416656170",
      href: "tel:+5493416656170",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t.contact.title}
        subtitle={t.contact.description}
        tagline={locale === "es" ? "Hablemos" : "Let's talk"}
        backgroundImage={cloudinary("images/staff/about-hero")}
        // backgroundVideo={cloudinary("videos/video-hero.mp4")}
      />
      {/* <PageHero
        title={`${t.about.title} ${t.about.titleHighlight}`}
        subtitle={t.about.description}
        tagline={t.nav.about}
        backgroundVideo="/videos/video-hero.mp4"
      /> */}

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t.contact.info}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {locale === "es"
                    ? "Completá el formulario o contactanos directamente. Te responderemos a la brevedad."
                    : "Fill out the form or contact us directly. We'll get back to you shortly."}
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const Content = (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {info.label}
                          </p>
                          <p className="font-medium text-foreground">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {Content}
                      </a>
                    ) : (
                      <div key={info.label}>{Content}</div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="glass rounded-3xl p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {t.contact.successTitle}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.contact.successMessage}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">
                            {t.contact.name}
                          </Label>
                          <Input
                            id="name"
                            placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                            required
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">
                            {t.contact.email}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={locale === "es" ? "tu@email.com" : "your@email.com"}
                            required
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground">
                          {locale === "es" ? "Asunto" : "Subject"}
                        </Label>
                        <Input
                          id="subject"
                          placeholder={
                            locale === "es"
                              ? "¿En qué podemos ayudarte?"
                              : "How can we help you?"
                          }
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">
                          {t.contact.message}
                        </Label>
                        <Textarea
                          id="message"
                          placeholder={t.contact.messagePlaceholder}
                          rows={5}
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 group"
                      >
                        {isLoading ? (
                          t.contact.sending
                        ) : (
                          <>
                            {t.contact.send}
                            <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
