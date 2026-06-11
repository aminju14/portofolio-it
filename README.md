# Muhammad Amin — Personal Portfolio

> **Software Engineer & AI System Architect** with 9+ years of experience building scalable mobile and backend systems.

A modern, bilingual (🇬🇧 EN / 🇮🇩 ID) personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. Showcasing professional experience, system architecture, featured projects, and a working contact form.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)](https://framer.com/motion)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Sections & Components](#sections--components)
- [Projects Showcased](#projects-showcased)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🌐 Overview

This portfolio is built as a full-stack **Next.js App Router** application with server-side API routes, dynamic project pages, and a fully bilingual UI (English/Indonesian). The design follows a **dark glassmorphism** aesthetic with cyan and purple accent colors, animated with **Framer Motion** for scroll-triggered and entrance animations.

Key goals:
- Present professional experience and projects in a polished, modern interface
- Support bilingual visitors (EN/ID) with seamless language switching
- Provide a functional contact channel via Nodemailer-powered email API
- Enable easy CV download directly from the navbar

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌍 **Bilingual UI** | Full English and Indonesian language support with context-based switching |
| 🎨 **Dark Glassmorphism** | Dark theme with translucent card surfaces, cyan/purple accents |
| 📱 **Responsive Design** | Mobile-first layout adapting to all screen sizes |
| 🎞️ **Animations** | Framer Motion entrance, scroll-triggered, and hover micro-animations |
| 📬 **Contact Form** | Nodemailer-powered server API route to send email directly |
| 📄 **CV Download** | One-click PDF resume download from the navbar |
| 🗂️ **Project Detail Pages** | Dynamic routes (`/projects/[slug]`) for per-project case studies |
| 🔍 **SEO Ready** | Metadata, Open Graph tags, and `metadataBase` configured in `layout.tsx` |
| 🖼️ **Custom Icons** | Lucide React icon library throughout the UI |

---

## 🚀 Live Demo

> _Deployed on Vercel — link updated after deployment._

---

## 📁 Project Structure

```
portofolio-it/
├── app/
│   ├── api/
│   │   └── contact/           # POST /api/contact — Nodemailer email handler
│   ├── components/
│   │   ├── BackToTop.tsx      # Floating back-to-top button
│   │   ├── BuildSystems.tsx   # Build/CI systems section
│   │   ├── Contact.tsx        # Contact form + social links
│   │   ├── Expertise.tsx      # Skills & expertise with level indicators
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Landing hero section
│   │   ├── Navbar.tsx         # Top navigation with lang switch & CV download
│   │   ├── ProfessionalHistory.tsx  # Work timeline, education, certifications
│   │   ├── ProjectHighlight.tsx     # Featured projects with metrics
│   │   ├── RestuqueDemo.tsx   # Interactive demo for Restuque project
│   │   ├── SystemArchitecture.tsx   # Tech stack architecture overview
│   │   └── hero/              # Hero sub-components
│   ├── context/               # React context (e.g., LanguageContext)
│   ├── data/                  # Static data: projects, experience, skills
│   ├── images/                # Optimized images used in the app
│   ├── projects/              # Dynamic project detail pages ([slug])
│   ├── globals.css            # Global styles & Tailwind base
│   ├── layout.tsx             # Root layout with metadata & fonts
│   └── page.tsx               # Home page — assembles all sections
├── public/                    # Static assets (favicon, CV PDF, OG image)
├── generate-cv.js             # Script to generate PDF CV with PDFKit
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

---

## 🧩 Sections & Components

### Hero
- Full-screen landing with animated greeting, name, role, and status badge
- CTA buttons linking to Projects and Contact sections
- Subtle background gradient animation

### Navbar
- Sticky top navigation with smooth scroll links
- Language toggle (EN ↔ ID)
- CV download button (PDF served from `/public`)
- Mobile hamburger menu

### Professional History
- Timeline-style work experience list (company, role, period, highlights)
- Education and certification cards
- Scroll-triggered fade-in animations

### Project Highlights
- Responsive card grid of featured projects
- Each card shows: tech stack badges, impact metrics, and a "View Details" link
- Links to dynamic route `/projects/[slug]` for full case studies

### System Architecture
- Visual diagram of tech stack categories: Mobile, Backend, AI/ML, Dashboards
- Icon-based tech tiles grouped by domain

### Expertise
- Skill categories (Frontend, Backend, Mobile, DevOps, AI/ML)
- Progress-style level indicators per skill

### Contact
- Server-validated contact form (name, email, message)
- Submits to `POST /api/contact` → Nodemailer → sends email
- Social links: GitHub, LinkedIn, Email

### Footer
- Quick nav links, social icons, copyright

---

## 🗂️ Projects Showcased

| # | Project | Stack | Highlights |
|---|---|---|---|
| 1 | **Restuque Mobile Approval System** | React Native, RabbitMQ, Node.js | Enterprise event-driven approval gateway |
| 2 | **AI Assistant Chat System** | OpenAI, Node.js, PostgreSQL | Internal knowledge chatbot with RAG pipeline |
| 3 | **Task Management Mobile App** | React Native, Firebase | Cross-platform, offline-first architecture |
| 4 | **Sales Dashboard & Analytics** | Next.js, MongoDB, D3.js | Real-time BI dashboard with live charts |
| 5 | **Automated Content Scraping** | Node.js, Puppeteer, Redis | Industrial-grade web scraper with queue system |

---

## 🛠️ Tech Stack

### Framework & Language
| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | Full-stack React framework (App Router) |
| React | 19.2.4 | UI component library |
| TypeScript | ^5 | Type-safe development |

### Styling & Animation
| Tool | Version | Purpose |
|---|---|---|
| Tailwind CSS | ^4 | Utility-first styling |
| Framer Motion | ^12.38.0 | Animations & transitions |
| Lucide React | ^1.8.0 | Icon library |

### Backend / API
| Tool | Version | Purpose |
|---|---|---|
| Nodemailer | ^8.0.6 | Email sending via contact form API |
| PDFKit | ^0.18.0 | CV/resume PDF generation script |

### Fonts
- **Inter** — body text
- **Space Grotesk** — headings

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/aminju14/portofolio-it.git
cd portofolio-it

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root. This is required for the **contact form** to work:

```env
# SMTP credentials for Nodemailer
EMAIL_USER=your@gmail.com       # Sender email address
EMAIL_PASS=your_app_password    # Gmail App Password (not your account password)
EMAIL_TO=your@email.com         # Recipient email address
```

> **Note:** For Gmail, you must generate an [App Password](https://support.google.com/accounts/answer/185833) with 2FA enabled. Never commit `.env.local` to version control.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Start development server at localhost:3000 |
| Build | `npm run build` | Build production bundle |
| Start | `npm run start` | Serve the production build |
| Lint | `npm run lint` | Run ESLint |
| Generate CV | `node generate-cv.js` | Re-generate the PDF CV in `/public` |

---

## 🌍 Deployment

This project is optimized for deployment on **[Vercel](https://vercel.com)**.

### Steps

1. Push the repo to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Add the environment variables (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) in Vercel project settings
4. Deploy — Vercel auto-builds on every push to `main`

### Post-Deploy: Update metadataBase

After deploying, update the `metadataBase` URL in [`app/layout.tsx`](./app/layout.tsx):

```ts
metadataBase: new URL("https://your-vercel-url.vercel.app"),
```

This ensures Open Graph and Twitter card images resolve correctly.

---

## 📬 Contact

**Muhammad Amin**
- 📧 Email: [amin.workspace2026@gmail.com](mailto:amin.workspace2026@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/aminju](https://linkedin.com/in/aminju)
- 🐙 GitHub: [github.com/aminju14](https://github.com/aminju14)

---

<p align="center">Built with ❤️ using Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
