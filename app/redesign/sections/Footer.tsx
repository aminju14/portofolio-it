import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { site, nav } from "../content";

const buildLinks = [
  { label: "AgriMind", href: "https://github.com/aminju14/agri-mind-ai", external: true },
  { label: "MinLabs", href: site.fastworkUrl, external: true },
  { label: "Fastwork", href: site.fastworkUrl, external: true },
];

const connectLinks = [
  { label: "Email", href: `mailto:${site.email}`, external: false },
  { label: "LinkedIn", href: site.social.linkedin, external: true },
  { label: "GitHub", href: site.social.github, external: true },
  { label: "CV (PDF)", href: "/CV_Muhammad_Amin.pdf", external: true },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-on-dark-2">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="rs-focus inline-flex items-center gap-1 text-sm text-on-dark-2 transition-colors hover:text-on-dark"
            >
              {link.label}
              {link.external && <ArrowUpRight size={13} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-on-dark">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-lg font-bold">{site.name}</span>
            <span className="text-sm text-on-dark-2">{site.positioning}</span>
            <span className="mt-1 inline-flex items-center gap-2 text-sm text-on-dark">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand" />
              Available for freelance
            </span>
          </div>

          <Column title="Navigate" links={nav.links.map((l) => ({ ...l, external: false }))} />
          <Column title="Build" links={buildLinks} />
          <Column title="Connect" links={connectLinks} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-on-dark-2 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {site.name} · MinLabs</span>
          <Link href="#top" className="rs-focus transition-colors hover:text-on-dark">
            Back to top ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}
