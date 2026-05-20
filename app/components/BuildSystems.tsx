const buildSteps = [
  { icon: "💬", title: "AI Chatbot", subtitle: "Process Automation" },
  { icon: "🎙️", title: "Audio to Text", subtitle: "Speech Recognition" },
  { icon: "💻", title: "Development", subtitle: "Clean Code" },
  { icon: "🧪", title: "Testing", subtitle: "Quality Assurance" },
  { icon: "📦", title: "Deployment", subtitle: "CI/CD Pipeline" },
  { icon: "📈", title: "Monitoring", subtitle: "System Health" },
];

export default function BuildSystems() {
  return (
    <section id="how-i-build" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <h2 className="section-title">How I Build Systems</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          {buildSteps.map((step) => (
            <div
              key={step.title}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "24px 16px",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {step.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-space)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#f0f6ff",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.7rem", color: "#475569" }}>
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
