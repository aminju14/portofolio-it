"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (UI-SPEC: 60–80ms between siblings). */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
};

/**
 * Scroll-reveal wrapper (UI-SPEC §6). CSS-only animation via .rs-reveal,
 * triggered once when in view. Reduced-motion handled in globals.css.
 * Uses IntersectionObserver — no animation library needed.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      // @ts-expect-error — ref type narrows fine across the small union
      ref={ref}
      className={`${shown ? "rs-reveal" : "opacity-0"} ${className}`}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
