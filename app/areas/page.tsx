import Link from "next/link";
import type { Metadata } from "next";
import { areas } from "@/lib/areas";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Joe B. Sullivan & Sons Plumbing serves ${areas
    .map((a) => a.name)
    .join(", ")} and the wider Nashville metro. Same-day service in most cases, licensed master plumber on every job.`,
  alternates: { canonical: `${siteConfig.url}/areas` },
  openGraph: {
    title: "Nashville Plumbing Service Areas | Joe B. Sullivan & Sons",
    description:
      "Nashville plumber serving East Nashville, downtown, Green Hills, Belle Meade, Brentwood, and Franklin.",
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
              Plumbing across{" "}
              <span className="italic text-forest">Nashville</span> — East side
              to{" "}
              <span className="italic text-forest">Williamson County.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Joe B. Sullivan & Sons has been a Nashville local since 1895 —
              our shop has been here longer than most of the buildings we
              service. We know which neighborhoods still have clay sewer
              laterals at the end of their service life, which 1920s bungalows
              are running on galvanized supply lines, and which Brentwood
              subdivisions have undersized gas lines for tankless conversions.
              Local knowledge isn&apos;t a marketing line — it&apos;s why we
              diagnose faster and quote more accurately than the national
              chains.
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
                  See {area.name} plumbing details
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
            We regularly serve Inglewood, Madison, Hermitage, Donelson, Hillsboro
            Village, Belmont, 12 South, The Nations, Sylvan Park, Bellevue,
            Forest Hills, Oak Hill, Berry Hill, Antioch, and Nolensville. Give
            us a call and we&apos;ll tell you straight whether we&apos;re the
            right fit or whether someone closer would serve you better.
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
