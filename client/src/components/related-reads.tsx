import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

interface RelatedReadsProps {
  posts: BlogPost[];
  className?: string;
}

export default function RelatedReads({ posts, className = "" }: RelatedReadsProps) {
  if (!posts || posts.length === 0) return null;
  return (
    <section className={`not-prose ${className}`} data-testid="related-reads">
      <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-5">Related reads</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {posts.map((r) => (
          <Link key={r.slug} href={`/blog/${r.slug}`}>
            <div
              className="group p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition cursor-pointer h-full"
              data-testid={`link-related-${r.slug}`}
            >
              <div className="text-[10px] uppercase tracking-widest text-blue-300/80 mb-2">
                {r.category}
              </div>
              <div className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors line-clamp-3">
                {r.title}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-blue-300 group-hover:text-orange-300">
                Read <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
