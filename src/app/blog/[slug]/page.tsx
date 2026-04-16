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

// Plumbing Local SEO blog post content
POST_CONTENT["local-seo-for-plumbers-get-more-calls"] = `
<h2>Why Local SEO is the Most Profitable Investment a Plumber Can Make</h2>
<p>Think about the last time you needed a plumber urgently. You didn't flip through the Yellow Pages or ask a neighbor — you grabbed your phone and searched "plumber near me" or "emergency plumber [your city]." Every homeowner with a burst pipe, backed-up drain, or broken water heater does exactly the same thing.</p>
<p>That single Google search represents a customer who <strong>needs you right now</strong> and is ready to pay $200–$2,000 to solve their problem. The three plumbing companies that appear in the Google Maps 3-pack capture over 70% of those calls. The other 200 plumbers in the area share the scraps.</p>
<p>In this complete guide, I'll walk you through exactly how to dominate local search as a plumbing company in 2026 — using the same strategies I've used to generate consistent, qualified leads for home service clients across USA and Canada.</p>

<h2>1. Optimize Your Google Business Profile for Plumbing Searches</h2>
<p>Your Google Business Profile (GBP) is the single highest-impact Local SEO asset you have. It determines whether you appear in the Google Maps 3-pack — the box of three businesses that shows up above all organic results for searches like "plumber near me" or "drain cleaning [city]."</p>

<h3>Choose the Right Primary Category</h3>
<p>Your primary GBP category is the most important ranking factor in your entire profile. For plumbing companies, the correct primary category is <strong>"Plumber"</strong> — not "Plumbing Supply Store" or "Drainage Service." Google uses this to match your listing to the highest-volume searches in your market.</p>
<p>Then add relevant secondary categories to cover all your services:</p>
<ul>
  <li>Drainage Service</li>
  <li>Water Heater Installation Service</li>
  <li>Septic System Service</li>
  <li>Sewer Service</li>
  <li>Gasfitter</li>
</ul>

<h3>Write a Keyword-Rich Business Description</h3>
<p>Most plumbers write something like "We are a family-owned plumbing company serving the local area." That's a completely wasted opportunity. Your GBP description allows up to 750 characters — use every one of them.</p>
<p>A high-converting description for a plumber looks like this: <em>"ABC Plumbing is [City]'s most trusted plumbing company, serving [City], [Suburb 1], [Suburb 2], and surrounding areas since [year]. We specialize in emergency plumbing repairs, water heater replacement, drain cleaning, sewer line repair, and bathroom remodels. Available 24/7 for emergency calls. Licensed, bonded, and insured. Call now for a free estimate — same-day service guaranteed."</em></p>

<h3>List Every Service Individually</h3>
<p>Use the Services section of your GBP to list every service you offer. Don't just write "Plumbing" — add each service separately: "Emergency Pipe Repair," "Water Heater Replacement," "Toilet Installation," "Drain Cleaning," "Sewer Line Inspection," "Garbage Disposal Repair." Each service listing is a separate keyword opportunity that helps Google match your profile to more searches.</p>

<h2>2. Target Emergency Plumbing Keywords — Your Highest-Value Searches</h2>
<p>Emergency plumbing keywords are the most valuable searches in your entire market. A customer whose pipe just burst at midnight doesn't care about price — they care about speed. Emergency calls convert at nearly 100% and are worth $500–$3,000+ per job.</p>

<h3>The Emergency Keyword Formula</h3>
<p>The highest-converting emergency plumbing keywords follow this pattern: <em>[Emergency modifier] + [Service] + [City]</em></p>
<ul>
  <li>"Emergency plumber [city]"</li>
  <li>"24 hour plumber [city]"</li>
  <li>"Burst pipe repair [city]"</li>
  <li>"Plumber near me open now"</li>
  <li>"Emergency drain cleaning [city]"</li>
  <li>"Water heater emergency [city]"</li>
</ul>

<h3>Create Dedicated Emergency Landing Pages</h3>
<p>Don't just mention emergency services on your homepage. Create a dedicated page titled "24-Hour Emergency Plumber in [City]" with its own URL, H1, meta description, and content focused entirely on emergency plumbing. This page can rank independently for emergency searches and convert at a much higher rate because it speaks directly to the visitor's urgent need.</p>
<p>The page should include: your emergency phone number in large text at the top, average response time, what constitutes a plumbing emergency, and customer reviews specifically about your emergency response.</p>

<h2>3. Build an Unstoppable Review Strategy</h2>
<p>Reviews are the #1 most powerful factor in Google Maps rankings for plumbers. A plumbing company with 80 five-star reviews will consistently outrank a competitor with 20 reviews — even if the competitor has been in business longer and has more citations.</p>

<h3>The Post-Job Review System</h3>
<p>The best time to ask for a review is immediately after a successful job while the customer is still standing there, happy and grateful. Here's the exact system I recommend:</p>
<ol>
  <li>Plumber finishes the job and confirms customer satisfaction verbally</li>
  <li>Send an automated SMS within 30 minutes with your direct Google review link</li>
  <li>The SMS says: "Hi [Name], thanks for choosing [Company]! If you're happy with the service, a quick Google review would mean the world to us: [link]"</li>
  <li>Send one follow-up email 48 hours later if no review</li>
  <li>Respond to every single review within 24 hours — positive and negative</li>
</ol>
<p>This system alone can take a plumbing company from 15 reviews to 80+ reviews in 4–5 months. I've seen plumbers jump from the 4th page of Maps to the top 3 purely from implementing this review system.</p>

<h3>How to Respond to Reviews for SEO Benefit</h3>
<p>When responding to positive reviews, don't just say "Thanks!" Include the service type and city name in your response. For example: "Thank you, Sarah! We're so glad our team could help with your emergency drain cleaning in Phoenix. It was a pleasure working with you!" This response contains "drain cleaning" and "Phoenix" — keywords that strengthen your local relevance signals.</p>

<h2>4. Build Local Citations for Plumbing Businesses</h2>
<p>Local citations are mentions of your business name, address, and phone number (NAP) across the web. For plumbing companies, you need to be listed on the major directories that Google uses to verify local business legitimacy:</p>
<ul>
  <li><strong>Tier 1 (Essential):</strong> Yelp, Angi, HomeAdvisor, Thumbtack, BBB, Facebook Business</li>
  <li><strong>Tier 2 (Important):</strong> Yellow Pages, Houzz, Porch, Nextdoor, Chamber of Commerce</li>
  <li><strong>Tier 3 (Industry-specific):</strong> Plumbers.com, PlumbingHelpToday.com, local plumbing contractor associations</li>
</ul>
<p>The critical rule: your business name, address, and phone number must be <strong>100% identical</strong> on every listing. "123 Main St" vs "123 Main Street" vs "123 Main St." — even these tiny differences create "citation noise" that hurts your rankings. Run a citation audit every 6 months to catch inconsistencies.</p>

<h2>5. On-Page SEO for Your Plumbing Website</h2>
<p>Your website needs to work in harmony with your GBP, not independently from it. Here are the on-page SEO elements that move the needle most for plumbing companies:</p>

<h3>Title Tags and H1s</h3>
<ul>
  <li><strong>Homepage title:</strong> "Plumber in [City] | Licensed & Insured | [Company Name]"</li>
  <li><strong>Service page titles:</strong> "Water Heater Replacement in [City] | [Company Name]"</li>
  <li><strong>Emergency page title:</strong> "24-Hour Emergency Plumber in [City] | Available Now"</li>
</ul>

<h3>Create Individual Service Pages</h3>
<p>One of the biggest mistakes plumbing companies make is listing all services on a single page. Each major service should have its own dedicated page: water heater installation, drain cleaning, sewer line repair, bathroom remodeling, emergency plumbing. Each page targets a separate set of keywords and gives Google a specific, authoritative page to rank for each service.</p>

<h3>Add Location Pages for Every City You Serve</h3>
<p>If you serve multiple cities, create a unique page for each one. "Plumber in Houston" and "Plumber in Sugar Land" are different searches from customers in different locations. Each location page should have unique content, local area references, and a testimonial from a customer in that city. <Link href="/services/local-seo">Learn more about my Local SEO service for plumbers →</Link></p>

<h2>6. Track What's Working and Optimize Monthly</h2>
<p>Local SEO is not a one-time task — it's an ongoing process. Here's what to track every month:</p>
<ul>
  <li><strong>GBP insights:</strong> Profile views, calls, direction requests, website clicks</li>
  <li><strong>Keyword rankings:</strong> Where do you rank for "plumber [city]" and your top 10 keywords?</li>
  <li><strong>Review count and rating:</strong> Are you adding 5+ new reviews per month?</li>
  <li><strong>Call volume from Google:</strong> Are calls increasing month over month?</li>
  <li><strong>Citation count:</strong> Are you building new citations consistently?</li>
</ul>
<p>Monthly tracking lets you see what's working, double down on it, and fix what isn't before it costs you leads. Most plumbing companies I work with see 3x–5x their original call volume within 6–9 months of consistent Local SEO work.</p>

<h2>Frequently Asked Questions</h2>

<h3>How long does Local SEO take to work for a plumbing company?</h3>
<p>Most plumbing companies see meaningful improvements in Google Maps rankings within 60–90 days of starting a proper Local SEO campaign. Emergency keyword rankings and GBP visibility tend to improve fastest. Full organic ranking for competitive terms like "plumber [major city]" typically takes 4–8 months of consistent effort.</p>

<h3>Is Local SEO better than Google Ads for plumbers?</h3>
<p>Both serve different purposes. Google Ads gives you immediate visibility and is excellent for generating calls today. Local SEO builds long-term, compounding visibility that doesn't stop the moment you stop paying. The most successful plumbing companies use both: Google Ads for immediate lead flow while Local SEO builds their organic presence over time.</p>

<h3>How many reviews does a plumbing company need to rank in the top 3?</h3>
<p>In most mid-sized US cities, the top 3 plumbing companies on Google Maps have between 50 and 200 reviews. In smaller markets, 30–50 reviews with a 4.7+ rating can get you into the 3-pack. In major metros like Houston or Phoenix, you may need 100+ reviews to compete with established companies.</p>

<h3>Should a plumbing company with no website still do Local SEO?</h3>
<p>You can rank on Google Maps without a website, but your rankings will be significantly weaker than competitors who have an optimized site. A well-built plumbing website with proper on-page SEO typically improves Maps rankings by 30–50% compared to having no website. It's also where customers go to read reviews, check your credentials, and decide to call.</p>

<h2>Ready to Fill Your Schedule with More Plumbing Calls?</h2>
<p>The plumbing companies that dominate Google Maps in 2026 aren't there by accident — they've invested in the right Local SEO strategy and execute it consistently. If you're ready to stop relying on word-of-mouth and start generating a predictable flow of qualified leads from Google, I can help.</p>
<p>I offer a <Link href="/contact">free 30-minute Local SEO audit</Link> for plumbing companies. I'll review your GBP, check your current rankings, analyze your top competitors, and give you a specific action plan — no obligation.</p>
<p><Link href="/contact">Book your free plumbing SEO audit today →</Link></p>
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

// Google Ads for Roofing Companies blog post content
POST_CONTENT["google-ads-for-roofing-companies"] = `
<h2>Why Google Ads Is the Fastest Way for Roofing Companies to Get More Jobs</h2>
<p>Roofing is one of the highest-ROI industries in all of Google Ads. A single roof replacement job is worth $8,000–$25,000. A storm rolls through a city and suddenly thousands of homeowners are searching "roof repair near me," "hail damage roof replacement," and "emergency roofing contractor" — all at the same time, credit card in hand.</p>
<p>The roofing companies that have Google Ads running the moment that storm hits are the ones booking their schedules solid for the next 3 months. The ones without ads are calling leads who already hired someone else.</p>
<p>But Google Ads for roofing is not as simple as writing one ad and waiting for calls. Done wrong, you'll burn through $3,000/month with no return. Done right, you can generate a consistent 5x–10x return on every dollar spent. This guide shows you exactly how to do it right in 2026.</p>

