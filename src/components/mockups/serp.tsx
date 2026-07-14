/**
 * Built Google-style search-result mockup — a client ranking #1. Pure markup in
 * our own colours; illustrates "gefunden werden" without a screenshot.
 */
export function Serp({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-5 shadow-[0_40px_100px_-35px_rgba(13,33,69,0.35)] sm:p-7 ${className}`}
    >
      {/* Search bar */}
      <div className="flex items-center gap-3 rounded-full border border-border bg-bg-deep px-4 py-3">
        <svg viewBox="0 0 20 20" className="h-4 w-4 text-ink-subtle" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="9" cy="9" r="6" />
          <path d="m18 18-4.5-4.5" strokeLinecap="round" />
        </svg>
        <span className="text-sm text-ink-muted">sicherheitsdienst lahr</span>
      </div>

      {/* Top result */}
      <div className="mt-5 rounded-xl border border-accent/25 bg-accent-soft p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-subtle">
          <span className="rounded-full bg-accent px-2 py-0.5 font-medium text-accent-ink">
            Platz 1
          </span>
          cesarsicherheit.de
        </div>
        <h4 className="mt-2 text-lg font-medium text-accent-text">
          Cesar Sicherheit — Ihr Sicherheitsdienst in Lahr
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
          Professioneller Objekt- und Veranstaltungsschutz. Zuverlässig,
          diskret, deutschlandweit im Einsatz.
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-subtle">
          <span className="text-accent" aria-hidden>★★★★★</span>
          5,0 · 24 Bewertungen
        </div>
      </div>

      {/* Dimmed lower results */}
      <div className="mt-3 space-y-3" aria-hidden>
        {[0, 1].map((i) => (
          <div key={i} className="rounded-xl border border-border p-4 opacity-55">
            <div className="h-2.5 w-24 rounded-full bg-ink-subtle/40" />
            <div className="mt-2.5 h-3.5 w-3/4 rounded-full bg-ink-muted/40" />
            <div className="mt-2 h-2.5 w-full rounded-full bg-ink-subtle/25" />
          </div>
        ))}
      </div>
    </div>
  );
}
