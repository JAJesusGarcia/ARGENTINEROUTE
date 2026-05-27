import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProvinceBySlug, getAllProvinceSlugs } from "@/data/provinces";
import { getPlacesByProvince } from "@/data/places";
import { ProvinceContent } from "./province-content";

interface ProvincePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProvinceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProvincePageProps): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    return {
      title: "Provincia no encontrada",
    };
  }

  return {
    title: `${province.name} - Turismo y Viajes`,
    description: province.description,
    openGraph: {
      title: `${province.name} | ARGENTINEROUTE`,
      description: province.shortDescription,
    },
  };
}

export default async function ProvincePage({ params }: ProvincePageProps) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    notFound();
  }

  const places = getPlacesByProvince(slug);

  return <ProvinceContent province={province} places={places} />;
}
