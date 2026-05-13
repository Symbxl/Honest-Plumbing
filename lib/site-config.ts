/**
 * SITE CONFIG — single source of truth.
 * Edit this file with your real business info and everything updates:
 * the SEO metadata, JSON-LD schema, header, footer, contact form, etc.
 */

export const siteConfig = {
  // ---- Brand ----
  name: "Honest Plumbing",
  shortName: "Honest Plumbing",
  tagline: "Service You Can Trust",
  description:
    "Honest, licensed residential plumbing in Murfreesboro and across Middle Tennessee. Tankless and tank water heaters, sewer and drain service, water filtration, kitchen and bath plumbing, and full water and sewer repipes. Owned by master plumber Aaron Kelly — fair pricing, honest consultation, and clean work every visit.",

  // ---- Domain (no trailing slash) ----
  // Used for canonical URLs, sitemap, Open Graph, JSON-LD.
  url: "https://www.honestplumbingtn.com",

  // ---- NAP (Name, Address, Phone) — critical for local SEO ----
  business: {
    legalName: "Honest Plumbing",
    phone: "+1-615-962-7007",
    phoneDisplay: "(615) 962-7007",
    email: "honestplumbingtn@gmail.com",
    address: {
      street: "",
      city: "Murfreesboro",
      region: "TN",
      postalCode: "37130",
      country: "US",
    },
    geo: {
      latitude: 35.8628845,
      longitude: -86.5142059,
    },
    hours: [
      { day: "Mon", open: "08:00", close: "17:00" },
      { day: "Tue", open: "08:00", close: "17:00" },
      { day: "Wed", open: "08:00", close: "17:00" },
      { day: "Thu", open: "08:00", close: "17:00" },
      { day: "Fri", open: "08:00", close: "17:00" },
      { day: "Sat", closed: true },
      { day: "Sun", closed: true },
    ],
    priceRange: "$$",
    foundingYear: 2013,
    license: "Tennessee Master Plumber: Aaron Kelly · License #4034 · Licensed, Bonded & Insured",
    rating: { value: 5.0, count: 42 },
    owner: "Aaron Kelly",
    ownerRole: "Owner & Master Plumber",
  },

  // ---- Social ----
  social: {
    facebook: "https://www.facebook.com/honestplumbingtn/",
    google:
      "https://www.google.com/maps/place/Honest+Plumbing/@35.8628845,-86.5163946,17z/data=!3m1!4b1!4m5!3m4!1s0x8863f54ca952eb6b:0x71069bcd06dfc385!8m2!3d35.8628845!4d-86.5142059",
    yelp: "https://www.yelp.com/biz/honest-plumbing-murfreesboro",
    expertise: "https://www.expertise.com/tn/murfreesboro/plumbing#HonestPlumbing",
  },

  // ---- Primary keyword cluster (for meta + content) ----
  primaryKeywords: [
    "Murfreesboro plumber",
    "plumber Murfreesboro TN",
    "Middle Tennessee plumber",
    "tankless water heater Murfreesboro",
    "water heater repair Murfreesboro",
    "sewer and drain Murfreesboro",
    "water filtration Murfreesboro",
    "residential plumber Rutherford County",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
