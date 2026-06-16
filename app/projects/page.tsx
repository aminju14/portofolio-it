"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import NavbarProjects from "../redesign/sections/NavbarProjects";
import FooterProjects from "../redesign/sections/FooterProjects";
import Container from "../redesign/ui/Container";
import Badge from "../redesign/ui/Badge";
import Reveal from "../redesign/ui/Reveal";

const categories = ["All", "Mobile Apps", "AI Systems", "Backend Systems"];
const ITEMS_PER_PAGE = 5;

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-surface font-sans text-ink antialiased">
      <NavbarProjects />
      <main className="min-h-screen pt-32 pb-20 sm:pt-40">
        <Container>
          {/* Header */}
          <Reveal className="flex flex-col gap-3">
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand">
              {language === "id" ? "Proyek" : "Selected Work"}
            </span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              {t.title}
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-ink-3">{t.subtitle}</p>
          </Reveal>

          {/* Filters */}
          <Reveal delay={60} className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`rs-focus rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-hairline-strong bg-surface text-ink-3 hover:border-ink-4 hover:text-ink"
                  }`}
                >
                  {cat === "All" ? t.filterAll : cat}
                </button>
              );
            })}
          </Reveal>

          {/* Project list */}
          <div className="mt-12 flex flex-col gap-6">
            {paginatedProjects.map((project, i) => {
              const content = project.locales[language];
              return (
                <Reveal as="li" key={project.id} delay={i * 50} className="list-none">
                  <article className="group grid gap-6 rounded-[16px] border border-hairline bg-surface p-5 transition-all duration-200 hover:border-brand-border hover:shadow-[0_8px_24px_rgba(17,20,24,0.07)] md:grid-cols-[300px_1fr] md:gap-8 md:p-6">
                    {/* Thumbnail */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="rs-focus relative block aspect-[4/3] overflow-hidden rounded-[12px] border border-hairline bg-surface-2 md:aspect-auto"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.thumbnail ?? project.image}
                        alt={content.title}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = project.image;
                        }}
                      />
                      <span className="absolute left-3 top-3">
                        <Badge variant="subtle">{project.category}</Badge>
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="flex flex-col">
                      <Link href={`/projects/${project.id}`} className="rs-focus">
                        <h2 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand sm:text-2xl">
                          {content.title}
                        </h2>
                      </Link>
                      <p className="mt-2 line-clamp-3 leading-relaxed text-ink-3">
                        {content.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 5).map((tag) => (
                          <li key={tag}>
                            <Badge variant="mono">{tag}</Badge>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.playStoreUrl && (
                            <a
                              href={project.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rs-focus inline-flex items-center gap-1.5 rounded-lg border border-hairline-strong px-3 py-1.5 text-xs font-medium text-ink-2 transition-colors hover:border-brand hover:text-brand"
                            >
                              Google Play
                            </a>
                          )}
                          {project.appStoreUrl && (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rs-focus inline-flex items-center gap-1.5 rounded-lg border border-hairline-strong px-3 py-1.5 text-xs font-medium text-ink-2 transition-colors hover:border-brand hover:text-brand"
                            >
                              App Store
                            </a>
                          )}
                        </div>
                        <Link
                          href={`/projects/${project.id}`}
                          className="rs-focus inline-flex items-center gap-1 text-sm font-medium text-brand"
                        >
                          {t.viewCaseStudy}
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rs-focus rounded-lg border border-hairline-strong px-4 py-2 text-sm font-medium text-ink-2 transition-colors enabled:hover:border-ink-4 disabled:opacity-40"
              >
                {language === "id" ? "← Sebelumnya" : "← Prev"}
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`rs-focus h-10 w-10 rounded-lg border text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "border-brand bg-brand text-white"
                      : "border-hairline-strong text-ink-2 hover:border-ink-4"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rs-focus rounded-lg border border-hairline-strong px-4 py-2 text-sm font-medium text-ink-2 transition-colors enabled:hover:border-ink-4 disabled:opacity-40"
              >
                {language === "id" ? "Berikutnya →" : "Next →"}
              </button>
            </div>
          )}
        </Container>
      </main>
      <FooterProjects />
    </div>
  );
}
