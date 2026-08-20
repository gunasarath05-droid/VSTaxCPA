import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/constants/blogData";
import { FiClock, FiCalendar, FiUser, FiArrowLeft, FiArrowRight, FiCheckCircle, FiShare2, FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import ceoImg from "@/assets/images/ceo.png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | VS Tax CPA LLC" };
  }

  return {
    title: `${post.title} | VS Tax CPA LLC`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Convert markdown-style sections into clean JSX paragraphs/headings
  const renderContent = (contentStr: string) => {
    const lines = contentStr.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = (key: number) => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");
        elements.push(
          <p key={`p-${key}`} className="text-body-text text-sm sm:text-base leading-relaxed mb-5 font-manrope">
            {text}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushParagraph(index);
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl sm:text-3xl font-extrabold font-figtree text-dark mt-10 mb-4 tracking-tight">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushParagraph(index);
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl sm:text-2xl font-bold font-figtree text-dark mt-7 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("> ")) {
        flushParagraph(index);
        elements.push(
          <blockquote key={`quote-${index}`} className="my-6 p-5 sm:p-6 bg-[#FAF9F5] border-l-4 border-secondary rounded-r-2xl text-slate-700 italic font-manrope text-sm sm:text-base leading-relaxed">
            {trimmed.replace("> ", "")}
          </blockquote>
        );
      } else if (trimmed.startsWith("- ")) {
        flushParagraph(index);
        elements.push(
          <div key={`li-${index}`} className="flex items-start gap-3 my-2 text-sm sm:text-base text-slate-700 font-manrope">
            <FiCheckCircle className="text-secondary mt-1 flex-shrink-0" size={16} />
            <span>{trimmed.replace("- ", "")}</span>
          </div>
        );
      } else if (trimmed === "---") {
        flushParagraph(index);
        elements.push(<hr key={`hr-${index}`} className="my-8 border-slate-200" />);
      } else if (trimmed.length > 0) {
        currentParagraph.push(trimmed);
      } else {
        flushParagraph(index);
      }
    });

    flushParagraph(lines.length);
    return elements;
  };

  return (
    <>
      {/* ── Blog Header Hero ── */}
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 bg-gradient-to-br from-[#122115] via-[#1e3a24] to-[#2d5234] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none bg-[radial-gradient(circle,#9CB05A,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none bg-[radial-gradient(circle,#d4af37,transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-white/60 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-secondary line-clamp-1">{post.category}</span>
          </nav>

          {/* Category Tag */}
          <span className="inline-flex items-center rounded-full bg-secondary/20 text-secondary px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest border border-secondary/30 mb-4 font-figtree">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-figtree tracking-tight leading-tight max-w-3xl mx-auto mb-6 text-white">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 font-manrope">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-white/40 relative">
                <Image src={ceoImg} alt={post.author} fill className="object-cover" sizes="24px" />
              </div>
              <span className="font-semibold text-white">{post.author}</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <FiCalendar className="text-secondary" />
              <span>{post.date}</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <FiClock className="text-secondary" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content & Sidebar Layout ── */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* ── Left Column: Article Body (lg:col-span-8) ── */}
            <article className="lg:col-span-8 bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-sm">

              {/* Featured Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 shadow-md bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
              </div>

              {/* Key Takeaways Box */}
              {post.takeaways && post.takeaways.length > 0 && (
                <div className="bg-[#FAF9F5] border border-secondary/30 rounded-2xl p-6 sm:p-7 mb-10 shadow-sm">
                  <h4 className="text-base font-extrabold font-figtree text-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                    Key Executive Takeaways
                  </h4>
                  <div className="space-y-3">
                    {post.takeaways.map((point: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium font-manrope">
                        <FiCheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rendered Body Text */}
              <div className="article-body font-manrope">
                {renderContent(post.content)}
              </div>

              {/* Author Bio Card */}
              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200/70">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md flex-shrink-0 relative">
                  <Image src={ceoImg} alt={post.author} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold font-figtree text-dark">{post.author}</h4>
                  <p className="text-xs text-primary font-semibold font-figtree uppercase tracking-wider mb-2">
                    {post.authorRole}
                  </p>
                  <p className="text-xs sm:text-sm text-body-text font-manrope leading-relaxed mb-3">
                    Licensed Certified Public Accountant (Texas) and Chartered Accountant (India) with 13+ years of expertise helping businesses and individuals minimize taxes and achieve financial clarity.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <a
                      href="https://linkedin.com/company/vstaxcpa"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-dark transition-colors font-figtree"
                    >
                      <FaLinkedinIn /> Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Back to Blog Navigation */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-figtree text-dark hover:text-primary transition-colors"
                >
                  <FiArrowLeft /> Back to All Insights
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-figtree text-primary hover:text-dark transition-colors"
                >
                  Book a Strategy Call <FiArrowRight />
                </Link>
              </div>

            </article>

            {/* ── Right Column: Sticky Sidebar (lg:col-span-4) ── */}
            <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">

              {/* Strategy Consultation CTA */}
              <div className="bg-gradient-to-br from-[#122115] via-[#1e3a24] to-[#2d5234] text-white p-7 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 pointer-events-none bg-[radial-gradient(circle,#9CB05A,transparent_70%)]" />
                <span className="inline-flex items-center rounded-full bg-white/10 text-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/20 mb-3 font-figtree">
                  Free Strategy Call
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-figtree text-white mb-2">
                  Need Help With Your Taxes?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-manrope leading-relaxed mb-6">
                  Schedule a 1-on-1 consultation with Vethavalli Ramakrishnan, CPA to customize your savings plan.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-secondary hover:bg-[#8CA04A] text-dark font-bold font-figtree py-3 rounded-full text-xs sm:text-sm shadow-md transition-all duration-300"
                >
                  <span>Book Free Consultation</span>
                  <FiArrowRight />
                </Link>
              </div>

              {/* Related Insights */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-sm">
                <h4 className="text-base font-extrabold font-figtree text-dark mb-5 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  Related Insights
                </h4>
                <div className="flex flex-col gap-4">
                  {relatedPosts.map((r, i) => (
                    <Link
                      key={i}
                      href={`/blog/${r.slug}`}
                      className="group flex items-start gap-3.5 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                        <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="64px" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold text-primary block uppercase tracking-wider mb-0.5 font-figtree">
                          {r.category}
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold font-figtree text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {r.title}
                        </h5>
                        <span className="text-[10px] text-slate-400 font-manrope mt-1 block">
                          {r.date} · {r.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Reachout */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col gap-3.5">
                <h4 className="text-sm font-extrabold font-figtree text-dark">Direct CPA Contact</h4>
                <a href="tel:+14694716580" className="flex items-center gap-3 text-xs text-dark hover:text-primary transition-colors font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 text-dark flex items-center justify-center flex-shrink-0">
                    <FiPhone size={14} />
                  </div>
                  <span>+1 (469) 471-6580</span>
                </a>
                <a href="mailto:info@vstaxcpa.com" className="flex items-center gap-3 text-xs text-dark hover:text-primary transition-colors font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 text-dark flex items-center justify-center flex-shrink-0">
                    <FiMail size={14} />
                  </div>
                  <span>info@vstaxcpa.com</span>
                </a>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
