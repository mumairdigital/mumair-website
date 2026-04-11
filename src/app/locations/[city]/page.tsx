import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS, SITE_CONFIG } from "@/lib/constants";
import { LocationPageTemplate } from "@/components/sections/LocationPage";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const location = LOCATIONS.find((l) => l.slug === params.city);
  if (!location) return {};

  return {
    title: `Local SEO Expert in ${location.name}, ${location.state} | Muhammad Umair`,
    description: `Local SEO & Digital Marketing for home service businesses in ${location.name}, ${location.state}. Expert Google Maps ranking, Google Ads, and lead generation for HVAC, plumbing, and roofing companies.`,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: `Local SEO Expert in ${location.name} | Muhammad Umair`,
      description: `Dominate ${location.name} local search with proven SEO strategies for home service businesses.`,
      url: `${SITE_CONFIG.baseUrl}/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const location = LOCATIONS.find((l) => l.slug === params.city);
  if (!location) notFound();

  return <LocationPageTemplate location={location} />;
}
