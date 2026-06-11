import type { Location, Service, Testimonial, CaseStudy, BlogPost, PricingPlan } from "@/types";

export const SITE_CONFIG = {
  name: "Muhammad Umair",
  brand: "mumairdigital.com",
  tagline: "I help HVAC companies get more booked calls from Google.",
  subTagline: "Local SEO & Digital Marketing Specialist for HVAC Businesses",
  email: "info@mumairdigital.com",
  whatsapp: "+923209943057",
  whatsappNumber: "923209943057",
  linkedIn: "https://www.linkedin.com/in/mumairdigital/",
  facebook: "https://www.facebook.com/mumairdigital",
  instagram: "https://www.instagram.com/mumairdigital",
  tiktok: "https://www.tiktok.com/@mumairdigital",
  experience: "2+",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mumairdigital.com",
};

export const NAV_SERVICES = [
  { label: "Local SEO", href: "/services/local-seo", description: "Rank on Google Maps & local search" },
  { label: "Web Design", href: "/services/web-design", description: "High-converting HVAC websites" },
  { label: "Google Ads", href: "/services/google-ads", description: "Targeted search campaigns for HVAC" },
  { label: "Meta Ads", href: "/services/meta-ads", description: "Facebook & Instagram Ads" },
  { label: "SEO Audit", href: "/services/seo-audit", description: "Full technical analysis" },
  { label: "Google Business Profile", href: "/services/google-business-profile", description: "GBP optimization & map pack" },
];

export const NAV_LOCATIONS_USA = [
  { label: "Cape Coral, FL", href: "/locations/cape-coral-fl" },
  { label: "Port St. Lucie, FL", href: "/locations/port-st-lucie-fl" },
  { label: "Lakeland, FL", href: "/locations/lakeland-fl" },
  { label: "Killeen, TX", href: "/locations/killeen-tx" },
  { label: "Waco, TX", href: "/locations/waco-tx" },
];

export const STATS = [
  { label: "Years Experience", value: 2, suffix: "+" },
];

