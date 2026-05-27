import { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos para planificar tu próximo viaje por Argentina. Estamos aquí para ayudarte.",
};

export default function ContactPage() {
  return <ContactContent />;
}
