import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About Honest Plumbing",
  description: `Honest Plumbing is a licensed and insured residential plumbing company in Murfreesboro, TN — owned by Master Plumber Aaron Kelly (TN license #4034). Serving Middle Tennessee with honest consultation, fair pricing, and clean work.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Honest Plumbing | Murfreesboro Master Plumber",
    description: `Locally owned residential plumbing in Murfreesboro, TN. Master Plumber Aaron Kelly · License #4034 · Licensed, Bonded & Insured.`,
    url: `${siteConfig.url}/about`,
  },
};

const valueProps = [
  {
    title: "Flat-price quotes, no surprises",
    body: "Every job is quoted as a flat price after diagnosis — parts, labor, and any required permits all itemized. No per-hour open meter, no mid-job upcharges, no 'we found something extra' once we've started. The number we tell you up front is the number you pay.",
  },
  {
    title: "Licensed master plumber on every job",
    body: "Aaron Kelly is the licensed Tennessee Master Plumber on record — license #4034, verifiable on the state board. Every install and repair is supervised and completed by a licensed plumber, not handed off to an apprentice running solo.",
  },
  {
    title: "Honest answers about repair vs. replace",
    body: "Most of what you might assume needs full replacement is actually repairable, and we'll tell you straight when something genuinely needs replacing versus when a smaller repair will buy you several more years. The honest answer is part of what you're paying for.",
  },
  {
    title: "Clean work, on time",
    body: "We show up when we say we will, we clean up after the work is done, and we test everything before we leave. Plumbing should be invisible when it's working. That's the standard we hold every job to.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      {/* HERO */}
      <section className="py-16 lg:py-28 border-b border-ink/10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-copper/15 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-forest">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">About</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              Locally owned · Murfreesboro, Tennessee
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-7">
              We&apos;re your local plumber —{" "}
              <span className="italic text-forest">licensed, insured,</span>{" "}
              and honest about the work.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              {siteConfig.shortName} is a residential plumbing company based
              in Murfreesboro and serving Middle Tennessee. Owned by Tennessee
              Master Plumber Aaron Kelly (license #4034). The phone gets
              answered, the truck shows up when we say it will, and the quote
              you get is a flat price.{" "}
              <em>
                Service you can trust — that&apos;s the whole business model.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-bone-100/60 border-b border-ink/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              value: "10+",
              label: "Years on service calls",
            },
            {
              value: "#4034",
              label: "TN Master Plumber",
            },
            { value: "100%", label: "Licensed & insured" },
            { value: "Flat", label: "Price quotes always" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl lg:text-5xl text-forest leading-none">
                {s.value}
              </div>
              <div className="text-xs text-ink-muted uppercase tracking-wider mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-12 items-start">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_8px_30px_-12px_rgba(30,58,138,0.35)]">
                <Image
                  src="/images/owner-2.jpg"
                  alt="Aaron Kelly — Owner and Master Plumber at Honest Plumbing"
                  fill
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-muted">
                Pictured: Aaron Kelly · Owner & Master Plumber
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow mb-3">Our story</p>
              <h2 className="font-display text-3xl lg:text-4xl text-ink leading-tight">
                Built on honest consultation and clean work.
              </h2>
            </div>
          </div>
          <div className="prose-editorial">
            <p>
              I&apos;ve been working residential plumbing service calls
              across Middle Tennessee for more than ten years. In that time
              I&apos;ve seen what good plumbing work looks like — and
              what cuts corners look like a few years later. Honest Plumbing
              is built on the first.
            </p>
            <p>
              We&apos;re a small, locally owned operation based in
              Murfreesboro. Every job is run by a licensed plumber. Pricing
              is flat-rate and quoted after diagnosis, not estimated and then
              padded once the work is underway. Consultations are honest —
              if a repair is the right call instead of a replacement,
              that&apos;s what we&apos;ll recommend.
            </p>
            <p>
              We serve homeowners across Rutherford and the surrounding
              counties — Murfreesboro, Smyrna, La Vergne, Nolensville,
              Brentwood, Franklin, and the rest of the Middle Tennessee
              area. Tankless and tank water heaters, sewer and drain,
              water filtration, kitchen and bath plumbing, and full
              repipes are our day-to-day work. Service you can trust.
            </p>
            <p className="font-semibold text-ink">— Aaron Kelly</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-forest text-bone-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="eyebrow text-copper-light mb-3">How we work</p>
          <h2 className="font-display text-3xl lg:text-4xl mb-12 leading-tight max-w-2xl">
            Four promises on{" "}
            <span className="italic">every single job.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {valueProps.map((v, i) => (
              <div
                key={v.title}
                className="border-l-2 border-copper pl-6 py-2"
              >
                <span className="font-display text-xs tracking-[0.2em] text-copper-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl mt-2 mb-3">{v.title}</h3>
                <p className="text-bone-100/80 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow mb-3 text-center">Credentials</p>
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10 leading-tight text-center">
            Licensed, bonded, insured —{" "}
            <span className="italic text-forest">verifiable</span>.
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Master plumber
              </p>
              <p className="font-display text-lg text-ink">
                {siteConfig.business.license}
              </p>
              <p className="text-xs text-ink-muted mt-2">
                Verifiable at tn.gov/commerce/regboards/contractor.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Insurance & bonding
              </p>
              <p className="font-display text-2xl text-ink">Fully covered</p>
              <p className="text-xs text-ink-muted mt-2">
                General liability and bonding. Certificate of insurance
                available on request.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Recognition
              </p>
              <p className="font-display text-2xl text-ink">Expertise.com</p>
              <p className="text-xs text-ink-muted mt-2">
                Recognized as one of the Best Plumbers in Murfreesboro by
                Expertise.com.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Coverage area
              </p>
              <p className="font-display text-2xl text-ink">Middle Tennessee</p>
              <p className="text-xs text-ink-muted mt-2">
                Residential plumbing service across Rutherford, Williamson,
                and surrounding counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE / AREA LINKS */}
      <section className="bg-bone-100/60 border-y border-ink/10 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-4">What we do</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block py-3 px-4 border border-ink/10 hover:border-forest hover:bg-bone-50 transition-colors"
                  >
                    <span className="font-semibold text-ink">{s.name}</span>
                    <span className="block text-xs text-ink-muted mt-0.5">
                      {s.hero}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Where we work</p>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="block py-3 px-4 border border-ink/10 hover:border-forest hover:bg-bone-50 transition-colors"
                  >
                    <span className="font-semibold text-ink">{a.name}</span>
                    <span className="block text-xs text-ink-muted mt-0.5">
                      {a.parentRegion} · {a.zip.join(", ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="eyebrow mb-3">Talk to a plumber</p>
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-7 leading-tight">
            Pick up the phone.{" "}
            <span className="italic text-forest">We answer it.</span>
          </h2>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="btn-copper inline-flex items-center gap-2"
          >
            <span aria-hidden>☎</span>
            Call {siteConfig.business.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
