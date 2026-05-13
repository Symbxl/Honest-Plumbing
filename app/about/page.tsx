import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About Joe B. Sullivan & Sons Plumbing",
  description: `Family-owned Nashville plumbing company since ${siteConfig.business.foundingYear}. Licensed master plumbers serving Davidson and Williamson counties — commercial and residential, with warranty service for AO Smith, Bradford White, State Industries, and Whirlpool.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Joe B. Sullivan & Sons | Nashville's Heritage Plumbing Company",
    description: `Family-owned Nashville plumbing since ${siteConfig.business.foundingYear}.`,
    url: `${siteConfig.url}/about`,
  },
};

const yearsInBusiness = new Date().getFullYear() - siteConfig.business.foundingYear;

const valueProps = [
  {
    title: "Flat-price quotes, no surprises",
    body: "Every job is quoted as a flat price after diagnosis — parts, labor, permit, haul-away, and warranty registration all itemized. No per-hour open meter, no mid-job upcharges, no 'we found something extra' once we've started. The number we tell you up front is the number you pay.",
  },
  {
    title: "Licensed master plumber on every job",
    body: "Frank Sullivan is the licensed Tennessee master plumber on record for every Joe B. Sullivan & Sons job. Verifiable on the state board. Every install and repair is supervised by a licensed master plumber — not handed off to an apprentice running solo.",
  },
  {
    title: "Honest answers about repair vs. replace",
    body: "Most of what other plumbers tell you needs replacement, we can actually repair. We carry parts for obsolete fixtures, old water heaters, and pre-war steam units — and we'll tell you straight when something genuinely needs replacing and when a $200 repair will buy you another five years.",
  },
  {
    title: "Authorized warranty service",
    body: "We're authorized warranty service for AO Smith, Bradford White, State Industries, and Whirlpool water heaters. That means warranty parts claims are filed by us, the repair is fast, and you don't deal with the manufacturer. Most coverage gets handled in a single visit.",
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
              Family-owned · Nashville since {siteConfig.business.foundingYear}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-7">
              We&apos;re Nashville&apos;s heritage plumbing company —{" "}
              <span className="italic text-forest">five generations</span> of
              Sullivans on the same family business.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              {siteConfig.shortName} was founded in {siteConfig.business.foundingYear}, and
              we&apos;ve been the same family ever since. {yearsInBusiness}{" "}
              years in Nashville means we&apos;ve plumbed buildings most people
              have never set foot in — pre-war boilers under Church Street
              office buildings, steam radiators in 1910s East Nashville
              bungalows, restaurant kitchens up and down Broadway, and now
              tankless installs in Brentwood new-builds. Frank Sullivan is the
              licensed master plumber on record. The phone gets answered live,
              the truck shows up when we say it will, and the quote you get is
              flat-price and itemized.{" "}
              <em>
                Honest and reliable plumbing — that&apos;s been the entire
                business model since 1895.
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
              value: yearsInBusiness.toString(),
              label: "Years in Nashville",
            },
            {
              value: "5th",
              label: "Generation Sullivans",
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
              <div className="relative aspect-[5/6] overflow-hidden rounded-sm shadow-[0_8px_30px_-12px_rgba(30,58,138,0.35)]">
                <Image
                  src="https://static.wixstatic.com/media/dfd6ea_bad44d2ba479b1cfe00b492ee345a6d0.jpg"
                  alt="Paul and Joe Sullivan — Joe B. Sullivan & Sons Plumbing, Nashville"
                  fill
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-muted">
                Pictured: Paul and Joe Sullivan
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow mb-3">Our story</p>
              <h2 className="font-display text-3xl lg:text-4xl text-ink leading-tight">
                How a one-shop Nashville plumber became a five-generation
                family business.
              </h2>
            </div>
          </div>
          <div className="prose-editorial">
            <p>
              Joe B. Sullivan founded the company in {siteConfig.business.foundingYear},
              when Nashville was still a city of about 80,000 people, water
              mains were just being run to outlying neighborhoods, and indoor
              plumbing was a new luxury most homes were still adding. Joe B.
              learned the trade as an apprentice, got his master plumber
              ticket, and started running calls out of a shop near downtown
              with a horse-drawn wagon to haul fixtures.
            </p>
            <p>
              The business passed from Joe B. to his sons, then to his
              grandsons, then to his great-grandsons — each generation training
              the next, each generation keeping the same name on the door.
              We&apos;ve moved the shop a few times (we&apos;re now at 292
              Hermitage Avenue in East Nashville), upgraded the trucks from
              wagons to vans, swapped lead and galvanized fittings for PEX
              and copper, and added authorized warranty service for AO Smith,
              Bradford White, State Industries, and Whirlpool — but the rest
              of the operation has stayed remarkably consistent for 130+
              years.
            </p>
            <p>
              Today Frank Sullivan is the licensed master plumber on record,
              and {siteConfig.shortName} serves Davidson and Williamson
              counties — East Nashville and the urban core, Belle Meade and
              Forest Hills, Green Hills and Hillsboro Village, Brentwood and
              Franklin in Williamson. We do both commercial and residential,
              with a particular specialty in commercial water heater and
              boiler service. The phone still gets answered live, the trucks
              still show up on time, and the name on the door is still
              Sullivan.
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
                Insurance
              </p>
              <p className="font-display text-2xl text-ink">$2M / $2M</p>
              <p className="text-xs text-ink-muted mt-2">
                General liability + workers&apos; comp. Certificate of
                insurance available on request.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Warranty service
              </p>
              <p className="font-display text-2xl text-ink">4 brands</p>
              <p className="text-xs text-ink-muted mt-2">
                Authorized warranty for AO Smith, Bradford White, State
                Industries, and Whirlpool water heaters.
              </p>
            </div>
            <div className="card-press p-6">
              <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-2">
                Coverage area
              </p>
              <p className="font-display text-2xl text-ink">Davidson + Williamson</p>
              <p className="text-xs text-ink-muted mt-2">
                Residential and commercial plumbing service across the
                Nashville metro and Williamson County.
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
