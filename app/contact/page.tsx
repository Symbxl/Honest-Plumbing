import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";
import { LeadForm } from "@/components/LeadForm";
import { BlogPreview } from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "Contact Honest Plumbing",
  description: `Call ${siteConfig.business.phoneDisplay} or send a message — Honest Plumbing in Murfreesboro, TN. Same-day service in most cases, licensed master plumber on every job.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact ${siteConfig.shortName} | Murfreesboro & Middle Tennessee`,
    description: `Reach Honest Plumbing. Phone, email, and online quote request.`,
    url: `${siteConfig.url}/contact`,
  },
};

const dayNames: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

function formatHour(time: string) {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${display}:${m.toString().padStart(2, "0")} ${period}`;
}

export default function ContactPage() {
  const { business } = siteConfig;
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-ink/10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-forest/10 blur-3xl"
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
              <li className="text-ink">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Get in touch</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-7">
              The fastest way is{" "}
              <span className="italic text-forest">a phone call.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              We answer the phone during business hours. Use the form if you
              prefer — we reply quickly during the day and by the next
              business morning if you write after hours.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* DETAILS COLUMN */}
          <div className="lg:col-span-5 space-y-10">
            {/* PHONE */}
            <div>
              <p className="eyebrow mb-3">Phone</p>
              <a
                href={`tel:${business.phone}`}
                className="font-display text-4xl lg:text-5xl text-forest hover:text-copper-deep transition-colors leading-tight block"
              >
                {business.phoneDisplay}
              </a>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">
                Best way to reach us during business hours. After-hours calls
                roll to voicemail and we return them first thing the next
                business day.
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a
                href={`mailto:${business.email}`}
                className="font-display text-2xl text-ink hover:text-forest transition-colors break-all"
              >
                {business.email}
              </a>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">
                Good for quote requests and scheduling non-emergency work.
                For anything urgent, please call.
              </p>
            </div>

            {/* SERVICE AREA */}
            <div>
              <p className="eyebrow mb-3">Service area</p>
              <address className="font-display text-2xl text-ink not-italic leading-tight">
                Murfreesboro, TN
                <br />
                Middle Tennessee
              </address>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">
                Based in Murfreesboro, serving Rutherford, Williamson, and
                surrounding counties — Smyrna, La Vergne, Nolensville,
                Brentwood, Franklin, and the rest of the Middle Tennessee
                area.
              </p>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-forest hover:text-copper-deep transition-colors"
              >
                Find us on Google Maps
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* HOURS */}
            <div>
              <p className="eyebrow mb-3">Business hours</p>
              <dl className="border-t border-ink/10">
                {business.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-3 border-b border-ink/10"
                  >
                    <dt className="font-semibold text-ink">
                      {dayNames[h.day]}
                    </dt>
                    <dd className="text-ink-muted">
                      {"closed" in h && h.closed
                        ? "Closed"
                        : "open" in h && "close" in h
                          ? `${formatHour(h.open)} – ${formatHour(h.close)}`
                          : "Closed"}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-ink-muted mt-3">
                Closed Saturdays and Sundays.
              </p>
            </div>

            {/* LICENSE */}
            <div className="card-press p-5 bg-bone-100/40">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-1">
                Licensed master plumber
              </p>
              <p className="font-display text-base text-ink">
                {business.license}
              </p>
              <p className="text-xs text-ink-muted mt-1">
                Locally owned · Murfreesboro, Tennessee · Service you can trust
              </p>
            </div>
          </div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">Send a message</p>
              <h2 className="font-display text-3xl lg:text-4xl text-ink mb-7 leading-tight">
                Tell us what&apos;s going on with the plumbing.
              </h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-ink/10">
        <div className="bg-forest text-bone-50 py-14 lg:py-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, var(--copper) 0%, transparent 40%), radial-gradient(circle at 80% 30%, var(--copper) 0%, transparent 40%)`,
            }}
          />
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <p className="eyebrow text-copper-light mb-3">Serving</p>
            <p className="font-display text-2xl lg:text-3xl leading-snug">
              Murfreesboro · Smyrna · La Vergne · Nolensville · Brentwood · Franklin
            </p>
            <p className="text-bone-100/70 mt-4 text-sm">
              {business.geo.latitude.toFixed(4)}° N,{" "}
              {Math.abs(business.geo.longitude).toFixed(4)}° W
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${business.geo.latitude},${business.geo.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper inline-flex items-center gap-2 mt-7"
            >
              Open in Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <BlogPreview />
    </>
  );
}
