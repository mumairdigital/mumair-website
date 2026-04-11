import type { Metadata } from "next";
import { FadeUp } from "@/components/animations/FadeUp";
import { BlogCard } from "@/components/sections/BlogCard";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Local SEO & Digital Marketing Tips",
  description:
    "Expert insights on Local SEO, Google Ads, and digital marketing for home service businesses in USA and Canada. Written by Muhammad Umair.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/blog` },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Digital Marketing <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Local SEO strategies, Google Ads tips, and digital marketing insights for home service businesses
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <BlogCard post={post} />
              </FadeUp>
            ))}
          </div>

          {BLOG_POSTS.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">More posts coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
