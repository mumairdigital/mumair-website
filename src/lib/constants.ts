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
  { label: "GBP Optimization", href: "/services/google-business-profile", description: "The single biggest lever in local HVAC search" },
  { label: "Local SEO", href: "/services/local-seo", description: "Compounds over time — works while you sleep" },
  { label: "HVAC Websites", href: "/services/web-design", description: "Built to convert visitors into booked calls" },
  { label: "Reviews & Reputation", href: "/services/reviews-reputation", description: "Fresh reviews are one of Google's strongest ranking signals" },
  { label: "SEO Audit", href: "/services/seo-audit", description: "Full technical analysis of your local presence" },
];

export const NAV_LOCATIONS_USA = [
  { label: "Cape Coral, FL", href: "/locations/cape-coral-fl" },
  { label: "Lakeland, FL", href: "/locations/lakeland-fl" },
];

export const STATS = [
  { label: "Years Experience", value: 2, suffix: "+" },
];

export const SERVICES: Service[] = [
  {
    slug: "google-business-profile",
    title: "Google Business Profile Optimization",
    shortTitle: "GBP Optimization",
    icon: "Star",
    description: "Your Google Business Profile is the single biggest lever in local HVAC search. I optimize every element to get you into the 3-pack and drive more calls, directions, and website visits.",
    shortDescription: "The single biggest lever in local HVAC search.",
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
      { step: "04", title: "Review Growth", description: "Set up a systematic review generation process to build your reputation." },
    ],
    benefits: [
      { title: "Map Pack Ranking", description: "Appear in the top 3 on Google Maps for searches in your service area." },
      { title: "More Phone Calls", description: "Drive direct calls from Google Maps without paying for ads." },
      { title: "Better Visibility", description: "Show up when customers search for your exact services in their city." },
      { title: "Trust & Credibility", description: "A complete, optimized profile with reviews builds trust before customers even call." },
    ],
    faq: [
      { q: "Do I need a GBP if I already have a website?", a: "Absolutely. GBP drives more calls than most websites for local businesses. It's the #1 local ranking factor." },
      { q: "How fast can I see GBP improvements?", a: "Profile improvements can show ranking movement within weeks. Meaningful results typically emerge over 2–4 months." },
    ],
    ctaText: "Optimize My Google Business Profile",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    icon: "MapPin",
    description: "Local SEO compounds over time — it works while you sleep. Get found by HVAC customers actively searching for air conditioning, heating, and HVAC services in your city.",
    shortDescription: "Compounds over time — works while you sleep.",
    features: [
      "On-page local SEO optimization",
      "Local citation building & cleanup",
      "Schema markup implementation",
      "Local keyword strategy",
      "NAP consistency across directories",
      "Competitor gap analysis",
    ],
    results: "Organic local visibility that grows month over month",
    heroTagline: "Rank on Google Maps & Get More HVAC Calls",
    process: [
      { step: "01", title: "Local SEO Audit", description: "Complete analysis of your current local presence, GBP, citations, and competitor landscape." },
      { step: "02", title: "Strategy & Optimization", description: "Optimize on-page signals, build local citations, fix NAP issues, and implement local keyword strategy." },
      { step: "03", title: "Content & Schema", description: "Create locally-optimized content, add schema markup, and build local authority signals." },
      { step: "04", title: "Monitor & Report", description: "Track rankings, calls, and traffic with monthly reports showing real data from Search Console." },
    ],
    benefits: [
      { title: "More Phone Calls", description: "Appear in the 3-pack and get calls from customers ready to hire now." },
      { title: "Higher Google Maps Ranking", description: "Dominate the map pack in your city and surrounding service areas." },
      { title: "Increased Website Traffic", description: "Drive qualified local traffic from organic search — no ad spend required." },
      { title: "Compounding Results", description: "Unlike ads, Local SEO builds authority that compounds and strengthens over time." },
    ],
    faq: [
      { q: "How long does Local SEO take?", a: "Profile improvements in weeks, meaningful ranking movement in 2–4 months. No overnight promises." },
      { q: "Do you guarantee rankings?", a: "I don't guarantee specific positions — no honest SEO does. I show you real data from Search Console every month so you can see exactly what's moving." },
    ],
    ctaText: "Get Your Free Local SEO Audit",
  },
  {
    slug: "web-design",
    title: "HVAC Websites",
    shortTitle: "HVAC Websites",
    icon: "Monitor",
    description: "Built to convert visitors into booked calls. HVAC-specific websites that are fast, mobile-first, and structured around what local search customers need to see before they call.",
    shortDescription: "Built to convert visitors into booked calls.",
    features: [
      "Conversion-first design strategy",
      "Technical SEO built-in from day one",
      "Page speed optimization",
      "Lead capture forms & click-to-call",
      "Mobile-first responsive design",
      "Google Analytics & Search Console setup",
    ],
    results: "A website that works as a lead generation tool, not just a brochure",
    heroTagline: "HVAC Websites Built to Convert Visitors Into Calls",
    process: [
      { step: "01", title: "Discovery & Planning", description: "Understand your business, service area, and what customers need to see before they call." },
      { step: "02", title: "Design & Structure", description: "Create conversion-focused layouts with clear CTAs, service pages, and local signals." },
      { step: "03", title: "Development & SEO", description: "Build fast, secure sites with technical SEO, schema markup, and lead capture built in." },
      { step: "04", title: "Launch & Track", description: "Launch, set up analytics and Search Console, and monitor performance from day one." },
    ],
    benefits: [
      { title: "More Leads Online", description: "Designed to capture leads, not just showcase your business." },
      { title: "Better First Impressions", description: "Professional design that builds trust with potential customers before they call." },
      { title: "Faster Page Speed", description: "Optimized for Core Web Vitals and mobile performance." },
      { title: "Built-in Local SEO", description: "Technical SEO, schema markup, and local signals baked in from the start." },
    ],
    faq: [
      { q: "How long does a website take?", a: "Typically 2–4 weeks from kickoff to launch." },
      { q: "What platform do you build on?", a: "I build on WordPress — flexible, widely supported, and easy for you to update after handover." },
    ],
    ctaText: "Get a Free Website Consultation",
  },
  {
    slug: "reviews-reputation",
    title: "Reviews & Reputation",
    shortTitle: "Reviews & Reputation",
    icon: "Star",
    description: "Fresh reviews are one of Google's strongest local ranking signals. I set up a system that consistently generates real reviews from your customers — building both your ranking and your reputation.",
    shortDescription: "Fresh reviews are one of Google's strongest ranking signals.",
    features: [
      "Review generation system setup",
      "Follow-up process & automation",
      "Review response guidance",
      "Reputation monitoring",
      "GBP review strategy",
      "Monthly review reporting",
    ],
    results: "A steady flow of real reviews that compound over time",
    heroTagline: "Build Reviews That Rank and Convert",
    process: [
      { step: "01", title: "Reputation Audit", description: "Review your current ratings, review velocity, and competitor standing." },
      { step: "02", title: "System Setup", description: "Build a simple review request process that fits your existing workflow." },
      { step: "03", title: "Outreach & Follow-Up", description: "Implement follow-up sequences that generate reviews consistently without being pushy." },
      { step: "04", title: "Monitor & Report", description: "Track review growth and reputation metrics month over month." },
    ],
    benefits: [
      { title: "Higher Local Rankings", description: "Fresh reviews are a direct Google ranking signal — more reviews, more recent reviews, better positions." },
      { title: "More Conversions", description: "Customers who see strong reviews call more often. Reputation closes leads before you even speak." },
      { title: "Consistent Velocity", description: "A system that runs continuously — not a one-time burst that fades." },
      { title: "Competitive Edge", description: "Most HVAC businesses collect reviews by accident. A real system is a sustainable advantage." },
    ],
    faq: [
      { q: "Can you get reviews removed?", a: "No — and anyone who claims they can is misleading you. I focus on generating real reviews from real customers." },
      { q: "How fast does the review count grow?", a: "Depends on your call volume. Most businesses see consistent weekly review generation within 30 days of setup." },
    ],
    ctaText: "Set Up My Review System",
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
    services: ["Technical SEO", "Local SEO", "GBP Optimization", "Reviews System"],
    resultHeadline: "Recovering a Local Business That Had Vanished From Google",
    description: "A local business whose Google visibility had collapsed — rankings gone, search traffic flatlined, barely showing up for the local searches that brought in customers. I rebuilt the local SEO foundation from scratch, fixed the technical issues holding the site back, restructured it for local search, optimised the Google Business Profile, and put a review and reporting system in place.",
    duration: "Ongoing",
    metrics: [
      { label: "Organic Clicks", value: "Recovering" },
      { label: "GBP Impressions", value: "Growing" },
      { label: "Technical Issues", value: "Resolved" },
      { label: "Data Source", value: "GSC & GBP" },
    ],
    badge: "Home Improvement",
    badgeColor: "green",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "A solid starting point — covers the fundamentals that move your local rankings",
    features: [
      "GBP optimization & management",
      "Citation cleanup & consistency",
      "Review generation system setup",
      "Monthly ranking report",
      "Email support",
    ],
    popular: false,
    ctaText: "Get Started",
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Full local SEO coverage for HVAC companies serious about ranking",
    features: [
      "Everything in Starter",
      "Full Local SEO — on-page optimization",
      "Content creation for local search",
      "Schema markup implementation",
      "Bi-weekly ranking & traffic reports",
      "Priority support",
    ],
    popular: true,
    ctaText: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,200",
    period: " one-time + $599/mo",
    description: "New HVAC website built to convert — plus everything in Professional ongoing",
    features: [
      "New HVAC website (one-time build)",
      "Conversion-focused design",
      "Technical SEO built in",
      "Everything in Professional (ongoing)",
      "Search Console & GBP setup",
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
    title: "No Long-Term Contracts",
    description: "Month-to-month — you stay because the work is delivering, not because a contract says you have to.",
    icon: "Layers",
  },
];

