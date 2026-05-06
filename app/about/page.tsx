import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About Cedar & Co. Bodywork",
  description: `Family-owned Sydney bodywork and chiropractic clinic since ${siteConfig.business.foundingYear}. AHPRA-registered chiropractors and AAMT-member massage therapists serving Balmain, the Inner West, and the North Shore.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Cedar & Co. Bodywork | Sydney's Local Therapy Clinic",
    description: `Family-owned Sydney bodywork clinic since ${siteConfig.business.foundingYear}.`,
    url: `${siteConfig.url}/about`,
  },
};

const yearsInBusiness = new Date().getFullYear() - siteConfig.business.foundingYear;

const valueProps = [
  {
    title: "Flat-rate session pricing",
    body: "Every treatment is one published price. No mysterious 'package upgrades,' no recurring billing, no high-pressure 12-session pre-pays. You pay for the visit you took and book the next one if and when you want to.",
  },
  {
    title: "Registered clinicians on every visit",
    body: "Every patient is seen by an AHPRA-registered chiropractor or AAMT-member remedial massage therapist — never an unlicensed assistant. New-patient visits include a 15-minute assessment with the lead therapist before any hands-on work begins.",
  },
  {
    title: "Honest treatment plans, not packages",
    body: "Most issues respond in 3 to 8 visits. We tell you that on visit one and we tell you when to stop coming. If we can't help your case, we'll refer you out — to physio, ortho, or sports medicine — and we won't charge you for the referral.",
  },
  {
    title: "Same therapist, every visit",
    body: "Continuity matters. You'll see the same therapist or chiropractor each visit so the work compounds. If your therapist is out, we'll reschedule rather than hand you off to whoever has an open slot.",
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
              Family-owned · Balmain since {siteConfig.business.foundingYear}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-7">
              We&apos;re a small Sydney bodywork clinic —{" "}
              <span className="italic text-forest">not a chain</span>, not a
              spa, not a private equity rollup.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              {siteConfig.shortName} was started in {siteConfig.business.foundingYear}{" "}
              by Marcus Reyes, registered chiropractor and remedial massage
              therapist, who got tired of watching corporate wellness chains
              run 30-minute "deep tissue" sessions for $130 and clinics
              hard-sell 12-visit packages on day one. We opened a small clinic
              on Darling Street, hired clinicians who could actually evaluate,
              and built the practice on a simple idea:{" "}
              <em>
                tell people what&apos;s actually going on, charge a fair price
                for each visit, and stop the treatment when it&apos;s no
                longer needed.
              </em>{" "}
              {yearsInBusiness} years later, that&apos;s still the whole job
              description.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-bone-100/60 border-b border-ink/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              value: yearsInBusiness.toString(),
              label: "Years in Sydney",
            },
            {
              value: siteConfig.business.rating.count.toLocaleString() + "+",
              label: `${siteConfig.business.rating.value.toFixed(1)}★ reviews`,
            },
            { value: "100%", label: "Licensed clinicians" },
            { value: "Same", label: "Therapist every visit" },
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
        <div className="max-w-3xl mx-auto px-6">
          <p className="eyebrow mb-3">Our story</p>
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-9 leading-tight">
            How a one-room Balmain practice became Sydney&apos;s
            most-recommended bodywork clinic.
          </h2>
          <div className="prose-editorial">
            <p>
              Marcus Reyes trained as a remedial massage therapist in
              Melbourne, then completed his Master of Chiropractic at Macquarie
              University. He spent his early thirties working for two
              different multi-location wellness chains across Sydney — and
              watched both get acquired by overseas holding companies that
              immediately raised prices, cut session times, and started
              pushing every patient into 12-visit pre-paid &ldquo;wellness
              plans&rdquo; before the first assessment had finished.
            </p>
            <p>
              In {siteConfig.business.foundingYear}, Marcus quit and opened
              Cedar & Co. out of a single rented treatment room above a
              Balmain café. The first ten patients came from neighbours. The
              next hundred came from those neighbours&apos; referrals. Within
              three years we had three treatment rooms, a real clinic on
              Darling Street, and a waiting list of remote workers hauling
              Atlassian-issued laptop bags up the stairs.
            </p>
            <p>
              Today {siteConfig.shortName} runs eight treatment rooms, employs
              eleven full-time clinicians (two registered chiropractors, seven
              remedial massage therapists, two practice operations staff),
              and serves Sydney from Hornsby down through the North Shore,
              across the bridge to the Inner West, the CBD, and the Eastern
              Suburbs. We&apos;re still family-owned. Marcus still treats
              patients four days a week. The clinic is still on Darling
              Street.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-forest text-bone-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="eyebrow text-copper-light mb-3">How we work</p>
          <h2 className="font-display text-3xl lg:text-4xl mb-12 leading-tight max-w-2xl">
            Four promises we make on{" "}
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
                Registration
              </p>
              <p className="font-display text-lg text-ink">
                {siteConfig.business.license}
              </p>
              <p className="text-xs text-ink-muted mt-2">
                Verify on the AHPRA register and the AAMT member directory.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Insurance
              </p>
              <p className="font-display text-2xl text-ink">$20M / $20M</p>
              <p className="text-xs text-ink-muted mt-2">
                Public liability + professional indemnity. Certificates
                available on request.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Registered chiropractors
              </p>
              <p className="font-display text-2xl text-ink">2</p>
              <p className="text-xs text-ink-muted mt-2">
                Plus 7 AAMT-member remedial massage therapists on the team.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Health-fund rebates
              </p>
              <p className="font-display text-2xl text-ink">HICAPS on-site</p>
              <p className="text-xs text-ink-muted mt-2">
                Direct claim with Bupa, Medibank, HCF, NIB, and most major
                Australian funds.
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
          <p className="eyebrow mb-3">Talk to a clinician</p>
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