<h2>Step 1: Understand the Roofing Customer Journey Before You Build Anything</h2>
<p>Roofing leads come in two very different flavors, and your campaign structure needs to reflect both:</p>

<h3>Emergency / Storm Damage Leads</h3>
<p>These customers act immediately — their roof is leaking right now, or they just had a hail inspection and need a replacement quote. These are the highest-converting, highest-value leads. They search with urgency: "emergency roof repair," "storm damage roofing contractor," "roof leak repair today." They call within minutes of clicking your ad and book fast.</p>

<h3>Planned Replacement Leads</h3>
<p>These customers know their roof is aging and are getting 3–5 quotes. They search "roof replacement cost," "best roofing company near me," "how long does a roof last." They take longer to convert but represent just as much revenue. Your ads for this audience need to emphasize trust signals: reviews, years in business, warranties, financing.</p>
<p>Running both ad types in the same campaign is a mistake. They need separate campaigns with different keywords, different ads, and different landing pages.</p>

<h2>Step 2: Build the Right Campaign Structure</h2>
<p>A properly structured Google Ads account for a roofing company looks like this:</p>

<h3>Campaign 1 — Emergency & Storm Damage (Highest Priority)</h3>
<p><strong>Budget:</strong> 40–50% of total Google Ads spend<br/>
<strong>Bidding:</strong> Target CPA or Maximize Conversions<br/>
<strong>Match types:</strong> Phrase and exact match only</p>
<p>Keywords to include:</p>
<ul>
  <li>"emergency roof repair [city]"</li>
  <li>"storm damage roofing contractor"</li>
  <li>"hail damage roof replacement"</li>
  <li>"roof leak repair near me"</li>
  <li>"emergency roofing contractor [city]"</li>
  <li>"roof repair after storm"</li>
  <li>"wind damage roof repair"</li>
