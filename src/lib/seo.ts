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
    image: `${BASE_URL}/umair.jpg.png`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.whatsapp,
    sameAs: [SITE_CONFIG.linkedIn, SITE_CONFIG.facebook, SITE_CONFIG.instagram, SITE_CONFIG.tiktok],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile Optimization",
      "Google Ads",
      "Meta Ads",
      "Web Design for Home Services",
      "Digital Marketing for HVAC",
      "Digital Marketing for Plumbing",
      "Digital Marketing for Roofing",
      "Digital Marketing for Electricians",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Marketing Consultant",
      occupationLocation: {
        "@type": "AdministrativeArea",
        name: "USA & Canada",
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
      name: "Digital Marketing Services for Home Service Businesses",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO for Home Service Businesses" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management for Contractors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads for Home Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design for Home Service Businesses" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Business Profile Optimization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Audit for Local Businesses" } },
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
    openingHours: "Mo-Su 09:00-21:00",
    sameAs: [SITE_CONFIG.linkedIn, SITE_CONFIG.facebook, SITE_CONFIG.instagram, SITE_CONFIG.tiktok],
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image ?? `${BASE_URL}/og-default.jpg`,
    author: {
      "@type": "Person",
      name: post.author,
      url: BASE_URL,
      image: `${BASE_URL}/umair.jpg.png`,
    },
    publisher: {
      "@type": "Person",
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
    keywords: post.keywords ?? ["Local SEO", "Home Services", "Digital Marketing"],
    articleSection: post.category,
    wordCount: post.readTime,
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
    name: `${service.title} for Home Service Businesses`,
    description: service.description,
    provider: {
      "@type": "Person",
      name: "Muhammad Umair",
      url: BASE_URL,
      image: `${BASE_URL}/umair.jpg.png`,
    },
    url: `${BASE_URL}/services/${service.slug}`,
    areaServed: ["United States", "Canada"],
    serviceType: service.title,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Home Service Businesses (HVAC, Plumbing, Roofing, Electrical)",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        description: "Custom pricing based on business needs and market competition",
      },
    },
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
      "@type": "ReadAction",
      target: [`${BASE_URL}/blog`],
    },
  };
}
