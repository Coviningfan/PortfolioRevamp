import { Check } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;
  return (
    <aside
      className="not-prose my-8 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-blue-600/10 to-orange-500/10 p-6"
      aria-label="Key takeaways"
      data-testid="callout-key-takeaways"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300 mb-3">
        Key Takeaways
      </h2>
      <ul className="space-y-2">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex gap-3 text-slate-200 text-[15px] leading-relaxed"
            data-testid={`text-takeaway-${i}`}
          >
            <Check size={16} className="text-orange-300 mt-1 shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
