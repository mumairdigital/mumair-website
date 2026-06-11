import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Monitor, Star, Wind, Search } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/layout/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HVAC Local SEO Services | Muhammad Umair",
  description:
    "GBP Optimization, Local SEO, HVAC Websites, and Review Management — four focused services to help HVAC companies rank #1 on Google Maps and get more booked calls.",
  alternates: { canonical: SITE_CONFIG.baseUrl + "/services" },
  openGraph: {
    title: "HVAC Local SEO Services | Muhammad Umair",
    description: "Four specialized services to help HVAC companies dominate Google Maps and get more booked service calls.",
    url: SITE_CONFIG.baseUrl + "/services",
  },
};

const services = [
  {
    slug: "google-business-profile",
    icon: Star,
    title: "Google Business Profile Optimization",
    tagline: "The single biggest lever in local HVAC search",
    description: "Your GBP is the first thing customers see when they search for HVAC services in their city. I optimize every element — categories, photos, posts, Q&A, and review strategy — to get you into the Google Maps 3-pack and drive more direct calls.",
    features: [
      "Complete profile setup & category optimization",
      "Photo and video uploads for stronger visibility",
      "Google Posts strategy for ongoing engagement",
      "Review generation system",
      "Q&A optimization and management",
      "Monthly GBP performance reporting",
    ],
    image: "/local-seo-concept.webp",
    result: "More calls and directions from Google Maps — without ads",
  },
  {
    slug: "local-seo",
    icon: MapPin,
    title: "HVAC Local SEO",
    tagline: "Compounds over time — works while you sleep",
    description: "Local SEO is the organic foundation that keeps delivering month after month. I build the local signals — citations, on-page optimization, schema markup, and keyword strategy — that move your HVAC company up in both Google Maps and organic search.",
    features: [
      "On-page local SEO optimization",
      "Local citation building & NAP cleanup",
      "Schema markup for HVAC businesses",
      "Local keyword strategy and targeting",
      "Competitor gap analysis",
      "Monthly Search Console reporting",
    ],
    image: "/hvac-service.webp",
    result: "Organic local visibility that compounds month over month",
  },
  {
    slug: "web-design",
    icon: Monitor,
    title: "HVAC Websites",
    tagline: "Built to convert visitors into booked calls",
    description: "Most HVAC websites look like they were built in 2015 and convert maybe 1-2% of visitors. I build fast, mobile-first websites specifically for HVAC companies — structured around what a homeowner needs to see before they pick up the phone.",
    features: [
      "Conversion-first design strategy",
      "Technical SEO built-in from day one",
      "Page speed optimization",
      "Lead capture forms & click-to-call",
      "Mobile-first responsive design",
      "Google Analytics & Search Console setup",
    ],
    image: "/ac-unit.webp",
    result: "A website that turns HVAC visitors into paying customers",
  },
  {
    slug: "reviews-reputation",
    icon: Wind,
    title: "Reviews & Reputation Management",
    tagline: "Fresh reviews are one of Google's strongest ranking signals",
    description: "New 5-star reviews do two things: they push you higher in Google's local rankings, and they convert skeptical homeowners into callers. I implement a systematic review generation process that works with your existing workflow.",
    features: [
      "Automated review request system",
      "Multi-platform review strategy (Google, Facebook)",
      "Review response templates and management",
      "Negative review damage control",
      "Review velocity monitoring",
      "Reputation reporting dashboard",
    ],
    image: "/hvac-technician.webp",
    result: "Consistent 5-star reviews that boost rankings and trust",
  },
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HVAC Local SEO Services",
  url: SITE_CONFIG.baseUrl + "/services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: SITE_CONFIG.baseUrl + "/services/" + s.slug,
    description: s.description,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={serviceListSchema} />

      {/* Hero */}
      <section className="bg-[#FAF9F7] pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#18055E] opacity-5" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeUp>
            <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              HVAC-Only Services
            </p>
            <h1 className="text-4xl font-extrabold text-[#18055E] sm:text-5xl mb-4 leading-tight">
              Four Services. One Focus. More HVAC Calls.
            </h1>
            <div className="h-1 w-16 bg-[#FEC33B] rounded-full mb-6 mx-auto" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Every service I offer is built specifically for HVAC companies — not repurposed from a generic agency playbook. Each one is designed to put your business in front of customers who are ready to book right now.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <FadeUp key={service.slug} delay={0.1}>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"}>
                  {/* Image */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="object-cover w-full"
                        style={{ maxHeight: "400px" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#18055E]/50 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-4 py-1.5 text-xs font-bold text-[#18055E]">
                          <Icon className="h-3.5 w-3.5" />
                          {service.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#18055E] to-[#2A0B7A] mb-5 shadow-lg">
                      <Icon className="h-7 w-7 text-[#FEC33B]" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#18055E] mb-3">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-[#18055E] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl bg-[#18055E]/5 border border-[#18055E]/10 px-5 py-3 mb-6">
                      <p className="text-xs font-bold text-[#18055E] uppercase tracking-wide mb-0.5">Expected Outcome</p>
                      <p className="text-sm text-gray-700">{service.result}</p>
                    </div>
                    <Link
                      href={"/services/" + service.slug}
                      className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* Also Available */}
      <section className="bg-[#FAF9F7] py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">Also Available</p>
            <h2 className="text-2xl font-extrabold text-[#18055E] mb-4">Free HVAC SEO Audit</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Before we talk about any paid engagement, I&apos;ll audit your current Google presence — GBP, website, citations, and competitor landscape — and show you exactly where the opportunity is in your market. No cost, no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
            >
              <Search className="h-4 w-4" />
              Request Free Audit
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Not Sure Which Service Your HVAC Company Needs First?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a free 30-minute call. I&apos;ll review your current Google presence and tell you exactly which service will move the needle fastest in your market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-8 py-4 text-base font-bold text-[#18055E] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Free Strategy Session <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </>
  );
}