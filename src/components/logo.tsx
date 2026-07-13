import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo: the Media Castle mark (castle on a mountain), recoloured to white
 * for the dark theme via a filter — the source PNG is a dark-navy silhouette.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Media Castle — Startseite"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9 shrink-0 [filter:brightness(0)_invert(1)]"
      />
      <span className="text-[1.075rem] font-semibold tracking-tight text-ink">
        Media Castle
      </span>
    </Link>
  );
}
