"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@argentineroute.com",
    href: "mailto:info@argentineroute.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 341 555 0123",
    href: "tel:+543415550123",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Rosario, Santa Fe, Argentina",
    href: null,
  },
];

export function ContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        title="Contactanos"
        subtitle="Estamos listos para ayudarte a planificar el viaje de tus sueños por Argentina."
        tagline="Hablemos"
        backgroundImage="https://images.unsplash.com/photo-1540778670146-36e2bf77a891?q=80&w=2070"
      />

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
                  Información de contacto
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Completá el formulario o contactanos directamente. Te
                  responderemos a la brevedad.
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
                        ¡Mensaje enviado!
                      </h3>
                      <p className="text-muted-foreground">
                        Te responderemos a la brevedad. Gracias por contactarnos.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">
                            Nombre
                          </Label>
                          <Input
                            id="name"
                            placeholder="Tu nombre"
                            required
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            required
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground">
                          Asunto
                        </Label>
                        <Input
                          id="subject"
                          placeholder="¿En qué podemos ayudarte?"
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">
                          Mensaje
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Contanos sobre el viaje que tenés en mente..."
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
                          "Enviando..."
                        ) : (
                          <>
                            Enviar mensaje
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
