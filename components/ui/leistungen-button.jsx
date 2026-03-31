'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function LeistungenButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full font-medium active:scale-[0.98]"
    >
      {/* Liquid glass shimmer */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/25 via-white/5 to-white/15"
        style={{
          transition: 'opacity 120ms ease-out',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.1)',
        }}
      />

      {/* Text — shifts left on hover */}
      <span
        className="relative z-10 inline-block group-hover:-translate-x-2"
        style={{ transition: 'transform 150ms ease-out' }}
      >
        {children}
      </span>

      {/* Arrow — absolutely centered, slides in */}
      <ChevronRight
        size={16}
        strokeWidth={2.5}
        aria-hidden="true"
        className="absolute right-6 top-1/2 -translate-y-1/2 translate-x-[6px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 z-10"
        style={{ transition: 'opacity 150ms ease-out, transform 150ms ease-out' }}
      />
    </Link>
  );
}
