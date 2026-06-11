import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Star, Phone } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildLocalBusinessSchema, buildFAQSchema } from "@/lib/seo";
import { NAV_SERVICES } from "@/lib/constants";
import type { Location } from "@/types";

interface LocationPageProps {
  location: Location;
}

export function LocationPageTemplate({ location }: LocationPageProps) {
  const localBusinessSchema = buildLocalBusinessSchema(location);
  const faqSchema = buildFAQSchema(location.faqs);

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={faqSchema} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        {/* City background image */}
        {location.image && (
          <Image
            src={location.image}
            alt={location.name + " HVAC Local SEO"}
            fill
            priority
            className="object-cover object-center"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18055E]/90 via-[#18055E]/75 to-[#18055E]/40" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 pt-20 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FEC33B]/40 bg-[#18055E]/40 backdrop-blur-sm px-4 py-2 text-sm text-[#FEC33B] mb-6">
              <MapPin className="h-4 w-4" />
              {location.country} · {location.countryCode}
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              HVAC Local SEO in{" "}
              <span className="text-[#FEC33B]">{location.name}</span>
            </h1>
            <p className="text-xl font-semibold text-[#FEC33B] mb-5">{location.tagline}</p>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {location.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-7 py-4 text-base font-bold text-[#18055E] shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Free {location.name} HVAC Audit <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={"https://wa.me/923209943057?text=" + encodeURIComponent("Hi Muhammad, I need HVAC Local SEO help in " + location.name + ", " + location.state + ".")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                WhatsApp Me
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Local Stats */}
      <section className="bg-zinc-950 border-t border-white/5 py-12 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center">
                <div className="text-2xl font-extrabold text-white mb-1">{location.population}</div>
                <div className="text-gray-400 text-sm">Population</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center">
                <div className="text-2xl font-extrabold text-white mb-1">{location.localStats.businesses}</div>
                <div className="text-gray-400 text-sm">Home Service Businesses</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center sm:col-span-2 md:col-span-1">
                <div className="text-lg font-bold text-[#FEC33B] mb-1">{location.marketFocus}</div>
                <div className="text-gray-400 text-sm">Primary Market Focus</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Local SEO in This City */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <FadeUp>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
                  Why Local SEO Matters in {location.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {location.localStats.homeServices}. When a homeowner searches for AC repair or HVAC service in {location.name}, the companies at the top of Google Maps get the call — and the rest get nothing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I specialize in getting HVAC companies to the top of Google in {location.name}, {location.state} — through GBP optimization, Local SEO, and a systematic approach to reviews and reputation.
                </p>
                <ul className="space-y-3">
                  {[
                    `Rank in the Google Maps 3-pack in ${location.name}`,
                    "Dominate local search for your services",
                    "Get more calls from ready-to-buy customers",
                    "Build a 5-star reputation that converts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#18055E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services Available in {location.name}</h3>
                {NAV_SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-[#18055E]/30 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{service.label}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#18055E] shrink-0" />
                  </Link>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Local Testimonial — only shown if testimonial data exists */}
      {location.testimonial && (
        <section className="bg-[#0a0a0a] py-16 px-4 md:px-8 border-t border-white/5">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center">
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  &ldquo;{location.testimonial.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18055E] text-white font-bold">
                    {location.testimonial.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{location.testimonial.author}</p>
                    <p className="text-gray-400 text-sm">
                      {location.testimonial.role}, {location.testimonial.company}
                    </p>
                    <p className="text-[#FEC33B] text-xs font-semibold mt-0.5">
                      {location.testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* City-Specific FAQ */}
      <section className="bg-[#FAF9F7] py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
              FAQs — Local SEO in {location.name}
            </h2>
          </FadeUp>
          <div className="space-y-4">
            {location.faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {location.nearbyCities.length > 0 && (
        <section className="bg-white py-12 px-4 md:px-8 border-t border-gray-100">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="text-gray-500 text-sm mb-4">Also Serving Nearby Cities</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {location.nearbyCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="rounded-full border border-[#18055E]/20 bg-[#18055E]/5 px-5 py-2 text-sm font-medium text-[#18055E] hover:bg-[#18055E]/10 transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Dominate {location.name} Local Search?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a free 30-minute consultation and Local SEO audit for your {location.name} business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#18055E] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get My Free {location.name} Audit <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
