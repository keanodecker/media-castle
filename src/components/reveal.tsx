import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, applied once the element scrolls into view. */
  delay?: number;
  as?: "div" | "li" | "section" | "span" | "article";
};

/**
 * Marks content for the scroll-reveal enhancement. The element is fully visible
 * by default; RevealObserver arms it (fades/offsets) only while it is still
 * below the fold, then reveals it on scroll. If JS never runs, content shows.
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      data-reveal
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
