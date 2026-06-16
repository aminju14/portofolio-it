import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { stats } from "../content";

/**
 * Dark stats band — the first light→dark break in the page rhythm.
 * Big blue numbers, subtle grid + glow. This is the "wow" focal point.
 */
export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-dark-bg py-20 text-on-dark sm:py-24">
      {/* Dotted grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(80% 60% at 50% 50%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 50%, #000 0%, transparent 100%)",
        }}
      />
      {/* Brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 70% at 50% 0%, rgba(37,99,235,0.20) 0%, transparent 65%)",
        }}
      />

      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
            {stats.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em]">
            {stats.headline}
          </h2>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal as="div" key={item.label} delay={i * 60} className="text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd className="flex flex-col items-center gap-2">
                <span className="font-display text-[clamp(3rem,7vw,5rem)] font-semibold leading-none tracking-[-0.03em] text-brand">
                  {item.value}
                </span>
                <span className="text-base font-medium text-on-dark">{item.label}</span>
                <span className="font-mono text-xs text-on-dark-2">{item.sub}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
