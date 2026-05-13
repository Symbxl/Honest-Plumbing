import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug, getRecentPosts } from "@/lib/blogs";
import { services, getServiceBySlug } from "@/lib/services";
import { areas, getAreaBySlug } from "@/lib/areas";
import { siteConfig } from "@/lib/site-config";
import {
  BreadcrumbSchema,
  FAQSchema,
  ArticleSchema,
} from "@/components/Schema";
import { LeadForm } from "@/components/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate ?? post.publishedDate,
      authors: [post.author.name],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRecentPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);
  const linkedServices = post.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const linkedAreas = post.relatedAreas
    .map((a) => getAreaBySlug(a))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <FAQSchema faqs={post.faqs} />
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        publishedDate={post.publishedDate}
        updatedDate={post.updatedDate}
        author={post.author}
      />

      <article>
        {/* HEADER */}
        <header className="py-14 lg:py-20 border-b border-ink/10">
          <div className="max-w-3xl mx-auto px-6">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-ink-muted mb-8"
            >
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-forest">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="hover:text-forest">
                    Insights
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink truncate">{post.title}</li>
              </ol>
            </nav>

            <p className="eyebrow mb-5">
              {formatDate(post.publishedDate)} · {post.readTime} min read
              {post.updatedDate && ` · Updated ${formatDate(post.updatedDate)}`}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink mb-7">
              {post.title}
            </h1>

            <p className="text-xl text-ink-soft leading-relaxed mb-8 font-display italic">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-ink/10">
              <div className="w-11 h-11 rounded-full bg-forest text-bone-50 flex items-center justify-center font-display text-sm">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">
                  {post.author.name}
                </p>
                <p className="text-xs text-ink-muted">{post.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* BODY */}
        <section className="py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose-editorial">
              {post.sections.map((sec) =>
                sec.level === 2 ? (
                  <div key={sec.heading}>
                    <h2>{sec.heading}</h2>
                    <p>{sec.body}</p>
                  </div>
                ) : (
                  <div key={sec.heading}>
                    <h3>{sec.heading}</h3>
                    <p>{sec.body}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <section className="bg-bone-100/60 border-y border-ink/10 py-14 lg:py-20">
            <div className="max-w-3xl mx-auto px-6">
              <p className="eyebrow mb-3">Quick answers</p>
              <h2 className="font-display text-3xl text-ink mb-9 leading-tight">
                Frequently asked.
              </h2>
              <dl className="space-y-5">
                {post.faqs.map((f) => (
                  <div key={f.q} className="card-press p-6">
                    <dt className="font-display text-lg text-ink mb-3">
                      {f.q}
                    </dt>
                    <dd className="text-ink-muted leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* RELATED LINKS */}
        {(linkedServices.length > 0 || linkedAreas.length > 0) && (
          <section className="py-14 lg:py-20 border-b border-ink/10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-10">
                {linkedServices.length > 0 && (
                  <div>
                    <p className="eyebrow mb-4">Related services</p>
                    <ul className="space-y-2">
                      {linkedServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block py-3 px-4 border border-ink/10 hover:border-forest hover:bg-bone-100/50 transition-colors"
                          >
                            <span className="font-semibold text-ink">
                              {s.name}
                            </span>
                            <span className="block text-xs text-ink-muted mt-0.5">
                              {s.hero}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {linkedAreas.length > 0 && (
                  <div>
                    <p className="eyebrow mb-4">Related service areas</p>
                    <ul className="space-y-2">
                      {linkedAreas.map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/areas/${a.slug}`}
                            className="block py-3 px-4 border border-ink/10 hover:border-forest hover:bg-bone-100/50 transition-colors"
                          >
                            <span className="font-semibold text-ink">
                              {a.name}
                            </span>
                            <span className="block text-xs text-ink-muted mt-0.5">
                              {a.parentRegion} · {a.zip.join(", ")}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* INLINE LEAD FORM */}
        <section className="py-14 lg:py-20">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow mb-3 text-center">Ready to schedule?</p>
            <h2 className="font-display text-3xl text-ink mb-7 leading-tight text-center">
              Get a <span className="italic text-forest">flat-price quote</span>{" "}
              from a licensed Middle Tennessee plumber.
            </h2>
            <LeadForm />
          </div>
        </section>

        {/* MORE READING */}
        {related.length > 0 && (
          <section className="bg-bone-100/60 border-t border-ink/10 py-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <p className="eyebrow mb-6">Keep reading</p>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card-press group p-7 flex flex-col"
                  >
                    <p className="text-xs text-ink-muted uppercase tracking-wider mb-3">
                      {formatDate(p.publishedDate)} · {p.readTime} min
                    </p>
                    <h3 className="font-display text-xl text-ink mb-3 leading-tight group-hover:text-forest transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                      {p.excerpt}
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
        )}
      </article>
    </>
  );
}
