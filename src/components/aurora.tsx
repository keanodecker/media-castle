import { ShaderCanvas } from "./shader-canvas";

/**
 * Ambient background for the navy hero zones: a static glow fallback with an
 * animated WebGL glow blob layered on top. Decorative only (aria-hidden, -z-10).
 * If WebGL is unavailable or reduced motion is on, only the static glow shows —
 * nothing ever depends on the animation.
 */
export function Aurora({ withGrid = true }: { withGrid?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Static fallback glow */}
      <div className="glow-accent absolute left-1/2 top-[-14%] h-[46rem] w-[46rem] -translate-x-1/2 opacity-30 blur-3xl" />
      <div className="glow-accent absolute right-[10%] top-[18%] h-[26rem] w-[26rem] opacity-[0.16] blur-3xl" />

      {/* Animated shader glow */}
      <ShaderCanvas />

      {withGrid && (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in oklch, var(--color-border) 70%, transparent) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "radial-gradient(ellipse 68% 55% at 50% 30%, black, transparent 72%)",
          }}
        />
      )}
    </div>
  );
}
