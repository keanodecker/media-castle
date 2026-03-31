'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function LeistungenButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {children}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/20 group-hover:w-[calc(100%-0.5rem)] not-italic">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Link>
  );
}
