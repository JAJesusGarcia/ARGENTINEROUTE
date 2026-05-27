import { HeroSection } from "@/components/sections/hero-section";
import { ProvincesSection } from "@/components/sections/provinces-section";
import { MapSection } from "@/components/sections/map-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProvincesSection />
      <MapSection />
    </>
  );
}