</ul>

<h3>Campaign 2 — Roof Replacement (High Value)</h3>
<p><strong>Budget:</strong> 30–35% of total spend<br/>
<strong>Bidding:</strong> Target CPA<br/>
<strong>Match types:</strong> Phrase and broad match (with negative keywords)</p>
<p>Keywords to include:</p>
<ul>
  <li>"roof replacement [city]"</li>
  <li>"new roof installation [city]"</li>
  <li>"roofing contractor [city]"</li>
  <li>"best roofing company near me"</li>
  <li>"roof replacement cost [city]"</li>
  <li>"asphalt shingle replacement"</li>
  <li>"metal roof installation"</li>
</ul>

<h3>Campaign 3 — Roof Repair (Volume Driver)</h3>
<p><strong>Budget:</strong> 20–25% of total spend<br/>
<strong>Match types:</strong> Phrase match</p>
<p>Keywords to include:</p>
<ul>
  <li>"roof repair [city]"</li>
  <li>"fix roof leak [city]"</li>
  <li>"roof patch repair"</li>
  <li>"missing shingles repair"</li>
  <li>"flat roof repair"</li>
</ul>

<h2>Step 3: Write Ads That Stop Roofers From Losing Clicks</h2>
<p>Most roofing ads look identical: "Expert Roofing Services | Licensed & Insured | Free Estimate." Every competitor says the same thing. Your ads need to stand out with specificity and urgency.</p>

