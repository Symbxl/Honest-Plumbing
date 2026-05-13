import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/lib/services";
import { areas } from "@/lib/areas";
import { siteConfig } from "@/lib/site-config";
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "@/components/Schema";
import { LeadForm } from "@/components/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
      <FAQSchema faqs={service.faqs} />
      <ServiceSchema
        name={service.name}
        description={service.metaDescription}
        slug={service.slug}
      />

      <article>
        {/* IMAGE BAND */}
        <section className="relative h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden bg-forest-deep">
          <Image
            src={service.image}
            alt={service.imageAlt}
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
              <nav aria-label="Breadcrumb" className="text-sm text-ink-muted mb-6">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-forest">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/services" className="hover:text-forest">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-ink">{service.shortName}</li>
                </ol>
              </nav>

              <p className="eyebrow mb-4">Service</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-6">
                {service.name}{" "}
                <span className="italic text-forest">in Nashville</span>
              </h1>
              <p className="font-display italic text-2xl text-ink-soft mb-7">
                {service.hero}
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                {service.intro}
              </p>
            </div>

            <div className="lg:col-span-5">
              <LeadForm defaultService={service.slug} />
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose-editorial">
              {service.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bone-100/60 border-y border-ink/10 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="eyebrow mb-3">Common questions</p>
            <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10 leading-tight">
              Frequently asked about {service.shortName.toLowerCase()} in Nashville.
            </h2>
            <dl className="space-y-6">
              {service.faqs.map((f) => (
                <div
                  key={f.q}
                  className="card-press p-6"
                >
                  <dt className="font-display text-xl text-ink mb-3">{f.q}</dt>
                  <dd className="text-ink-muted leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* AREAS */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Service areas</p>
              <h2 className="font-display text-3xl lg:text-4xl text-ink leading-tight">
                We provide {service.shortName.toLowerCase()} across these
                Nashville-area neighborhoods:
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="block py-3 px-4 border border-ink/10 hover:border-forest hover:bg-bone-100/50 transition-colors"
                  >
                    <span className="font-semibold text-ink">{a.name}</span>
                    <span className="block text-xs text-ink-muted mt-0.5">
                      {a.parentRegion}
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
            <p className="eyebrow text-copper-light mb-3">Schedule this week</p>
            <h2 className="font-display text-3xl lg:text-4xl mb-6 leading-tight">
              Need {service.shortName.toLowerCase()} in Nashville?
              <br />
              <span className="italic">Most service calls are scheduled same-day or next-day.</span>
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
                Send a message
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