export const SERVICES: Service[] = [
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    icon: "MapPin",
    description: "Dominate local search results and Google Maps for your HVAC business. Get found by customers actively searching for air conditioning, heating, and HVAC services in your city.",
    shortDescription: "Rank higher on Google Maps and local search. Get more calls from people ready to hire.",
    features: [
      "Google Business Profile optimization",
      "Local citation building & cleanup",
      "Review generation & management",
      "Local keyword ranking strategy",
      "NAP consistency across directories",
      "Competitor gap analysis",
    ],
    results: "HVAC clients grow call volume from Google Maps",
    heroTagline: "Rank #1 on Google Maps & Get More HVAC Calls",
    process: [
      { step: "01", title: "Local SEO Audit", description: "Complete analysis of your current local presence, GBP, citations, and competitor landscape." },
      { step: "02", title: "Strategy & Optimization", description: "Optimize GBP, build local citations, fix NAP issues, and implement local keyword strategy." },
      { step: "03", title: "Content & Reviews", description: "Create locally-optimized content, generate reviews, and build local authority signals." },
      { step: "04", title: "Monitor & Report", description: "Track rankings, calls, and leads with monthly reports showing clear ROI." },
    ],
    benefits: [
      { title: "More Phone Calls", description: "Appear in the 3-pack and get calls from customers ready to hire now." },
      { title: "Higher Google Maps Ranking", description: "Dominate the map pack in your city and surrounding areas." },
      { title: "Increased Website Traffic", description: "Drive qualified local traffic to your website from organic search." },
      { title: "Better Online Reputation", description: "Build a 5-star reputation that converts visitors into customers." },
    ],
    faq: [
      { q: "How long does Local SEO take?", a: "Most clients see improvements in 60-90 days. Significant results by month 3-4." },
      { q: "Do you guarantee rankings?", a: "I guarantee consistent effort and proven strategies. Rankings improve in competitive markets within 3-6 months." },
    ],
    ctaText: "Get Your Free Local SEO Audit",
  },
  {
    slug: "web-design",
    title: "Web Design",
    shortTitle: "Web Design",
    icon: "Monitor",
    description: "High-converting websites built specifically for HVAC businesses and related home service companies. Mobile-first, fast-loading, SEO-optimized, and designed to turn visitors into booked calls.",
    shortDescription: "High-converting websites built for HVAC businesses. Fast, SEO-friendly, mobile-first.",
    features: [
      "Conversion-first design strategy",
      "Technical SEO built-in",
      "Page speed optimization",
      "Lead capture forms & CTAs",
      "Mobile-first responsive design",
      "Google Analytics & tracking setup",
    ],
    results: "Conversion-focused design built for HVAC companies",
    heroTagline: "Websites That Convert Visitors Into Booked HVAC Calls",
    process: [
      { step: "01", title: "Discovery & Planning", description: "Understand your business, target market, and competitors to plan the perfect website." },
      { step: "02", title: "Design & Wireframes", description: "Create conversion-focused designs optimized for your specific home service business." },
      { step: "03", title: "Development & SEO", description: "Build fast, secure websites with technical SEO, schema markup, and lead capture forms." },
      { step: "04", title: "Launch & Optimize", description: "Launch, set up analytics, and continuously optimize for better conversion rates." },
    ],
    benefits: [
      { title: "More Leads Online", description: "Websites designed to capture leads, not just showcase your business." },
      { title: "Better First Impressions", description: "Professional design that builds trust and credibility with potential customers." },
      { title: "Faster Page Speed", description: "Optimized for Core Web Vitals and Google Page Speed scores above 90." },
      { title: "Built-in SEO", description: "Technical SEO, schema markup, and optimized content from day one." },
    ],
    faq: [
      { q: "How long does a website take?", a: "Typically 2-4 weeks for a complete home service website with all pages and SEO." },
      { q: "Do you use WordPress?", a: "Yes, I primarily build on WordPress with Elementor or custom themes, depending on your needs." },
    ],
    ctaText: "Get a Free Website Consultation",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortTitle: "Google Ads",
    icon: "Target",
    description: "Targeted Google Ads campaigns for HVAC companies and home service businesses. Full conversion tracking so you always know exactly what your leads cost and where they come from.",
    shortDescription: "Data-driven Google Ads campaigns with full conversion tracking for HVAC businesses.",
    features: [
      "Smart bidding & AI optimization",
      "Call-only campaign setup",
      "Performance Max campaigns",
      "Conversion tracking & analytics",
      "Negative keyword management",
      "A/B testing & landing pages",
    ],
    results: "Data-driven campaigns tracked to real conversions",
    heroTagline: "Targeted Google Ads for HVAC Businesses",
    process: [
      { step: "01", title: "Account Audit & Setup", description: "Review or set up your Google Ads account with proper conversion tracking and goals." },
      { step: "02", title: "Campaign Strategy", description: "Build campaigns targeting high-intent local keywords for your specific service area." },
      { step: "03", title: "Launch & Optimize", description: "Launch campaigns, monitor performance daily, and optimize bids, ads, and targeting." },
      { step: "04", title: "Scale & Report", description: "Scale winning campaigns, pause underperformers, and provide detailed monthly reports." },
    ],
    benefits: [
      { title: "Immediate Lead Flow", description: "Get calls and leads within 24-48 hours of launching campaigns." },
      { title: "Full Transparency", description: "See exactly where every dollar goes with detailed conversion tracking and reporting." },
      { title: "AI-Powered Optimization", description: "Leverage Google's machine learning with smart bidding strategies for maximum ROI." },
      { title: "Local Targeting", description: "Reach customers in your exact service area — not paying for clicks outside your coverage zone." },
    ],
    faq: [
      { q: "What budget do I need?", a: "Most home service businesses start with $500-$1,500/month in ad spend. I recommend starting with $1,000 for optimal results." },
      { q: "How fast will I see results?", a: "Campaigns go live within 48-72 hours. Leads typically start flowing within the first week." },
    ],
    ctaText: "Get a Free Google Ads Audit",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    icon: "Share2",
    description: "Facebook and Instagram advertising that reaches homeowners in your service area before they even search for your service. Build brand awareness and generate leads.",
    shortDescription: "Facebook & Instagram Ads that reach homeowners in your service area before they search.",
    features: [
      "Facebook & Instagram campaigns",
      "Audience targeting & retargeting",
      "Lead generation forms",
      "Video & image ad creative",
      "Lookalike audience creation",
      "Pixel setup & tracking",
    ],
    results: "Reach homeowners before they search Google",
    heroTagline: "Reach Homeowners Before They Search Google",
    process: [
      { step: "01", title: "Pixel & Tracking Setup", description: "Install Facebook Pixel, set up conversion events, and create custom audiences." },
      { step: "02", title: "Campaign Creation", description: "Build targeted campaigns for your specific home service business and location." },
      { step: "03", title: "Creative & Copy", description: "Create compelling ad creative and copy that resonates with homeowners in your area." },
      { step: "04", title: "Optimize & Scale", description: "Continuously optimize targeting, creative, and bidding for maximum lead volume." },
    ],
    benefits: [
      { title: "Brand Awareness", description: "Get your brand in front of homeowners in your service area before they need your service." },
      { title: "Retargeting Power", description: "Re-engage people who visited your website but didn't call or convert." },
      { title: "Qualified Leads", description: "Target specific demographics, interests, and behaviors that match your ideal customer." },
      { title: "Cost Effective", description: "Often lower cost per lead than Google Ads for certain home services." },
    ],
    faq: [
      { q: "Does Meta Ads work for home services?", a: "Yes, especially for HVAC replacements and planned maintenance where buying decisions are made in advance." },
      { q: "What budget is recommended?", a: "Start with $500-$1,000/month in ad spend. I manage the campaigns for a monthly fee." },
    ],
    ctaText: "Get a Free Meta Ads Strategy",
  },
  {
    slug: "seo-audit",
    title: "SEO Audit",
    shortTitle: "SEO Audit",
    icon: "Search",
    description: "Comprehensive technical and local SEO audit that reveals exactly why your business isn't ranking and provides a clear action plan to fix it.",
    shortDescription: "Full technical and local SEO analysis with clear action plan to fix ranking issues.",
    features: [
      "Technical SEO analysis",
      "Local SEO assessment",
      "Competitor gap analysis",
      "Keyword opportunity report",
      "Google Business Profile audit",
      "Actionable recommendations",
    ],
    results: "Clear action plan with prioritized ranking fixes",
    heroTagline: "Find Out Exactly Why You're Not Ranking",
    process: [
      { step: "01", title: "Data Collection", description: "Gather data from Google Search Console, Analytics, GBP, and competitor tools." },
      { step: "02", title: "Technical Analysis", description: "Audit site speed, crawlability, mobile optimization, schema markup, and more." },
      { step: "03", title: "Local SEO Review", description: "Analyze GBP, citations, NAP consistency, reviews, and local ranking factors." },
      { step: "04", title: "Action Plan Report", description: "Deliver prioritized recommendations with clear steps to improve your rankings." },
    ],
    benefits: [
      { title: "Clear Action Plan", description: "Know exactly what to fix and in what order for maximum ranking improvement." },
      { title: "Competitor Insights", description: "See what your top competitors are doing right and how to outrank them." },
      { title: "Save Time & Money", description: "Stop guessing and focus your SEO budget on what actually moves the needle." },
      { title: "Expert Analysis", description: "2+ years of home service SEO experience reviewing your specific situation." },
    ],
    faq: [
      { q: "What's included in the audit?", a: "Technical SEO, local SEO, GBP analysis, competitor analysis, keyword gaps, and a prioritized action plan." },
      { q: "How long does it take?", a: "Full audit delivery within 5-7 business days with a video walkthrough of findings." },
    ],
    ctaText: "Order Your SEO Audit",
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    shortTitle: "GBP Optimization",
    icon: "Star",
    description: "Your Google Business Profile is the #1 local ranking factor. I optimize every element to get you into the 3-pack and drive more calls, directions, and website visits.",
    shortDescription: "GBP optimization that gets you into the Google Maps 3-pack and drives more calls.",
    features: [
      "Complete GBP profile setup & optimization",
      "Category & attribute optimization",
      "Photo & video uploads",
      "Google Posts strategy",
      "Review generation system",
      "Q&A optimization",
    ],
    results: "More calls and directions from Google Maps",
    heroTagline: "Get Into Google Maps Top 3 — Get More Calls",
    process: [
      { step: "01", title: "Profile Audit", description: "Complete audit of your current GBP for missing information, errors, and optimization opportunities." },
      { step: "02", title: "Full Optimization", description: "Optimize every element: categories, services, photos, attributes, and business description." },
      { step: "03", title: "Content Strategy", description: "Implement Google Posts, Q&A responses, and ongoing photo updates." },
      { step: "04", title: "Review Growth", description: "Set up a systematic review generation process to build your 5-star reputation." },
    ],
    benefits: [
      { title: "Map Pack Ranking", description: "Appear in the top 3 on Google Maps for searches in your service area." },
      { title: "More Phone Calls", description: "Drive direct calls from Google Maps without paying for ads." },
      { title: "Better Visibility", description: "Show up when customers search for your exact services in their city." },
      { title: "Trust & Credibility", description: "A complete, optimized profile with reviews builds trust before customers even call." },
    ],
    faq: [
      { q: "Do I need a GBP if I already have a website?", a: "Absolutely. GBP drives more calls than most websites for local businesses. It's the #1 local ranking factor." },
      { q: "How fast can I see GBP improvements?", a: "GBP optimizations can show ranking improvements within 30-60 days. Some clients see results in 2-3 weeks." },
    ],
    ctaText: "Optimize My Google Business Profile",
  },
];

