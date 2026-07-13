import Image from "next/image";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** Domain shown in the fake address bar. */
  label: string;
  className?: string;
  priority?: boolean;
};

/**
 * A browser chrome (traffic-light dots + address bar) wrapping a screenshot.
 * Used to present real client websites as product shots.
 */
export function BrowserFrame({ src, alt, label, className = "", priority }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_100px_-35px_rgba(13,33,69,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-deep px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-ink-subtle/30" />
          <span className="h-3 w-3 rounded-full bg-ink-subtle/30" />
          <span className="h-3 w-3 rounded-full bg-ink-subtle/30" />
        </span>
        <div className="ml-2 flex-1">
          <div className="mx-auto flex h-7 max-w-md items-center justify-center rounded-md border border-border bg-surface px-3 text-xs text-ink-subtle">
            {label}
          </div>
        </div>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
