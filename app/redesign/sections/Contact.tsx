"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { Send, CheckCircle, AlertCircle, Mail, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { contact, site } from "../content";

type Status = "idle" | "loading" | "success" | "error";

// This lucide-react version ships no brand glyphs, so LinkedIn/GitHub are inline SVGs.
const LinkedinIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const GithubIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const inputClass =
  "rs-focus w-full rounded-[10px] border border-hairline-strong bg-surface px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-4 transition-colors focus:border-brand";

const channels: { label: string; href: string; Icon: ComponentType<{ size?: number }>; external: boolean }[] = [
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon, external: true },
  { label: "GitHub", href: site.social.github, Icon: GithubIcon, external: true },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: contact.projectTypes[0],
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Fold project type into the message — keeps the existing /api/contact contract intact.
      const message = `Project type: ${form.projectType}\n\n${form.message}`;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", projectType: contact.projectTypes[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-surface-2 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Pitch + channels */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.headline}
              subtitle={contact.subheadline}
            />
            <Reveal delay={120}>
              <ul className="flex flex-col gap-3">
                {channels.map(({ label, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="rs-focus inline-flex items-center gap-3 text-ink-2 transition-colors hover:text-ink"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-hairline bg-surface text-brand">
                        <Icon size={16} />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={site.fastworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rs-focus inline-flex items-center gap-1.5 pl-12 text-sm font-medium text-brand"
                  >
                    Find me on Fastwork
                    <ArrowUpRight size={14} className="rs-arrow" />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={80}>
            <div className="rounded-[16px] border border-hairline bg-surface p-7 shadow-[0_8px_24px_rgba(17,20,24,0.05)] sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-subtle text-brand">
                    <CheckCircle size={28} />
                  </span>
                  <p className="text-lg font-medium text-ink">{contact.success}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rs-focus mt-6 text-sm font-medium text-brand hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-name" className="text-[0.8rem] font-medium text-ink-3">
                        Name
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-email" className="text-[0.8rem] font-medium text-ink-3">
                        Email
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="c-type" className="text-[0.8rem] font-medium text-ink-3">
                      Project type
                    </label>
                    <select
                      id="c-type"
                      name="projectType"
                      value={form.projectType}
                      onChange={update("projectType")}
                      className={inputClass}
                    >
                      {contact.projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="c-message" className="text-[0.8rem] font-medium text-ink-3">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell me about your project or idea…"
                      className={`${inputClass} resize-y leading-relaxed`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="flex items-center gap-2 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle size={16} />
                      {contact.error}
                    </p>
                  )}

                  <div className="flex justify-end">
                    <Button type="submit" size="lg" disabled={status === "loading"}>
                      {status === "loading" ? (
                        contact.submitting
                      ) : (
                        <>
                          <Send size={16} />
                          {contact.submit}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
