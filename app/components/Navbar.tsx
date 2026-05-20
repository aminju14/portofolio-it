"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const navLinks = [
    { label: t.about, href: "/", id: "about" },
    { label: t.professional, href: "/#history", id: "history" },
    { label: t.projects, href: "/projects", id: "projects" },
    { label: t.contact, href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Active Section Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Focus on sections near the top/middle
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Only observe if we are on the home page
    if (pathname === "/") {
      const sections = ["about", "history", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled
          ? "rgba(2, 11, 24, 0.95)"
          : "rgba(2, 11, 24, 0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(59, 130, 246, 0.15)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          {/* Small Profile Image */}
          <div style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.2))",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)",
          }}>
            {!imgError ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img 
                src="/images/profile.png" 
                alt="Profile" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={() => setImgError(true)}
              />
            ) : (
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>👤</span>
            )}
          </div>

          <span
            style={{
              fontFamily: "var(--font-space)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#f0f6ff",
              letterSpacing: "-0.01em",
            }}
          >
            Muhammad Amin
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive =
              link.id === "projects"
                ? pathname === "/projects"
                : pathname === "/" && activeSection === link.id;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.id === "about" && pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  color: isActive ? "#3b82f6" : "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  borderBottom: "2px solid",
                  borderColor: isActive ? "#3b82f6" : "transparent",
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Language Toggle */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(59, 130, 246, 0.05)",
            padding: "4px",
            borderRadius: "20px",
            border: "1px solid rgba(59, 130, 246, 0.1)",
            fontSize: "0.75rem",
            fontWeight: 700
          }}>
            <button
              onClick={() => setLanguage("en")}
              style={{
                padding: "4px 8px",
                borderRadius: "16px",
                background: language === "en" ? "#3b82f6" : "transparent",
                color: language === "en" ? "white" : "#94a3b8",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              style={{
                padding: "4px 8px",
                borderRadius: "16px",
                background: language === "id" ? "#3b82f6" : "transparent",
                color: language === "id" ? "white" : "#94a3b8",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              ID
            </button>
          </div>

          <a href="/CV_Muhammad_Amin.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2" style={{ fontSize: "0.85rem", padding: "8px 12px" }}>
            <span className="hidden sm:inline">{language === 'id' ? 'Unduh CV' : 'Download CV'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:ml-1">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 8,
              padding: "6px 8px",
              cursor: "pointer",
              color: "#94a3b8",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(2, 11, 24, 0.98)",
            borderTop: "1px solid rgba(59, 130, 246, 0.15)",
            padding: "16px 24px",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.id === "projects"
                ? pathname === "/projects"
                : pathname === "/" && activeSection === link.id;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMenuOpen(false);
                  if (link.id === "about" && pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                style={{
                  display: "block",
                  padding: "16px 0",
                  color: isActive ? "#3b82f6" : "#94a3b8",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderBottom: isActive ? "2px solid #3b82f6" : "1px solid rgba(59, 130, 246, 0.05)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
