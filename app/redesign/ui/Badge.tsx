import type { ReactNode } from "react";

type Variant = "subtle" | "outline" | "solid" | "mono" | "status";

const variants: Record<Variant, string> = {
  subtle: "bg-brand-subtle text-brand border border-brand-border",
  outline: "bg-transparent text-ink-3 border border-hairline-strong",
  solid: "bg-brand text-white border border-brand",
  mono: "bg-surface-3 text-ink-2 border border-hairline font-mono tracking-tight",
  status: "bg-brand-subtle text-brand border border-brand-border",
};

type BadgeProps = {
  children: ReactNode;
  variant?: Variant;
  /** Show a pulsing status dot (for "Available" / "In development"). */
  dot?: boolean;
  className?: string;
};

/** Tag / metric / status pill (UI-SPEC §8). */
export default function Badge({ children, variant = "subtle", dot, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.78rem] font-medium ${variants[variant]} ${className}`}
    >
      {dot && <span className="inline-flex h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
