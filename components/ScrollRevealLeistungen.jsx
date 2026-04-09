'use client';

import { useRef, useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

// ------------------------------------------------------------------
// Section definitions
// ------------------------------------------------------------------
const SECTIONS = [
  {
    id: 'webdesign',
    label: 'Webdesign',
    title: 'Website Design & Entwicklung',
    description:
      'Wir entwickeln maßgeschneiderte Websites, die nicht nur gut aussehen, sondern auch Ihre Geschäftsziele unterstützen — von der ersten Konzeption bis zum Launch.',
    tags: ['Responsive Design', 'SEO-optimiert', 'DSGVO-konform', 'Schnelle Ladezeiten'],
    href: '/leistungen/webdesign',
    bg: '#0f172a',
    accent: '#2563eb',
    accentRgb: '37,99,235',
    // Pivot: bottom-right. Sweeps counter-clockwise: 3 o'clock → 12 → 9 o'clock
    pivotSide: 'right',
    sweepDir: 1,
    scrollVh: 200,
  },
  {
    id: 'online-prasenz',
    label: 'Online Präsenz',
    title: 'Ihre Präsenz im Netz',
    description:
      'Social Media Management, SEO und Google My Business — wir machen Sie sichtbar und stärken Ihre digitale Reichweite nachhaltig.',
    tags: ['Social Media', 'SEO', 'Google My Business', 'Lokale Optimierung'],
    href: '/leistungen/online-prasenz',
    bg: '#1e3a8a',
    accent: '#93c5fd',
    accentRgb: '147,197,253',
    // Pivot: bottom-left. Sweeps clockwise (mirror): 9 o'clock → 12 → 3 o'clock
    pivotSide: 'left',
    sweepDir: -1,
    scrollVh: 200,
  },
  {
    id: 'andere',
    label: 'Weitere Leistungen',
    title: 'Noch mehr für Ihren Auftritt',
    description:
      'Von Logodesign und Corporate Identity über Flyer und Visitenkarten bis hin zum individuellen Admin-Dashboard — umfassende Lösungen aus einer Hand.',
    tags: ['Logo Design', 'Flyer', 'Visitenkarten', 'Corporate Identity'],
    href: '/leistungen/andere',
    bg: '#0f172a',
    accent: '#2563eb',
    accentRgb: '37,99,235',
    // Same pivot/direction as Webdesign but faster (shorter scrollVh)
    pivotSide: 'right',
    sweepDir: 1,
    scrollVh: 160,
  },
];

// ------------------------------------------------------------------
// Clip-path polygon computation
//
// The "clock face" lives at the section corner (pivotSide).
// sweepDir = +1  → counter-clockwise in screen space (right → up → left)
// sweepDir = -1  → clockwise in screen space (left → up → right)
//
// Coordinate convention used here:
//   angle = 0   → East  (3 o'clock)
//   angle = π/2 → North (12 o'clock)  [Y is flipped: pivotY - r*sin(a)]
//   angle = π   → West  (9 o'clock)
//
// A 180° sweep from any corner covers the entire rectangle because the
// diagonal angle from that corner is always < 180°.
// ------------------------------------------------------------------
function computeClip(progress, W, H, pivotSide, sweepDir) {
  if (progress <= 0) return 'polygon(0px 0px, 0px 0px, 0px 0px)';
  if (progress >= 1) return null; // caller sets clipPath to 'none'

  const pivotX = pivotSide === 'right' ? W : 0;
  const pivotY = H;
  // Radius large enough to always cover the full viewport from any corner
  const r = Math.sqrt(W * W + H * H) + 100;
  // Start angle: East for right-pivot, West for left-pivot
  const startAngle = pivotSide === 'right' ? 0 : Math.PI;

  const pts = [[pivotX, pivotY]];

  const STEPS = 64;
  for (let i = 0; i <= STEPS; i++) {
    const a = startAngle + sweepDir * Math.PI * progress * (i / STEPS);
    pts.push([
      pivotX + r * Math.cos(a),
      pivotY - r * Math.sin(a), // Y flipped for screen coordinates
    ]);
  }

  return `polygon(${pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(', ')})`;
}

// ------------------------------------------------------------------
// Shared section content (used in both animated and static variants)
// ------------------------------------------------------------------
function SectionContent({ section }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 sm:px-12 text-center">
      <span
        className="text-xs font-semibold uppercase tracking-widest mb-5"
        style={{ color: section.accent }}
      >
        {section.label}
      </span>

      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight"
      >
        {section.title}
      </h2>

      <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
        {section.description}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {section.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `rgba(${section.accentRgb}, 0.15)`,
              color: section.accent,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={section.href}
        className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
        style={{ backgroundColor: section.accent, color: section.bg }}
      >
        Mehr erfahren
      </Link>
    </div>
  );
}

// ------------------------------------------------------------------
// Animated section — pinned scroll + clock-wipe clip-path reveal
// ------------------------------------------------------------------
function AnimatedSection({ section }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  // Use refs for dimensions so the scroll callback always reads fresh values
  const wRef = useRef(0);
  const hRef = useRef(0);
  // One-way: only ever increase this value
  const maxRef = useRef(0);

  const [clipPath, setClipPath] = useState('polygon(0px 0px, 0px 0px, 0px 0px)');
  const [revealed, setRevealed] = useState(false);

  // Measure dimensions; double-rAF acts as a layout-flush equivalent of
  // ScrollTrigger.refresh() — ensures measurements happen after full paint.
  useEffect(() => {
    const measure = () => {
      if (innerRef.current) {
        wRef.current = innerRef.current.offsetWidth;
        hRef.current = innerRef.current.offsetHeight;
      }
    };
    // Immediate + after paint
    measure();
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(measure);
      return () => cancelAnimationFrame(raf2);
    });

    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf1);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // offset: ['start start', 'end end'] maps scrollYProgress 0→1 over exactly
  // the pinned phase: from when the container top hits the viewport top, to
  // when the container bottom hits the viewport bottom (= scrollVh - 100vh of scroll).
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const clamped = Math.max(0, Math.min(1, p));
    // One-way: once revealed, don't go back
    maxRef.current = Math.max(maxRef.current, clamped);
    const display = maxRef.current;

    if (display >= 1) {
      // Fully revealed — remove clip-path entirely (no GPU overhead)
      setRevealed(true);
      return;
    }

    setRevealed(false);
    setClipPath(
      computeClip(display, wRef.current, hRef.current, section.pivotSide, section.sweepDir)
    );
  });

  return (
    // Scroll zone: taller than 100vh gives the pinned panel time to animate
    <div ref={containerRef} style={{ height: `${section.scrollVh}vh` }}>
      {/* Sticky panel — sticks at top:0 while container scrolls past */}
      <div
        ref={innerRef}
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: section.bg }}
      >
        {/* Content layer — clip-path applied here only, not to the bg panel */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: revealed ? 'none' : clipPath,
            backgroundColor: section.bg,
          }}
        >
          <SectionContent section={section} />
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Static section — used on mobile (<768 px) and during SSR
// ------------------------------------------------------------------
function StaticSection({ section }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: section.bg }}
    >
      <SectionContent section={section} />
    </div>
  );
}

// ------------------------------------------------------------------
// Root export
// ------------------------------------------------------------------
export default function ScrollRevealLeistungen() {
  // null = unknown (SSR / before hydration) → render static as safe default
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div>
      {SECTIONS.map((section) =>
        isMobile === false ? (
          <AnimatedSection key={section.id} section={section} />
        ) : (
          // isMobile === null (SSR) or true → static
          <StaticSection key={section.id} section={section} />
        )
      )}
    </div>
  );
}
