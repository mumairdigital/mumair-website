import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Wind } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { buildServiceSchema, buildFAQSchema } from "@/lib/seo";
import { MapPin, Monitor, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Monitor,
  Wind,
  Star,
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title + " for HVAC Companies | Muhammad Umair",
    description: service.description + " Book a free HVAC audit today.",
    alternates: { canonical: SITE_CONFIG.baseUrl + "/services/" + service.slug },
    openGraph: {
      title: service.title + " for HVAC Companies | Muhammad Umair",
      description: service.description,
      url: SITE_CONFIG.baseUrl + "/services/" + service.slug,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const schema = buildServiceSchema(service);
  const faqSchema = service.faq.length > 0 ? buildFAQSchema(service.faq) : null;
  const Icon = iconMap[service.icon] ?? MapPin;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd schema={schema} />
      {faqSchema && <JsonLd schema={faqSchema} />}

      {/* Hero */}
      <section className="bg-[#FAF9F7] pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#18055E] opacity-5" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#18055E] to-[#2A0B7A] mx-auto mb-5 shadow-lg shadow-[#18055E]/30">
              <Icon className="h-8 w-8 text-[#FEC33B]" />
            </div>
            <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">HVAC Local SEO</p>
            <h1 className="text-4xl font-extrabold text-[#18055E] sm:text-5xl mb-4 leading-tight">
              {service.title} for HVAC Companies
            </h1>
            <div className="h-1 w-16 bg-[#FEC33B] rounded-full mb-6 mx-auto" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#18055E]/30 hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
            >
              {service.ctaText} <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Result Highlight */}
      <section className="bg-[#18055E] py-8 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-1">What This Delivers</p>
          <p className="text-2xl font-extrabold text-white">{service.results}</p>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <FadeUp>
              <div>
                <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">What&apos;s Included</p>
                <h2 className="text-2xl font-extrabold text-[#18055E] mb-6">
                  {service.title} — Full Scope
                </h2>
                <ul className="space-y-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#18055E] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">The Impact</p>
                <h2 className="text-2xl font-extrabold text-[#18055E] mb-6">
                  What HVAC Companies Gain
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-[#18055E]/30 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-[#FEC33B] shrink-0 mt-2" />
                        <div>
                          <h3 className="font-bold text-[#18055E] mb-1 text-sm">{b.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#18055E]/5 border-y border-[#18055E]/10 py-8 px-4">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#18055E] font-semibold text-center sm:text-left">
            Ready to get more HVAC calls from Google? Book a free audit.
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#18055E] px-6 py-3 text-sm font-bold text-white hover:bg-[#2A0B7A] transition-colors"
          >
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0a0a] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="text-center mb-10">
              <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">The Process</p>
              <h2 className="text-3xl font-extrabold text-white">
                How I Deliver {service.shortTitle} Results
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 h-full">
                  <div className="text-5xl font-black text-[#FEC33B]/20 mb-3">{step.step}</div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="bg-[#FAF9F7] py-16 px-4 md:px-8 border-t border-gray-100">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <h2 className="text-2xl font-extrabold text-[#18055E] mb-8 text-center">
                {service.shortTitle} FAQs
              </h2>
            </FadeUp>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[#18055E]/30 transition-colors">
                    <h3 className="font-bold text-[#18055E] mb-2">{item.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="bg-white py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-[#18055E] mb-8 text-center">
              Other HVAC SEO Services
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {otherServices.map((s) => {
              const SIcon = iconMap[s.icon] ?? MapPin;
              return (
                <FadeUp key={s.slug}>
                  <Link
                    href={"/services/" + s.slug}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-[#18055E]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#18055E]/10 shrink-0">
                      <SIcon className="h-5 w-5 text-[#18055E]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.results}</div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Get More HVAC Calls With {service.shortTitle}
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a free consultation and I&apos;ll show you exactly what the opportunity looks like for your HVAC company in your market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-8 py-4 text-base font-bold text-[#18055E] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {service.ctaText} <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </>
  );
}