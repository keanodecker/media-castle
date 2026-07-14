import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SplitSectionProps = {
  children: ReactNode;
  visual: ReactNode;
  /** Put the visual on the left, text on the right. */
  reverse?: boolean;
  className?: string;
};

/**
 * Two-column section: text ↔ visual, alternating via `reverse`. Stacks on
 * mobile (visual below the text). The section's background/border is passed
 * via className so pages keep control of the tonal rhythm.
 */
export function SplitSection({ children, visual, reverse, className = "" }: SplitSectionProps) {
  return (
    <section className={`py-[var(--spacing-section)] ${className}`}>
      <div className="container-page grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-2">
        <Reveal className={reverse ? "lg:order-2" : ""}>{children}</Reveal>
        <Reveal delay={0.06} className={reverse ? "lg:order-1" : ""}>
          {visual}
        </Reveal>
      </div>
    </section>
  );
}
