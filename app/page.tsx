import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { getRecentPosts } from "@/lib/blogs";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: `${siteConfig.tagline} | ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

const testimonials = [
  {
    quote:
      "Six months of chronic neck pain, three failed physio clinics, two MRIs. Marcus mapped what was actually happening in three visits, fixed it in eight. I haven't taken ibuprofen in fourteen weeks.",
    name: "Hannah L.",
    location: "Balmain",
  },
  {
    quote:
      "Two other clinics told me I needed a $4,500 12-session 'recovery package' to address my back. Cedar & Co. said three sessions would tell us a lot. Three sessions later I was back on the bike. They could have upsold me and didn't.",
    name: "Robert M.",
    location: "Glebe",
  },
  {
    quote:
      "They actually do deep tissue at deep tissue pressure — and the chiropractor and massage therapist work in the same visit when it makes sense. First clinic in Sydney that's felt like a real medical team rather than a spa with a chiropractor in the back.",
    name: "Priya K.",
    location: "Surry Hills",
  },
];

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden">
        {/* decorative copper arc */}
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
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-ink mb-7">
              Mick Murray{" "}
              <span className="brush-underline italic text-forest">
                deep muscle
              </span>{" "}
              therapist
            </h1>

            <p className="text-lg text-ink-muted max-w-xl leading-relaxed mb-9">
              Clinical soft tissue therapist twenty eight years experience.
              Specialising in direct myofascial release techniques, joint
              mobilisation techniques & deep muscle therapy massage.
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
                Browse treatments
              </Link>
            </div>

          </div>

          {/* Hero form */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 animate-fade-up [animation-delay:200ms]">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="bg-bone-100/60 border-y border-ink/10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              Six treatments, done exceptionally well.
            </h2>
            <p className="text-ink-muted mt-4 max-w-xl">
              We don&apos;t do facials, hot stones, or aromatherapy. We do
              clinical bodywork and chiropractic — and we do them better than
              anyone in Sydney.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group card-press p-7 hover:border-forest transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="text-copper-deep font-display text-3xl mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-forest transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">
                  {s.hero}
                </p>
                <span className="text-sm font-semibold text-forest inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section id="reviews" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">What patients say</p>
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
              <p className="eyebrow text-copper-light mb-3">Who we serve</p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
                Local. Actually local.
              </h2>
              <p className="text-bone-50/80 leading-relaxed mb-8">
                Our clinic is in Balmain. We see patients from across Sydney —
                the Inner West, the CBD, the Eastern Suburbs, and the North
                Shore — and we keep our caseload tight so we can actually know
                your case across visits instead of starting over each time.
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

      {/* ─────────── BLOG PREVIEW ─────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">From the clinic</p>
              <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
                Real bodywork answers, written by therapists.
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-semibold text-forest hover:text-copper-deep transition-colors inline-flex items-center gap-2"
            >
              Read all posts
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((p) => (
              <article
                key={p.slug}
                className="card-press p-7 flex flex-col h-full"
              >
                <div className="text-xs uppercase tracking-wider text-ink-muted mb-3">
                  {new Date(p.publishedDate).toLocaleDateString("en-AU", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {p.readTime} min read
                </div>
                <h3 className="font-display text-xl text-ink leading-snug mb-4">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="hover:text-forest transition-colors"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">
                  {p.excerpt}
                </p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm font-semibold text-forest inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read more
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
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
            <span className="italic text-forest">We&apos;ll do the rest.</span>
          </h2>
          <p className="text-ink-muted mb-9 max-w-xl mx-auto">
            Most calls reach a real person inside business hours. New-patient
            appointments usually open up the same week. Flat-rate session
            pricing — no packages, no upsells, no recurring billing.
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
