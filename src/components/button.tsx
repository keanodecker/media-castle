import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none " +
  "transition-[transform,background-color,box-shadow,border-color] duration-200 ease-[var(--ease-out-quart)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 active:translate-y-px " +
  "motion-reduce:transition-none motion-reduce:active:translate-y-0";

const sizes = {
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-13 px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-hover " +
    "shadow-[0_0_0_0_transparent] hover:shadow-[0_10px_36px_-10px_rgba(36,99,235,0.6)] hover:-translate-y-0.5",
  ghost:
    "border border-border text-ink hover:border-ink/25 hover:bg-surface-hover",
};

type ButtonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "children">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-0.5 motion-reduce:transition-none ${className}`}
    >
      <path
        d="M4 10h11M11 5.5 15.5 10 11 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
