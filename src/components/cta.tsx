import Link from "next/link";
import { Button, ArrowRight } from "./button";
import { Reveal } from "./reveal";
import { site } from "@/lib/content";

/**
 * Full-bleed navy CTA band that closes the page and runs straight into the
 * footer. Rendered directly inside <main> (not a container) so the colour runs
 * edge to edge across the whole viewport.
 */
export function Cta() {
  return (
    <section
      id="kontakt"
      className="surface-dark relative isolate scroll-mt-24 overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-accent absolute right-[12%] top-[-25%] h-[30rem] w-[30rem] opacity-25 blur-3xl" />
        <div className="glow-accent absolute left-[8%] bottom-[-30%] h-[24rem] w-[24rem] opacity-[0.14] blur-3xl" />
      </div>

      <div className="container-page py-[clamp(5rem,11vw,9rem)] text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-[clamp(2.1rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            Bereit für einen Auftritt, der ernst genommen wird?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Erzählen Sie uns von Ihrem Vorhaben. Das Erstgespräch ist kostenlos,
            unverbindlich — und Sie wissen danach genau, wie es weitergehen kann.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`} size="lg">
              Kostenloses Erstgespräch
              <ArrowRight />
            </Button>
            <Link
              href={site.phoneHref}
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-border px-8 text-base font-medium text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-surface"
            >
              {site.phone}
            </Link>
          </div>

          <p className="mt-8 text-sm text-ink-subtle">
            Antwort in der Regel innerhalb von 24 Stunden · {site.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
