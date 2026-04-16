import type { Metadata } from "next";
import { FadeUp } from "@/components/animations/FadeUp";
import { BlogCard } from "@/components/sections/BlogCard";
import { JsonLd } from "@/components/layout/JsonLd";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Local SEO & Digital Marketing Blog for Home Service Businesses | Muhammad Umair",
  description:
    "Expert Local SEO, Google Ads & GBP strategies for HVAC, plumbing, roofing & electrical companies. Actionable guides written by Muhammad Umair — updated regularly.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/blog` },
  openGraph: {
    title: "Local SEO & Digital Marketing Blog for Home Services | Muhammad Umair",
    description: "Actionable SEO and marketing guides for HVAC, plumbing, roofing & electrical companies in USA & Canada.",
    url: `${SITE_CONFIG.baseUrl}/blog`,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Local SEO & Digital Marketing Blog for Home Service Businesses",
  url: `${SITE_CONFIG.baseUrl}/blog`,
  description: "Expert Local SEO, Google Ads and GBP strategies for HVAC, plumbing, roofing & electrical companies in USA & Canada.",
  author: {
    "@type": "Person",
    name: "Muhammad Umair",
    url: SITE_CONFIG.baseUrl,
  },
  blogPost: BLOG_POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_CONFIG.baseUrl}/blog/${p.slug}`,
    datePublished: p.date,
    description: p.metaDescription,
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd schema={blogSchema} />
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Local SEO & Digital Marketing <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Actionable Local SEO strategies, Google Ads tips, and GBP guides written specifically for HVAC, plumbing, roofing & electrical companies in USA & Canada.
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
