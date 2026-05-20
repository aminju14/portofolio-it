"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function SystemArchitecture() {
  const { language } = useLanguage();
  const t = translations[language].architecture;
  const sectionT = translations[language].sections;

  const architectureItems = [
    {
      icon: "📱",
      title: t.mobile,
      subtitle: t.mobileSub,
      color: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.15)",
      border: "rgba(245, 158, 11, 0.25)",
    },
    {
      icon: "⚙️",
      title: t.backend,
      subtitle: t.backendSub,
      color: "#3b82f6",
      glow: "rgba(59, 130, 246, 0.15)",
      border: "rgba(59, 130, 246, 0.25)",
    },
    {
      icon: "🤖",
      title: t.ai,
      subtitle: t.aiSub,
      color: "#22d3ee",
      glow: "rgba(34, 211, 238, 0.15)",
      border: "rgba(34, 211, 238, 0.25)",
    },
    {
      icon: "📊",
      title: t.dashboards,
      subtitle: t.dashboardSub,
      color: "#a78bfa",
      glow: "rgba(167, 139, 250, 0.15)",
      border: "rgba(167, 139, 250, 0.25)",
    },
  ];

  return (
    <section id="about" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <h2 className="section-title">{sectionT.architecture}</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {architectureItems.map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "32px 24px",
                gap: 12,
                borderColor: item.border,
                cursor: "default",
                transition: "all 0.3s ease",
              }}
              className="card architecture-card"
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: item.glow,
                  border: `1px solid ${item.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: 4,
                  transition: "transform 0.3s ease",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f0f6ff",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#94a3b8",
                  fontWeight: 500,
                }}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

