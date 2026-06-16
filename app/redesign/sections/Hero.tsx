import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";
import { hero } from "../content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      style={{ background: "linear-gradient(180deg, #eaf1ff 0%, #f4f8ff 45%, #ffffff 100%)" }}
    >
      {/* Line grid — visible, fades toward edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(120% 100% at 70% 0%, #000 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 70% 0%, #000 10%, transparent 75%)",
        }}
      />
      {/* Two drifting brand blobs — clearly visible life behind the hero */}
      <div
        aria-hidden
        className="rs-hero-glow pointer-events-none absolute -z-10"
        style={{
          top: "-15%",
          right: "-6%",
          width: "700px",
          height: "700px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.30) 0%, rgba(37,99,235,0.10) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden
        className="rs-hero-glow-2 pointer-events-none absolute -z-10"
        style={{
          bottom: "-25%",
          left: "-10%",
          width: "560px",
          height: "560px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 65%)",
          filter: "blur(24px)",
        }}
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* One reveal for the whole text column — calmer than per-element stagger */}
          <Reveal className="flex flex-col items-start gap-6">
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
              {hero.eyebrow}
            </span>

            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
              {hero.headline}
            </h1>

            <p className="max-w-[560px] text-[clamp(1.0625rem,1.6vw,1.25rem)] leading-[1.6] text-ink-2">
              {hero.subheadline}
            </p>

            <div className="mt-1 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href={hero.ctaPrimary.href} size="lg">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="link">
                {hero.ctaSecondary.label}
                <ArrowRight size={16} className="rs-arrow" />
              </Button>
            </div>

            {/* Proof chips under the CTAs */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {hero.chips.map((chip) => (
                <Badge key={chip} variant="mono">
                  {chip}
                </Badge>
              ))}
            </div>

            {/* Tech stack — compact strip (mobile/tablet only; desktop shows full grid on the right) */}
            <div className="mt-6 w-full border-t border-hairline pt-6 lg:hidden">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-4">
                {hero.techEyebrow}
              </p>
              <ul className="flex flex-wrap gap-2">
                {hero.tech.slice(0, 12).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-surface-3 px-2.5 py-1 font-mono text-[0.72rem] text-ink-2"
                  >
                    {tech}
                  </li>
                ))}
                <li className="rounded-md px-2.5 py-1 font-mono text-[0.72rem] text-ink-4">
                  +{hero.tech.length - 12} more
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Tech stack — technologies I work with */}
          <Reveal delay={120} className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-[460px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  maskImage: "radial-gradient(70% 70% at 50% 40%, #000 0%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(70% 70% at 50% 40%, #000 0%, transparent 100%)",
                }}
              />
              <p className="mb-4 text-right font-mono text-sm text-ink-3">{hero.techEyebrow}</p>
              <ul className="flex flex-wrap justify-end gap-2.5">
                {hero.tech.map((tech) => (
                  <li
                    key={tech}
                    className="cursor-default rounded-full border border-hairline bg-surface/80 px-3.5 py-1.5 font-mono text-[0.8rem] text-ink-2 shadow-[0_1px_2px_rgba(17,20,24,0.04)] backdrop-blur-sm transition-colors duration-200 hover:border-brand-border hover:bg-brand-subtle hover:text-brand"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
