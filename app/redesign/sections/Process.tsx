import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { process } from "../content";

/**
 * "How I work" — 3-step process. Lowers buyer friction by making
 * the engagement feel predictable. Light section with connected steps.
 */
export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.headline}
          subtitle={process.subheadline}
          align="center"
        />

        <ol className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-hairline md:block"
          />
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 80} className="relative flex flex-col items-start">
              <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-subtle font-mono text-lg font-semibold text-brand">
                {step.no}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-3">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
