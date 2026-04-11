import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, Tag, ArrowRight, ArrowLeft, User } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { JsonLd } from "@/components/layout/JsonLd";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";
import { buildBlogPostingSchema } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_CONFIG.baseUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_CONFIG.baseUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

const POST_CONTENT: Record<string, string> = {};

// The HVAC blog post content
POST_CONTENT["local-seo-for-hvac-companies"] = `
<h2>Why Local SEO is the #1 Growth Strategy for HVAC Companies</h2>
<p>If you're an HVAC company in the USA or Canada, there's no better investment than Local SEO. Think about it: when someone's AC breaks in August or their furnace dies in January, what's the first thing they do? They grab their phone and search "HVAC near me" or "AC repair [city]."</p>
<p>That single Google search represents a customer with an urgent problem and a credit card ready to spend $200-$5,000 to fix it. The HVAC companies that appear in the Google Maps 3-pack and the top organic results capture 90% of those calls. The rest get nothing.</p>
<p>In this complete guide, I'll walk you through exactly how to dominate local search as an HVAC company in 2026 — based on strategies I've used to generate 400+ monthly calls for real HVAC clients.</p>

<h2>1. Optimize Your Google Business Profile First</h2>
<p>Your Google Business Profile (GBP) is the single most important local SEO asset you have. It's what gets you into the Google Maps 3-pack — the three business listings that appear above all organic results for local searches.</p>

<h3>Complete Every Section</h3>
<p>Most HVAC companies have incomplete GBP profiles and wonder why they're not ranking. Here's what needs to be 100% complete:</p>
<ul>
  <li><strong>Business name:</strong> Use your exact legal business name — no keyword stuffing</li>
  <li><strong>Primary category:</strong> "HVAC Contractor" (not "Heating Contractor" — HVAC is more searched)</li>
  <li><strong>Secondary categories:</strong> Add "Air Conditioning Contractor," "Furnace Repair Service," "Heating Contractor"</li>
  <li><strong>Business description:</strong> Write a keyword-rich 750-character description mentioning your city, services, and years in business</li>
  <li><strong>Services:</strong> List every service you offer with individual prices or price ranges if possible</li>
  <li><strong>Photos:</strong> Upload 20+ high-quality photos of your team, trucks, equipment, and completed jobs</li>
  <li><strong>Hours:</strong> Keep hours accurate and update for holidays</li>
</ul>

<h3>Post Regular Google Posts</h3>
<p>Google Posts are like mini-ads that appear directly on your GBP. Post weekly with seasonal promotions, tips, or service updates. HVAC companies that post regularly see 2-3x more GBP engagement.</p>

<h2>2. Build Local Citations Consistently</h2>
<p>Local citations are mentions of your business name, address, and phone number (NAP) across the web. For HVAC companies, this means being listed on:</p>
<ul>
  <li>Yelp</li>
  <li>Angi (formerly Angie's List)</li>
  <li>HomeAdvisor</li>
  <li>Thumbtack</li>
  <li>BBB (Better Business Bureau)</li>
  <li>Your local Chamber of Commerce website</li>
  <li>Industry directories like ACCA (Air Conditioning Contractors of America)</li>
</ul>
<p>The key is NAP consistency — your name, address, and phone number must be <strong>identical</strong> everywhere. Even small variations (St. vs Street, or different phone number formats) can hurt your rankings.</p>

<h2>3. Target the Right Local Keywords</h2>
<p>Keyword research for HVAC is straightforward once you know the formula: <em>[Service] + [City]</em>.</p>

<h3>Primary Keywords to Target</h3>
<ul>
  <li>HVAC companies [city]</li>
  <li>AC repair [city]</li>
  <li>Furnace repair [city]</li>
  <li>Air conditioning installation [city]</li>
  <li>Heating and cooling [city]</li>
  <li>HVAC contractor near me</li>
  <li>Emergency AC repair [city]</li>
</ul>

<h3>Don't Forget Neighborhood and Suburb Keywords</h3>
<p>If you serve multiple cities, create a dedicated service page for each one. "HVAC repair Houston" and "HVAC repair Sugar Land" are different searches from customers in different locations.</p>
<p>I've helped HVAC clients rank in 5-8 cities simultaneously by building out properly optimized location pages — and the results are transformative. <Link href="/services/local-seo">Learn more about my Local SEO service →</Link></p>

<h2>4. Generate and Manage Reviews Systematically</h2>
<p>Reviews are the third most important ranking factor for Google Maps. HVAC companies with 50+ recent 5-star reviews consistently outrank competitors with fewer reviews, even if those competitors have been in business longer.</p>

<h3>How to Get More HVAC Reviews</h3>
<p>The best time to ask for a review is immediately after a successful service call while the customer is still happy. Here's the process:</p>
<ol>
  <li>Technician completes the job and confirms customer satisfaction</li>
  <li>Send an automated SMS or email within 1 hour with a direct link to your GBP review page</li>
  <li>Follow up once 3 days later if they haven't reviewed</li>
  <li>Respond to every review — both positive and negative</li>
</ol>
<p>This simple system has helped my clients go from 15 reviews to 80+ reviews in 6 months.</p>

<h3>Responding to Negative Reviews</h3>
<p>Negative reviews happen to every HVAC company. What matters is how you respond. Always:</p>
<ul>
  <li>Respond within 24 hours</li>
  <li>Apologize and acknowledge the issue</li>
  <li>Offer to make it right offline</li>
  <li>Keep it professional — never argue</li>
</ul>

<h2>5. Optimize Your Website for Local HVAC Searches</h2>
<p>Your website needs to support your GBP optimization, not exist independently from it. Key on-page SEO elements for HVAC websites:</p>
<ul>
  <li><strong>Title tags:</strong> "HVAC Repair &amp; Installation in [City] | [Company Name]"</li>
  <li><strong>Meta descriptions:</strong> Include city, main service, and a CTA</li>
  <li><strong>H1 tag:</strong> "Expert HVAC Services in [City], [State]"</li>
  <li><strong>LocalBusiness schema markup:</strong> Structured data that helps Google understand your business</li>
  <li><strong>Embedded Google Map:</strong> On your contact page and homepage</li>
  <li><strong>NAP in footer:</strong> Match your GBP exactly</li>
</ul>

<h2>The Bottom Line: Local SEO Pays Off for HVAC</h2>
<p>The HVAC companies I work with consistently see 300-500+ monthly calls within 6-8 months of starting a proper Local SEO campaign. When you consider that a single HVAC job is worth $300-$5,000+, the math is obvious.</p>
<p>If you're ready to stop relying on word-of-mouth and start generating consistent leads from Google, I'd love to help. I offer a <Link href="/contact">free 30-minute Local SEO audit</Link> where I'll review your GBP, check your rankings, and give you a clear action plan — no obligation.</p>
<p><Link href="/contact">Book your free HVAC SEO audit today →</Link></p>
`;