export const TESTIMONIALS: Testimonial[] = [];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mh-tiles",
    company: "UK Tile Retailer — Birmingham (anonymous)",
    industry: "Home Improvement",
    location: "Birmingham, UK",
    services: ["Malware Cleanup", "Technical SEO", "Local SEO", "GBP Optimization"],
    resultHeadline: "Local Visibility Recovered After Malware Attack",
    description: "A Birmingham tile retailer was hit with a serious malware infection — a trojan plugin, backdoor admin accounts, and 15,000+ spam pages indexed on Google. Rankings and trust had collapsed. I cleaned the malware, removed the spam index, secured the site, and rebuilt the local SEO foundation from scratch.",
    duration: "Ongoing",
    metrics: [
      { label: "Spam Pages Removed", value: "15,000+" },
      { label: "Organic Clicks", value: "[X% growth]" },
      { label: "GMB Impressions", value: "[Growing]" },
      { label: "Security Status", value: "Clean & Secured" },
    ],
    badge: "Home Improvement",
    badgeColor: "green",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$300",
    period: "/month",
    description: "A solid starting point for HVAC businesses new to digital marketing",
    features: [
      "Local SEO optimization",
      "Google Business Profile setup & optimization",
      "Basic website audit & fixes",
      "Monthly ranking report",
      "Review management strategy",
      "Email support",
    ],
    popular: false,
    ctaText: "Get Started",
  },
  {
    name: "Professional",
    price: "$600",
    period: "/month",
    description: "Full digital marketing coverage for growing HVAC businesses",
    features: [
      "Everything in Starter",
      "Google Ads management",
      "Meta Ads campaigns",
      "Conversion tracking & analytics",
      "Bi-weekly strategy calls",
      "Priority support & communication",
    ],
    popular: true,
    ctaText: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$1,000",
    period: "/month",
    description: "End-to-end digital marketing for established home service businesses",
    features: [
      "Everything in Professional",
      "Custom web design",
      "Advanced technical SEO",
      "Priority support & communication",
      "Full marketing automation",
      "Weekly strategy calls",
    ],
    popular: false,
    ctaText: "Get Started",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "Deep dive into your business, competitors, and local market using analytics tools and proven research methods.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Build a custom Local SEO + paid ads strategy specific to your city, service area, and target customer.",
    icon: "Map",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute the strategy using proven tools, GBP optimization, ad campaigns, and content with continuous monitoring.",
    icon: "Zap",
  },
  {
    step: "04",
    title: "Growth & Optimization",
    description: "Continuously optimize using real data, call tracking, and performance analytics for sustained lead growth.",
    icon: "TrendingUp",
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: "HVAC Is My Primary Focus",
    description: "I primarily work with HVAC companies. That focus means I understand your seasonality, your customer's search behavior, and what it takes to rank in your specific market.",
    icon: "Wind",
  },
  {
    title: "You Work Directly With Me",
    description: "No junior account manager, no outsourced team. You get my personal attention on every project — strategy, execution, and communication.",
    icon: "MessageCircle",
  },
  {
    title: "Local SEO Expertise",
    description: "Deep expertise in Google Maps, GBP optimization, and local rankings. I work exclusively in the home service niche and understand the patterns that move the needle.",
    icon: "MapPin",
  },
  {
    title: "Verifiable Data, Not Promises",
    description: "I share real Search Console screenshots, GMB insights, and call tracking data — not invented numbers. You can verify everything I show you.",
    icon: "Trophy",
  },
  {
    title: "Limited Client Load",
    description: "I intentionally keep my client roster small so every business gets proper attention. I'm not an agency running 100 accounts on autopilot.",
    icon: "Home",
  },
  {
    title: "Full-Scope Capability",
    description: "From Local SEO to paid ads to web design, I can handle your entire digital marketing stack — so you don't need to coordinate with multiple vendors.",
    icon: "Layers",
  },
];

