import { Star } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] section-padding border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-3">
              What Clients Say About My Results
            </h2>
            <p className="text-gray-400 text-lg">
              Real feedback from home service businesses that transformed their lead generation
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeUp key={testimonial.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 card-hover h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, s) => (
                    <Star key={s} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Result Badge */}
                <div className="rounded-xl bg-purple-600/20 border border-purple-500/30 px-4 py-2 mb-4">
                  <p className="text-xs text-purple-400 font-semibold mb-0.5">Result Achieved</p>
                  <p className="text-sm font-bold text-purple-300">{testimonial.result}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
