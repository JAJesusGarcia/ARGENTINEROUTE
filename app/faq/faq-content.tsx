"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/page-hero";
import { faqItems } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FAQContent() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Preguntas frecuentes"
        subtitle="Encontrá respuestas a las dudas más comunes sobre nuestros viajes, servicios y experiencias."
        tagline="FAQ"
        backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
      />

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={item.id}
                    className="glass rounded-2xl border-0 px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center glass rounded-3xl p-8"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              ¿No encontrás tu respuesta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para ayudarte con cualquier consulta
              adicional.
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
            >
              <Link href="/contacto">
                Contactanos
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
