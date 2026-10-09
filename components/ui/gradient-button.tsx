"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function GradientButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: GradientButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:shadow-xl",
    secondary:
      "bg-gradient-to-r from-slate-800 to-slate-900 text-white dark:from-white dark:to-slate-100 dark:text-black shadow-lg",
    ghost:
      "bg-transparent border-2 border-emerald-500/30 text-emerald-500 hover:border-emerald-500/60 hover:bg-emerald-500/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </button>
  );
}