"use client"

import * as React from "react"
import Link from "next/link"

// Varianten: 'primary' (blau gefüllt), 'glass' (liquid glass blau)
export function FeyButton({ className = "", children, href, onClick, variant = "glass", ...props }) {
  const isGlass = variant === "glass"

  const classes = [
    "group relative inline-flex items-center justify-center gap-2",
    "h-11 min-w-[160px] whitespace-nowrap rounded-full px-6",
    "text-sm font-semibold leading-tight transition-all duration-200",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    // After-element für Hover-Overlay
    "after:absolute after:inset-0 after:rounded-full after:opacity-0 after:transition-opacity after:duration-200",
    isGlass ? [
      // Liquid Glass — helles Blau
      "text-secondary",
      "bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(219,234,254)_0%,rgba(37,99,235,0.06)_100%)]",
      "[box-shadow:inset_0_0_0_1px_rgba(13,33,68,0.25),inset_1px_1px_0_-0.5px_rgba(255,255,255,0.7),inset_-1px_-1px_0_-0.5px_rgba(13,33,68,0.1)]",
      // Hover
      "after:bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(191,219,254)_0%,rgb(219,234,254)_100%)]",
      "after:[box-shadow:inset_0_0_0_1px_rgba(37,99,235,0.4),inset_1px_1px_0_-0.5px_rgba(255,255,255,0.8),0_0_8px_rgba(37,99,235,0.2)]",
      "hover:after:opacity-100 hover:text-primary",
    ].join(" ") : [
      // Primary — dunkelblau gefüllt
      "text-white",
      "bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,hsl(221,83%,53%)_0%,hsl(218,68%,28%)_100%)]",
      "[box-shadow:inset_0_0_0_0.5px_rgba(255,255,255,0.15),inset_1px_1px_0_-0.5px_rgba(255,255,255,0.25),inset_-1px_-1px_0_-0.5px_rgba(0,0,0,0.2)]",
      // Hover
      "after:bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,hsl(221,83%,60%)_0%,hsl(218,68%,35%)_100%)]",
      "after:[box-shadow:inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_0_12px_rgba(37,99,235,0.4)]",
      "hover:after:opacity-100",
    ].join(" "),
    className,
  ].join(" ")

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {inner}
    </button>
  )
}
