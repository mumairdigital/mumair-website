# Muhammad Umair — Personal Brand Website

A complete Next.js 14 lead generation website for Muhammad Umair, Local SEO & Digital Marketing Expert for home service businesses in USA & Canada.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations
- **React Hook Form + Zod** — form validation
- **Nodemailer** — email notifications
- **Lucide React** — icons

## Project Structure

```
src/
├── app/           — Pages (App Router)
├── components/    — UI components
│   ├── animations/  — FadeUp, CountUp, HeroOrbs
│   ├── layout/      — Navbar, Footer, WhatsApp button
│   ├── sections/    — Homepage and page sections
│   └── forms/       — ContactForm
├── lib/           — Utilities, constants, SEO helpers
└── types/         — TypeScript interfaces
public/
└── umair.jpg.png  — Profile photo
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (14 sections) |
| `/about` | About page |
| `/services` | Services overview |
| `/services/[slug]` | Individual service pages (6 services) |
| `/portfolio` | Case studies |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post (HVAC SEO guide) |
| `/contact` | Contact page |
| `/locations/[city]` | 9 location pages (USA + Canada) |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots.txt |

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example env file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=your-gmail@gmail.com
CONTACT_TO_EMAIL=info@mumairdigital.com
WHATSAPP_NUMBER=923209943057
NEXT_PUBLIC_SITE_URL=https://mumairdigital.com
```

### Setting Up Gmail SMTP (for contact form emails)

1. Go to your Google Account → Security
2. Enable 2-Factor Authentication
3. Go to Security → App Passwords
4. Generate an App Password for "Mail"
5. Use the 16-character App Password as `SMTP_PASS`

### 3. Add Profile Photo

Place `umair.jpg.png` in the `/public/` folder. It should already be there if you followed setup.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

## Contact Form

The contact form (`/contact`) does three things on submission:

1. **Validates** all fields with Zod schema
2. **Sends email** to `CONTACT_TO_EMAIL` via Gmail SMTP (if configured)
3. **Saves lead** to `leads.json` in project root as backup
4. **Returns WhatsApp URL** that the user can click to message directly

Leads are stored in `leads.json` — check this file for any leads captured when email is not configured.

## SEO Features

- Unique `title` + `description` + canonical URL on every page
- Open Graph + Twitter Card tags on all pages
- JSON-LD schemas: Person, ProfessionalService, LocalBusiness, BlogPosting, FAQ
- Auto-generated `/sitemap.xml` (covers all 25+ routes)
- Auto-generated `/robots.txt`
- All 9 location pages with city-specific content and LocalBusiness schema

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Any Node.js hosting platform works. Run `npm run build` then `npm start`.

## Customization

- **Colors**: Edit `tailwind.config.ts` — brand colors are `brand-purple`, `brand-dark`, `brand-light`
- **Content**: Edit `src/lib/constants.ts` — all site content is centralized here
- **SEO**: Edit `src/lib/seo.ts` — schema builders and metadata helpers
- **Contact email**: Update `CONTACT_TO_EMAIL` in `.env.local`

## Support

For questions or issues, contact: info@mumairdigital.com
