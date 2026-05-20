"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";

const featured = projects[0]; // Restuque
const secondary = [projects[1], projects[3]]; // AI Assistant, Sales Dashboard

const accentColors = [
  { glow: "rgba(34,211,238,0.12)", border: "rgba(34,211,238,0.25)", text: "#22d3ee" },
  { glow: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", text: "#a78bfa" },
];

export default function ProjectHighlight() {
  const { language } = useLanguage();
  const featuredContent = featured.locales[language];
  const sectionT = language === "en" ? "Project Highlights" : "Highlight Proyek";
  const viewAll = language === "en" ? "View All Projects" : "Lihat Semua Proyek";
  const viewDetails = language === "en" ? "View Details" : "Lihat Detail";
  const impactLabel = language === "en" ? "Impact" : "Dampak";

  return (
    <section id="project-highlight" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <h2 className="section-title">{sectionT}</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              background: "rgba(7,20,40,0.9)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
            }}
            className="featured-card"
          >
            {/* Top glow line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, transparent, #3b82f6, #22d3ee, transparent)",
            }} />

            {/* Left: Image */}
            <div style={{ position: "relative", minHeight: 280, background: "rgba(4,16,32,0.8)" }}>
              <Image
                src={featured.image}
                alt={featuredContent.title}
                fill
                className="object-cover object-top"
                style={{ opacity: 0.85 }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 60%, rgba(7,20,40,0.9))",
              }} />
              {/* Category badge */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                padding: "4px 12px", borderRadius: 99,
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                fontSize: "0.7rem", fontWeight: 700,
                color: "#60a5fa", letterSpacing: "0.06em", textTransform: "uppercase",
              }}>
                {featured.category}
              </div>
            </div>

            {/* Right: Content */}
            <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: "1.4rem" }}>{featured.icon}</span>
                <h3 style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "1.05rem", fontWeight: 700, color: "#f0f6ff",
                }}>
                  {featuredContent.title}
                </h3>
              </div>

              <p style={{ fontSize: "0.83rem", color: "#94a3b8", lineHeight: 1.65 }}>
                {featuredContent.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {featured.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>

              {/* Impact */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: 10,
              }}>
                <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                  {impactLabel}:{" "}
                  <span className="impact-highlight">99.9% Uptime</span>
                  {" "}— unified 5 legacy systems
                </span>
              </div>

              {/* CTA */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto" }}>
                <Link href={`/projects/${featured.id}`} className="btn-primary" style={{ fontSize: "0.82rem", padding: "8px 18px" }}>
                  {viewDetails}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </Link>
                {featured.playStoreUrl && (
                  <a href={featured.playStoreUrl} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: "0.75rem", padding: "8px 14px", borderRadius: 10,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "#94a3b8", display: "flex", alignItems: "center", gap: 6,
                      textDecoration: "none", transition: "all 0.2s",
                    }}>
                    ▶ Play Store
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Secondary Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="secondary-grid">
            {secondary.map((project, index) => {
              const content = project.locales[language];
              const color = accentColors[index];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{
                    background: "rgba(7,20,40,0.9)",
                    border: `1px solid ${color.border}`,
                    borderRadius: 20,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Top glow line */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, transparent, ${color.text}, transparent)`,
                  }} />

                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: color.glow, border: `1px solid ${color.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.2rem", flexShrink: 0,
                    }}>
                      {project.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", color: color.text, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>
                        {project.category}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-space)", fontSize: "0.9rem", fontWeight: 700, color: "#f0f6ff", lineHeight: 1.3 }}>
                        {content.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.6 }}>
                    {content.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div style={{
                    fontSize: "0.78rem", color: "#94a3b8",
                    padding: "8px 12px",
                    background: "rgba(34,197,94,0.06)",
                    border: "1px solid rgba(34,197,94,0.15)",
                    borderRadius: 8,
                  }}>
                    <span className="impact-highlight">{impactLabel}: </span>
                    {content.impact.split(".")[0]}
                  </div>

                  {/* CTA */}
                  <Link href={`/projects/${project.id}`}
                    style={{
                      fontSize: "0.78rem", color: color.text,
                      textDecoration: "none", fontWeight: 600,
                      display: "flex", alignItems: "center", gap: 4,
                      marginTop: "auto",
                    }}>
                    {viewDetails}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", marginTop: 8 }}
          >
            <Link href="/projects" className="btn-outline" style={{ fontSize: "0.85rem", padding: "10px 28px" }}>
              {viewAll}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:first-child { min-height: 200px !important; }
          .secondary-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
