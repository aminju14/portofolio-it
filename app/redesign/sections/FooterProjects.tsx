"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { site } from "../content";
import { useLanguage } from "../../context/LanguageContext";

/** Compact light footer for project pages, bilingual. */
export default function FooterProjects() {
  const { language } = useLanguage();
  const positioning =
    language === "id"
      ? "Software Engineer · Founder MinLabs · Pencipta AgriMind"
      : site.positioning;

  return (
    <footer className="border-t border-hairline bg-surface-2">
      <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="font-display text-base font-bold text-ink">{site.name}</span>
          <span className="text-sm text-ink-3">{positioning}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="rs-focus text-ink-3 transition-colors hover:text-ink">
            {language === "id" ? "Beranda" : "Home"}
          </Link>
          <Link href="/#contact" className="rs-focus text-ink-3 transition-colors hover:text-ink">
            {language === "id" ? "Kontak" : "Contact"}
          </Link>
          <a
            href={site.fastworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-focus inline-flex items-center gap-1 font-medium text-brand"
          >
            Fastwork <ArrowUpRight size={13} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
