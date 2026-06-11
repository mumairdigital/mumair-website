import { Wind, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              HVAC Is My Only Niche
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Not a side offering. Not one of ten industries I serve. HVAC is all I do.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-3xl overflow-hidden border-2 border-[#18055E]/20 shadow-xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Image */}
              <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
                <Image
                  src="/hvac-technician.webp"
                  alt="HVAC technician servicing an air conditioning unit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#18055E]/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-4 py-1.5 text-xs font-bold text-[#18055E]">
                    <Wind className="h-3.5 w-3.5" />
                    HVAC Only
                  </span>
                </div>
              </div>

              {/* Right — Copy */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18055E]/10">
                    <Wind className="h-6 w-6 text-[#18055E]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">HVAC Companies</h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  HVAC is my only niche — not a side offering. I help HVAC businesses rank on Google Maps, get into the 3-pack, and convert local searches into booked calls. When someone&apos;s AC breaks at 9pm and they search Google, the company on page one gets the call. That company should be yours.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "You work directly with me — no junior account manager",
                    "Real data: Search Console and GBP screenshots provided",
                    "Month-to-month — no long-term contracts",
                    "HVAC is my only niche — deepest focus, better work",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-[#18055E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
                >
                  Get Your Free HVAC Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
