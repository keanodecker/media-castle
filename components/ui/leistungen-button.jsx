'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function LeistungenButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 active:scale-[0.98]"
    >
      {/* Liquid glass overlay on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/25 via-white/5 to-white/15"
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.12)' }}
      />

      {/* Text + arrow */}
      <span className="relative z-10 flex items-center gap-2">
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          {children}
        </span>
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          aria-hidden="true"
          className="transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </span>
    </Link>
  );
}
