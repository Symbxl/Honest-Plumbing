import Link from "next/link";
import { getRecentPosts } from "@/lib/blogs";

export function BlogPreview() {
  const recentPosts = getRecentPosts(3);

  return (
    <section className="py-24 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">From the shop</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              Real plumbing answers from a Middle TN master plumber.
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
                {new Date(p.publishedDate).toLocaleDateString("en-US", {
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
  );
}
