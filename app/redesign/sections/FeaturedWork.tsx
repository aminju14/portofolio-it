import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { work, type WorkItem } from "../content";

function ProjectCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Link
      href={item.href}
      className="rs-focus group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-dark-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 100% 0%, rgba(37,99,235,0.16) 0%, transparent 60%)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-on-dark-2">
          {item.category}
        </span>
        <span className="font-mono text-xs text-on-dark-2/60">
          {String(index + 2).padStart(2, "0")}
        </span>
      </div>
      <p className="relative mt-5 text-[1.25rem] font-semibold leading-snug tracking-[-0.01em] text-on-dark">
        {item.metric}
      </p>
      <p className="relative mt-1.5 font-mono text-[0.8rem] uppercase tracking-wider text-on-dark-2/70">
        {item.title}
      </p>
      <ul className="relative mt-5 flex flex-wrap gap-1.5">
        {item.tags.slice(0, 3).map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[0.72rem] text-on-dark-2"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="relative mt-auto pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View case study
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 transition-all duration-200 group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight size={13} />
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  const f = work.featured;
  return (
    <section id="work" className="relative scroll-mt-24 overflow-hidden bg-dark-bg py-20 text-on-dark sm:py-28">
      {/* Ambient grid + glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(90% 60% at 50% 0%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(90% 60% at 50% 0%, #000 0%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="flex flex-col gap-3">
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
              {work.eyebrow}
            </span>
            <h2 className="font-display text-[clamp(1.625rem,3.5vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-on-dark">
              {work.headline}
            </h2>
            <p className="max-w-[560px] text-lg text-on-dark-2">{work.subheadline}</p>
          </Reveal>
          <Reveal delay={80} className="hidden shrink-0 sm:block">
            <Button
              href={work.cta.href}
              variant="secondary"
              className="!border-white/20 !bg-transparent !text-on-dark !shadow-none hover:!bg-white/10"
            >
              {work.cta.label}
              <ArrowRight size={16} className="rs-arrow" />
            </Button>
          </Reveal>
        </div>

        {/* Featured card with real mockup */}
        <Reveal delay={80} className="mt-12">
          <Link
            href={f.href}
            className="rs-focus group grid overflow-hidden rounded-[20px] border border-white/10 bg-dark-surface transition-all duration-300 hover:border-brand/50 lg:grid-cols-2"
          >
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d1b3a] to-[#0a1020] p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 40%, rgba(37,99,235,0.25) 0%, transparent 70%)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.image}
                alt={`${f.title} app mockup`}
                className="relative max-h-[360px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-8 sm:p-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                ★ Featured project
              </span>
              <span className="font-mono text-sm uppercase tracking-wider text-on-dark-2/70">
                {f.category}
              </span>
              <h3 className="font-display text-2xl font-semibold leading-tight text-on-dark sm:text-3xl">
                {f.metric}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {f.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[0.72rem] text-on-dark-2"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                View case study
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Supporting grid */}
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {work.items.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 50}>
              <ProjectCard item={item} index={i} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100} className="mt-10 flex justify-center sm:hidden">
          <Button
            href={work.cta.href}
            variant="secondary"
            size="lg"
            className="!border-white/20 !bg-transparent !text-on-dark !shadow-none"
          >
            {work.cta.label}
            <ArrowRight size={16} className="rs-arrow" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
