import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { buildServiceSchema } from "@/lib/seo";
import { MapPin, Monitor, Target, Share2, Search, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Monitor,
  Target,
  Share2,
  Search,
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
    title: `${service.title} for Home Service Businesses`,
    description: service.description,
    alternates: { canonical: `${SITE_CONFIG.baseUrl}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Muhammad Umair`,
      description: service.description,
      url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const schema = buildServiceSchema(service);
  const Icon = iconMap[service.icon] ?? MapPin;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd schema={schema} />

      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-700 opacity-15" style={{ filter: "blur(100px)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 mx-auto mb-5 shadow-lg shadow-purple-500/30">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              {service.heroTagline}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:scale-105 transition-all duration-300 btn-glow"
              >
                {service.ctaText} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Result Highlight */}
      <section className="bg-purple-600 py-8 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-purple-100 text-sm font-semibold uppercase tracking-wider mb-1">Proven Result</p>
          <p className="text-2xl font-extrabold text-white">{service.results}</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <FadeUp>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Key Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{b.title}</h3>
                      <p className="text-gray-600 text-sm">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0a0a] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
              My {service.title} Process
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 card-hover">
                  <div className="text-5xl font-black text-purple-500/20 mb-3">{step.step}</div>
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
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
                {service.title} FAQs
              </h2>
            </FadeUp>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
              Related Services
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {otherServices.map((s) => {
              const SIcon = iconMap[s.icon] ?? MapPin;
              return (
                <FadeUp key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-purple-300 hover:shadow-md transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 shrink-0">
                      <SIcon className="h-5 w-5 text-purple-600" />
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
      <section className="bg-gradient-to-br from-purple-600 to-violet-700 py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-purple-100 text-lg mb-8">
              Book a free consultation and get a custom strategy for your home service business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {service.ctaText} <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
