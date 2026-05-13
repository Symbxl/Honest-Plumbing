import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbSchema } from "@/components/Schema";
import { BlogPreview } from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "Plumbing Guides & Insights",
  description:
    "Detailed Middle Tennessee plumbing guides from a working master plumber. Service pricing, what to expect, and honest answers about repair vs. replace. No fluff.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Plumbing Insights | Honest Plumbing — Murfreesboro TN",
    description:
      "Detailed Middle Tennessee plumbing guides — pricing, common problems, and how to choose a licensed plumber.",
    url: `${siteConfig.url}/blog`,
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );
  const [feature, ...rest] = sorted;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog" },
        ]}
      />

      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-forest">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Insights</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Insights · From the shop</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink mb-6">
              Plumbing knowledge,{" "}
              <span className="italic text-forest">written by master plumbers</span>{" "}
              who actually do the work.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Every guide on this page is written based on real Middle
              Tennessee jobs — real diagnostic reasoning, real local
              conditions, and the kinds of answers our customers actually
              ask us. No SEO filler, no &quot;ultimate guide&quot; nonsense.
              Just useful information from a working master plumber.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {feature && (
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="eyebrow mb-4">Latest</p>
            <Link
              href={`/blog/${feature.slug}`}
              className="card-press group block p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <p className="text-xs text-copper-deep tracking-[0.2em] uppercase mb-4">
                    {formatDate(feature.publishedDate)} · {feature.readTime} min
                    read
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl text-ink group-hover:text-forest transition-colors leading-tight mb-5">
                    {feature.title}
                  </h2>
                  <p className="text-ink-muted leading-relaxed mb-6 text-lg">
                    {feature.excerpt}
                  </p>
                  <span className="text-sm font-semibold text-forest inline-flex items-center gap-2">
                    Read the full guide
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-forest text-bone-50 p-7 lg:p-8 relative overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-copper/30 blur-3xl"
                    />
                    <p className="text-xs tracking-[0.2em] uppercase text-copper-light mb-4 relative">
                      By {feature.author.name}
                    </p>
                    <p className="font-display italic text-xl leading-snug relative">
                      &ldquo;{feature.excerpt.split(".")[0]}.&rdquo;
                    </p>
                    <p className="text-xs text-bone-100/70 mt-4 relative">
                      {feature.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* OTHER POSTS */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6">More from the shop</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-press group p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-display text-xs text-copper-deep tracking-[0.2em] uppercase">
                    {String(idx + 2).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-ink-muted">
                    {post.readTime} min
                  </span>
                </div>
                <p className="text-xs text-ink-muted uppercase tracking-wider mb-3">
                  {formatDate(post.publishedDate)}
                </p>
                <h3 className="font-display text-xl text-ink mb-3 leading-tight group-hover:text-forest transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold text-forest inline-flex items-center gap-2 mt-auto">
                  Read guide
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone-100/60 border-t border-ink/10 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-3">Have a question we haven&apos;t covered?</p>
          <h2 className="font-display text-3xl text-ink mb-5 leading-tight">
            Ask a master plumber directly.
          </h2>
          <p className="text-ink-muted leading-relaxed mb-7">
            Phone questions are free, even if you&apos;re not ready to schedule.
            Tell us what&apos;s happening and we&apos;ll give you a straight
            answer.
          </p>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span aria-hidden>☎</span>
            Call {siteConfig.business.phoneDisplay}
          </a>
        </div>
      </section>

      <BlogPreview />
    </>
  );
}
