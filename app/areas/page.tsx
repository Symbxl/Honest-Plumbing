import Link from "next/link";
import type { Metadata } from "next";
import { areas } from "@/lib/areas";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Cedar & Co. Bodywork serves ${areas
    .map((a) => a.name)
    .join(", ")} and surrounding Sydney suburbs. Same-week appointments, registered chiropractors and remedial therapists.`,
  alternates: { canonical: `${siteConfig.url}/areas` },
  openGraph: {
    title: "Sydney Bodywork & Chiropractic Service Areas | Cedar & Co.",
    description:
      "Sydney bodywork clinic serving Balmain, Glebe, Surry Hills, Manly, North Sydney, and Hornsby.",
    url: `${siteConfig.url}/areas`,
  },
};

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/areas" },
        ]}
      />

      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-forest">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Service Areas</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Where we work</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-6">
              Bodywork & chiropractic across{" "}
              <span className="italic text-forest">Sydney</span> — Inner West
              to{" "}
              <span className="italic text-forest">North Shore.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Cedar & Co. is a Sydney local — our clinic has been on Darling
              Street since 2009, and we see patients from across the city.
              We know which suburbs run hot on engineering-table neck, which
              ones bring in surf and ocean-swim shoulder injuries, and which
              cycling loops are putting locals in our waiting room every
              spring. Local knowledge isn&apos;t a marketing line — it&apos;s
              how we triage faster and treat more accurately.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-press group p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-display text-xs text-copper-deep tracking-[0.2em] uppercase">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-ink-muted">
                    {area.zip.join(" · ")}
                  </span>
                </div>
                <h2 className="font-display text-2xl text-ink mb-1 group-hover:text-forest transition-colors">
                  {area.name}
                </h2>
                <p className="text-xs text-ink-muted uppercase tracking-wider mb-4">
                  {area.parentRegion}
                </p>
                <p className="text-ink-muted text-sm leading-relaxed mb-5 flex-1">
                  {area.intro.split(".")[0]}.
                </p>
                <span className="text-sm font-semibold text-forest inline-flex items-center gap-2 mt-auto">
                  See {area.name} bodywork details
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUTSIDE LIST */}
      <section className="bg-bone-100/60 border-y border-ink/10 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-3">Not on the list?</p>
          <h2 className="font-display text-3xl text-ink mb-5 leading-tight">
            We probably still cover you.
          </h2>
          <p className="text-ink-muted leading-relaxed mb-7">
            We regularly see patients from Pyrmont, Ultimo, Annandale,
            Leichhardt, Rozelle, Drummoyne, Marrickville, Erskineville,
            Chippendale, Redfern, Paddington, Bondi Junction, Mosman,
            Neutral Bay, and Lane Cove. Give us a ring and we&apos;ll tell
            you straight whether we&apos;re the right fit or whether someone
            closer would serve you better.
          </p>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span aria-hidden>☎</span>
            Call {siteConfig.business.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
