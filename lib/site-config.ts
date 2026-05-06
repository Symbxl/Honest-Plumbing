/**
 * SITE CONFIG — single source of truth.
 * Edit this file with your real business info and everything updates:
 * the SEO metadata, JSON-LD schema, header, footer, contact form, etc.
 */

export const siteConfig = {
  // ---- Brand ----
  name: "Mick Murray Deep Muscle Therapist",
  shortName: "Mick Murray",
  tagline: "Honest bodywork. Real results. Zero guesswork.",
  description:
    "Licensed deep-tissue therapists and chiropractors serving Sydney and the greater NSW area. Same-week appointments, transparent flat-rate pricing, real lasting relief.",

  // ---- Domain (no trailing slash) ----
  // Used for canonical URLs, sitemap, Open Graph, JSON-LD.
  url: "https://example.com",

  // ---- NAP (Name, Address, Phone) — critical for local SEO ----
  business: {
    legalName: "Mick Murray Deep Muscle Therapist Pty Ltd",
    phone: "+61-2-5550-0142",
    phoneDisplay: "(02) 5550 0142",
    email: "hello@example.com",
    address: {
      street: "1428 Darling Street",
      city: "Balmain",
      region: "NSW",
      postalCode: "2041",
      country: "AU",
    },
    geo: {
      latitude: -33.8568,
      longitude: 151.1817,
    },
    hours: [
      { day: "Mon", open: "08:00", close: "20:00" },
      { day: "Tue", open: "08:00", close: "20:00" },
      { day: "Wed", open: "08:00", close: "20:00" },
      { day: "Thu", open: "08:00", close: "20:00" },
      { day: "Fri", open: "08:00", close: "19:00" },
      { day: "Sat", open: "09:00", close: "17:00" },
      { day: "Sun", closed: true },
    ],
    priceRange: "$$",
    foundingYear: 2009,
    license: "AHPRA Reg# CHI0001234567 · AAMT Member #M60123456",
    rating: { value: 5.0, count: 612 },
  },

  // ---- Social ----
  social: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    google: "https://maps.google.com/example",
    yelp: "https://yelp.com/example",
  },

  // ---- Primary keyword cluster (for meta + content) ----
  primaryKeywords: [
    "Sydney massage therapist",
    "deep tissue massage Sydney",
    "chiropractor Sydney",
    "sports massage Sydney",
    "myofascial release Sydney",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
