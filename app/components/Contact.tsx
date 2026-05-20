"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/aminju/",         icon: LinkedInIcon,  color: "#0a66c2" },
  { name: "GitHub",    href: "https://github.com/aminju14",                  icon: GithubIcon,    color: "#94a3b8" },
  { name: "Instagram", href: "https://www.instagram.com/aminju14",           icon: InstagramIcon, color: "#e1306c" },
  { name: "Email",     href: "mailto:muhammad.amin1406@gmail.com",           icon: MailIcon,      color: "#22d3ee" },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "120px 24px",
        borderTop: "1px solid rgba(59,130,246,0.1)",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(29,104,242,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-cyan)",
              marginBottom: "12px",
            }}
          >
            {t.sectionLabel}
          </span>

          <h2
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#f0f6ff",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            {t.title}
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 28px",
            }}
          >
            {t.description}
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "rgba(7,14,42,0.88)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.borderColor = s.color + "66";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 20px ${s.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.18)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(59,130,246,0.18)",
            borderRadius: "20px",
            padding: "40px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
          }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "40px 0" }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <CheckCircle size={32} color="#22c55e" />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f6ff", marginBottom: "8px" }}>
                {t.successTitle}
              </h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.7 }}>{t.successMessage}</p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-outline"
                style={{ marginTop: "24px", fontSize: "0.85rem", padding: "8px 20px" }}
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Name & Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="contact-name"
                    style={{ fontSize: "0.78rem", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {t.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    style={{
                      background: "rgba(59,130,246,0.04)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      color: "#f0f6ff",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.18)")}
                  />
                </div>

                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="contact-email"
                    style={{ fontSize: "0.78rem", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {t.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    style={{
                      background: "rgba(59,130,246,0.04)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      color: "#f0f6ff",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.18)")}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label
                  htmlFor="contact-message"
                  style={{ fontSize: "0.78rem", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  style={{
                    background: "rgba(59,130,246,0.04)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#f0f6ff",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                    lineHeight: 1.7,
                    fontFamily: "Inter, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.18)")}
                />
              </div>

              {/* Error state */}
              {status === "error" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 16px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: "10px",
                    color: "#fca5a5",
                    fontSize: "0.875rem",
                  }}
                >
                  <AlertCircle size={16} />
                  {t.errorMessage}
                </div>
              )}

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary"
                  style={{
                    fontSize: "0.9rem",
                    padding: "12px 28px",
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ animation: "spin 1s linear infinite" }}
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.submit}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 600px) {
          #contact form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
