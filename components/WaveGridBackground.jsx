'use client';

import { useEffect, useRef, useState } from 'react';

// Perspective wave-grid canvas animation.
// Sporadic localized wave packets travel from horizon toward viewer.
// Hidden on mobile (<768px).
export default function WaveGridBackground() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true); // default true → no flash on mobile SSR

  // ── mobile detection ────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── canvas animation ────────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const COLS = 36;
    const ROWS = 44;
    const WAVE_FREQ  = 0.65;
    const WAVE_SPEED = 0.004;
    const LINE_COLOR = '37, 99, 235';

    const PACKETS = [
      { centerFrac: 0.18, sigmaFrac: 0.11, speedMult: 1.0,  ampPhaseOffset: 0,             ampFreq: 0.0018 },
      { centerFrac: 0.82, sigmaFrac: 0.11, speedMult: 0.85, ampPhaseOffset: Math.PI * 1.3, ampFreq: 0.0014 },
      { centerFrac: 0.38, sigmaFrac: 0.08, speedMult: 1.15, ampPhaseOffset: Math.PI * 0.7, ampFreq: 0.0022 },
      { centerFrac: 0.65, sigmaFrac: 0.08, speedMult: 0.9,  ampPhaseOffset: Math.PI * 1.9, ampFreq: 0.0017 },
    ];

    const phases = PACKETS.map(() => Math.random() * Math.PI * 2);

    let animId = null;
    let running = false;
    let time = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width  = rect.width;
      canvas.height = rect.height;
    }

    function waveAt(gx, gz) {
      let total = 0;
      for (let i = 0; i < PACKETS.length; i++) {
        const p = PACKETS[i];
        const centerGx = p.centerFrac * COLS;
        const sigma    = p.sigmaFrac  * COLS;
        const dx       = gx - centerGx;
        const envelope = Math.exp(-(dx * dx) / (2 * sigma * sigma));
        const amp      = 0.5 + 0.5 * Math.sin(time * p.ampFreq * 2 * Math.PI + p.ampPhaseOffset);
        total += amp * envelope * Math.sin(gz * WAVE_FREQ + phases[i]);
      }
      return total;
    }

    function project(gx, gz) {
      const W = canvas.width;
      const H = canvas.height;

      const HORIZON_Y = H * 0.05;
      const CENTER_X  = W / 2;

      const t     = gz / ROWS;
      const persp = t * t;

      const baseAmp = H * 0.04;
      const waveMix = 0.12 + 0.88 * t;
      const waveY   = baseAmp * waveAt(gx, gz) * waveMix;

      const MIN_SPREAD = 0.55;
      const spread = MIN_SPREAD + (1 - MIN_SPREAD) * persp;

      const sx = CENTER_X + (gx - COLS / 2) / COLS * W * 1.3 * spread;
      const sy = HORIZON_Y + (H - HORIZON_Y) * persp - waveY;

      return { x: sx, y: sy };
    }

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (let gz = 1; gz <= ROWS; gz++) {
        const depthAlpha = 0.06 + 0.62 * (gz / ROWS);
        ctx.beginPath();
        for (let gx = 0; gx <= COLS; gx++) {
          const p = project(gx, gz);
          gx === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(${LINE_COLOR}, ${depthAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      for (let gx = 0; gx <= COLS; gx++) {
        ctx.beginPath();
        for (let gz = 0; gz <= ROWS; gz++) {
          const p = project(gx, gz);
          gz === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(${LINE_COLOR}, 0.15)`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    function loop() {
      if (!running) return;
      draw();
      for (let i = 0; i < PACKETS.length; i++) {
        phases[i] += WAVE_SPEED * PACKETS[i].speedMult;
      }
      time++;
      animId = requestAnimationFrame(loop);
    }

    function start() { if (running) return; running = true; loop(); }
    function stop()  { running = false; if (animId) { cancelAnimationFrame(animId); animId = null; } }

    const observer = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    resize();
    start();

    return () => { stop(); observer.disconnect(); ro.disconnect(); };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', display: 'block' }}
    />
  );
}