// Google Business Profile blog post content
POST_CONTENT["google-business-profile-optimization-home-service-businesses"] = `
<h2>Why Your Google Business Profile Is Your #1 Lead Generation Asset</h2>
<p>If you run a home service business — HVAC, plumbing, roofing, or electrical — your Google Business Profile (GBP) is more valuable than your website, your Facebook page, and your Yelp listing combined. Here's why: when a homeowner has a burst pipe at 2am or their furnace dies in January, they open Google and search "plumber near me" or "emergency HVAC repair." What they see first is not a website — it's the Google Maps 3-pack.</p>
<p>Those three map listings capture over <strong>70% of all clicks</strong> for local service searches. If your business isn't in that 3-pack, you're invisible to the majority of ready-to-buy customers in your area.</p>
<p>In this guide, I'll walk you through a complete, step-by-step GBP optimization strategy for 2026 — built specifically for home service businesses like yours.</p>

<h2>Step 1: Claim and Verify Your Google Business Profile</h2>
<p>Before you can optimize, you need to own your listing. Go to <strong>business.google.com</strong> and search for your business name. If it already exists, claim it. If not, create it from scratch.</p>
<p>Verification is usually done by:</p>
<ul>
  <li><strong>Postcard:</strong> Google mails a PIN to your business address (takes 5–14 days)</li>
  <li><strong>Phone or email:</strong> Available for some businesses — fastest method</li>
  <li><strong>Video verification:</strong> Google may ask you to record a short video showing your business location and signage</li>
</ul>
<p>Do not skip this step. An unverified GBP cannot rank in Maps and is at risk of being edited or claimed by someone else.</p>

<h2>Step 2: Choose the Right Business Categories</h2>
<p>Your primary category is the single most important field in your GBP. Google uses it to determine which searches your listing is eligible to appear for. Get it wrong and you'll never rank for your best keywords.</p>

<h3>Best Primary Categories by Trade</h3>
<ul>
  <li><strong>HVAC:</strong> "HVAC Contractor" (not "Heating Contractor" — HVAC gets 3x more searches)</li>
  <li><strong>Plumbing:</strong> "Plumber"</li>
  <li><strong>Roofing:</strong> "Roofing Contractor"</li>
  <li><strong>Electrical:</strong> "Electrician"</li>
</ul>

<h3>Add Secondary Categories</h3>
<p>You can add up to 9 secondary categories. Use them to cover all your services:</p>
<ul>
  <li>HVAC: Add "Air Conditioning Contractor," "Furnace Repair Service," "Heating Contractor"</li>
  <li>Plumbing: Add "Drainage Service," "Water Heater Installation Service," "Sewer Service"</li>
  <li>Roofing: Add "Gutter Cleaning Service," "Roof Inspection Service," "Siding Contractor"</li>
  <li>Electrical: Add "Electrical Installation Service," "Generator Installation Service," "Lighting Contractor"</li>
</ul>

<h2>Step 3: Write a Keyword-Rich Business Description</h2>
<p>Your GBP description is limited to 750 characters and is one of the most underused ranking opportunities. Most home service businesses write something generic like "We are a family-owned plumbing company serving the area." That's a wasted opportunity.</p>
<p>A high-performing description:</p>
<ul>
  <li>Mentions your primary city and 2–3 surrounding areas</li>
  <li>Lists your top 3–5 services by name</li>
  <li>Includes years in business and any awards or certifications</li>
  <li>Ends with a clear call to action (e.g., "Call us for a free estimate")</li>
</ul>
<p><strong>Example for a Houston plumber:</strong> "ABC Plumbing is Houston's most trusted plumbing company, serving Houston, Sugar Land, Katy, and The Woodlands since 2008. We specialize in emergency plumbing repairs, water heater installation, drain cleaning, and sewer line replacement. Licensed, insured, and available 24/7. Call now for a free estimate — same-day service available."</p>

<h2>Step 4: Build Out Your Services Section Completely</h2>
<p>The Services section of your GBP lets you list every service you offer with a name, description, and optional price. This is critical for two reasons: (1) it helps Google match your profile to more searches, and (2) it shows customers exactly what you do before they even click your listing.</p>
<p>Add every service individually. Don't just list "Plumbing" — list "Emergency Pipe Repair," "Water Heater Replacement," "Toilet Installation," "Drain Cleaning," and so on. Each service is a separate ranking opportunity.</p>

<h2>Step 5: Upload 20+ High-Quality Photos</h2>
<p>Businesses with more photos get significantly more clicks, calls, and direction requests than those with few or no photos. Google's data shows that listings with 100+ photos get 520% more calls than the average business.</p>

<h3>What Photos to Upload</h3>
<ul>
  <li><strong>Team photos:</strong> Technicians in uniforms, crew photos, headshots of the owner</li>
  <li><strong>Vehicle photos:</strong> Branded trucks and vans with your logo visible</li>
  <li><strong>Job photos:</strong> Before-and-after shots of completed work (HVAC installs, pipe repairs, new roofs)</li>
  <li><strong>Equipment photos:</strong> Tools, equipment, materials you use</li>
  <li><strong>Office/shop photos:</strong> If you have a physical location</li>
</ul>
<p>Upload new photos every 2–4 weeks. Fresh photos signal to Google that your business is active and engaged.</p>

<h2>Step 6: Use Google Posts to Stay Active</h2>
<p>Google Posts are free, short updates (like social media posts) that appear directly on your GBP listing. They expire after 7 days for standard posts, so you need to post consistently.</p>

<h3>What to Post</h3>
<ul>
  <li>Seasonal promotions ("$50 off AC tune-up this month")</li>
  <li>Tips and advice ("Signs your water heater needs replacing")</li>
  <li>New service announcements</li>
  <li>Recent job highlights with before/after photos</li>
  <li>Awards, certifications, or press mentions</li>
</ul>
<p>Businesses that post weekly on GBP see 2–3x more profile views than those that don't. It takes 5 minutes per post and costs nothing.</p>

<h2>Step 7: Dominate Your Review Strategy</h2>
<p>Reviews are the #1 most powerful factor in Google Maps rankings. A business with 80 reviews averaging 4.8 stars will almost always outrank a competitor with 15 reviews averaging 4.5 stars — everything else being equal.</p>

<h3>How to Get a Steady Flow of Reviews</h3>
<ol>
  <li>Create a short Google review link (business.google.com → Get more reviews)</li>
  <li>Send the link via SMS immediately after every completed job</li>
  <li>Train your technicians to verbally ask for reviews at the end of every visit</li>
  <li>Add a QR code to your invoices, business cards, and leave-behind flyers</li>
  <li>Follow up once if no review after 3 days</li>
</ol>
<p>This system alone has helped my clients grow from 10 reviews to 80+ reviews in under 6 months.</p>

<h3>How to Respond to Reviews</h3>
<p>Respond to <strong>every single review</strong> — positive and negative. For positive reviews, thank the customer and mention the service and city name (this adds keyword context). For negative reviews, respond professionally within 24 hours, apologize, and offer to resolve the issue offline.</p>

<h2>Step 8: Set Up and Manage the Q&A Section</h2>
<p>The Q&A section on your GBP is often ignored by businesses but heavily used by customers. Anyone can ask a question — and if you don't answer it, someone else might answer incorrectly.</p>
<p>Proactively add your own questions and answers covering:</p>
<ul>
  <li>Your service area and which cities you cover</li>
  <li>Your hours and emergency availability</li>
  <li>Whether you offer free estimates</li>
  <li>Pricing ranges for common services</li>
  <li>Licensing and insurance</li>
</ul>

<h2>Step 9: Keep NAP Consistent Across the Web</h2>
<p>NAP stands for Name, Address, Phone number. For Google to trust your business, your NAP must be <strong>exactly identical</strong> everywhere it appears online — your GBP, your website, Yelp, HomeAdvisor, Angi, BBB, and every other directory.</p>
<p>Even small inconsistencies (using "St." on one site and "Street" on another, or different phone number formats) create "citation noise" that confuses Google and hurts your rankings. Run a citation audit to find and fix all inconsistencies.</p>

<h2>Step 10: Track Your GBP Performance</h2>
<p>Google provides free analytics inside your GBP dashboard. Check these monthly:</p>
<ul>
  <li><strong>Search queries:</strong> What terms people used to find your listing</li>
  <li><strong>Profile views:</strong> How many times your listing was seen</li>
  <li><strong>Website clicks:</strong> Traffic your GBP is sending to your website</li>
  <li><strong>Direction requests:</strong> How many people looked up directions to your business</li>
  <li><strong>Phone calls:</strong> Calls initiated directly from your GBP</li>
</ul>
<p>If your call volume is low despite high views, it's usually a sign that your photos or reviews need work. If your views are low, it signals a keyword or category issue.</p>

<h2>Frequently Asked Questions</h2>

<h3>How long does it take for GBP optimization to show results?</h3>
<p>Most home service businesses see noticeable improvements in their Maps rankings within 4–8 weeks of full optimization. Review volume has the fastest impact — businesses that jump from 10 to 50+ reviews often see ranking improvements in 2–4 weeks.</p>

<h3>Can I have a GBP if I work from home and don't have a physical storefront?</h3>
<p>Yes. Set your profile as a "Service Area Business" and hide your address. You'll still rank in Maps for your target cities — just based on your service area instead of a physical location.</p>

<h3>What's the difference between GBP optimization and Local SEO?</h3>
<p>GBP optimization focuses specifically on your Google Maps listing. Local SEO is broader — it includes GBP, your website's on-page optimization, local citations, link building, and more. GBP is the most important component of Local SEO for home service businesses.</p>

<h3>Do I need a website to rank on Google Maps?</h3>
<p>Not technically, but having a well-optimized website significantly improves your Maps rankings. Google uses your website as a trust signal and cross-references it with your GBP data.</p>

<h2>Ready to Get Your Business Into the Google Maps 3-Pack?</h2>
<p>GBP optimization is the highest-ROI activity a home service business can do. A single position improvement in the Maps 3-pack can mean 50–100 additional calls per month for an HVAC or plumbing company in a mid-sized US city.</p>
<p>If you'd like me to audit your current GBP, identify exactly why you're not ranking higher, and build a customized optimization plan — <Link href="/contact">book a free consultation here</Link>. I work exclusively with home service businesses and know exactly what it takes to rank in your market.</p>
<p><Link href="/contact">Get my free Google Business Profile audit →</Link></p>
`;

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const schema = buildBlogPostingSchema(post);

  return (
    <>
      <JsonLd schema={schema} />

      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-12 px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-5">
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4 text-purple-400" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
              {post.title}
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <article
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-extrabold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-700
                prose-strong:text-gray-900
                prose-ol:text-gray-600
                prose-ul:text-gray-600"
              dangerouslySetInnerHTML={{
                __html: (POST_CONTENT[post.slug] ?? "").replace(
                  /<Link href="([^"]+)">([^<]+)<\/Link>/g,
                  '<a href="$1">$2</a>'
                ),
              }}
            />
          </FadeUp>

          {/* Author Bio */}
          <FadeUp delay={0.1}>
            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-xl shrink-0">
                M
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{post.author}</div>
                <div className="text-sm text-gray-500 mb-2">
                  Local SEO & Digital Marketing Expert · 2+ Years · 30+ Clients
                </div>
                <p className="text-sm text-gray-600">
                  Muhammad Umair specializes in Local SEO and digital marketing for home service businesses in USA and Canada. He has helped 30+ HVAC, plumbing, and roofing companies dominate local search and generate more qualified leads.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.2}>
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 p-8 text-center">
              <h3 className="text-xl font-extrabold text-white mb-3">
                Ready to Dominate Local Search?
              </h3>
              <p className="text-purple-100 mb-6 text-sm">
                Get a free Local SEO audit for your HVAC company. I&apos;ll check your GBP, rankings, and competitors — then give you a clear action plan.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get My Free SEO Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
