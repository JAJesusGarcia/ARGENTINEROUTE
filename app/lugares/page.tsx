import { Metadata } from "next";
import { LugaresContent } from "./lugares-content";

export const metadata: Metadata = {
  title: "Destinos",
  description:
    "Explorá todos los destinos turísticos que ARGENTINEROUTE tiene para ofrecerte. Desde montañas hasta viñedos.",
};

export default function LugaresPage() {
  return <LugaresContent />;
}
