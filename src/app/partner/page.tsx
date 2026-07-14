import type { Metadata } from "next";
import { references } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import { Reveal } from "@/components/reveal";
import { ReferenceCard } from "@/components/reference-card";
import { Cta } from "@/components/cta";
import { Aurora } from "@/components/aurora";

export const metadata: Metadata = {
  title: "Unsere Partner",
  description:
    "Unternehmen, die uns vertrauen — ein Überblick über die Projekte, die Media Castle für Kunden umgesetzt hat. Von der Website bis zur kompletten Online-Präsenz.",
  alternates: { canonical: "/partner" },
};

export default function PartnerPage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        {/* Slogan hero */}
        <section className="surface-dark relative isolate">
          <Aurora />
          <div className="mx-auto max-w-[92rem] px-6 pt-40 pb-16 text-center sm:px-10">
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.08] tracking-[0.005em]">
              <span className="block font-normal text-ink-muted">Aus der Region.</span>
              <span className="text-silver block font-bold">Für starke Marken.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Unternehmen, die uns vertrauen — von Sicherheitsdiensten bis
              Sportvereinen. Werfen Sie gerne einen Blick auf die echten, live
              gegangenen Seiten.
            </p>
          </div>
        </section>

        {/* Full grid */}
        <section className="pb-[var(--spacing-section)]">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {references.map((ref, i) => (
                <Reveal key={ref.name} delay={(i % 3) * 0.06} className="block">
                  <ReferenceCard reference={ref} />
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
