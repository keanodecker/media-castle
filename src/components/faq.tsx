"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "@/lib/content";
import { Reveal } from "./reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-border bg-bg-deep py-[var(--spacing-section)]">
      <div className="container-page grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            Häufige Fragen.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ink-muted">
            Etwas ist unklar? Hier die wichtigsten Antworten rund um die
            Zusammenarbeit. Alles Weitere klären wir im Erstgespräch.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="border-t border-border">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium text-ink">{faq.q}</span>
                    <span
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen ? "border-accent bg-accent text-accent-ink" : "border-border text-ink-muted"
                      }`}
                    >
                      <span className="absolute h-[1.5px] w-3.5 rounded bg-current" />
                      <span
                        className={`absolute h-3.5 w-[1.5px] rounded bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        } motion-reduce:transition-none`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 leading-relaxed text-ink-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
