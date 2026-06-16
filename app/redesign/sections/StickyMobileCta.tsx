"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { nav } from "../content";

/** Mobile-only sticky CTA bar; appears after the user scrolls past the hero. */
export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[900] border-t border-hairline bg-surface/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button href={nav.cta.href} size="lg" className="w-full">
        {nav.cta.label}
      </Button>
    </div>
  );
}
