# Muhammad Amin — Portfolio

Personal portfolio website of **Muhammad Amin**, Software Engineer & AI System Architect with 9+ years of experience building scalable mobile and backend systems.

## Overview

A modern, bilingual (EN/ID) portfolio built with Next.js, showcasing professional experience, projects, and expertise in software engineering and AI development.

## Features

- **Bilingual support** — full English and Indonesian language switching
- **Dark theme** — glassmorphism design with cyan/purple accent colors
- **Responsive** — mobile-first layout
- **Animated** — Framer Motion transitions and scroll-triggered animations
- **Contact form** — integrated with Nodemailer for direct email
- **CV download** — PDF resume accessible from navbar
- **Project pages** — dynamic routes with case study detail per project

## Sections

| Section | Description |
|---|---|
| Hero | Introduction, role, status badge, CTA buttons |
| Professional History | Work experience timeline, education, certifications |
| Project Highlights | Featured projects with impact metrics |
| System Architecture | Tech stack categories (Mobile, Backend, AI, Dashboards) |
| Expertise | Skill categories with level indicators |
| Contact | Contact form + social links |

## Projects Showcased

1. **Restuque Mobile Approval System** — Enterprise event-driven approval gateway (React Native, RabbitMQ, Node.js)
2. **AI Assistant Chat System** — Internal knowledge chatbot with RAG pipeline (OpenAI, Node.js, PostgreSQL)
3. **Task Management Mobile App** — Cross-platform app with offline-first architecture (React Native, Firebase)
4. **Sales Dashboard & Analytics Platform** — Real-time BI dashboard (Next.js, MongoDB, D3.js)
5. **Automated Content Scraping System** — Industrial-grade web scraper (Node.js, Puppeteer, Redis)

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS 4
- **Animation** — Framer Motion
- **Email** — Nodemailer
- **Fonts** — Inter, Space Grotesk (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Environment Variables

Create a `.env.local` file for the contact form:

```env
EMAIL_USER=your@email.com
EMAIL_PASS=your_app_password
EMAIL_TO=your@email.com
```

## Deployment

Deployed on [Vercel](https://vercel.com). Update the `metadataBase` URL in `app/layout.tsx` after deploying:

```ts
metadataBase: new URL("https://your-vercel-url.vercel.app"),
```

## Contact

- Email: amin.muhammad0614@gmail.com
- LinkedIn: [linkedin.com/in/aminju](https://linkedin.com/in/aminju)
