import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export function Footer() {
  const year = new Date().getFullYear();
  const addr = siteConfig.business.address;

  return (
    <footer className="bg-forest text-bone-50 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-display text-2xl mb-4 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 bg-bone-50/95 rounded-sm p-1"
              />
              <span>{siteConfig.shortName}</span>
            </div>
            <p className="text-bone-50/75 text-sm leading-relaxed mb-6 max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-xs text-bone-50/60 uppercase tracking-wider">
              {siteConfig.business.license}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow text-copper-light mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-bone-50/80 hover:text-copper-light transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow text-copper-light mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-bone-50/80 hover:text-copper-light transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow text-copper-light mb-4">Get In Touch</h3>
            <address className="not-italic text-sm space-y-2 text-bone-50/85">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="block text-2xl font-display hover:text-copper-light transition-colors"
              >
                {siteConfig.business.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="block hover:text-copper-light transition-colors"
              >
                {siteConfig.business.email}
              </a>
              <div className="pt-3">
                {addr.city}, {addr.region}
                <br />
                Serving Middle Tennessee
              </div>
              <div className="pt-3 text-xs text-bone-50/60">
                Mon–Fri 8AM–5PM · Closed Sat & Sun
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bone-50/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-bone-50/55">
          <p>
            © {year} {siteConfig.business.legalName}. All rights reserved.
          </p>
          <p className="font-display italic">
            Locally owned in {addr.city}, Tennessee · {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
