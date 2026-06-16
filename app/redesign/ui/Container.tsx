import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** Narrow measure for text-heavy blocks (~880px) vs default 1200px */
  narrow?: boolean;
  className?: string;
};

/** Centered content container with responsive gutters (UI-SPEC §4). */
export default function Container({ children, narrow, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 ${narrow ? "max-w-[880px]" : "max-w-[1200px]"} ${className}`}
    >
      {children}
    </div>
  );
}
