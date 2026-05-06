import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Bodywork & Chiropractic Treatments in Sydney",
  description:
    "Cedar & Co. treatments across Sydney: deep tissue massage, chiropractic adjustment, sports recovery, myofascial release, postural correction, and cupping. Flat-rate session pricing.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesIndex() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">Treatments</p>
            <h1 className="font-display text-5xl lg:text-6xl leading-[1.05] text-ink mb-6">
              Bodywork & chiropractic across Sydney.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Six core treatments. No upsells, no 12-pack pre-pays, no
              recurring billing. Pick what you need below — every treatment
              page lists the actual flat-rate session price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group card-press p-8 hover:border-forest transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="font-display text-3xl text-copper-deep">
                    0{i + 1}
                  </div>
                  <span
                    aria-hidden
                    className="text-2xl text-ink-muted group-hover:text-forest group-hover:translate-x-1 transition-all"
                  >
                    →
                  </span>
                </div>
                <h2 className="font-display text-2xl text-ink mb-3 group-hover:text-forest transition-colors">
                  {s.name}
                </h2>
                <p className="text-ink-muted leading-relaxed mb-4">{s.hero}</p>
                <ul className="text-xs text-ink-muted space-y-1">
                  {s.keywords.slice(0, 3).map((k) => (
                    <li key={k}>· {k}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
