"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button, ArrowRight } from "./button";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="on-dark fixed inset-x-0 top-0 z-[var(--z-nav)] transition-colors duration-300"
      style={{
        // --color-bg/--color-border resolve to the navy set via `.on-dark`, so the
        // condensed bar stays dark even once white content scrolls underneath it.
        backgroundColor: scrolled ? "color-mix(in oklch, var(--color-bg) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid color-mix(in oklch, var(--color-border) 70%, transparent)" : "1px solid transparent",
      }}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex lg:gap-9" aria-label="Hauptnavigation">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-[1.05rem] font-medium tracking-[0.01em] text-white/60 transition-colors duration-200 hover:text-white group-hover:text-white"
                >
                  {item.label}
                  <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 8l4 4 4-4" />
                  </svg>
                </a>
                <div className="invisible absolute left-1/2 top-full z-[var(--z-dropdown)] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-56 rounded-2xl border border-border/60 bg-bg-deep/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-[1rem] text-ink-muted transition-colors hover:bg-surface/70 hover:text-ink"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-[1.05rem] font-medium tracking-[0.01em] text-white/60 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/partner" variant="ghost" size="md">
            Unsere Partner
          </Button>
          <Button href="/kontakt" size="md">
            Kostenloses Erstgespräch
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border/40 bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <nav className="container-page flex flex-col gap-1 py-5" aria-label="Mobile Navigation">
            {nav.map((item) => (
              <div key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-lg text-ink-muted transition-colors hover:bg-surface/60 hover:text-ink"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-border/50 pl-3">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-base text-ink-muted transition-colors hover:bg-surface/60 hover:text-ink"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Button href="/partner" variant="ghost" size="lg" className="w-full">
                Unsere Partner
              </Button>
              <Button href="/kontakt" size="lg" className="w-full">
                Kostenloses Erstgespräch
                <ArrowRight />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
