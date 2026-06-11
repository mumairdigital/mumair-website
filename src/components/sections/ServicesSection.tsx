import Link from "next/link";
import { Star, MapPin, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

const featuredServices = [
  {
    slug: "google-business-profile",
    title: "GBP Optimization",
    tagline: "The single biggest lever in local HVAC search",
    description: "Your Google Business Profile is what shows up when someone searches 'AC repair near me.' I optimize every element so you appear in the 3-pack and get the call.",
    icon: Star,
    features: [
      "Complete profile setup & optimization",
      "Category & attribute optimization",
      "Photo strategy & Google Posts",
      "Review generation system",
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Compounds over time — works while you sleep",
    description: "Local SEO builds organic ranking authority that grows month over month. No ad spend required — the right signals in the right places get you found.",
    icon: MapPin,
    features: [
      "On-page local SEO optimization",
      "Citation cleanup & consistency",
      "Schema markup implementation",
      "Monthly Search Console reporting",
    ],
  },
  {
    slug: "web-design",
    title: "HVAC Websites",
    tagline: "Built to convert visitors into booked calls",
    description: "A website built specifically for HVAC — fast, mobile-first, and structured so that when someone lands on it, calling is the obvious next step.",
    icon: Monitor,
    features: [
      "Conversion-focused design",
      "Technical SEO built in",
      "Click-to-call & lead capture",
      "Search Console & GBP setup included",
    ],
  },
  {
    slug: "reviews-reputation",
    title: "Reviews & Reputation",
    tagline: "Fresh reviews are one of Google's strongest ranking signals",
    description: "A consistent flow of real reviews builds both your Google ranking and customer trust. I set up the system — you run the jobs, the reviews come in.",
    icon: Star,
    features: [
      "Review generation system setup",
      "Follow-up process & automation",
      "GBP review strategy",
      "Monthly reputation reporting",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#FAF9F7] section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              HVAC Local SEO Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four services. One niche. Everything focused on getting HVAC companies more booked calls from Google.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-[#18055E] hover:text-[#2A0B7A] font-semibold mt-4 text-sm"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 card-hover h-full flex flex-col">
                {/* Navy Header */}
                <div className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] p-6 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                  <p className="text-[#FEC33B] text-xs font-semibold leading-snug">{service.tagline}</p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#18055E] shrink-0" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-[#18055E] py-3 text-sm font-semibold text-[#18055E] hover:bg-[#18055E] hover:text-white transition-all duration-200"
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
