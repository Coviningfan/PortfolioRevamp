import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const all: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      data-testid="breadcrumbs"
      className={`text-sm ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-slate-400">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          const isFirst = i === 0;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="text-slate-200 font-medium inline-flex items-center gap-1"
                  data-testid={`breadcrumb-current`}
                >
                  {isFirst && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                  data-testid={`breadcrumb-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {isFirst && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
