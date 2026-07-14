import { references } from "@/lib/content";

/**
 * Quiet, de-saturated row of client names below the hero — proof + a visual
 * break between the hero and the first content section.
 */
export function TrustStrip() {
  return (
    <section className="border-b border-border bg-bg-deep py-8">
      <div className="container-page">
        <p className="text-center text-sm text-ink-subtle">
          Vertraut von Unternehmen in ganz Deutschland
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {references.map((ref) => (
            <li key={ref.name}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium tracking-tight text-ink-muted transition-colors hover:text-accent-text"
              >
                {ref.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