export const INDUSTRIES = [
  {
    title: "HVAC Companies",
    description: "HVAC is my only niche — not a side offering. I help HVAC businesses rank on Google Maps, get into the 3-pack, and convert local searches into booked calls. When someone's AC breaks at 9pm and they search Google, the company on page one gets the call. That company should be yours.",
    example: "You work directly with me. Real data from Google Search Console and GBP — verifiable.",
    icon: "Wind",
    color: "from-[#18055E] to-[#2A0B7A]",
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
  "Analytics & Reporting": [
    "Google Search Console",
    "Google Analytics 4",
    "Google Tag Manager",
    "GBP Insights",
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
    q: "How long does it take to see results?",
    a: "GBP profile improvements can show movement within weeks. Meaningful ranking changes typically take 2–4 months of consistent work. I don't make overnight promises — Local SEO compounds over time.",
  },
  {
    q: "Do you only work with HVAC companies?",
    a: "Yes. HVAC is my only niche. I don't take on plumbers, roofers, or electricians as separate clients — I focus entirely on HVAC so I can deliver better work for that specific market.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes — I offer a free HVAC visibility audit. I'll review your Google Business Profile, check your local rankings, and look at your site. No obligation, honest feedback, real data.",
  },
  {
    q: "Do you work with businesses outside the USA?",
    a: "I'm based remotely and work with HVAC companies across the US market. The case study on this site is from the UK — local search works the same way regardless of location.",
  },
  {
    q: "What makes your approach different?",
    a: "I work with a small number of clients on purpose — so every business gets proper attention. Everything I show you comes from Google Search Console and Google Business Profile. No invented numbers, no long-term contracts.",
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
    tagline: "HVAC Local SEO in Cape Coral, FL — Get More Booked Calls From Google",
    heroDescription: "Cape Coral is one of Southwest Florida's fastest-growing cities — built on over 400 miles of canals, baked by year-round subtropical heat, and flooded with snowbirds every fall who want their AC systems checked before the season starts. When someone searches 'AC repair Cape Coral' or 'HVAC near me' at 9pm on a Tuesday in July, they call the first company they see. I get HVAC companies to that position through Local SEO, Google Business Profile optimization, and websites built to convert. The salt air corrodes equipment. The heat is relentless. The demand is consistent. The question is whether Google shows your business or your competitor's.",
    marketFocus: "HVAC & air conditioning services",
    localStats: {
      businesses: "Rapidly growing SW Florida market with strong year-round HVAC demand",
      homeServices: "Year-round subtropical heat plus seasonal snowbird population spikes — consistent, high-intent AC searches",
    },
    faqs: [
      { q: "How long does it take to get into the Google Maps 3-pack in Cape Coral?", a: "GBP improvements can show movement within weeks. Meaningful Map Pack positioning typically takes 2–4 months of consistent work. The timeline depends on your current profile, competition, and how long the business has been established online." },
      { q: "Do you cover Fort Myers and the surrounding SW Florida area?", a: "Yes. I optimize for Cape Coral and the surrounding Southwest Florida market including Fort Myers, Lehigh Acres, Bonita Springs, and North Fort Myers, depending on your service area." },
      { q: "Is HVAC SEO competitive in Cape Coral?", a: "Less competitive than Miami or Orlando, which makes it a genuine opportunity. Most Cape Coral HVAC companies don't have a consistent Local SEO strategy — that gap is worth acting on before it closes." },
    ],
    nearbyCities: [
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
    slug: "lakeland-fl",
    name: "Lakeland",
    state: "Florida",
    country: "United States",
    countryCode: "USA",
    population: "~125,000",
    tagline: "HVAC Local SEO in Lakeland, FL — Rank on Google, Get More Calls",
    heroDescription: "Lakeland sits at the center of Florida's I-4 corridor between Tampa and Orlando — the most economically active stretch of the state, and one of the most storm-prone. It's the lightning capital of the US. Surge damage and AC failures aren't rare events here — they're regular occurrences that send people straight to Google. The residential base is large, the summers are brutal, and the demand for HVAC service is consistent year-round across Polk County. When a homeowner in Auburndale or Davenport searches 'AC repair near me' on a 95-degree afternoon, the company at the top of Google gets the call. I build the local SEO foundation that gets HVAC companies to that position — and keeps them there.",
    marketFocus: "HVAC, AC repair & maintenance",
    localStats: {
      businesses: "Active home service market anchoring Florida's I-4 corridor",
      homeServices: "Intense summer heat, high storm frequency, and a large residential base drive consistent high-intent HVAC searches",
    },
    faqs: [
      { q: "How do I rank in the Google Maps pack for Lakeland HVAC searches?", a: "The Map Pack is driven by three main factors: your Google Business Profile (how complete and active it is), your proximity to the searcher, and your local authority (citations, reviews, on-page signals). I work on all three systematically. Most businesses see meaningful movement within 2–4 months." },
      { q: "Do you cover Auburndale, Davenport, and other Polk County areas?", a: "Yes. I optimize for Lakeland and surrounding communities including Winter Haven, Plant City, Haines City, Auburndale, Davenport, and Bartow, depending on your service footprint." },
      { q: "How long does Local SEO take to work in Lakeland?", a: "GBP improvements can show early movement in weeks. Ranking changes that translate into more calls typically take 2–4 months. There are no shortcuts — but the results compound over time in a way that paid ads don't." },
    ],
    nearbyCities: [
      { name: "Cape Coral, FL", slug: "cape-coral-fl" },
    ],
    schema: {
      addressLocality: "Lakeland",
      addressRegion: "FL",
      postalCode: "33801",
      addressCountry: "US",
      areaServed: "Lakeland and Polk County, Central Florida",
    },
  },
];
