/**
 * SITE CONFIG — single source of truth.
 * Edit this file with your real business info and everything updates:
 * the SEO metadata, JSON-LD schema, header, footer, contact form, etc.
 */

export const siteConfig = {
  // ---- Brand ----
  name: "Joe B. Sullivan & Sons Plumbing",
  shortName: "Joe B. Sullivan & Sons",
  tagline: "Honest and Reliable Plumbing Since 1895",
  description:
    "Family-owned commercial and residential plumbing in Nashville since 1895. Water heaters, boilers, drain cleaning, sewer & water line replacement, backflow, and gas lines. Warranty service for AO Smith, Bradford White, State Industries, and Whirlpool.",

  // ---- Domain (no trailing slash) ----
  // Used for canonical URLs, sitemap, Open Graph, JSON-LD.
  url: "https://www.joebsullivanandsons.com",

  // ---- NAP (Name, Address, Phone) — critical for local SEO ----
  business: {
    legalName: "Joe B. Sullivan & Sons Plumbing Co., Inc.",
    phone: "+1-615-254-8379",
    phoneDisplay: "(615) 254-8379",
    email: "info@joebsullivanandsons.com",
    address: {
      street: "292 Hermitage Ave",
      city: "Nashville",
      region: "TN",
      postalCode: "37210",
      country: "US",
    },
    geo: {
      latitude: 36.1561,
      longitude: -86.7707,
    },
    hours: [
      { day: "Mon", open: "08:00", close: "16:30" },
      { day: "Tue", open: "08:00", close: "16:30" },
      { day: "Wed", open: "08:00", close: "16:30" },
      { day: "Thu", open: "08:00", close: "16:30" },
      { day: "Fri", open: "08:00", close: "16:30" },
      { day: "Sat", closed: true },
      { day: "Sun", closed: true },
    ],
    priceRange: "$$",
    foundingYear: 1895,
    license: "Licensed Master Plumber: Frank Sullivan · Licensed, Bonded & Insured",
    rating: { value: 4.9, count: 187 },
  },

  // ---- Social ----
  social: {
    facebook: "https://www.facebook.com/SullivanJoeBSonsPlumbing",
    google: "https://maps.google.com/?q=Joe+B+Sullivan+Sons+Plumbing+Nashville",
  },

  // ---- Primary keyword cluster (for meta + content) ----
  primaryKeywords: [
    "Nashville plumber",
    "plumbing Nashville TN",
    "water heater repair Nashville",
    "tankless water heater Nashville",
    "commercial plumbing Nashville",
    "sewer line replacement Nashville",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
