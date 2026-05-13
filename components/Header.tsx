import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-bone-50/85 border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-forest flex items-center gap-2"
          aria-label={`${siteConfig.shortName} home`}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span>{siteConfig.shortName}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft"
        >
          <Link href="/" className="hover:text-forest transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-forest transition-colors">
            Services
          </Link>
          <Link href="/areas" className="hover:text-forest transition-colors">
            Service Areas
          </Link>
          <Link href="/#reviews" className="hover:text-forest transition-colors">
            Reviews
          </Link>
          <Link href="/about" className="hover:text-forest transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-forest transition-colors">
            Contact
          </Link>
        </nav>

        <a
          href={`tel:${siteConfig.business.phone}`}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-copper-deep transition-colors"
          aria-label={`Call ${siteConfig.business.phoneDisplay}`}
        >
          <span aria-hidden>☎</span>
          <span>{siteConfig.business.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
