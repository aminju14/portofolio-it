import { Smartphone, Server, Sparkles, Wrench, ArrowRight, type LucideIcon } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../content";

const icons: Record<string, LucideIcon> = { Smartphone, Server, Sparkles, Wrench };

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface-2 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.headline}
          subtitle={services.subheadline}
        />

        <ul className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
          {services.items.map((service, i) => {
            const Icon = icons[service.icon] ?? Sparkles;
            return (
              <Reveal as="li" key={service.title} delay={i * 50}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-hairline bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-border hover:shadow-[0_16px_40px_rgba(17,20,24,0.1)] sm:p-8">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 100% 0%, rgba(37,99,235,0.06) 0%, transparent 60%)",
                    }}
                  />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-subtle text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-[1.0625rem] leading-relaxed text-ink-2">
                    {service.outcome}
                  </p>
                  <ul className="relative mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-surface-3 px-2.5 py-1 font-mono text-[0.72rem] text-ink-2"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto pt-6">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Discuss this
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={100} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[16px] border border-hairline bg-surface p-7 text-center shadow-[0_2px_8px_rgba(17,20,24,0.04)] sm:flex-row sm:p-8 sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Not sure where to start?
              </p>
              <p className="mt-1 text-ink-3">
                Tell me what you&apos;re building — I&apos;ll point you the right way.
              </p>
            </div>
            <Button href={services.cta.href} size="lg" className="shrink-0">
              {services.cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
