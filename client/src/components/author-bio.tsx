import { Link } from "wouter";
import { getAuthor } from "@/content/blog";

interface AuthorBioProps {
  name: string;
  className?: string;
}

export default function AuthorBio({ name, className = "" }: AuthorBioProps) {
  const author = getAuthor(name);
  const initials = author.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside
      className={`not-prose rounded-2xl border border-white/10 bg-white/[0.03] p-6 ${className}`}
      data-testid="author-bio"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-sm font-bold text-white"
        >
          {initials}
        </div>
        <div className="flex-1">
          <div className="text-[11px] uppercase tracking-widest text-blue-300/80 mb-1">
            Written by
          </div>
          <div className="text-base font-semibold text-white" data-testid="text-author-name">
            {author.name}
          </div>
          <div className="text-xs text-slate-400 mb-2">{author.role}</div>
          <p className="text-sm text-slate-300 leading-relaxed">{author.bio}</p>
          <Link href="/contact">
            <span className="mt-3 inline-flex text-xs font-medium text-orange-300 hover:text-orange-200 cursor-pointer">
              Talk to the team →
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
