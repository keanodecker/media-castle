import type { CSSProperties } from "react";
import { Button, ArrowRight } from "./button";
import { Aurora } from "./aurora";

function rise(delay: number): CSSProperties {
  return { "--rise-delay": `${delay}s` } as CSSProperties;
}

export function Hero() {
  return (
    <section className="surface-dark relative isolate">
      <Aurora />

      <div className="container-page flex min-h-[88vh] flex-col items-center justify-center pt-28 pb-20 text-center">
        <h1
          className="rise text-fade-up mx-auto font-normal tracking-[0.005em] text-[clamp(2.75rem,8vw,7rem)] leading-[1.07] pb-[0.08em]"
          style={rise(0.05)}
        >
          <span className="block">Wir bringen</span>
          <span className="block">Ihr Unternehmen</span>
          <span className="block">ins neue Zeitalter.</span>
        </h1>

        <p
          className="rise mx-auto mt-9 max-w-xl text-lg leading-relaxed text-ink-muted"
          style={rise(0.16)}
        >
          Media Castle gestaltet und betreut Ihren gesamten Auftritt im Netz —
          Website, Sichtbarkeit und Marke. Persönlich, verlässlich und alles aus
          einer Hand.
        </p>

        <div
          className="rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={rise(0.24)}
        >
          <Button href="#kontakt" size="lg">
            Kostenloses Erstgespräch
            <ArrowRight />
          </Button>
          <Button href="/partner" variant="ghost" size="lg">
            Unsere Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
