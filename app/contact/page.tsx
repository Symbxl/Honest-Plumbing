import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Cedar & Co. Bodywork",
  description: `Call ${siteConfig.business.phoneDisplay} or send a message — Cedar & Co. Bodywork on Darling Street, Balmain. Same-week appointments, AHPRA-registered chiropractors, AAMT-member remedial therapists.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact ${siteConfig.shortName} | Sydney Bodywork & Chiropractic`,
    description: `Reach Cedar & Co. Bodywork. Phone, email, address, and online booking.`,
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
              We answer the phone live during business hours. Use the form if
              you prefer — we reply within an hour during the day, by 9 AM the
              next morning if you write at night.
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
                Live answer during business hours, no phone tree. After hours
                you&apos;ll reach voicemail and we&apos;ll call back the next
                morning.
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
                Best for new-patient questions, scheduling, or asking which
                clinician would be the best match for your case.
              </p>
            </div>

            {/* ADDRESS */}
            <div>
              <p className="eyebrow mb-3">Clinic address</p>
              <address className="font-display text-2xl text-ink not-italic leading-tight">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region}{" "}
                {business.address.postalCode}
              </address>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">
                Walk-ins welcome, but call ahead — same-week appointments fill
                fast. Two-hour metered parking on Darling Street, free parking
                on the side streets.
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-forest hover:text-copper-deep transition-colors"
              >
                Get directions
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
                Closed Sundays. We return after-hours messages by 9 AM the
                next business day.
              </p>
            </div>

            {/* LICENSE */}
            <div className="card-press p-5 bg-bone-100/40">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-1">
                Registration
              </p>
              <p className="font-display text-base text-ink">
                {business.license}
              </p>
              <p className="text-xs text-ink-muted mt-1">
                Insured · HICAPS on-site · {business.priceRange} ·
                Family-owned since {business.foundingYear}
              </p>
            </div>
          </div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">Send a message</p>
              <h2 className="font-display text-3xl lg:text-4xl text-ink mb-7 leading-tight">
                Tell us what&apos;s going on with your body.
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
              Inner West · CBD · Eastern Suburbs · North Shore
            </p>
            <p className="text-bone-100/70 mt-4 text-sm">
              {Math.abs(business.geo.latitude).toFixed(4)}° S,{" "}
              {business.geo.longitude.toFixed(4)}° E
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
    </>
  );
}
