import { Logo } from "./logo";
import { site, nav } from "@/lib/content";

const footerNav = [
  ...nav,
  { label: "Unsere Partner", href: "/partner" },
  { label: "Kontakt", href: "/kontakt" },
];

const legal = [
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
];

export function SiteFooter() {
  return (
    <footer className="surface-dark mt-auto border-t border-border/60">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 leading-relaxed text-ink-muted">
              Ihr Partner für die komplette digitale Präsenz — Webdesign, SEO,
              Marke und Print. Aus einer Hand, deutschlandweit.
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <h2 className="text-sm font-medium text-ink-subtle">Navigation</h2>
            <ul className="mt-4 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-ink-muted transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium text-ink-subtle">Kontakt</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="text-ink-muted transition-colors hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="text-ink-muted transition-colors hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="text-ink-muted">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/40 pt-6 text-sm text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Media Castle. Alle Rechte vorbehalten.</p>
          <ul className="flex gap-6">
            {legal.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink-muted">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
