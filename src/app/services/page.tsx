import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactSection } from "@/components/sections/ContactSection";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { MapPin, Monitor, Target, Share2, Search, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Local SEO, Google Ads, Meta Ads, Web Design, SEO Audit, and Google Business Profile services for home service businesses in USA & Canada.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/services` },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Monitor,
  Target,
  Share2,
  Search,
  Star,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Digital Marketing <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proven Local SEO and digital marketing services designed specifically for home service businesses in USA and Canada. Every service is focused on one thing: filling your phone with leads.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? MapPin;
              return (
                <FadeUp key={service.slug} delay={i * 0.08}>
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden card-hover h-full flex flex-col">
                    <div className="bg-gradient-to-br from-purple-600 to-violet-700 p-6 text-white">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                      <p className="text-purple-100 text-sm">{service.shortDescription}</p>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <ul className="space-y-2 mb-5 flex-1">
                        {service.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-purple-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs font-semibold text-green-600 mb-5">
                        ✓ {service.results}
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-purple-600 py-3 text-sm font-semibold text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-violet-700 py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-purple-100 text-lg mb-8">
              Book a free 30-minute consultation. I&apos;ll audit your current online presence and recommend exactly which services will get you the fastest results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
