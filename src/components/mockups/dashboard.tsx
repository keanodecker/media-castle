/**
 * Built admin-dashboard mockup — sidebar, stat tiles and a simple bar chart.
 * Pure markup in our own colours; illustrates "Automatisierung / Dashboards".
 */
const bars = [42, 58, 47, 70, 63, 82, 76];
const stats = [
  { label: "Anfragen", value: "128", trend: "+24%" },
  { label: "Automatisiert", value: "94%", trend: "+12%" },
  { label: "Zeit gespart", value: "31h", trend: "/Monat" },
];
const navItems = ["Übersicht", "Aufgaben", "Kunden", "Berichte"];

export function Dashboard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_100px_-35px_rgba(13,33,69,0.35)] ${className}`}
    >
      {/* Topbar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="text-sm font-semibold text-ink">Dashboard</span>
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-6 w-6 rounded-full bg-accent-soft" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr]">
        {/* Sidebar */}
        <div className="hidden flex-col gap-1 border-r border-border p-3 sm:flex" aria-hidden>
          {navItems.map((item, i) => (
            <span
              key={item}
              className={`rounded-lg px-3 py-2 text-sm ${
                i === 0 ? "bg-accent-soft font-medium text-accent-text" : "text-ink-muted"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Main */}
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-bg-deep p-3">
                <p className="text-[0.7rem] text-ink-subtle">{s.label}</p>
                <p className="mt-1 text-lg font-semibold text-ink">{s.value}</p>
                <p className="text-[0.7rem] font-medium text-accent-text">{s.trend}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-border bg-bg-deep p-4">
            <div className="flex h-28 items-end gap-2.5" aria-hidden>
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
