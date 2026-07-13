import Image from "next/image";
import type { Reference } from "@/lib/content";
import { ArrowRight } from "./button";

export function ReferenceCard({ reference: ref }: { reference: Reference }) {
  return (
    <a
      href={ref.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(13,33,69,0.04)] transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-16px_rgba(13,33,69,0.22)]">
        <Image
          src={ref.image}
          alt={ref.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <div className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
          <ArrowRight className="-rotate-45" />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-accent-text">
            {ref.name}
          </h3>
          <p className="mt-0.5 text-sm text-ink-subtle">{ref.category}</p>
        </div>
        <ul className="flex shrink-0 gap-1.5 pt-1">
          {ref.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-text"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
        Website ansehen
        <ArrowRight />
      </span>
    </a>
  );
}
