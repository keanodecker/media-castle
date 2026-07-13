/**
 * Isotype / waffle chart — 1.000 cells stand in for the world population,
 * coloured by depth of AI usage. Illustrative; pure CSS grid.
 */
const TOTAL = 1000;
const TOOLS_FROM = 840; // 840 none, then tools
const PRO_FROM = 998; // last 2 = power users

const legend = [
  { key: "none", label: "Keine KI-Nutzung", pct: "84 %", dot: "bg-ink-subtle/40" },
  { key: "tools", label: "Einfache KI-Tools", pct: "15,8 %", dot: "bg-accent/45" },
  { key: "pro", label: "Profis & Custom-Lösungen", pct: "0,2 %", dot: "bg-accent" },
];

function cellClass(i: number) {
  if (i >= PRO_FROM) return "bg-accent";
  if (i >= TOOLS_FROM) return "bg-accent/45";
  return "bg-ink-subtle/40";
}

export function AdoptionWaffle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-5 sm:p-7 ${className}`}
    >
      <p className="text-center text-sm text-ink-muted">
        1.000 Punkte = die Weltbevölkerung. Farbe = Tiefe der KI-Nutzung.
      </p>

      <div
        className="mx-auto mt-6 grid w-full max-w-xl gap-[3px]"
        style={{ gridTemplateColumns: "repeat(40, minmax(0, 1fr))" }}
        aria-hidden
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <span key={i} className={`aspect-square rounded-[2px] ${cellClass(i)}`} />
        ))}
      </div>

      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {legend.map((l) => (
          <li key={l.key} className="flex items-center gap-2 text-xs text-ink-muted">
            <span className={`h-2.5 w-2.5 rounded-[2px] ${l.dot}`} />
            {l.label} · {l.pct}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-center text-xs text-ink-subtle">
        Illustrative Darstellung — die allermeisten Menschen stehen bei KI noch
        ganz am Anfang.
      </p>
    </div>
  );
}
