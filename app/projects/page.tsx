"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

import { projects } from "../data/projects";
import Link from "next/link";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const categories = ["All", "Mobile Apps", "AI Systems", "Backend Systems"];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "30px", minHeight: "100vh" }}>
        <div className="section-container">
          <div style={{ marginBottom: "60px" }}>
            <h1 style={{ fontFamily: "var(--font-space)", fontSize: "3rem", fontWeight: 800, color: "#f0f6ff", marginBottom: "12px" }}>
              {t.title}
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>
              {t.subtitle}
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#3b82f6" : "rgba(59, 130, 246, 0.1)",
                  background: activeCategory === cat ? "#3b82f6" : "rgba(59, 130, 246, 0.05)",
                  color: activeCategory === cat ? "white" : "#94a3b8",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.2s"
                }}
              >
                {cat === "All" ? t.filterAll : cat}
              </button>
            ))}
          </div>

          {/* Project List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {filteredProjects.map(project => {
              const content = project.locales[language];
              return (
              <div 
                key={project.id} 
                className="card grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-8 p-5 md:p-8" 
              >
                {/* Image Placeholder */}
                <div style={{ 
                  background: "rgba(2, 11, 24, 0.5)", 
                  borderRadius: "12px", 
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative"
                }}>
                   <img 
                    src={project.image} 
                    alt={content.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                  />
                  {/* <div style={{ position: "absolute", fontSize: "2rem" }}>{project.icon}</div> */}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                  <Link href={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
                    <h3 style={{ 
                      fontFamily: "var(--font-space)", 
                      fontSize: "1.5rem", 
                      fontWeight: 700, 
                      color: "#f0f6ff",
                      transition: "color 0.2s",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-blue-bright)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#f0f6ff"}
                    >
                      {content.title}
                    </h3>
                  </Link>
                  <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                    {content.description}
                  </p>
                  
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px", marginBottom: "16px" }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                  </div>

                  <div className="mt-10 sm:mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-3">
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "7px 14px",
                            borderRadius: "8px",
                            border: "1px solid rgba(52,211,153,0.35)",
                            background: "rgba(52,211,153,0.07)",
                            color: "#6ee7b7",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "all 0.2s",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(52,211,153,0.15)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(52,211,153,0.07)"; }}
                        >
                          {/* Google Play icon */}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.18 23.76c.3.17.64.24.99.19l12.87-11.95-3.47-3.47L3.18 23.76zM.13 1.34C.05 1.58 0 1.84 0 2.13v19.74c0 .29.05.55.13.79l.07.07 11.06-11.06v-.27L.2 1.27l-.07.07zM20.46 10.35l-2.94-1.7-3.33 3.35 3.33 3.35 2.96-1.71c.84-.49.84-1.29-.02-1.79zM4.17.24L17.04 12.19l-3.47 3.47L3.18.29c.3-.17.67-.22.99-.05z"/>
                          </svg>
                          Google Play
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "7px 14px",
                            borderRadius: "8px",
                            border: "1px solid rgba(147,197,253,0.35)",
                            background: "rgba(147,197,253,0.07)",
                            color: "#93c5fd",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "all 0.2s",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(147,197,253,0.15)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(147,197,253,0.07)"; }}
                        >
                          {/* Apple App Store icon */}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.16 1.26-2.14 3.76.03 2.99 2.62 3.99 2.65 4-.03.07-.41 1.4-1.36 2.76M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          App Store
                        </a>
                      )}
                    </div>
                    <Link 
                      href={`/projects/${project.id}`}
                      className="hidden sm:inline-flex btn-outline w-full sm:w-auto text-center justify-center" 
                      style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}
                    >
                      {t.viewCaseStudy}
                    </Link>
                  </div>
                </div>
              </div>
            )})}
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "60px" }}>
             {[1, 2, 3].map(i => (
               <button 
                 key={i}
                 style={{
                   width: "36px",
                   height: "36px",
                   borderRadius: "4px",
                   border: "1px solid rgba(59, 130, 246, 0.1)",
                   background: i === 1 ? "#3b82f6" : "rgba(59, 130, 246, 0.05)",
                   color: i === 1 ? "white" : "#94a3b8",
                   cursor: "pointer"
                 }}
               >
                 {i}
               </button>
             ))}
             <button style={{ padding: "0 12px", height: "36px", background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}>Next</button>
          </div>
        </div>
      </main>
      <Footer />


      <style>{`
        @media (max-width: 900px) {
          .card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
