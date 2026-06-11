import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertCircle, TrendingUp } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export function CaseStudies() {
  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-[#18055E] text-sm font-semibold uppercase tracking-wider mb-3">
              Real Work, Real Data
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              Case Study: Recovering a Local Business That Had Vanished From Google
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Data straight from Google Search Console and Google Business Profile — verifiable.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Problem + What I Did */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Problem</p>
                    <p className="text-sm font-bold text-gray-900">Google visibility had collapsed</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Rankings gone — not appearing for local searches",
                    "Search traffic flatlined in Google Search Console",
                    "Barely showing up for the local searches that brought in customers",
                    "Local SEO foundation needed rebuilding from scratch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18055E]/10">
                    <TrendingUp className="h-5 w-5 text-[#18055E]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">What I Did</p>
                    <p className="text-sm font-bold text-gray-900">Rebuilt the local SEO foundation from scratch</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    "Fixed the technical issues holding the site back",
                    "Restructured the site for local search",
                    "Optimised the Google Business Profile completely",
                    "Built citation consistency across directories",
                    "Put a review generation and reporting system in place",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#18055E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-500 mb-6 italic">
                  This is the same system I build for HVAC companies. Local search works the same whether it is a tile retailer in Birmingham or an AC company in Cape Coral.
                </p>

                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
                >
                  See Full Case Study with Screenshots <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right — Before/After screenshots */}
              <div className="bg-gray-50 p-8 lg:p-10 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search Console — Before</p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src="/mhtiles-search-console-before.jpeg"
                      alt="MH Tiles Search Console — before showing collapsed organic traffic"
                      width={520}
                      height={260}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#18055E] uppercase tracking-wider mb-2">Search Console — After Recovery</p>
                  <div className="rounded-xl overflow-hidden border border-[#18055E]/20 shadow-sm">
                    <Image
                      src="/mhtiles-search-console-after.png"
                      alt="MH Tiles Search Console — after local SEO rebuild showing recovering organic traffic"
                      width={520}
                      height={260}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
