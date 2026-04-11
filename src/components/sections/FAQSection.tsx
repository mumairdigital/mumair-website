"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-purple-100 text-purple-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div
                className={cn(
                  "rounded-2xl border bg-white overflow-hidden transition-all duration-200",
                  openIndex === i
                    ? "border-purple-300 shadow-md shadow-purple-100"
                    : "border-gray-200 shadow-sm"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-base font-semibold text-gray-900 pr-4">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-purple-500 shrink-0 transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
