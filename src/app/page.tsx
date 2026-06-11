import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Industries } from "@/components/sections/Industries";
import { PricingSection } from "@/components/sections/PricingSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildFAQSchema } from "@/lib/seo";
import { FAQ_ITEMS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HVAC Local SEO Expert | Muhammad Umair",
  description:
    "I help HVAC companies get more booked calls from Google. Local SEO, GBP optimization & Google Ads for HVAC businesses. Free audit available.",
  alternates: { canonical: SITE_CONFIG.baseUrl },
  openGraph: {
    title: "HVAC Local SEO Expert | Muhammad Umair",
    description: "I help HVAC companies get more booked calls from Google. Local SEO, GBP optimization & Google Ads. Free audit available.",
    url: SITE_CONFIG.baseUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(FAQ_ITEMS)} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CaseStudies />
      <WhyChooseMe />
      <HowItWorks />
      <Industries />
      <PricingSection />
      <ToolsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
