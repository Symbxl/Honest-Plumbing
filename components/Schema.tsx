import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

/**
 * LocalBusiness JSON-LD — the single most important schema for local SEO.
 * Google's Rich Results Test validates this. Place once in root layout.
 */
export function LocalBusinessSchema() {
  const b = siteConfig.business;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor", // LocalBusiness subtype that covers chiropractic + bodywork practices
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    legalName: b.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: b.phone,
    email: b.email,
    priceRange: b.priceRange,
    image: `${siteConfig.url}/og-image.png`,
    logo: `${siteConfig.url}/logo.png`,
    foundingDate: `${b.foundingYear}-01-01`,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      addressRegion: b.address.region,
      postalCode: b.address.postalCode,
      addressCountry: b.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: b.geo.latitude,
      longitude: b.geo.longitude,
    },
    openingHoursSpecification: b.hours
      .filter((h) => !("closed" in h))
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "open" in h ? h.open : undefined,
        closes: "close" in h ? h.close : undefined,
      })),
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bodywork & Chiropractic Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${siteConfig.url}/services/${s.slug}`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: b.rating.value,
      reviewCount: b.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage JSON-LD — drops FAQ rich results into Google SERPs for blog/service pages.
 */
export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList JSON-LD — improves SERP appearance and reinforces site structure.
 */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Article JSON-LD for blog posts.
 */
export function ArticleSchema({
  title,
  description,
  publishedDate,
  updatedDate,
  author,
  slug,
}: {
  title: string;
  description: string;
  publishedDate: string;
  updatedDate?: string;
  author: { name: string; role: string };
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedDate,
    dateModified: updatedDate || publishedDate,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      worksFor: { "@type": "Organization", name: siteConfig.name },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service JSON-LD for individual /services/[slug] pages.
 */
export function ServiceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${siteConfig.url}/services/${slug}`,
    provider: { "@id": `${siteConfig.url}#business` },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
