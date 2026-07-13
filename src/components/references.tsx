import { references } from "@/lib/content";
import { Reveal } from "./reveal";
import { Button, ArrowRight } from "./button";
import { ReferenceCard } from "./reference-card";

export function References() {
  const featured = references.slice(0, 6);

  return (
    <section
      id="referenzen"
      className="relative scroll-mt-24 border-t border-border bg-bg-deep py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
              Unternehmen, die uns vertrauen.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Ein Auszug aus unseren Projekten — von Sicherheitsdiensten bis
              Sportvereinen. Werfen Sie gerne einen Blick auf die echten Seiten.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((ref, i) => (
            <Reveal key={ref.name} delay={(i % 3) * 0.06} className="block">
              <ReferenceCard reference={ref} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href="/partner" variant="ghost" size="lg">
            Alle Partner ansehen
            <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
