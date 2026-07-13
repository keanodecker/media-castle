import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import { Cta } from "@/components/cta";
import { Aurora } from "@/components/aurora";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Sprechen Sie mit Media Castle über Ihr Projekt — kostenlos und unverbindlich. Wir melden uns in der Regel innerhalb von 24 Stunden.",
  alternates: { canonical: "/kontakt" },
};

const details = [
  { label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
  { label: "Telefon", value: site.phone, href: site.phoneHref },
  { label: "Standort", value: site.location, href: undefined },
];

export default function KontaktPage() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        {/* Intro */}
        <section className="surface-dark relative isolate">
          <Aurora />
          <div className="mx-auto max-w-[92rem] px-6 pt-40 pb-8 text-center sm:px-10">
            <h1 className="text-fade-up pb-[0.08em] text-[clamp(2.5rem,6.5vw,5.5rem)] font-normal leading-[1.07] tracking-[0.005em]">
              <span className="block">Sprechen wir</span>
              <span className="block">über Ihr Projekt.</span>
            </h1>
          </div>
        </section>

        <Cta />

        {/* Contact details */}
        <section className="py-[var(--spacing-section)]">
          <div className="container-page grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {details.map((d) => (
              <div key={d.label} className="border-t border-border pt-5">
                <p className="text-sm font-medium text-ink-subtle">{d.label}</p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="mt-2 inline-block text-lg text-ink transition-colors hover:text-accent-text"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg text-ink">{d.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
