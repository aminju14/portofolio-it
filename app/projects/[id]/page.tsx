"use client";

import { projects } from "../../data/projects";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import RestuqueDemo from "../../components/RestuqueDemo";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  if (!project) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-primary)", color: "white" }}>
        <div>
          <h1>Project Not Found</h1>
          <Link href="/projects" className="btn-outline" style={{ marginTop: "20px" }}>Back to Projects</Link>
        </div>
      </div>
    );
  }

  const content = project.locales[language];

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        {/* Project Hero */}
        <div style={{ 
          position: "relative", 
          height: "60vh", 
          width: "100%", 
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-secondary)"
        }}>
          <img 
            src={project.image} 
            alt={content.title} 
            style={{ 
              position: "absolute", 
              width: "100%", 
              height: "100%", 
              objectFit: "cover", 
              opacity: 0.3, 
              filter: "blur(5px)" 
            }} 
          />
          <div className="section-container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <div className="animate-fadeInUp">
               <span className="tag" style={{ marginBottom: "20px" }}>{project.category}</span>
               <h1 style={{ 
                 fontFamily: "var(--font-space)", 
                 fontSize: "clamp(2.5rem, 8vw, 4.5rem)", 
                 fontWeight: 800, 
                 color: "white",
                 marginBottom: "16px",
                 lineHeight: 1.1
               }}>
                 {content.title}
               </h1>
               <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                 {project.tags.map(tag => (
                   <span key={tag} className="tech-badge" style={{ fontSize: "0.9rem", padding: "6px 16px" }}>{tag}</span>
                 ))}
               </div>
            </div>
          </div>
          <div style={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            right: 0, 
            height: "150px", 
            background: "linear-gradient(transparent, var(--bg-primary))" 
          }}></div>
        </div>

        <div className="section-container" style={{ marginTop: "-80px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 lg:gap-[60px]">
            
            {/* Main Content */}
            <div className="order-2 lg:order-1 flex flex-col gap-[48px]">
              <section className="card animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                <h2 style={{ fontFamily: "var(--font-space)", marginBottom: "20px", color: "var(--accent-blue-bright)" }}>{t.overview}</h2>
                <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: 1.8 }}>
                  {content.fullDescription}
                </p>
              </section>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="split-layout">
                <section className="card animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                  <h3 style={{ fontFamily: "var(--font-space)", marginBottom: "16px", color: "#fca5a5", display: "flex", alignItems: "center", gap: "12px" }}>
                    {t.challenges}
                  </h3>
                  <p style={{ color: "#94a3b8" }}>{content.challenges}</p>
                </section>

                <section className="card animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                  <h3 style={{ fontFamily: "var(--font-space)", marginBottom: "16px", color: "#86efac", display: "flex", alignItems: "center", gap: "12px" }}>
                    {t.solutions}
                  </h3>
                  <p style={{ color: "#94a3b8" }}>{content.solutions}</p>
                </section>
              </div>

              <section className="card animate-fadeInUp" style={{ animationDelay: "0.5s", borderLeft: "4px solid var(--accent-green)" }}>
                <h2 style={{ fontFamily: "var(--font-space)", marginBottom: "16px", color: "var(--accent-green)" }}>{t.impact}</h2>
                <p style={{ fontSize: "1.2rem", fontWeight: 500, color: "white" }}>
                  {content.impact}
                </p>
              </section>

              {/* System Architecture Section */}
              {content.architecture && project.architectureImage && (
                <section className="card animate-fadeInUp" style={{ animationDelay: "0.6s", marginTop: "16px", padding: 0, overflow: "hidden" }}>
                  {/* Header Unified Inside the Card */}
                  <div style={{ padding: "32px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(15, 23, 42, 0.3)" }}>
                    <h2 style={{ fontFamily: "var(--font-space)", margin: 0, fontSize: "1.6rem", color: "white", display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "1.1rem", padding: "8px 10px", background: "rgba(34, 211, 238, 0.1)", color: "var(--accent-cyan)", borderRadius: "10px", border: "1px solid rgba(34, 211, 238, 0.2)" }}>⚙️</span> 
                      System Architecture
                    </h2>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column" }} className="architecture-layout">
                    {/* TOP: Diagram Image */}
                    <div style={{ 
                      background: "linear-gradient(145deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.1))", 
                      padding: "48px 32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}>
                      <div 
                        style={{ position: "relative", width: "100%", maxWidth: "900px", borderRadius: "8px", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease", display: "flex", alignItems: "center", justifyContent: "center" }}
                        onClick={() => setIsImageViewerOpen(true)}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; const overlay = e.currentTarget.querySelector('.img-overlay') as HTMLElement; if (overlay) overlay.style.opacity = '1'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; const overlay = e.currentTarget.querySelector('.img-overlay') as HTMLElement; if (overlay) overlay.style.opacity = '0'; }}
                      >
                        <img 
                          src={project.architectureImage} 
                          alt="System Architecture Diagram" 
                          style={{ width: "100%", height: "auto", objectFit: "contain", mixBlendMode: "lighten", display: "block" }}
                        />
                        <div className="img-overlay" style={{ position: "absolute", inset: 0, background: "rgba(15, 23, 42, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease" }}>
                          <span style={{ padding: "12px 24px", background: "rgba(34, 211, 238, 0.2)", color: "var(--accent-cyan)", borderRadius: "30px", border: "1px solid var(--accent-cyan)", backdropFilter: "blur(4px)", fontWeight: "bold" }}>
                            🔍 View Full Image
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* BOTTOM: Explanation Content */}
                    <div style={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      gap: "28px",
                      background: "rgba(255, 255, 255, 0.01)",
                      padding: "40px 32px 48px 32px",
                      width: "100%",
                      maxWidth: "800px",
                      margin: "0 auto"
                    }}>
                      {/* Short Description */}
                      <p style={{ fontSize: "1.1rem", color: "#e2e8f0", lineHeight: 1.6, borderLeft: "3px solid var(--accent-cyan)", paddingLeft: "16px", margin: 0 }}>
                        {content.architecture.description}
                      </p>
                      
                      {/* Overview */}
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.05rem", marginBottom: "12px", fontFamily: "var(--font-space)" }}>Architecture Overview</h4>
                        <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                          {content.architecture.overview}
                        </p>
                      </div>
                      
                      {/* Key Components */}
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.05rem", marginBottom: "12px", fontFamily: "var(--font-space)" }}>Key Components</h4>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0, paddingLeft: "0", listStyle: "none" }}>
                          {content.architecture.keyComponents.map((item, i) => (
                            <li key={i} style={{ color: "#cbd5e1", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "10px" }}>
                              <span style={{ color: "var(--accent-cyan)", fontSize: "0.6rem" }}>●</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Flow Summary */}
                      <div style={{ marginTop: "auto", padding: "16px", background: "rgba(34, 211, 238, 0.05)", border: "1px solid rgba(34, 211, 238, 0.15)", borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "var(--accent-cyan)", boxShadow: "0 0 10px var(--accent-cyan)" }}></div>
                        <h4 style={{ color: "var(--accent-cyan)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: "bold" }}>Flow Summary</h4>
                        <p style={{ color: "white", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                          {content.architecture.flow}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="order-1 lg:order-2 flex flex-col gap-[32px]">
               <div className="card animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                 <h4 style={{ color: "#94a3b8", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>
                   {project.id === "restuque" ? "Interactive Demo" : "The Visual"}
                 </h4>
                 
                 {project.id === "restuque" ? (
                   <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                     <RestuqueDemo />
                   </div>
                 ) : (
                   <div style={{ 
                     aspectRatio: "1/1", 
                     borderRadius: "12px", 
                     background: "rgba(0,0,0,0.3)", 
                     display: "flex", 
                     alignItems: "center", 
                     justifyContent: "center",
                     overflow: "hidden",
                     border: "1px solid var(--border-blue)"
                   }}>
                     <img src={project.image} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                   </div>
                 )}
                 {project.id === "restuque" && (
                   <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#94a3b8", marginTop: "8px" }}>
                     💡 Click around and swipe transactions left/right to try!
                   </div>
                 )}
               </div>

               {(project.playStoreUrl || project.appStoreUrl) && (
                 <div className="card animate-fadeInUp" style={{ animationDelay: "0.45s", background: "rgba(34, 197, 94, 0.05)", borderColor: "rgba(34, 197, 94, 0.25)" }}>
                   <h4 style={{ color: "#86efac", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>{t.downloads}</h4>
                   <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                     {project.playStoreUrl && (
                       <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", background: "#22c55e", display: "flex", gap: "8px", alignItems: "center" }}>
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M3.18 23.76c.3.17.64.24.99.19l12.87-11.95-3.47-3.47L3.18 23.76zM.13 1.34C.05 1.58 0 1.84 0 2.13v19.74c0 .29.05.55.13.79l.07.07 11.06-11.06v-.27L.2 1.27l-.07.07zM20.46 10.35l-2.94-1.7-3.33 3.35 3.33 3.35 2.96-1.71c.84-.49.84-1.29-.02-1.79zM4.17.24L17.04 12.19l-3.47 3.47L3.18.29c.3-.17.67-.22.99-.05z"/>
                         </svg>
                         {t.googlePlay}
                       </a>
                     )}
                     {project.appStoreUrl && (
                       <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", background: "#3b82f6", display: "flex", gap: "8px", alignItems: "center" }}>
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.16 1.26-2.14 3.76.03 2.99 2.62 3.99 2.65 4-.03.07-.41 1.4-1.36 2.76M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                         </svg>
                         {t.appStore}
                       </a>
                     )}
                   </div>
                 </div>
               )}

               <div className="card animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
                 <h4 style={{ color: "#94a3b8", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>Stack Info</h4>
                 <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                   {project.tags.map(tag => (
                     <div key={tag} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                       <div className="pipeline-dot" style={{ width: "8px", height: "8px" }}></div>
                       <span style={{ color: "#f0f6ff", fontSize: "0.95rem" }}>{tag}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <Link href="/projects" className="btn-outline" style={{ justifyContent: "center", width: "100%" }}>
                 ← {t.backToProjects}
               </Link>
            </aside>

          </div>
        </div>
      </main>
      <Footer />

      {/* Fullscreen Image Viewer Modal */}
      {isImageViewerOpen && (
        <div 
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(5px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", opacity: 1, animation: "fadeIn 0.2s ease" }}
          onClick={() => setIsImageViewerOpen(false)}
        >
          <div style={{ position: "absolute", top: "30px", right: "30px", cursor: "pointer", color: "white", background: "rgba(255,255,255,0.1)", width: "45px", height: "45px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", border: "1px solid rgba(255,255,255,0.2)", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
            ✕
          </div>
          <img 
            src={project.architectureImage} 
            alt="Full Architecture" 
            style={{ maxWidth: "95vw", maxHeight: "95vh", objectFit: "contain", borderRadius: "12px", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <style>{`
        .detail-layout {
          grid-template-columns: 1fr 350px;
        }
        @media (max-width: 1024px) {
          .detail-layout { grid-template-columns: 1fr; }
          .split-layout { grid-template-columns: 1fr; }
          .architecture-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
