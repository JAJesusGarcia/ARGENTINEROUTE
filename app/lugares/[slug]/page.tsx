import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPlaceBySlug, getAllPlaceSlugs } from "@/data/places";
import { PlaceContent } from "./place-content";

interface PlacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPlaceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PlacePageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    return {
      title: "Lugar no encontrado",
    };
  }

  return {
    title: `${place.name} - ${place.provinceName}`,
    description: place.description,
    openGraph: {
      title: `${place.name} | ARGENTINEROUTE`,
      description: place.shortDescription,
    },
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    notFound();
  }

  return <PlaceContent place={place} />;
}
