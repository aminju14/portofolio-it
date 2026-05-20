"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const statusColors: Record<string, { bg: string; border: string; text: string; label: string }> = {
  expert:   { bg: "rgba(34,197,94,0.1)",  border: "rgba(34,197,94,0.25)",  text: "#4ade80", label: "Expert" },
  learning: { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)", text: "#fbbf24", label: "In Progress" },
};

const categoryColors = [
  { glow: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.25)",  icon: "#60a5fa",  line: "#3b82f6" },
  { glow: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", icon: "#a78bfa",  line: "#a78bfa" },
  { glow: "rgba(34,211,238,0.12)",  border: "rgba(34,211,238,0.25)",  icon: "#22d3ee",  line: "#22d3ee" },
];

export default function Expertise() {
  const { language } = useLanguage();
  const t = translations[language].expertise;
  const sectionT = translations[language].sections;

  return (
    <section id="expertise" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <h2 className="section-title">{sectionT.expertise}</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="expertise-grid">
          {t.categories.map((item: any, index: number) => {
            const color = categoryColors[index];
            const status = statusColors[item.status];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                style={{
                  display: "flex", flexDirection: "column", gap: 12,
                  background: "rgba(7,20,40,0.9)",
                  border: `1px solid ${color.border}`,
                  borderRadius: 20, padding: "24px",
                  position: "relative", overflow: "hidden",
                  cursor: "default", transition: "all 0.3s ease",
                }}
              >
                {/* Top glow line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, transparent, ${color.line}, transparent)`,
                }} />

                {/* Icon + title row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: color.glow, border: `1px solid ${color.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <h3 style={{
                        fontFamily: "var(--font-space)",
                        fontSize: "0.9rem", fontWeight: 700, color: "#f0f6ff", margin: 0,
                      }}>
                        {item.title}
                      </h3>
                    </div>
                    <span style={{
                      fontSize: "0.6rem", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      padding: "2px 8px", borderRadius: 99,
                      background: status.bg, border: `1px solid ${status.border}`,
                      color: status.text, display: "inline-block", marginTop: 4,
                    }}>
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "auto" }}>
                  {item.tags.map((tag: string) => (
                    <span key={tag} style={{
                      fontSize: "0.68rem", padding: "2px 9px", borderRadius: 99,
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "#94a3b8",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .expertise-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
