import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { PRICING_PLANS } from "@/lib/constants";

export function PricingSection() {
  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              Transparent Pricing Plans
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the package that best fits your home service business needs and budget
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl h-full flex flex-col overflow-hidden card-hover ${
                  plan.popular
                    ? "border-2 border-purple-600 shadow-xl shadow-purple-500/20"
                    : "border border-gray-200 shadow-md bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-purple-600 py-2 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 flex-1 flex flex-col ${plan.popular ? "bg-white pt-12" : ""}`}>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 mb-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle
                          className={`h-5 w-5 shrink-0 mt-0.5 ${
                            plan.popular ? "text-purple-600" : "text-green-500"
                          }`}
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full rounded-xl py-3.5 text-center text-sm font-bold transition-all duration-200 ${
                      plan.popular
                        ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/30"
                        : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include a free 30-minute strategy call. No contracts — cancel anytime.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
