"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { site } from "../content";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Light, premium navbar for the (bilingual) project pages.
 * Keeps the EN/ID toggle via LanguageContext, matches the redesign design system.
 */
export default function NavbarProjects() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: language === "id" ? "Beranda" : "Home", href: "/" },
    { label: language === "id" ? "Proyek" : "Work", href: "/projects" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-surface/90 backdrop-blur-md py-3"
          : "border-b border-transparent bg-surface/60 backdrop-blur-sm py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link href="/" className="rs-focus font-display text-[0.95rem] font-bold tracking-[-0.01em] text-ink">
          {site.navName}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
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
          {/* EN/ID toggle */}
          <div className="flex items-center gap-1 rounded-full border border-hairline bg-surface-2 p-1 text-xs font-semibold">
            {(["en", "id"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                className={`rs-focus rounded-full px-2.5 py-1 uppercase transition-colors ${
                  language === lng ? "bg-brand text-white" : "text-ink-3 hover:text-ink"
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline-flex">
            <Button href="/#contact" size="sm">
              {language === "id" ? "Kontak saya" : "Contact me"}
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

      {open && (
        <div className="border-t border-hairline bg-surface px-6 py-2 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rs-focus block border-b border-hairline py-4 text-base font-medium text-ink last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-4">
            <Button href="/#contact" size="lg" className="w-full">
              {language === "id" ? "Kontak saya" : "Contact me"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