export const INDUSTRIES = [
  {
    title: "HVAC Companies",
    description: "My primary focus. I help HVAC businesses rank on Google Maps, fill their service schedule with calls, and compete against larger local players — using Local SEO, GBP optimization, and targeted Google Ads. HVAC is a high-intent search category: when someone's AC breaks, they search and call immediately.",
    example: "See the MH Tiles case study for real verified data",
    icon: "Wind",
    color: "from-[#18055E] to-[#2A0B7A]",
  },
  {
    title: "Related Home Services",
    description: "I also work with plumbers, roofers, electricians, and other home service businesses. The same local SEO fundamentals apply — and you work directly with me, not a junior account manager.",
    example: "Contact me to discuss your specific market and service area",
    icon: "Home",
    color: "from-slate-600 to-slate-800",
  },
];

export const TOOLS = {
  "SEO & Local Tools": [
    "Google Business Profile",
    "BrightLocal",
    "Whitespark",
    "Moz Local",
    "Ahrefs",
    "SEMrush",
    "Screaming Frog",
  ],
  "Google Ads Tools": [
    "Google Ads",
    "Performance Max",
    "Google Analytics 4",
    "Google Search Console",
    "Google Tag Manager",
  ],
  "Automation & AI": [
    "ChatGPT (GPT-4)",
    "Claude (Anthropic)",
    "Zapier",
    "Make.com",
    "n8n",
  ],
  "Design & Web": [
    "WordPress",
    "Elementor",
    "Figma",
    "PageSpeed Insights",
    "GTmetrix",
  ],
};

