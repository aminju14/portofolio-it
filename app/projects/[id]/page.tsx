"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Maximize2, X } from "lucide-react";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import RestuqueDemo from "../../redesign/sections/RestuqueDemo";
import NavbarProjects from "../../redesign/sections/NavbarProjects";
import FooterProjects from "../../redesign/sections/FooterProjects";
import Container from "../../redesign/ui/Container";
import Badge from "../../redesign/ui/Badge";
import Button from "../../redesign/ui/Button";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface text-ink">
        <h1 className="font-display text-2xl font-semibold">Project Not Found</h1>
        <Button href="/projects" variant="secondary">
          {t.backToProjects}
        </Button>
      </div>
    );
  }

  const content = project.locales[language];

  return (
    <div className="bg-surface font-sans text-ink antialiased">
      <NavbarProjects />
      <main className="min-h-screen pt-24">
        {/* Hero — clean, light, no neon blur */}
        <section className="border-b border-hairline bg-surface-2">
          <Container className="py-14 sm:py-20">
            <Link
              href="/projects"
              className="rs-focus mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-3 transition-colors hover:text-ink"
            >
              <ArrowLeft size={15} />
              {t.backToProjects}
            </Link>
            <Badge variant="subtle">{project.category}</Badge>
            <h1 className="mt-4 max-w-[820px] font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
              {content.title}
            </h1>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="mono">{tag}</Badge>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <Container className="py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
            {/* Main content */}
            <div className="order-2 flex flex-col gap-10 lg:order-1">
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">{t.overview}</h2>
                <p className="mt-3 text-[1.0625rem] leading-[1.8] text-ink-2">
                  {content.fullDescription}
                </p>
              </section>

              <div className="grid gap-6 sm:grid-cols-2">
                <section className="rounded-[12px] border border-hairline bg-surface-2 p-6">
                  <h3 className="font-display text-base font-semibold text-ink">{t.challenges}</h3>
                  <p className="mt-2 leading-relaxed text-ink-3">{content.challenges}</p>
                </section>
                <section className="rounded-[12px] border border-hairline bg-surface-2 p-6">
                  <h3 className="font-display text-base font-semibold text-ink">{t.solutions}</h3>
                  <p className="mt-2 leading-relaxed text-ink-3">{content.solutions}</p>
                </section>
              </div>

              {/* Impact — highlighted */}
              <section className="rounded-[12px] border-l-4 border-brand bg-brand-subtle p-6">
                <h2 className="font-display text-base font-semibold uppercase tracking-wide text-brand">
                  {t.impact}
                </h2>
                <p className="mt-2 text-lg font-medium leading-relaxed text-ink">{content.impact}</p>
              </section>

              {/* Architecture */}
              {content.architecture && project.architectureImage && (
                <section className="overflow-hidden rounded-[16px] border border-hairline">
                  <div className="border-b border-hairline bg-surface-2 px-6 py-5">
                    <h2 className="font-display text-lg font-semibold text-ink">
                      System Architecture
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsImageViewerOpen(true)}
                    className="rs-focus group relative flex w-full items-center justify-center bg-surface-3 p-6 sm:p-10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.architectureImage}
                      alt="System architecture diagram"
                      className="w-full max-w-[900px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/90 px-3 py-1.5 text-xs font-medium text-ink-2 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <Maximize2 size={13} /> View full image
                    </span>
                  </button>
                  <div className="flex flex-col gap-7 px-6 py-8 sm:px-8">
                    <p className="border-l-2 border-brand pl-4 text-[1.0625rem] leading-relaxed text-ink-2">
                      {content.architecture.description}
                    </p>
                    <div>
                      <h4 className="font-display text-base font-semibold text-ink">
                        Architecture Overview
                      </h4>
                      <p className="mt-2 leading-relaxed text-ink-3">
                        {content.architecture.overview}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold text-ink">
                        Key Components
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {content.architecture.keyComponents.map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-ink-2">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[12px] border border-brand-border bg-brand-subtle p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-brand">
                        Flow Summary
                      </h4>
                      <p className="mt-2 leading-relaxed text-ink-2">
                        {content.architecture.flow}
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="rounded-[16px] border border-hairline bg-surface p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                  {project.id === "restuque"
                    ? language === "id"
                      ? "Demo Interaktif"
                      : "Interactive Demo"
                    : language === "id"
                      ? "Pratinjau"
                      : "The Visual"}
                </h4>

                {project.id === "restuque" ? (
                  <div className="mt-4 flex justify-center">
                    <RestuqueDemo />
                  </div>
                ) : (
                  <>
                    <div className="mt-4 aspect-square overflow-hidden rounded-[12px] border border-hairline bg-surface-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rs-focus mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                      >
                        <ExternalLink size={16} />
                        {language === "en" ? "View App Animation" : "Lihat Animasi Aplikasi"}
                      </a>
                    )}
                  </>
                )}
                {project.id === "restuque" && (
                  <p className="mt-3 text-center text-xs text-ink-4">
                    💡 Click around and swipe transactions left/right to try!
                  </p>
                )}
              </div>

              {(project.playStoreUrl || project.appStoreUrl) && (
                <div className="rounded-[16px] border border-hairline bg-surface p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                    {t.downloads}
                  </h4>
                  <div className="mt-4 flex flex-col gap-3">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rs-focus inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-hairline-strong px-4 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-brand hover:text-brand"
                      >
                        {t.googlePlay}
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rs-focus inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-hairline-strong px-4 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-brand hover:text-brand"
                      >
                        {t.appStore}
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="rounded-[16px] border border-hairline bg-surface p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                  Stack Info
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {project.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-3 text-ink-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/projects" variant="secondary" className="w-full">
                <ArrowLeft size={16} />
                {t.backToProjects}
              </Button>
            </aside>
          </div>
        </Container>
      </main>
      <FooterProjects />

      {/* Fullscreen image viewer */}
      {isImageViewerOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm"
          onClick={() => setIsImageViewerOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            className="rs-focus absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.architectureImage}
            alt="Full architecture"
            className="max-h-[95vh] max-w-[95vw] rounded-[12px] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
