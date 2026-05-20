"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function ProfessionalHistory() {
  const { language } = useLanguage();
  const t = translations[language].history;
  const sectionT = translations[language].sections;

  return (
    <section id="history" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <h2 className="section-title">{sectionT.history}</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px" }} className="history-grid">
          
          {/* Experience Timeline */}
          <div>
            <h3 style={{ 
              fontFamily: "var(--font-space)", 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              color: "var(--accent-blue-bright)",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span style={{ fontSize: "1.8rem" }}>💼</span> {t.experience}
            </h3>

            <div style={{ position: "relative", paddingLeft: "32px" }}>
              {/* Vertical Line */}
              <div style={{ 
                position: "absolute", 
                left: "7px", 
                top: "10px", 
                bottom: "10px", 
                width: "2px", 
                background: "linear-gradient(to bottom, var(--accent-blue), transparent)" 
              }}></div>

              {t.jobs.map((job, index) => (
                <div key={index} className="card animate-fadeInUp" style={{ 
                  marginBottom: "48px", 
                  position: "relative",
                  animationDelay: `${index * 0.1}s`
                }}>
                  {/* Timeline Dot */}
                  <div style={{ 
                    position: "absolute", 
                    left: "-32px", 
                    top: "24px", 
                    width: "16px", 
                    height: "16px", 
                    borderRadius: "50%", 
                    background: "var(--bg-primary)",
                    border: "3px solid var(--accent-blue)",
                    boxShadow: "0 0 10px var(--accent-blue)",
                    zIndex: 2
                  }}></div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px", flexWrap: "wrap", gap: "10px" }}>
                    <div>
                      <h4 style={{ color: "white", fontSize: "1.1rem", fontWeight: 700 }}>{job.role}</h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <p style={{ color: "var(--accent-blue)", fontWeight: 600, fontSize: "0.9rem" }}>{job.company}</p>
                        {job.location && (
                          <>
                            <span style={{ color: "#475569", fontSize: "0.8rem" }}>•</span>
                            <span style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 500 }}>{job.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="tag" style={{ fontSize: "0.75rem" }}>{job.period}</span>
                  </div>
                  
                  {/* Description Render */}
                  <div style={{ marginTop: "12px" }}>
                    {Array.isArray(job.description) ? (
                      <ul style={{ 
                        padding: 0, 
                        margin: 0, 
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}>
                        {job.description.map((point: string, pIdx: number) => (
                          <li key={pIdx} style={{ 
                            color: "#94a3b8", 
                            fontSize: "0.88rem", 
                            lineHeight: 1.55,
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start"
                          }}>
                            <span style={{ color: "var(--accent-blue)", marginTop: "2px" }}>▹</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ 
                        color: "#94a3b8", 
                        fontSize: "0.88rem", 
                        lineHeight: 1.7, 
                        margin: 0,
                        textAlign: "justify",
                        position: "relative"
                      }}>
                        {job.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certificates */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* Education */}
            <div>
              <h3 style={{ 
                fontFamily: "var(--font-space)", 
                fontSize: "1.5rem", 
                fontWeight: 700, 
                color: "var(--accent-cyan)",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{ fontSize: "1.8rem" }}>🎓</span> {t.education}
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {t.eduItems.map((edu, index) => (
                  <div key={index} className="card animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                    <h4 style={{ color: "white", fontWeight: 700 }}>{edu.degree}</h4>
                    <p style={{ color: "var(--accent-cyan)", fontWeight: 500, fontSize: "0.9rem", margin: "4px 0" }}>{edu.school}</p>
                    <p style={{ color: "#475569", fontSize: "0.8rem" }}>{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 style={{ 
                fontFamily: "var(--font-space)", 
                fontSize: "1.5rem", 
                fontWeight: 700, 
                color: "#a78bfa",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{ fontSize: "1.8rem" }}>📜</span> {t.certificates}
              </h3>
              
              <div className="card animate-fadeInUp" style={{ 
                animationDelay: "0.4s",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px"
              }}>
                {t.certList.map((cert, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "10px",
                    background: "rgba(167, 139, 250, 0.05)",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(167, 139, 250, 0.1)"
                  }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa" }}></div>
                    <span style={{ color: "#cbd5e1", fontSize: "0.8rem", fontWeight: 500 }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .history-grid {
            gap: 32px !important;
          }
        }
        @media (max-width: 900px) {
          .history-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