<h3>Emergency Ad Example</h3>
<p><strong>Headline 1:</strong> Roof Leaking? We're Available Now<br/>
<strong>Headline 2:</strong> Emergency Roofing — Same-Day Response<br/>
<strong>Headline 3:</strong> [City]'s #1 Storm Damage Roofer<br/>
<strong>Description 1:</strong> Don't let a leak destroy your home. Our crew responds within 2 hours — tarping, inspection, and full repairs available today.<br/>
<strong>Description 2:</strong> 500+ 5-star reviews. Licensed, insured, and local. Call now for a free emergency assessment — no obligation.</p>

<h3>Replacement Ad Example</h3>
<p><strong>Headline 1:</strong> New Roof in [City] — Free Quote Today<br/>
<strong>Headline 2:</strong> 25-Year Warranty | A+ BBB Rating<br/>
<strong>Headline 3:</strong> Financing Available — 0% for 18 Months<br/>
<strong>Description 1:</strong> We've replaced 1,000+ roofs across [City]. GAF Master Elite certified, $2M insurance, and a written warranty you can trust.<br/>
<strong>Description 2:</strong> Get a free, no-pressure quote in 24 hours. Most jobs complete in 1–2 days. Book your inspection today.</p>

<h3>Use Every Ad Extension Available</h3>
<p>Ad extensions increase your click-through rate by 10–30% at no extra cost. For roofing companies, always enable:</p>
<ul>
  <li><strong>Call extension:</strong> Your phone number directly in the ad — critical for mobile searchers</li>
  <li><strong>Location extension:</strong> Shows your city and address, builds local trust</li>
  <li><strong>Sitelink extensions:</strong> Link to "Free Estimate," "Storm Damage," "Gallery," "Reviews"</li>
  <li><strong>Callout extensions:</strong> "Same-Day Service," "Licensed & Insured," "25-Year Warranty," "0% Financing"</li>
  <li><strong>Structured snippets:</strong> List your services: "Roof Replacement, Storm Damage, Repairs, Gutters"</li>
  <li><strong>Image extensions:</strong> Show photos of completed roofs — dramatically increases CTR</li>
