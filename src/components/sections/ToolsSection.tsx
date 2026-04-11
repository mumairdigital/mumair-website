import { FadeUp } from "@/components/animations/FadeUp";
import { TOOLS } from "@/lib/constants";

export function ToolsSection() {
  return (
    <section className="bg-[#0a0a0a] section-padding border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-3">
              Tools & Technologies I Use
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The latest SEO tools and platforms I use to deliver measurable results for home service businesses
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(TOOLS).map(([category, tools], i) => (
            <FadeUp key={category} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5 h-full">
                <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
