import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResultsDashboard } from "@/components/sections/ResultsDashboard";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Industries } from "@/components/sections/Industries";
import { PricingSection } from "@/components/sections/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildFAQSchema } from "@/lib/seo";
import { FAQ_ITEMS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Local SEO Expert for Home Services | Muhammad Umair",
  description:
    "I help HVAC, plumbing, roofing & electrical companies rank #1 on Google Maps in USA & Canada. Local SEO, Google Ads & GBP optimization. 30+ clients. Get a free audit.",
  alternates: { canonical: SITE_CONFIG.baseUrl },
  openGraph: {
    title: "Local SEO Expert for Home Services | Muhammad Umair",
    description: "I help HVAC, plumbing & roofing companies rank #1 on Google Maps in USA & Canada. 30+ clients. Get a free Local SEO audit today.",
    url: SITE_CONFIG.baseUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(FAQ_ITEMS)} />
      <HeroSection />
      <ResultsDashboard />
      <ServicesSection />
      <AboutSection />
      <CaseStudies />
      <WhyChooseMe />
      <HowItWorks />
      <Industries />
      <PricingSection />
      <Testimonials />
      <ToolsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
