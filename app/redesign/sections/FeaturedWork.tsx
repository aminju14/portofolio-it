import Image from "next/image";
import { Star } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { work, type AppItem } from "../content";

/** Small store button — Google Play / App Store. */
function StoreButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rs-focus inline-flex flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-on-dark transition-colors hover:border-brand/50 hover:bg-brand/10 hover:text-brand"
    >
      {label}
    </a>
  );
}

function AppCard({ app }: { app: AppItem }) {
  return (
    <div className="group relative flex h-full flex-col rounded-[18px] border border-white/10 bg-dark-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
      {/* Top: icon + rating */}
      <div className="flex items-start justify-between gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[16px] border border-white/10 bg-white/5">
          <Image
            src={app.logo}
            alt={`${app.name} app icon`}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        {app.rating && (
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-on-dark">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            {app.rating}
          </span>
        )}
      </div>

      {/* Name + category */}
      <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-on-dark">
        {app.name}
      </h3>
      <span className="mt-0.5 font-mono text-[0.72rem] uppercase tracking-wider text-on-dark-2/70">
        {app.category}
      </span>

      {/* Pitch */}
      <p className="mt-3 text-sm leading-relaxed text-on-dark-2">{app.pitch}</p>

      {/* Store buttons — render only what exists */}
      <div className="mt-auto flex gap-2 pt-6">
        {app.android && <StoreButton href={app.android} label="Google Play" />}
        {app.ios && <StoreButton href={app.ios} label="App Store" />}
        {!app.android && !app.ios && (
          <span className="inline-flex flex-1 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-on-dark-2/60">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden bg-dark-bg py-20 text-on-dark sm:py-28"
    >
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
        <Reveal className="flex flex-col gap-3 text-center sm:items-center">
          <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
            {work.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(1.625rem,3.5vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-on-dark">
            {work.headline}
          </h2>
          <p className="max-w-[560px] text-lg text-on-dark-2">{work.subheadline}</p>
        </Reveal>

        {/* Uniform app grid */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {work.items.map((app, i) => (
            <Reveal as="li" key={app.id} delay={i * 50}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