</ul>

<h2>Step 4: Build Landing Pages That Convert Visitors Into Calls</h2>
<p>This is where 80% of roofing companies waste their Google Ads budget. They send all their ad traffic to their homepage — which is a general brochure about their company. A homepage converts at 1–3%. A purpose-built landing page converts at 8–15%.</p>

<h3>What Every Roofing Landing Page Must Have</h3>
<ul>
  <li><strong>Headline matching your ad:</strong> If the ad says "Emergency Roof Repair," the landing page H1 must say "Emergency Roof Repair in [City]" — not your company name</li>
  <li><strong>Phone number above the fold:</strong> Large, click-to-call on mobile, impossible to miss</li>
  <li><strong>Trust signals immediately visible:</strong> Number of roofs replaced, years in business, BBB rating, manufacturer certifications (GAF Master Elite, Owens Corning Preferred)</li>
  <li><strong>Short form:</strong> Name, phone, address, type of issue — maximum 4 fields. Every extra field reduces conversions by 10–15%</li>
  <li><strong>Social proof:</strong> 3–5 recent Google reviews with star ratings, visible without scrolling</li>
  <li><strong>Urgency element:</strong> "We respond within 2 hours" or "Limited spots available this week"</li>
  <li><strong>Before/after photos:</strong> Real photos of your work, not stock images</li>
</ul>
<p>Create separate landing pages for each campaign: one for emergency/storm damage, one for roof replacement, one for general repairs. Each page speaks directly to that visitor's specific need and converts at a much higher rate. <Link href="/services/google-ads">Learn more about my Google Ads management service →</Link></p>

<h2>Step 5: Master Bidding Strategy for Roofing</h2>
<p>Roofing keywords are expensive — "roof replacement [city]" can cost $25–$80 per click in competitive markets. Getting your bidding strategy right is the difference between profitable campaigns and bleeding money.</p>

<h3>Start with Manual CPC, Then Switch to Smart Bidding</h3>
<p>When your campaigns are new (0–30 days), use <strong>Manual CPC</strong> bidding. This gives you full control while you gather data. Set bids conservatively and adjust based on which keywords are converting.</p>
<p>Once you have 30–50 conversions tracked in the system (after 60–90 days), switch to <strong>Target CPA</strong> or <strong>Maximize Conversions</strong>. Google's AI needs conversion data to optimize effectively — switch too early and it will spend your budget on clicks that don't convert.</p>

<h3>Bid by Device and Time of Day</h3>
<p>For emergency roofing, bids should be higher on mobile (people call from their phone during emergencies) and during business hours when your crew can actually respond. Set <strong>bid adjustments</strong>:</p>
<ul>
  <li>Mobile: +20–30% (most emergency searches happen on phones)</li>
  <li>Weekdays 7am–7pm: +15% (peak decision-making hours)</li>
  <li>After storms: Manually increase budget by 2–3x immediately</li>
</ul>

<h3>Use Negative Keywords Aggressively</h3>
<p>Wasted spend on irrelevant clicks is the #1 Google Ads problem for roofers. Add these as negative keywords from day one:</p>
<ul>
  <li>"DIY," "how to," "YouTube," "tutorial" — people learning, not buying</li>
  <li>"jobs," "careers," "hiring," "employment" — job seekers</li>
  <li>"insurance claim help," "public adjuster" — different service</li>
  <li>Competitor names — unless you're specifically running competitor campaigns</li>
  <li>"roofing materials," "shingles price," "buy shingles" — supplies, not services</li>
</ul>

<h2>Step 6: Track Everything — Phone Calls, Form Fills, and Revenue</h2>
<p>If you're not tracking conversions properly, you have no idea which keywords and ads are generating revenue — and you're flying blind with your budget.</p>

<h3>Set Up Conversion Tracking Correctly</h3>
<ul>
  <li><strong>Call tracking:</strong> Use Google Ads call extensions with call reporting enabled. Set calls over 60 seconds as conversions (shorter calls are rarely qualified leads)</li>
  <li><strong>Form submissions:</strong> Track thank-you page views as conversions in Google Analytics 4, imported into Google Ads</li>
  <li><strong>Offline conversion import:</strong> When a lead becomes a paying job, import that data back into Google Ads so the algorithm learns which clicks generate actual revenue</li>
