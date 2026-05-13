import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { areas, getAreaBySlug } from "@/lib/areas";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";
import { LeadForm } from "@/components/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `${siteConfig.url}/areas/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${siteConfig.url}/areas/${area.slug}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/areas" },
          { name: area.name, url: `/areas/${area.slug}` },
        ]}
      />

      <article>
        {/* IMAGE BAND */}
        <section className="relative h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden bg-forest-deep">
          <Image
            src={area.image}
            alt={area.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/30 to-transparent"
          />
        </section>

        {/* HERO */}
        <section className="py-16 lg:py-24 border-b border-ink/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <nav
                aria-label="Breadcrumb"
                className="text-sm text-ink-muted mb-6"
              >
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-forest">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/areas" className="hover:text-forest">
                      Service Areas
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-ink">{area.name}</li>
                </ol>
              </nav>

              <p className="eyebrow mb-4">
                {area.parentRegion} · {area.zip.join(" · ")}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-6">
                Plumber in{" "}
                <span className="italic text-forest">{area.name}</span>
              </h1>
              <p className="font-display italic text-2xl text-ink-soft mb-7">
                {area.drivingTime}.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                {area.intro}
              </p>
            </div>

            <div className="lg:col-span-5">
              <LeadForm />
            </div>
          </div>
        </section>

        {/* LOCAL CONTEXT */}
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="eyebrow mb-3">What we see in {area.name}</p>
            <h2 className="font-display text-3xl lg:text-4xl text-ink mb-7 leading-tight">
              The plumbing reality of {area.name}.
            </h2>
            <div className="prose-editorial">
              <p>{area.localContext}</p>
            </div>
          </div>
        </section>

        {/* COMMON PROBLEMS */}
        <section className="bg-bone-100/60 border-y border-ink/10 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="eyebrow mb-3">{area.name} plumbing patterns</p>
            <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10 leading-tight">
              Common issues we handle in{" "}
              <span className="italic text-forest">{area.name}</span>.
            </h2>
            <ul className="space-y-4">
              {area.commonProblems.map((problem, i) => (
                <li
                  key={problem}
                  className="card-press p-5 flex gap-5 items-start"
                >
                  <span className="font-display text-sm text-copper-deep tracking-[0.2em] shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES IN AREA */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Services available</p>
              <h2 className="font-display text-3xl lg:text-4xl text-ink leading-tight">
                Every Sullivan service is available to {area.name} customers.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, idx) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-press group p-6 block"
                >
                  <span className="font-display text-xs text-copper-deep tracking-[0.2em] uppercase block mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink group-hover:text-forest transition-colors mb-2">
                    {service.shortName}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {service.hero}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-forest inline-flex items-center gap-2">
                    {service.shortName} for {area.name} customers
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER AREAS */}
        <section className="bg-bone-100/60 border-y border-ink/10 py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="eyebrow mb-4">Nearby service areas</p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {areas
                .filter((a) => a.slug !== area.slug)
                .map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className="block py-3 px-4 border border-ink/10 hover:border-forest hover:bg-bone-50 transition-colors"
                    >
                      <span className="font-semibold text-ink">{a.name}</span>
                      <span className="block text-xs text-ink-muted mt-0.5">
                        {a.zip[0]}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest text-bone-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="eyebrow text-copper-light mb-3">{area.name} service</p>
            <h2 className="font-display text-3xl lg:text-4xl mb-6 leading-tight">
              Need a plumber in {area.name}?
              <br />
              <span className="italic">{area.drivingTime}.</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="btn-copper inline-flex items-center gap-2"
              >
                <span aria-hidden>☎</span>
                Call {siteConfig.business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="btn-secondary inline-flex border-bone-50 text-bone-50 hover:bg-bone-50 hover:text-forest"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
