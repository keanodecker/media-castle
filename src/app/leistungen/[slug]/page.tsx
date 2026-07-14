import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, automationStory } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import { Reveal } from "@/components/reveal";
import { SplitSection } from "@/components/split-section";
import { Cta } from "@/components/cta";
import { ArrowRight } from "@/components/button";
import { Aurora } from "@/components/aurora";
import { BrowserFrame } from "@/components/browser-frame";
import { Serp } from "@/components/mockups/serp";
import { Dashboard } from "@/components/mockups/dashboard";
import { AdoptionWaffle } from "@/components/mockups/adoption-waffle";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.nav,
    description: service.lead,
    alternates: { canonical: `/leistungen/${service.slug}` },
  };
}

export default async function LeistungPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);
  const isAutomation = service.slug === "automatisierung";

  const visual =
    service.slug === "online-praesenz" ? (
      <Serp />
    ) : isAutomation ? (
      <Dashboard />
    ) : (
      <BrowserFrame
        src="/references/studio21-lahr.jpg"
        alt="Website von Studio 21 Lahr, gestaltet von Media Castle"
        label="studio21-lahr.de"
      />
    );

  const visualWrapped = (
    <div className="relative">
      <div aria-hidden className="glow-accent absolute -inset-6 -z-10 opacity-20 blur-2xl" />
      {visual}
    </div>
  );

  const introText = (
    <>
      <p className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-relaxed text-ink">
        {service.intro[0]}
      </p>
      {service.intro[1] && (
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          {service.intro[1]}
        </p>
      )}
    </>
  );

  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        {/* Hero — headline only */}
        <section className="surface-dark relative isolate">
          <Aurora />
          <div className="mx-auto max-w-[92rem] px-6 pt-40 pb-20 text-center sm:px-10">
            <Link
              href="/#leistungen"
              className="text-sm font-medium tracking-[0.02em] text-accent-text transition-opacity hover:opacity-80"
            >
              Leistungen
            </Link>
            <h1 className="text-fade-up mt-5 pb-[0.08em] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[1.07] tracking-[0.005em]">
              <span className="block">{service.heroTitle[0]}</span>
              <span className="block">{service.heroTitle[1]}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {service.lead}
            </p>
          </div>
        </section>

        {/* Intro — layout varies per service so pages don't feel identical */}
        {service.slug === "webdesign" ? (
          // Showcase: centered intro, then a large centered product shot.
          <section className="border-t border-border py-[var(--spacing-section)]">
            <div className="container-page">
              <Reveal className="mx-auto max-w-3xl text-center">
                {introText}
              </Reveal>
              <Reveal delay={0.06} className="mt-14 block">
                <div className="relative mx-auto max-w-5xl">
                  <div aria-hidden className="glow-accent absolute -inset-8 -z-10 opacity-25 blur-2xl" />
                  {visual}
                </div>
              </Reveal>
            </div>
          </section>
        ) : service.slug === "online-praesenz" ? (
          // Visual left, text right.
          <SplitSection reverse className="border-t border-border" visual={visualWrapped}>
            {introText}
          </SplitSection>
        ) : (
          // Text left, visual right.
          <SplitSection className="border-t border-border" visual={visualWrapped}>
            {introText}
          </SplitSection>
        )}

        {/* Automatisierung — Vorteil-Story */}
        {isAutomation && (
          <>
            {/* Claim */}
            <section className="border-t border-border bg-bg-deep py-[var(--spacing-section)]">
              <div className="container-page max-w-3xl text-center">
                <Reveal>
                  <span className="text-sm font-medium tracking-[0.02em] text-accent-text">
                    Wettbewerbsvorteil
                  </span>
                  <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                    <span className="block text-ink">{automationStory.claim[0]}</span>
                    <span className="block text-ink-muted">{automationStory.claim[1]}</span>
                  </h2>
                  <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
                    {automationStory.claimBody}
                  </p>
                </Reveal>
              </div>
            </section>

            {/* Stat cards */}
            <section className="border-t border-border py-[var(--spacing-section)]">
              <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-3">
                {automationStory.stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.06}>
                    <div className="h-full rounded-2xl border border-border bg-surface p-7 shadow-[0_1px_3px_rgba(13,33,69,0.05)]">
                      <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none tracking-tight text-ink">
                        {s.value}
                      </p>
                      <p className="mt-3 font-medium text-ink">{s.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {s.note}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Waffle */}
            <section className="border-t border-border bg-bg-deep py-[var(--spacing-section)]">
              <div className="container-page max-w-4xl">
                <Reveal>
                  <AdoptionWaffle />
                </Reveal>
              </div>
            </section>

            {/* Advantages — text ↔ numbered cards */}
            <SplitSection
              reverse
              className="border-t border-border"
              visual={
                <div className="flex flex-col gap-4">
                  {automationStory.advantages.map((a, i) => (
                    <div
                      key={a.title}
                      className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_3px_rgba(13,33,69,0.05)]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold tabular-nums text-accent-text">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold tracking-[-0.01em] text-ink">
                          {a.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {a.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <span className="text-sm font-medium tracking-[0.02em] text-accent-text">
                KMU-Vorteil
              </span>
              <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                Kleiner heißt schneller.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                Große Konzerne brauchen Monate für Freigaben, Jahre für die
                Umsetzung. Als kleines oder mittelständisches Unternehmen haben
                Sie einen entscheidenden Vorteil: Sie entscheiden heute und
                starten morgen — und bauen einen Vorsprung auf, den kein Budget
                der Welt mehr aufholt.
              </p>
            </SplitSection>
          </>
        )}

        {/* Was drin ist */}
        <section className="border-t border-border bg-bg-deep py-[var(--spacing-section)]">
          <div className="container-page">
            <Reveal>
              <h2 className="max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                Was in {service.nav} steckt.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-11 sm:grid-cols-2">
              {service.includes.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 0.06}>
                  <div className="border-t border-border pt-5">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-medium tabular-nums text-accent-text">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Weitere Leistungen */}
        <section className="border-t border-border py-[var(--spacing-section)]">
          <div className="container-page">
            <Reveal>
              <h2 className="text-sm font-medium tracking-[0.02em] text-ink-subtle">
                Weitere Leistungen
              </h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 0.06}>
                  <Link
                    href={`/leistungen/${o.slug}`}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(13,33,69,0.05)] transition-colors duration-300 hover:bg-surface-hover"
                  >
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-accent-text">
                        {o.nav}
                      </h3>
                      <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-muted">
                        {o.summary}
                      </p>
                    </div>
                    <ArrowRight className="shrink-0 text-accent-text transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
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
