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
import { useTranslation } from "@/lib/i18n/context";

const faqItemsEn = [
  {
    id: "1",
    question: "What destinations do you cover?",
    answer:
      "We specialize in premium experiences throughout Argentina, including Patagonia, Mendoza, Salta, Jujuy, Cordoba, and many more. Each itinerary is designed to showcase the best of each region.",
  },
  {
    id: "2",
    question: "How do I book a trip?",
    answer:
      "You can contact us through our contact form, via WhatsApp, or by email. Our team will work with you to design the perfect itinerary based on your preferences and budget.",
  },
  {
    id: "3",
    question: "What is included in the packages?",
    answer:
      "Our packages typically include premium accommodation, private transportation, bilingual guides, activities and excursions, and some meals. Details vary by package.",
  },
  {
    id: "4",
    question: "When is the best time to visit Argentina?",
    answer:
      "Argentina can be visited year-round. Summer (December-February) is ideal for Patagonia, while autumn (March-May) is perfect for wine regions. Each season offers unique experiences.",
  },
  {
    id: "5",
    question: "Do you offer private tours?",
    answer:
      "Yes, all our tours can be customized as private experiences. We also offer small group options for those who prefer to travel with like-minded adventurers.",
  },
  {
    id: "6",
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, bank transfers, and PayPal. We require a deposit to confirm bookings, with the balance due before departure.",
  },
  {
    id: "7",
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 30+ days before departure receive a full refund. 15-29 days: 50% refund. Less than 15 days: no refund. We recommend travel insurance.",
  },
  {
    id: "8",
    question: "Do I need a visa to visit Argentina?",
    answer:
      "Most visitors from the Americas, Europe, and Australia do not need a visa for stays up to 90 days. We recommend checking with your local embassy for specific requirements.",
  },
];

export function FAQContent() {
  const { t, locale } = useTranslation();
  const items = locale === "es" ? faqItems : faqItemsEn;

  return (
    <>
      {/* Hero */}
      <PageHero
        title={`${t.faq.title} ${t.faq.titleHighlight}`}
        subtitle={t.faq.description}
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
              {items.map((item, index) => (
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
              {t.faq.stillQuestions}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.faq.contactTeam}
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
            >
              <Link href="/contacto">
                {t.faq.contactButton}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
