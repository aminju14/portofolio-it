import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "rs-focus inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 select-none";

const variants: Record<Variant, string> = {
  primary:
    "text-white rounded-[12px] font-semibold bg-gradient-to-b from-[#3b82f6] to-brand shadow-[0_1px_2px_rgba(17,20,24,0.08),0_6px_16px_rgba(37,99,235,0.22)] hover:shadow-[0_2px_4px_rgba(17,20,24,0.1),0_10px_28px_rgba(37,99,235,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]",
  secondary:
    "bg-surface text-ink border border-hairline-strong rounded-[12px] shadow-[0_1px_2px_rgba(17,20,24,0.04)] hover:bg-surface-2 hover:border-ink-4 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink-2 rounded-[12px] hover:bg-surface-3",
  link:
    "bg-transparent text-brand p-0 hover:underline underline-offset-4 [&>.rs-arrow]:transition-transform [&>.rs-arrow]:duration-200 hover:[&>.rs-arrow]:translate-x-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[52px] px-7 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Primary CTA system (UI-SPEC §9). `link` variant ignores size padding. */
export default function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const cls = `${base} ${variants[variant]} ${variant === "link" ? "" : sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={("type" in props && props.type) || "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      disabled={"disabled" in props ? props.disabled : undefined}
      className={`${cls} ${"disabled" in props && props.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
