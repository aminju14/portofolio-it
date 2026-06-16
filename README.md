# MinLabs — Software Studio

> A software studio building production mobile, backend, and AI systems for startups and businesses. Founded by **Muhammad Amin**.

The marketing site for MinLabs — a single-page studio site with an app showcase (live on Google Play & the App Store) and a working contact form. Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Apps Showcased](#apps-showcased)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🌐 Overview

A focused, single-page **Next.js App Router** site positioning MinLabs as a software studio. It leads with what the studio builds, backs it with apps that are live in the stores, and closes with a contact form wired to a server-side email API.

Detailed engineering case studies live on the founder's personal site ([aminju.vercel.app](https://aminju.vercel.app)) — this site keeps the focus on the studio and its shipped products.

Key goals:
- Present MinLabs as a credible studio, with Muhammad Amin as founder
- Prove it with real apps in production (store links + ratings)
- Provide a working contact channel via a Nodemailer-powered API
- Stay light: one language (English), no case-study pages to maintain

---

## ✨ Features

| Feature | Description |
|---|---|
| 🛍️ **App Showcase** | Uniform grid of shipped apps with icons, ratings, and adaptive Google Play / App Store buttons |
| 🎨 **Light-first Design** | Clean light theme with a dark app-showcase and footer for contrast |
| 📱 **Responsive Design** | Mobile-first layout adapting to all screen sizes |
| 📬 **Contact Form** | Nodemailer-powered server API route to send email directly |
| 🔍 **SEO Ready** | Metadata, Open Graph image, JSON-LD (Organization + apps), sitemap & robots |
| 🖼️ **Custom Icons** | Lucide React icon library throughout the UI |

---

## 🚀 Live Demo

> _Deployed on Vercel — production domain: **minlabs.id** (link updated after DNS is connected)._

---

## 📁 Project Structure

```
portofolio-it/
├── app/
│   ├── api/
│   │   └── contact/             # POST /api/contact — Nodemailer email handler
│   ├── redesign/                # The site's UI layer
│   │   ├── sections/            # Page sections, assembled in page.tsx
│   │   │   ├── Navbar.tsx        # Sticky nav with the brand logo
│   │   │   ├── Hero.tsx          # Landing statement + CTAs
│   │   │   ├── Stats.tsx         # Headline metrics / proof points
│   │   │   ├── Services.tsx      # What the studio builds
│   │   │   ├── Process.tsx       # How work is delivered
│   │   │   ├── FeaturedWork.tsx  # App showcase grid (store links + ratings)
│   │   │   ├── About.tsx         # Studio narrative + founder block
│   │   │   ├── Contact.tsx       # Contact form + social links
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   └── StickyMobileCta.tsx   # Persistent mobile CTA bar
│   │   ├── ui/                   # Reusable primitives (Button, Badge, Container, Reveal, …)
│   │   └── content.ts           # All site copy & app data (single source of truth)
│   ├── globals.css              # Tailwind v4 theme tokens & global styles
│   ├── layout.tsx               # Root layout, metadata & fonts
│   ├── page.tsx                 # Home page — assembles the sections + JSON-LD
│   ├── opengraph-image.tsx      # Dynamic Open Graph image
│   ├── icon.png                 # Favicon
│   ├── robots.ts                # robots.txt route
│   └── sitemap.ts               # sitemap.xml route
├── public/                      # Static assets (CV PDF, app icons, brand logos, portrait)
├── scripts/
│   └── make-favicon.js          # Generate app/icon.png
├── generate-cv.js               # Generate the PDF CV with PDFKit
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
├── postcss.config.mjs           # PostCSS / Tailwind configuration
└── package.json
```

> **Note:** All copy and the app list live in `app/redesign/content.ts` — edit there, not in the components. Tailwind v4 uses CSS-based config: theme tokens are defined in `app/globals.css`, so there is no `tailwind.config.ts`.

---

## 🧩 Page Sections

The home page (`app/page.tsx`) is assembled from sections in `app/redesign/sections/`, in the order: **who → proof → what you offer → apps → about → close.**

| Section | Purpose |
|---|---|
| **Navbar** | Sticky nav with the MinLabs logo and smooth-scroll links |
| **Hero** | Studio statement and primary CTAs |
| **Stats** | Headline metrics / proof points |
| **Services** | What you can hire the studio to build |
| **Process** | How work is delivered, step by step |
| **FeaturedWork** | App showcase grid — each card links to the store(s) the app is on |
| **About** | Studio narrative with a "Founded by Muhammad Amin" block |
| **Contact** | Validated form → `POST /api/contact` → Nodemailer; social links |
| **Footer** | Quick nav, social icons, copyright |
| **StickyMobileCta** | Persistent call-to-action bar on mobile |

Shared primitives (Button, Badge, Container, Reveal, etc.) live in `app/redesign/ui/`.

---

## 🛍️ Apps Showcased

Apps live in the stores and shown in the **FeaturedWork** grid (data in `content.ts`):

| App | Category | Stores | Rating |
|---|---|---|---|
| **Restuque** | Enterprise · Approval | Google Play · App Store | ⭐ 5.0 |
| **One Click** | Agriculture · Mobile | Google Play · App Store | ⭐ 4.8 |
| **Priksa** | Field Ops · Mobile | Google Play | ⭐ 4.6 |
| **Mobile Inspection** | Field Ops · Mobile | Google Play | ⭐ 4.3 |
| **eHarvesting** | Agriculture · Mobile | Google Play | ⭐ 4.2 |
| **GudangKU** | Warehouse · Mobile | Google Play | — |

Each card renders store buttons adaptively — only the stores an app is actually on appear.

---

## 🛠️ Tech Stack

### Framework & Language
| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | Full-stack React framework (App Router) |
| React | 19.2.4 | UI component library |
| TypeScript | ^5 | Type-safe development |

### Styling
| Tool | Version | Purpose |
|---|---|---|
| Tailwind CSS | ^4 | Utility-first styling (CSS-based theme config) |
| Lucide React | ^1.8.0 | Icon library |

### Backend / Tooling
| Tool | Version | Purpose |
|---|---|---|
| Nodemailer | ^8.0.6 | Email sending via the contact form API |
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
git clone https://github.com/aminju14/portofolio-it.git
cd portofolio-it
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root. Required for the **contact form** to work:

```env
# SMTP credentials for Nodemailer
EMAIL_USER=your@gmail.com       # Sender email address
EMAIL_PASS=your_app_password    # Gmail App Password (not your account password)
EMAIL_TO=your@email.com         # Recipient email address
```

> **Note:** For Gmail, generate an [App Password](https://support.google.com/accounts/answer/185833) with 2FA enabled. Never commit `.env.local`.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Start the development server at localhost:3000 |
| Build | `npm run build` | Build the production bundle |
| Start | `npm run start` | Serve the production build |
| Lint | `npm run lint` | Run ESLint |
| Generate CV | `node generate-cv.js` | Re-generate the PDF CV in `/public` |
| Generate favicon | `node scripts/make-favicon.js` | Re-generate `app/icon.png` |

---

## 🌍 Deployment

Optimized for **[Vercel](https://vercel.com)**.

1. Push the repo to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Add the environment variables (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) in Vercel project settings
4. Deploy — Vercel auto-builds on every push
5. Add the custom domain (`minlabs.id`) under **Settings → Domains** and point DNS as Vercel instructs

The production URL is configured as `metadataBase` in [`app/layout.tsx`](./app/layout.tsx) (`https://minlabs.id`) so Open Graph and canonical URLs resolve correctly.

---

## 📬 Contact

**MinLabs** — founded by Muhammad Amin
- 📧 Email: [amin.workspace2026@gmail.com](mailto:amin.workspace2026@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/aminju](https://linkedin.com/in/aminju)
- 🐙 GitHub: [github.com/aminju14](https://github.com/aminju14)
- 🌐 Founder's profile: [aminju.vercel.app](https://aminju.vercel.app)

---

<p align="center">Built with Next.js · TypeScript · Tailwind CSS</p>
