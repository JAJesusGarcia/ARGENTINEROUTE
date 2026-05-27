import { Metadata } from "next";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas a las preguntas más comunes sobre nuestros viajes y servicios.",
};

export default function FAQPage() {
  return <FAQContent />;
}