export const FAQ_ITEMS = [
  {
    q: "How long does it take to see results from Local SEO?",
    a: "Most clients start seeing improvements in Google Maps rankings within 60-90 days. Significant lead increases typically happen by month 3-4. Local SEO is a long-term investment that compounds over time — the longer you do it, the stronger your rankings become.",
  },
  {
    q: "Do you only work with HVAC companies?",
    a: "HVAC is my primary focus. I also work with plumbers, roofers, electricians, and related home service businesses — but HVAC is where I have the deepest expertise and focus.",
  },
  {
    q: "What makes your Google Ads approach different?",
    a: "I specialize in home service Google Ads with full conversion tracking — so you can see exactly what each lead costs. I use call-only campaigns, Performance Max, and smart bidding strategies optimized specifically for HVAC and home service search intent.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. I offer a free 30-minute consultation where I audit your Google Business Profile, check your local rankings, and give you a clear picture of your current digital marketing situation — no obligation, honest feedback.",
  },
  {
    q: "Do you work with businesses outside the USA?",
    a: "My primary focus is the US market, but I also work remotely with home service businesses in other English-speaking markets. The MH Tiles case study is from the UK. Get in touch to discuss your location.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "local-seo-for-hvac-companies",
    title: "Local SEO for HVAC Companies: The Complete Guide to Getting More Calls in 2026",
    excerpt: "Learn how HVAC companies can use Local SEO to rank #1 on Google Maps, get more calls, and dominate local search. A complete 2026 strategy guide.",
    date: "2026-01-15",
    author: "Muhammad Umair",
    category: "Local SEO",
    readTime: "8 min read",
    metaDescription: "Learn how HVAC companies can use Local SEO to rank #1 on Google Maps, get more calls, and dominate local search.",
    image: "https://www.mumairdigital.com/blog/hvac-local-seo-guide.jpg",
    keywords: ["Local SEO for HVAC", "HVAC Google Maps ranking", "HVAC lead generation", "home service SEO", "Google Business Profile HVAC"],
  },
  {
    slug: "google-business-profile-optimization-home-service-businesses",
    title: "Google Business Profile Optimization for Home Service Businesses: The Complete 2026 Guide",
    excerpt: "A step-by-step guide to optimizing your Google Business Profile so HVAC companies and home service businesses rank in the Google Maps 3-pack and get more calls.",
    date: "2026-03-10",
    author: "Muhammad Umair",
    category: "Google Business Profile",
    readTime: "10 min read",
    metaDescription: "Learn how to fully optimize your Google Business Profile in 2026 so your home service business ranks in the Maps 3-pack and gets more calls from Google.",
    image: "https://www.mumairdigital.com/blog/gbp-optimization-guide.jpg",
    keywords: ["Google Business Profile optimization", "GBP for home service businesses", "Google Maps 3-pack", "local SEO 2026", "HVAC GBP"],
  },
  {
    slug: "google-ads-for-hvac-companies",
    title: "Google Ads for HVAC Companies: The Complete 2026 Guide",
    excerpt: "A step-by-step Google Ads guide for HVAC contractors. Learn campaign structure, seasonal keywords, bidding strategy, and how to track leads properly.",
    date: "2026-04-16",
    author: "Muhammad Umair",
    category: "Google Ads",
    readTime: "11 min read",
    metaDescription: "Complete Google Ads guide for HVAC companies 2026. Campaign structure, seasonal keywords, bidding strategy, and conversion tracking.",
    image: "https://www.mumairdigital.com/blog/google-ads-hvac-companies.jpg",
    keywords: ["Google Ads for HVAC companies", "HVAC PPC", "HVAC Google Ads", "air conditioning Google Ads", "HVAC contractor marketing 2026"],
  },
];

