import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { Aurora } from "@/components/aurora";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Media Castle ist Ihr Partner für die komplette digitale Präsenz — deutschlandweit. Design mit technischer Substanz, persönlich und verlässlich.",
  alternates: { canonical: "/uber-uns" },
};

const reasons = [
  {
    title: "Rundum sorglos",
    body: "Vor dem Projekt, während der Umsetzung und danach sind wir an Ihrer Seite. Sie müssen sich um nichts kümmern — den Rest übernehmen wir.",
  },
  {
    title: "Individuelle Lösungen",
    body: "Jedes Projekt ist einzigartig. Wir entwickeln maßgeschneiderte Konzepte, die genau zu Ihren Anforderungen und Zielen passen.",
  },
  {
    title: "Langfristige Partnerschaft",
    body: "Wir begleiten Sie nicht nur bei der Umsetzung, sondern stehen Ihnen auch danach als verlässlicher Partner zur Seite.",
  },
];

const values = [
  {
    title: "Qualität",
    body: "Höchste Standards in Design und Entwicklung. Jedes Projekt wird mit Sorgfalt und Liebe zum Detail umgesetzt.",
  },
  {
    title: "Transparenz",
    body: "Offene Kommunikation und klare Prozesse. Sie wissen immer, woran wir arbeiten.",
  },
  {
    title: "Innovation",
    body: "Wir bleiben am Puls der Zeit und nutzen moderne Technologien für zukunftssichere Lösungen.",
  },
  {
    title: "Verlässlichkeit",
    body: "Auf uns können Sie zählen — von der ersten Idee bis zur langfristigen Betreuung. Wir halten, was wir versprechen.",
  },
];

export default function UberUnsPage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="surface-dark relative isolate">
          <Aurora />
          <div className="mx-auto max-w-[92rem] px-6 pt-40 pb-12 text-center sm:px-10">
            <h1 className="text-fade-up pb-[0.08em] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[1.07] tracking-[0.005em]">
              <span className="block">Über</span>
              <span className="block">Media Castle.</span>
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="pb-[var(--spacing-section)]">
          <div className="container-page max-w-3xl">
            <Reveal>
              <p className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-relaxed text-ink">
                Media Castle ist Ihr Partner für eine professionelle digitale
                Präsenz — deutschlandweit. Wir verbinden Design mit technischer
                Substanz und schaffen Websites und Online-Lösungen, die nicht nur
                gut aussehen, sondern messbare Ergebnisse liefern.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Unser Ziel: Unternehmen jeder Größe dabei unterstützen, online
                sichtbarer, besser auffindbar und nachhaltig erfolgreicher zu
                werden. Mit klarem Fokus auf Ihre Bedürfnisse setzen wir Ihre
                Projekte um — und begleiten Sie als Partner vor, während und nach
                dem Projekt.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Warum Media Castle */}
        <section className="border-t border-border bg-bg-deep py-[var(--spacing-section)]">
          <div className="container-page">
            <Reveal>
              <h2 className="max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                Warum Media Castle?
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.06}>
                  <div className="border-t border-border pt-5">
                    <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Unsere Werte */}
        <section className="py-[var(--spacing-section)]">
          <div className="container-page grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                Unsere Werte.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.06}>
                  <div className="border-t border-border pt-5">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
