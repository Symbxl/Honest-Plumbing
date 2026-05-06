# converting

A Next.js 15 marketing & lead-gen site built for **maximum conversion** and **local SEO dominance**. The placeholder business is **Cedar & Co. Plumbing** in Seattle — swap your real business in via a single config file.

---

## What's in the box

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS** with a custom editorial design system (Fraunces serif + Manrope sans, bone/forest/copper palette, paper-grain texture)
- **Lead capture form** wired to `/api/contact` (server route ready for Resend, Postmark, Twilio, or a CRM webhook)
- **JSON-LD structured data**: LocalBusiness, Service, Article, FAQPage, BreadcrumbList
- **Auto-generated `sitemap.xml` and `robots.txt`** sourced from your content files
- **Per-page metadata, canonical URLs, Open Graph + Twitter cards**
- **Programmatic SEO**: dynamic `/services/[slug]`, `/areas/[slug]`, `/blog/[slug]` pages from typed data
- **Six service pages, six service-area pages, five long-form keyword-dense blog posts** — fully internally linked

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm start   # production build
```

---

## Customize for your business

There are **four content files** to edit. Start at the top and work down.

### 1. `lib/site-config.ts` — your NAP and brand

Single source of truth. Update name, phone, email, address, hours, license, social URLs, and the canonical `url` (used by sitemap, OG tags, JSON-LD). **Edit this first** — every page reads from it.

### 2. `lib/services.ts` — what you do

Each service has a `slug`, `metaTitle`, `metaDescription`, `keywords[]`, hero copy, body sections, and FAQs. Add, remove, or rewrite — the service grid, sitemap, internal links, and JSON-LD all auto-update.

### 3. `lib/areas.ts` — where you do it

The single best local-SEO leverage point. Each area page targets `[your service] in [neighborhood]` queries. Edit `localContext` and `commonProblems` with **specific, real** detail (housing stock, ZIP codes, common failures). Specificity is what beats your competitors' boilerplate.

### 4. `lib/blogs.ts` — long-form SEO content

Each blog post has a `primaryKeyword`, `secondaryKeywords[]`, `sections[]` with H2/H3 hierarchy, `faqs[]`, and `relatedServices` / `relatedAreas` for internal linking. Posts are E-E-A-T-friendly: real prices, specific neighborhoods, named codes, master-plumber author.

---

## Where to put real assets

Drop these into `public/`:

- `favicon.ico` — referenced from `app/layout.tsx`
- `og-image.png` (1200×630) — Open Graph card
- `logo.png` — used in JSON-LD publisher logo

---

## Wire up the lead form

Open `app/api/contact/route.ts`. The form currently logs leads to the console. Replace with your preferred:

- **Email**: [Resend](https://resend.com), [Postmark](https://postmarkapp.com), or SendGrid
- **SMS**: [Twilio](https://twilio.com) for instant lead notification
- **CRM**: Webhook to HubSpot, Pipedrive, ServiceTitan, Jobber, etc.

The route handler has TODO comments showing exactly where to add each. Add:

- A honeypot field (in `LeadForm.tsx`) for spam protection
- Rate limiting via [Upstash Ratelimit](https://upstash.com/docs/oss/sdks/ts/ratelimit/overview) + Vercel KV

---

## Deploy

The fastest path is **Vercel**:

```bash
npx vercel
```

It auto-detects Next.js, deploys, and gives you a preview URL. Connect a domain through the Vercel dashboard. Don't forget to update `siteConfig.url` in `lib/site-config.ts` to match.

Other supported targets: Netlify, AWS Amplify, Cloudflare Pages, or any Node host.

---

## Local SEO launch checklist

Once your real content is in and the site is live:

1. **Google Search Console** — verify ownership, submit `/sitemap.xml`
2. **Google Business Profile** — claim and optimize. Your NAP must match `lib/site-config.ts` **exactly**
3. **Bing Webmaster Tools** — submit sitemap (Bing still drives ~5–8% of local search traffic)
4. **Schema validation** — paste each page URL into [Rich Results Test](https://search.google.com/test/rich-results) and confirm LocalBusiness, FAQPage, BreadcrumbList, and Article schemas all parse
5. **Page speed** — run [PageSpeed Insights](https://pagespeed.web.dev). Target Core Web Vitals "Good" on mobile
6. **Local citations** — list on Yelp, BBB, Angi, Nextdoor, Apple Maps Connect, your local Chamber of Commerce. Same NAP, every time
7. **Reviews** — set up a flow that asks every satisfied customer for a Google review. Reply to every review (good and bad)
8. **Backlinks** — get listed by your local trade association, your suppliers, the local newspaper

---

## Project structure

```
converting/
├── app/
│   ├── layout.tsx              # Root layout, fonts, header/footer, schema
│   ├── page.tsx                # Home (hero + form, services, testimonials, areas, blog preview)
│   ├── globals.css             # Theme tokens, base styles, utility classes
│   ├── sitemap.ts              # Auto sitemap from data files
│   ├── robots.ts               # Auto robots.txt
│   ├── api/contact/route.ts    # Lead form handler (wire up your email/CRM here)
│   ├── services/
│   │   ├── page.tsx            # Services index
│   │   └── [slug]/page.tsx     # Dynamic service page
│   ├── areas/
│   │   ├── page.tsx            # Service areas index
│   │   └── [slug]/page.tsx     # Dynamic area page
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/page.tsx     # Dynamic blog post
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx              # Sticky nav with click-to-call phone
│   ├── Footer.tsx              # Full NAP + internal link grid
│   ├── LeadForm.tsx            # Lead capture (hero + inline variants)
│   └── Schema.tsx              # LocalBusiness, FAQ, Breadcrumb, Article, Service JSON-LD
├── lib/
│   ├── site-config.ts          # ⭐ Edit me first
│   ├── services.ts             # Service definitions
│   ├── areas.ts                # Service-area definitions
│   └── blogs.ts                # Blog post content
├── public/                     # Add favicon, og-image, logo here
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Design tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

- **bone** (#fbf8f1) — page background, warm off-white
- **ink** (#1a1a1a) — body text
- **forest** (#1f3d2e) — primary brand, dark sections, CTAs
- **copper** (#c87b4a) — accent, secondary CTAs, eyebrow text
- **Fraunces** (variable serif) — display headings
- **Manrope** (variable sans) — body copy

Editorial flourishes used across pages:
- `.eyebrow` — small-caps copper label with horizontal rule
- `.brush-underline` — accent underline on emphasis spans (already on home hero)
- `.card-press` — soft elevated cards
- `.prose-editorial` — long-form blog body styling
- `italic text-forest` — pattern for emphasized headline phrases

---

## License & credit

Built as a starter — fork it, ship it, sell with it. No attribution required.
# MikeMurray
