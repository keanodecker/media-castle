'use client';

import { useEffect, useRef } from 'react';

// Perspective wave-grid canvas animation.
// Blue lines on transparent background, waves travel toward the viewer.
export default function WaveGridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const COLS = 22;        // vertical lines (left-right)
    const ROWS = 28;        // horizontal lines (depth)
    const WAVE_FREQ = 0.55; // how many wave crests fit in the grid
    const WAVE_SPEED = 0.018; // animation speed — keep slow for calm feel
    const LINE_COLOR = '37, 99, 235'; // rgb for primary blue

    let animId = null;
    let running = false;
    let time = 0;

    // ── resize ────────────────────────────────────────────────────────────
    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    // ── project a grid point to screen coords ─────────────────────────────
    // gx: 0 … COLS   (left to right)
    // gz: 0 … ROWS   (gz=0 near/bottom, gz=ROWS far/horizon)
    // Returns { x, y, alpha }
    function project(gx, gz) {
      const W = canvas.width;
      const H = canvas.height;

      const HORIZON_Y = H * 0.05;   // vanishing point near top
      const CENTER_X  = W / 2;

      // Perspective factor: 0 at far (horizon), 1 at near (bottom)
      const t = gz / ROWS;
      const persp = t * t;           // quadratic — compresses distant rows naturally

      // Wave travels toward viewer: sin(gz * freq + time) → crest moves to smaller gz
      const amp     = H * 0.042;
      const waveMix = 0.15 + 0.85 * t; // waves slightly visible at far end too
      const waveY   = amp * Math.sin(gz * WAVE_FREQ + time) * waveMix;

      const sx = CENTER_X + (gx - COLS / 2) / COLS * W * 1.35 * persp;
      const sy = HORIZON_Y + (H - HORIZON_Y) * persp - waveY;

      // Far lines are nearly invisible; near lines are solid
      const alpha = 0.06 + 0.64 * t;

      return { x: sx, y: sy, alpha };
    }

    // ── draw one frame ────────────────────────────────────────────────────
    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Horizontal lines — constant gz, vary gx
      for (let gz = 1; gz <= ROWS; gz++) {
        ctx.beginPath();
        for (let gx = 0; gx <= COLS; gx++) {
          const p = project(gx, gz);
          gx === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        const a = 0.07 + 0.63 * (gz / ROWS);
        ctx.strokeStyle = `rgba(${LINE_COLOR}, ${a})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Vertical lines — constant gx, vary gz (far → near)
      for (let gx = 0; gx <= COLS; gx++) {
        ctx.beginPath();
        for (let gz = 0; gz <= ROWS; gz++) {
          const p = project(gx, gz);
          gz === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(${LINE_COLOR}, 0.18)`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }

    // ── animation loop ────────────────────────────────────────────────────
    function loop() {
      if (!running) return;
      draw();
      time += WAVE_SPEED;
      animId = requestAnimationFrame(loop);
    }

    function start() {
      if (running) return;
      running = true;
      loop();
    }

    function stop() {
      running = false;
      if (animId) { cancelAnimationFrame(animId); animId = null; }
    }

    // Pause when scrolled off-screen (saves CPU/GPU)
    const observer = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Keep canvas sized to its CSS box
    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);

    resize();
    start();

    return () => {
      stop();
      observer.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', display: 'block' }}
    />
  );
}
