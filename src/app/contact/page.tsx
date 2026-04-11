import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { SITE_CONFIG } from "@/lib/constants";
import { buildFAQSchema } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Get Your Free Consultation",
  description:
    "Book a free 30-minute consultation with Muhammad Umair. Get a Local SEO audit and custom digital marketing strategy for your home service business.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/contact` },
};

const contactFaqs = [
  { q: "How fast will you respond?", a: "I typically respond within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me." },
  { q: "Is the consultation really free?", a: "100% free. No obligation, no pitch. Just genuine value and honest feedback about your current situation." },
  { q: "What happens after I contact you?", a: "We schedule a 30-minute video call where I audit your GBP and local rankings live and share my recommendations." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(contactFaqs)} />
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
}