</ul>

<h3>What Good Numbers Look Like for Roofing Google Ads</h3>
<ul>
  <li><strong>Click-through rate (CTR):</strong> 5–10% for emergency campaigns, 3–7% for replacement</li>
  <li><strong>Conversion rate:</strong> 8–15% on dedicated landing pages</li>
  <li><strong>Cost per lead:</strong> $80–$200 in most US markets (varies by competition)</li>
  <li><strong>Cost per job:</strong> $300–$800 (accounting for close rate)</li>
  <li><strong>ROI:</strong> 5x–12x on a well-managed campaign (a $1,000 spend generating $5,000–$12,000 in jobs)</li>
</ul>

<h2>Step 7: Storm Season Strategy — How to Explode Your Revenue After Bad Weather</h2>
<p>Storms are the single biggest revenue opportunity in roofing. A hailstorm or tornado can generate more leads in one week than an entire normal month. Here's how to be ready:</p>
<ul>
  <li><strong>Keep storm campaigns paused</strong> but fully built out — the moment a storm hits your area, activate them immediately</li>
  <li><strong>Increase your daily budget by 3x–5x</strong> for the first 2 weeks after a storm — lead demand spikes and then drops fast as competitors flood the market</li>
  <li><strong>Create storm-specific ad copy</strong> referencing hail or wind damage: "Hail Damage? We Offer Free Insurance Inspections"</li>
  <li><strong>Target storm-affected zip codes</strong> using location targeting to concentrate spend where leads are hottest</li>
  <li><strong>Add "insurance claim assistance"</strong> as a callout — many homeowners don't realize their insurance covers storm damage and this differentiator drives massive CTR</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>How much should a roofing company spend on Google Ads per month?</h3>
<p>A starting budget of $2,000–$3,000/month is the minimum to generate meaningful data and leads in most US markets. In highly competitive cities (Houston, Dallas, Atlanta), $4,000–$6,000/month is more realistic to compete effectively. The key is that a well-managed campaign should return 5x–10x your spend in job revenue — making it one of the highest-ROI marketing investments available to roofers.</p>

<h3>How long before Google Ads starts generating roofing leads?</h3>
<p>Unlike SEO which takes months, Google Ads can generate calls within the first 24–48 hours of launching. However, the first 30–60 days are a learning phase — expect some wasted spend while the campaigns optimize. Most roofing companies see a strong, consistent return starting in month 2–3 once bidding strategies have enough conversion data to optimize properly.</p>

<h3>Should I run Google Ads and Local SEO at the same time?</h3>
<p>Absolutely — and companies that run both consistently outperform those that rely on only one channel. Google Ads gives you immediate visibility at the top of search results while your Local SEO builds long-term organic rankings. Companies that appear in both the paid ads AND the Maps 3-pack AND the organic results for the same search dominate their market completely. <Link href="/services/local-seo">Learn about my Local SEO service for roofing companies →</Link></p>

<h3>Can I manage Google Ads myself or do I need a professional?</h3>
<p>You can manage it yourself, but most roofing contractors who try end up either spending too little to see results or wasting budget on irrelevant clicks without proper negative keyword management, bidding strategy, and conversion tracking. A professional campaign manager pays for themselves within the first month in most cases by reducing wasted spend and improving conversion rates.</p>

<h2>Ready to Fill Your Roofing Schedule with Google Ads?</h2>
<p>The roofing companies dominating their markets in 2026 are using Google Ads as a growth engine — not a gamble. With the right campaign structure, keyword strategy, and landing pages, you can generate a predictable, scalable flow of roofing jobs every single month.</p>
<p>I manage Google Ads exclusively for home service businesses and have a proven system that generates consistent returns for roofing contractors. <Link href="/contact">Book a free Google Ads strategy call</Link> and I'll audit your current campaigns (or build a custom strategy from scratch) — no obligation.</p>
<p><Link href="/contact">Get my free roofing Google Ads audit →</Link></p>
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
                Ready to Dominate Local Search for Your Home Service Business?
              </h3>
              <p className="text-purple-100 mb-6 text-sm">
                Get a free {post.category} audit for your {post.category === "Google Business Profile" ? "business" : "home service company"}. I&apos;ll check your GBP, rankings, and competitors — then give you a clear action plan.
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
