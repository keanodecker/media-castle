import Link from "next/link";
import { services } from "@/lib/content";
import { Reveal } from "./reveal";
import { ArrowRight } from "./button";

export function Services() {
  return (
    <section id="leistungen" className="relative scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              <span className="text-ink">Alles, was Ihre Präsenz braucht.</span>{" "}
              <span className="text-ink-muted">Von einem Team.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Sie koordinieren keine fünf Dienstleister. Wir decken den kompletten
              Weg zu einer starken digitalen Präsenz ab — und bleiben Ihr fester
              Ansprechpartner.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04} className="block">
              <Link
                href={`/leistungen/${service.slug}`}
                className="group grid grid-cols-1 gap-x-10 gap-y-4 border-b border-border py-9 transition-colors duration-300 hover:bg-bg-deep md:grid-cols-[4rem_1fr_1.1fr] md:px-4"
              >
                <div className="pt-1 text-sm font-medium tabular-nums text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="flex items-start gap-2 text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[1.7rem]">
                  {service.title}
                  <ArrowRight className="mt-2 shrink-0 text-accent-text opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none" />
                </h3>

                <div>
                  <p className="max-w-md leading-relaxed text-ink-muted">
                    {service.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent-text"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
                    Mehr erfahren
                    <ArrowRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
