"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { nav, site } from "../content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the overlay when navigating to a hash (CTA / anchor links)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-surface/90 backdrop-blur-md py-3"
          : "border-b border-transparent bg-surface/60 backdrop-blur-sm py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link href="#top" aria-label={`${site.name} — home`} className="rs-focus inline-flex items-center">
          <Image
            src="/logo-horizontal.png"
            alt={site.name}
            width={127}
            height={40}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rs-focus text-[0.9rem] font-medium text-ink-3 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex">
            <Button href={nav.cta.href} size="sm">
              {nav.cta.label}
            </Button>
          </span>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rs-focus inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-hairline text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay — solid, covers everything */}
      {open && (
        <div className="fixed inset-0 z-[1100] flex flex-col bg-surface lg:hidden">
          {/* Overlay top bar with matching wordmark + close */}
          <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label={`${site.name} — home`}
              className="rs-focus inline-flex items-center"
            >
              <Image
                src="/logo-horizontal.png"
                alt={site.name}
                width={127}
                height={40}
                className="h-7 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rs-focus inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-hairline text-ink"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 pb-8 pt-2">
            <ul className="flex flex-col">
              {nav.links.map((link) => (
                <li key={link.href} className="border-b border-hairline">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rs-focus block py-5 text-xl font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button href={nav.cta.href} size="lg" className="w-full">
                {nav.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
