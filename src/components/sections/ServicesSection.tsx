import Link from "next/link";
import { MapPin, Target, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

const featuredServices = [
  {
    slug: "local-seo",
    title: "Local SEO",
    description: "Rank higher on Google Maps and local search. Get more calls from people ready to hire.",
    icon: MapPin,
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review management",
      "Local keyword ranking",
    ],
    result: "Real Result: 400+ monthly calls for HVAC client",
    resultColor: "text-green-400",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "AI-optimized campaigns that deliver $2-$5 cost per conversion for home service businesses.",
    icon: Target,
    features: [
      "Smart bidding & AI optimization",
      "AI audience targeting",
      "Performance Max campaigns",
      "Conversion tracking",
    ],
    result: "Proven: $2-$5 cost per conversion achieved",
    resultColor: "text-blue-400",
  },
  {
    slug: "web-design",
    title: "Web Design",
    description: "High-converting websites built for home service businesses. Fast, SEO-friendly, mobile-first.",
    icon: Monitor,
    features: [
      "Conversion-first design",
      "Technical SEO built-in",
      "Speed optimization",
      "Lead capture forms",
    ],
    result: "Result: 180%+ traffic increase for clients",
    resultColor: "text-purple-400",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#FAF9F7] section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              Local SEO & Digital Marketing Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Services that combine proven Local SEO with Google & Meta Ads to fill your phone with leads
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 font-semibold mt-4 text-sm"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredServices.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 card-hover h-full flex flex-col">
                {/* Purple Header */}
                <div className="bg-gradient-to-br from-purple-600 to-violet-700 p-6 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 shrink-0" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`text-xs font-semibold mb-5 ${service.resultColor}`}>
                    ✓ {service.result}
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
          ))}
        </div>
      </div>
    </section>
  );
}
