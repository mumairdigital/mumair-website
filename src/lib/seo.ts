import type { Metadata } from "next";
import type { Location, Service, BlogPost } from "@/types";
import { SITE_CONFIG } from "@/lib/constants";

const BASE_URL = SITE_CONFIG.baseUrl;

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? `${BASE_URL}/og-default.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Muhammad Umair — Digital Marketing Expert",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Umair",
    jobTitle: "Digital Marketing Consultant",
    description: "Local SEO & Digital Marketing Expert for Home Service Businesses in USA & Canada",
    url: BASE_URL,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.whatsapp,
    sameAs: [SITE_CONFIG.linkedIn],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile Optimization",
      "Google Ads",
      "Meta Ads",
      "Web Design for Home Services",
      "Digital Marketing for HVAC",
      "Digital Marketing for Plumbing",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Marketing Consultant",
      occupationLocation: {
        "@type": "Country",
        name: "Pakistan",
      },
      description: "Specializing in Local SEO and digital marketing for home service businesses in USA and Canada",
    },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Muhammad Umair — Digital Marketing",
    description: "Local SEO & Digital Marketing services for home service businesses in USA & Canada",
    url: BASE_URL,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.whatsapp,
    founder: {
      "@type": "Person",
      name: "Muhammad Umair",
    },
    areaServed: ["United States", "Canada"],
    serviceType: [
      "Local SEO",
      "Google Ads Management",
      "Meta Ads Management",
      "Web Design",
      "Google Business Profile Optimization",
      "SEO Audit",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "30",
      bestRating: "5",
    },
  };
}

export function buildLocalBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Muhammad Umair — Local SEO Expert ${location.name}`,
    description: `Local SEO & Digital Marketing for home service businesses in ${location.name}, ${location.state}`,
    url: `${BASE_URL}/locations/${location.slug}`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.whatsapp,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.schema.addressLocality,
      addressRegion: location.schema.addressRegion,
      postalCode: location.schema.postalCode,
      addressCountry: location.schema.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    serviceArea: location.schema.areaServed,
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [SITE_CONFIG.linkedIn],
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Muhammad Umair",
      url: BASE_URL,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: ["Local SEO", "HVAC", "Home Services", "Digital Marketing"],
    articleSection: post.category,
  };
}

export function buildFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Person",
      name: "Muhammad Umair",
      url: BASE_URL,
    },
    url: `${BASE_URL}/services/${service.slug}`,
    areaServed: ["United States", "Canada"],
    serviceType: service.title,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Umair — Digital Marketing Expert",
    url: BASE_URL,
    description: SITE_CONFIG.tagline,
    author: {
      "@type": "Person",
      name: "Muhammad Umair",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
