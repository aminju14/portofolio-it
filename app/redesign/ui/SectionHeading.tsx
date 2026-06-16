import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  /** Render heading as h1 (hero) — defaults to h2 for sections. */
  as?: "h1" | "h2";
  /** Use dark-surface text colors (for inverse bands). */
  onDark?: boolean;
  className?: string;
};

/** Eyebrow + heading + subtitle block (UI-SPEC component hierarchy). */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  onDark = false,
  className = "",
}: SectionHeadingProps) {
  const Heading = as;
  const titleColor = onDark ? "text-on-dark" : "text-ink";
  const subColor = onDark ? "text-on-dark-2" : "text-ink-3";
  const headingSize =
    as === "h1"
      ? "text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em]"
      : "text-[clamp(1.625rem,3.5vw,2.25rem)] leading-[1.15] tracking-[-0.02em]";

  return (
    <Reveal
      className={`flex flex-col gap-3 sm:gap-4 ${align === "center" ? "items-center text-center mx-auto max-w-[680px]" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
          {eyebrow}
        </span>
      )}
      <Heading className={`font-display font-semibold ${headingSize} ${titleColor}`}>
        {title}
      </Heading>
      {subtitle && (
        <p className={`text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-[1.6] ${subColor} max-w-[640px]`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
