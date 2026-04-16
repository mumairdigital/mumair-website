import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildPersonSchema, buildProfessionalServiceSchema, buildWebsiteSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Muhammad Umair",
    default: "Muhammad Umair — Local SEO & Digital Marketing Expert",
  },
  description:
    "Local SEO & Digital Marketing Expert for home service businesses in USA & Canada. Specializing in Google Maps ranking, Google Ads, and lead generation for HVAC, plumbing, roofing, and electrical companies.",
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  keywords: [
    "Local SEO",
    "Digital Marketing",
    "Google Ads",
    "Meta Ads",
    "HVAC Marketing",
    "Plumbing Marketing",
    "Roofing Marketing",
    "Home Service Marketing",
    "Muhammad Umair",
    "mumairdigital",
  ],
  authors: [{ name: "Muhammad Umair" }],
  creator: "Muhammad Umair",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Umair — Digital Marketing Expert",
    title: "Muhammad Umair — Local SEO & Digital Marketing Expert",
    description: "Local SEO & Digital Marketing Expert for home service businesses in USA & Canada. Helping HVAC, plumbing, roofing & electrical companies rank #1 on Google Maps.",
    images: [{ url: `${SITE_CONFIG.baseUrl}/og-default.jpg`, width: 1200, height: 630, alt: "Muhammad Umair — Local SEO Expert for Home Service Businesses" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <JsonLd schema={buildPersonSchema()} />
        <JsonLd schema={buildProfessionalServiceSchema()} />
        <JsonLd schema={buildWebsiteSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
