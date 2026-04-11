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
  title: "Muhammad Umair — Local SEO & Digital Marketing Expert for Home Services",
  description:
    "Digital Marketing That Fills Your Phone With Leads. I help HVAC companies, plumbers, roofers, and electricians rank #1 on Google Maps in USA & Canada. 30+ clients, 95% success rate.",
  alternates: { canonical: SITE_CONFIG.baseUrl },
  openGraph: {
    title: "Muhammad Umair — Local SEO Expert",
    description: "Digital Marketing That Fills Your Phone With Leads",
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
