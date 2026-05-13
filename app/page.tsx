import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: `${siteConfig.tagline} | ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

const testimonials = [
  {
    quote:
      "Aaron did a very good job. Very friendly, experienced, knowledgeable and professional. Would definitely use Honest Plumbing again!",
    name: "Verified Customer",
    location: "Angi Review",
  },
  {
    quote:
      "Honest pricing and honest advice. Aaron told us the repair was the right call instead of pushing a full replacement. The hot water has been perfect since.",
    name: "Murfreesboro Homeowner",
    location: "Murfreesboro",
  },
  {
    quote:
      "Tankless install was clean, on time, and exactly what was quoted — no surprise add-ons. We finally have unlimited hot water for the whole family.",
    name: "Smyrna Homeowner",
    location: "Smyrna",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden">
        {/* decorative arcs */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08] bg-copper blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] bg-forest blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="eyebrow mb-4">Murfreesboro · Middle Tennessee</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-ink mb-7">
              Honest, licensed{" "}
              <span className="brush-underline italic text-forest">
                Middle Tennessee plumbing
              </span>{" "}
              you can trust.
            </h1>

            <p className="text-lg text-ink-muted max-w-xl leading-relaxed mb-9">
              Residential plumbing in Murfreesboro and the surrounding Middle
              Tennessee area. Owned by master plumber Aaron Kelly, with over a
              decade of service-call experience — fair pricing, honest
              consultation, and clean work every visit.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span aria-hidden>☎</span>
                Call {siteConfig.business.phoneDisplay}
              </a>
              <Link href="/services" className="btn-secondary inline-flex">
                Our services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="/images/expertise-badge.png"
                alt="Expertise.com Best Plumbers in Murfreesboro badge"
                width={120}
                height={96}
                className="h-20 w-auto"
              />
              <div className="text-sm text-ink-muted leading-snug">
                <p className="font-semibold text-ink">Recognized by Expertise.com</p>
                <p>Best Plumbers in Murfreesboro · Licensed, Bonded & Insured</p>
              </div>
            </div>
          </div>

          {/* Hero form */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 animate-fade-up [animation-delay:200ms]">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ─────────── ABOUT / OWNER ─────────── */}
      <section
        id="history"
        className="scroll-mt-20 py-24 border-y border-ink/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-sm shadow-[0_8px_30px_-12px_rgba(19,78,74,0.35)]">
              <Image
                src="/images/owner-1.jpg"
                alt="Aaron Kelly — Owner and Master Plumber at Honest Plumbing, Murfreesboro TN"
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 360px, 90vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center lg:text-left text-xs uppercase tracking-[0.2em] text-ink-muted">
              Pictured: Aaron Kelly · Owner & Master Plumber
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="eyebrow mb-3">Who we are</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Honest service from a local{" "}
              <span className="italic text-forest">licensed master plumber.</span>
            </h2>
            <div className="space-y-5 text-ink-muted leading-relaxed max-w-2xl">
              <p>
                I&apos;ve been running residential service calls for over ten
                years across Middle Tennessee — always fair in pricing,
                honest in consultation, and committed to doing the job right
                the first time. Honest Plumbing is built around that simple
                idea.
              </p>
              <p>
                We&apos;re a small, licensed and insured operation based in
                Murfreesboro. Tennessee Master Plumber license #4034. Every
                job is supervised and completed by a licensed plumber — not
                handed off to an apprentice running solo.
              </p>
              <p>
                Service you can trust starts with telling you the truth about
                what your plumbing actually needs. If a repair will save you
                money over a full replacement, we&apos;ll tell you. If a
                cheaper fixture will fail in two years, we&apos;ll tell you.
                That&apos;s the whole business model.
              </p>
              <p className="font-semibold text-ink">— Aaron Kelly, Owner</p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 font-semibold text-forest hover:text-copper-deep transition-colors"
            >
              More about Honest Plumbing
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="bg-bone-100/60 border-y border-ink/10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              Full residential plumbing. Done right the first time.
            </h2>
            <p className="text-ink-muted mt-4 max-w-xl">
              From tankless water heaters and full repipes to drain calls and
              new bathroom fixtures — we cover the residential plumbing needs
              of homes across Murfreesboro and Middle Tennessee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group card-press p-4 hover:border-forest transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="text-copper-deep font-display text-lg mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-base text-ink mb-1.5 group-hover:text-forest transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-3 line-clamp-3">
                  {s.hero}
                </p>
                <span className="text-xs font-semibold text-forest inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHY GO TANKLESS ─────────── */}
      <section className="py-20 border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Why go tankless?</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              Benefits of switching to a{" "}
              <span className="italic text-forest">tankless water heater</span>{" "}
              in your home.
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Unlimited hot water",
              "Increased energy efficiency and savings",
              "Double to triple the life expectancy compared to a tank style water heater",
              "Space saving",
            ].map((benefit) => (
              <li
                key={benefit}
                className="card-press p-5 flex items-start gap-3"
              >
                <span
                  aria-hidden
                  className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-copper/20 text-copper-deep font-bold text-sm"
                >
                  ✓
                </span>
                <span className="text-ink-soft leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/services/tankless-water-heaters"
              className="inline-flex items-center gap-2 font-semibold text-forest hover:text-copper-deep transition-colors"
            >
              Learn more about tankless installs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── RECENT WORK ─────────── */}
      <section className="bg-bone-100/60 border-y border-ink/10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Recent work</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              Clean installs. Real{" "}
              <span className="italic text-forest">Middle Tennessee homes.</span>
            </h2>
            <p className="text-ink-muted mt-4 max-w-xl">
              A few snapshots from recent service calls and installs around
              Murfreesboro — tankless water heaters, repipes, and fixture work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                src: "/images/work-1.jpg",
                alt: "Tankless water heater install by Honest Plumbing in Murfreesboro TN",
              },
              {
                src: "/images/work-2.jpg",
                alt: "Residential plumbing repair by Honest Plumbing in Middle Tennessee",
              },
              {
                src: "/images/work-3.jpeg",
                alt: "Clean plumbing install by master plumber Aaron Kelly",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_8px_30px_-12px_rgba(19,78,74,0.25)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section id="reviews" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">What customers say</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              The reviews speak for themselves.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="card-press p-7 flex flex-col justify-between"
              >
                <div>
                  <div
                    aria-label="5 out of 5 stars"
                    className="text-copper-deep mb-4 tracking-wider"
                  >
                    ★★★★★
                  </div>
                  <blockquote className="font-display text-lg italic leading-relaxed text-ink-soft mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-ink-muted"> · {t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SERVICE AREAS ─────────── */}
      <section className="bg-forest text-bone-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow text-copper-light mb-3">Where we work</p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
                Local to Murfreesboro. Serving Middle Tennessee.
              </h2>
              <p className="text-bone-50/80 leading-relaxed mb-8">
                Honest Plumbing is based in Murfreesboro and we serve homes
                across Rutherford County and the surrounding Middle Tennessee
                area — Smyrna, La Vergne, Nolensville, Brentwood, and
                Franklin are regular service stops.
              </p>
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 font-semibold text-copper-light hover:text-bone-50 transition-colors"
              >
                View all service areas
                <span aria-hidden>→</span>
              </Link>
            </div>

            <ul className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="block py-2 border-b border-bone-50/15 hover:border-copper-light hover:text-copper-light transition-colors"
                  >
                    <span className="font-display text-xl">{a.name}</span>
                    <span className="block text-xs text-bone-50/55 mt-1">
                      {a.zip.join(" · ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="bg-bone-100/60 border-t border-ink/10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow mb-3">Ready when you are</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-6">
            Pick up the phone or fill out the form.
            <br />
            <span className="italic text-forest">We&apos;ll handle it.</span>
          </h2>
          <p className="text-ink-muted mb-9 max-w-xl mx-auto">
            Live answer during business hours. Most service calls are
            scheduled same-day or next-day. Flat-price quotes — no surprise
            add-ons.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span aria-hidden>☎</span>
              Call {siteConfig.business.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-secondary inline-flex">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
