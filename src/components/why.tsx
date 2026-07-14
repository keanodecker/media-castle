import { values } from "@/lib/content";
import { Reveal } from "./reveal";

export function Why() {
  return (
    <section className="relative overflow-hidden border-t border-border py-[var(--spacing-section)]">
      <div className="container-page grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            Warum Unternehmen mit uns arbeiten.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            Wir verkaufen keine Templates und verschwinden nach dem Launch nicht.
            Wir sind der Partner, der Ihre digitale Präsenz versteht, umsetzt und
            langfristig begleitet.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 2) * 0.06}>
              <div className="border-t-2 border-accent pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
