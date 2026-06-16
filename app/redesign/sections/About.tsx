import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { about, site } from "../content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* Portrait with brand accent block behind for depth */}
          <Reveal className="order-1">
            <div className="relative mx-auto w-full max-w-[360px]">
              {/* offset accent block */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 -z-0 h-full w-full rounded-[20px] bg-brand-subtle"
              />
              <div className="absolute -left-3 -top-3 -z-0 h-24 w-24 rounded-[16px] border border-brand-border" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-hairline bg-surface-2 shadow-[0_16px_40px_rgba(17,20,24,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-potrait.jpeg"
                  alt={`${site.name}, software engineer`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-3 left-6 z-10 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink shadow-[0_8px_24px_rgba(17,20,24,0.1)]">
                <span className="h-2 w-2 rounded-full bg-brand" />
                Available for freelance
              </div>
            </div>
          </Reveal>

          {/* Narrative */}
          <div className="order-2 flex flex-col items-start gap-5">
            <Reveal className="flex flex-col gap-4">
              <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
                {about.eyebrow}
              </span>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                {about.headline}
              </h2>
              <p className="max-w-[560px] text-lg leading-relaxed text-ink-2">{about.narrative}</p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="flex flex-wrap gap-2">
                {about.chips.map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* AgriMind + MinLabs, folded in compactly */}
            <Reveal delay={160} className="w-full">
              <ul className="flex w-full flex-col divide-y divide-hairline rounded-[14px] border border-hairline bg-surface-2">
                {about.building.map((b) => (
                  <li key={b.label}>
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rs-focus group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-3"
                    >
                      <span className="shrink-0 font-display text-sm font-semibold text-brand">
                        {b.label}
                      </span>
                      <span className="flex-1 text-sm text-ink-2">{b.text}</span>
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-ink-4 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <Button href={about.cta.href}>
                {about.cta.label}
                <ArrowRight size={16} className="rs-arrow" />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