export const LOCATIONS: Location[] = [
  {
    slug: "cape-coral-fl",
    name: "Cape Coral",
    state: "Florida",
    country: "United States",
    countryCode: "USA",
    population: "~240,000",
    tagline: "Get More HVAC Calls From Google in Cape Coral",
    heroDescription: "Cape Coral is one of Southwest Florida's fastest-growing cities — a Gulf Coast community famous for over 400 miles of canals and a large snowbird population. The subtropical climate means year-round air conditioning demand, and seasonal residents coming back each fall want their HVAC systems checked before the heat kicks in again. If your HVAC business isn't on page one of Google, you're leaving calls on the table.",
    marketFocus: "HVAC & air conditioning services",
    localStats: {
      businesses: "Thousands of home service businesses in SW Florida",
      homeServices: "Year-round subtropical heat drives constant AC demand — plus seasonal snowbird traffic spikes",
    },
    faqs: [
      { q: "Is Cape Coral a good market for HVAC SEO?", a: "Yes. The combination of year-round heat, rapid population growth, and a large seasonal snowbird population makes Cape Coral one of the best HVAC markets in Southwest Florida." },
      { q: "Which areas around Cape Coral do you target?", a: "I optimize for Cape Coral and the surrounding SW Florida market including Fort Myers, Lehigh Acres, Bonita Springs, and North Fort Myers, depending on your service area." },
      { q: "How competitive is local SEO in Cape Coral?", a: "More manageable than larger Florida metros like Miami or Orlando. That makes Cape Coral a great opportunity — results are achievable with solid, consistent Local SEO work." },
    ],
    nearbyCities: [
      { name: "Port St. Lucie, FL", slug: "port-st-lucie-fl" },
      { name: "Lakeland, FL", slug: "lakeland-fl" },
    ],
    schema: {
      addressLocality: "Cape Coral",
      addressRegion: "FL",
      postalCode: "33904",
      addressCountry: "US",
      areaServed: "Cape Coral and Southwest Florida",
    },
  },
  {
    slug: "port-st-lucie-fl",
    name: "Port St. Lucie",
    state: "Florida",
    country: "United States",
    countryCode: "USA",
    population: "~250,000",
    tagline: "Rank on Google for HVAC in Port St. Lucie",
    heroDescription: "Port St. Lucie on the Treasure Coast is one of the fastest-growing mid-size cities in the entire United States. New housing developments, growing suburbs, and a mix of families and retirees create strong, consistent demand for HVAC installation, maintenance, and repair. Most HVAC companies here are still relying on word of mouth — the businesses that invest in Local SEO now will own the market.",
    marketFocus: "HVAC, AC installation & repair",
    localStats: {
      businesses: "Growing home service market along the Treasure Coast",
      homeServices: "Rapid residential growth drives strong HVAC installation and service demand year-round",
    },
    faqs: [
      { q: "Why is Port St. Lucie a good target for HVAC marketing?", a: "It's one of the fastest-growing cities in the US by percentage. New homes mean new HVAC systems — and homeowners searching Google for service and maintenance." },
      { q: "Do you cover Stuart, Fort Pierce, and surrounding areas?", a: "Yes. I optimize for Port St. Lucie and the broader Treasure Coast including Stuart, Fort Pierce, and Jensen Beach, based on your service area." },
      { q: "Is the competition for HVAC SEO intense here?", a: "Less than in larger Florida cities. Port St. Lucie is growing faster than the competition is adapting — a solid opportunity for HVAC businesses willing to invest in SEO now." },
    ],
    nearbyCities: [
      { name: "Cape Coral, FL", slug: "cape-coral-fl" },
      { name: "Lakeland, FL", slug: "lakeland-fl" },
    ],
    schema: {
      addressLocality: "Port St. Lucie",
      addressRegion: "FL",
      postalCode: "34983",
      addressCountry: "US",
      areaServed: "Port St. Lucie and the Treasure Coast",
    },
  },
  {
    slug: "lakeland-fl",
    name: "Lakeland",
    state: "Florida",
    country: "United States",
    countryCode: "USA",
    population: "~125,000",
    tagline: "Local SEO for HVAC Companies in Lakeland, FL",
    heroDescription: "Lakeland sits at the center of Florida's I-4 corridor between Tampa and Orlando — one of the most economically active stretches of the state. A mix of residential neighborhoods, industrial employers, and a growing healthcare sector means steady HVAC demand across both residential and commercial segments. Summers are brutally hot and humid; when AC fails, people search immediately. The question is whether they find you or your competitor.",
    marketFocus: "HVAC, AC repair & maintenance",
    localStats: {
      businesses: "Active home service market in Central Florida's I-4 corridor",
      homeServices: "Extreme summer heat and high humidity make HVAC maintenance and repair a constant priority for Lakeland homeowners",
    },
    faqs: [
      { q: "How does Lakeland compare to Tampa or Orlando for HVAC SEO?", a: "Lakeland is significantly less competitive than Tampa or Orlando, which means Local SEO results are achievable faster and at lower cost — while still reaching a sizable market." },
      { q: "What areas do you cover around Lakeland?", a: "I optimize for Lakeland and surrounding communities including Winter Haven, Plant City, Haines City, and Bartow, depending on your service footprint." },
      { q: "Is HVAC a year-round business in Lakeland?", a: "Yes — Florida heat drives AC demand from March through October, while mild winters still bring the occasional heating call. There's no real off-season for HVAC in Central Florida." },
    ],
    nearbyCities: [
      { name: "Cape Coral, FL", slug: "cape-coral-fl" },
      { name: "Port St. Lucie, FL", slug: "port-st-lucie-fl" },
    ],
    schema: {
      addressLocality: "Lakeland",
      addressRegion: "FL",
      postalCode: "33801",
      addressCountry: "US",
      areaServed: "Lakeland and Central Florida I-4 Corridor",
    },
  },
  {
    slug: "killeen-tx",
    name: "Killeen",
    state: "Texas",
    country: "United States",
    countryCode: "USA",
    population: "~165,000",
    tagline: "Get More HVAC Leads in Killeen, TX",
    heroDescription: "Killeen is home to Fort Cavazos (formerly Fort Hood), one of the largest military installations in the United States. That means a large, stable population of military families who rotate through the area, rent or buy homes, and need reliable local HVAC service. Texas summers are intense — triple-digit heat means AC failures get searched on Google immediately. Military communities also move quickly; being at the top of Google when they arrive in town is a real competitive advantage.",
    marketFocus: "HVAC & air conditioning services",
    localStats: {
      businesses: "Active home service market in Central Texas near Fort Cavazos",
      homeServices: "Intense Texas summer heat and a large, stable military community create consistent HVAC service demand",
    },
    faqs: [
      { q: "Does the military community affect HVAC demand in Killeen?", a: "Yes. Military families rotate frequently — new arrivals often need to set up home services quickly, and they search Google first. It creates consistent, high-intent demand." },
      { q: "Do you cover Temple, Harker Heights, and Copperas Cove?", a: "Yes, I optimize for Killeen and the surrounding area including Temple, Harker Heights, Copperas Cove, and Belton, based on your service zone." },
      { q: "How competitive is Killeen for HVAC SEO?", a: "Killeen is a mid-size Texas market — more manageable than Dallas or Austin, but still large enough to be worth winning. Most local HVAC companies haven't invested seriously in SEO." },
    ],
    nearbyCities: [
      { name: "Waco, TX", slug: "waco-tx" },
      { name: "Lakeland, FL", slug: "lakeland-fl" },
    ],
    schema: {
      addressLocality: "Killeen",
      addressRegion: "TX",
      postalCode: "76541",
      addressCountry: "US",
      areaServed: "Killeen and Central Texas near Fort Cavazos",
    },
  },
  {
    slug: "waco-tx",
    name: "Waco",
    state: "Texas",
    country: "United States",
    countryCode: "USA",
    population: "~145,000",
    tagline: "HVAC Local SEO in Waco, TX",
    heroDescription: "Waco sits at the crossroads of Central Texas on I-35 between Dallas and Austin — and it's growing. The Baylor University community, a thriving tourism economy driven by Magnolia Market, and steady residential development make Waco a market that's bigger than its size suggests. Texas summers are relentless; when homeowners search 'AC repair Waco' at 9pm, the business on page one gets the call. That business should be yours.",
    marketFocus: "HVAC & air conditioning services",
    localStats: {
      businesses: "Growing home service market in Central Texas",
      homeServices: "Hot Texas summers, a growing residential base, and steady in-migration drive reliable year-round HVAC demand",
    },
    faqs: [
      { q: "Is Waco worth investing in for HVAC SEO?", a: "Yes. Waco is growing faster than many realize, and most local HVAC companies don't have a serious digital presence. The opportunity to rank is real and achievable." },
      { q: "Do you cover the surrounding Waco area?", a: "Yes — I optimize for Waco and surrounding areas including Woodway, Hewitt, China Spring, and Hillsboro depending on your coverage zone." },
      { q: "How does Waco compare to Austin or Dallas for HVAC competition?", a: "Far less competitive. Austin and Dallas are saturated markets with big agency spends. Waco is winnable with focused, consistent Local SEO work — at a fraction of the cost." },
    ],
    nearbyCities: [
      { name: "Killeen, TX", slug: "killeen-tx" },
      { name: "Cape Coral, FL", slug: "cape-coral-fl" },
    ],
    schema: {
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76701",
      addressCountry: "US",
      areaServed: "Waco and Central Texas",
    },
  },
];
