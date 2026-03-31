'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function LeistungenButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-1.5 bg-primary text-white px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
    >
      <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
        {children}
      </span>
      <ChevronRight
        size={17}
        strokeWidth={2.5}
        className="transition-all duration-200 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
        aria-hidden="true"
      />
    </Link>
  );
}
