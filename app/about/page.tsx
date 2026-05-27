import { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conocé la historia de ARGENTINEROUTE y al equipo que hace posible experiencias de viaje únicas por Argentina.",
};

export default function AboutPage() {
  return <AboutContent />;
}
