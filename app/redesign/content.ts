/**
 * Final approved homepage content (CONTENT-STRUCTURE.md).
 * Single source of truth for copy. English (primary locale of the redesign).
 *
 * Items marked `TODO(real-data)` use reasonable, honest placeholders that make
 * no false traction claims — replace with real content before launch.
 */

export const site = {
  name: "MinLabs", // brand/display name used across the site
  navName: "MinLabs", // brand shown in the navbar
  legalName: "MinLabs", // brand name for SEO & structured data
  founder: "Muhammad Amin", // founder, used as credibility across the site
  founderUrl: "https://aminju.vercel.app", // founder's personal profile / CV site
  positioning: "A software studio building production mobile, backend & AI systems.",
  url: "https://minlabs.id",
  email: "amin.workspace2026@gmail.com", // TODO(real-data): move to hello@minlabs.id once email is set up
  // Public Fastwork profile — all "Fastwork" links across the site point here.
  fastworkUrl: "https://fastwork.id/user/aminju.san",
  social: {
    linkedin: "https://www.linkedin.com/in/aminju/",
    github: "https://github.com/aminju14",
    instagram: "https://www.instagram.com/aminju14",
  },
} as const;

export const stats = {
  eyebrow: "Proven track record",
  headline: "Numbers that back the work.",
  items: [
    { value: "9+", label: "Years shipping software", sub: "Mobile · Backend · AI" },
    { value: "20+", label: "Apps in production", sub: "Play Store & App Store" },
    { value: "5+", label: "Legacy systems unified", sub: "Into single platforms" },
    { value: "3", label: "Companies served", sub: "Enterprise & startup" },
  ],
} as const;

export const hero = {
  eyebrow: "Software Studio · Mobile · Backend · AI",
  headline: "We build production mobile, backend, and AI systems for startups and businesses.",
  // Benefit-led, not a stat dump — the numbers live in the proof chips below.
  subheadline:
    "From idea to launch, we design and ship software that holds up in the real world — and keep it running after.",
  chips: ["9+ yrs experience", "20+ apps in production", "Mobile · Backend · AI"],
  ctaPrimary: { label: "Contact us", href: "#contact" },
  ctaSecondary: { label: "See our work", href: "#work" },
  // Technologies & practices we work with — drawn from real projects, then broadened.
  techEyebrow: "Technologies we work with",
  tech: [
    "React Native",
    "Flutter",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Next.js",
    "React",
    "FastAPI",
    "Laravel",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "RabbitMQ",
    "Realm",
    "Firebase",
    "LLM / RAG",
    "Claude",
    "OpenAI",
    "Tailwind CSS",
    "Docker",
    "GitLab CI/CD",
    "Clean Architecture",
    "Microservices",
  ],
  // Grouped into rows for the staggered per-row hero animation.
  techRows: [
    ["React Native", "Flutter", "TypeScript", "JavaScript"],
    ["Node.js", "Next.js", "React", "FastAPI", "Laravel", "Go"],
    ["PostgreSQL", "MongoDB", "RabbitMQ", "Realm", "Firebase"],
    ["LLM / RAG", "Claude", "OpenAI", "Tailwind CSS", "Docker"],
    ["GitLab CI/CD", "Clean Architecture", "Microservices"],
  ],
} as const;

export type Service = {
  icon: string;
  title: string;
  outcome: string;
  tags: string[];
};

export const services = {
  eyebrow: "Services",
  headline: "What you can hire us to build.",
  subheadline:
    "From idea to production — we design, build, and maintain the systems your business runs on.",
  cta: { label: "Have a project in mind? Let's talk", href: "#contact" },
  items: [
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      outcome: "Production React Native & Flutter apps your users keep using.",
      tags: ["React Native", "Flutter", "Offline-first"],
    },
    {
      icon: "Server",
      title: "Web & Backend Development",
      outcome: "Scalable APIs and business systems that don't break under load.",
      tags: ["Node.js", "Next.js", "PostgreSQL", "Event-driven"],
    },
    {
      icon: "Sparkles",
      title: "AI Solutions",
      outcome: "AI agents and assistants that do real work, not just chat.",
      tags: ["LLM", "RAG", "Automation"],
    },
    {
      icon: "Wrench",
      title: "Software Maintenance",
      outcome: "Keep critical systems healthy, fast, and shippable.",
      tags: ["Refactoring", "Performance", "CI/CD"],
    },
  ] satisfies Service[],
} as const;

export const process = {
  eyebrow: "How we work",
  headline: "A simple, predictable way to work together.",
  subheadline: "No surprises — you always know what's happening and what's next.",
  steps: [
    {
      no: "01",
      title: "Discuss",
      text: "We talk through your idea, scope, and goals — and give honest feedback and a clear plan before anything starts.",
    },
    {
      no: "02",
      title: "Build",
      text: "We design and develop in short, visible cycles — you see progress regularly, not just at the end.",
    },
    {
      no: "03",
      title: "Ship & support",
      text: "We deliver to production, hand over cleanly, and stay available to maintain and improve what we built.",
    },
  ],
} as const;

export type AppItem = {
  id: string;
  name: string; // app name
  category: string; // short category, e.g. "Enterprise · Approval"
  pitch: string; // one selling line — the outcome, not the tech
  logo: string; // path to the app icon (square, rounded), e.g. "/logo-restuque.png"
  rating?: string; // e.g. "5.0" — omit if not worth showing
  android?: string; // Google Play URL — omit if not on Play Store
  ios?: string; // App Store URL — omit if not on App Store
};

export const work = {
  eyebrow: "Apps in production",
  headline: "Apps we've shipped, live on the stores.",
  subheadline: "Real products, used by real teams — download them yourself.",
  // App showcase grid. Each card links straight to the store(s) it's on.
  items: [
    {
      id: "restuque",
      name: "Restuque",
      category: "Enterprise · Approval",
      pitch: "5 legacy systems unified into one real-time mobile approval gateway.",
      logo: "/logo-restuque.jpg",
      rating: "5.0",
      android: "https://play.google.com/store/apps/details?id=com.tap.restuque.app&hl=id",
      ios: "https://apps.apple.com/id/app/restuque/id1561895835",
    },
    {
      id: "one-click",
      name: "One Click",
      category: "Agriculture · Mobile",
      pitch: "Real-time agricultural transactions, notifications, and analytics in one app.",
      logo: "/logo-oneclick.png",
      rating: "4.8",
      android: "https://play.google.com/store/apps/details?id=com.mobiledashboard&hl=id",
      ios: "https://apps.apple.com/id/app/one-click/id1561932836",
    },
    // ── Placeholders below: same shape, replace with your real apps ──
    {
      id: "eharvesting",
      name: "eHarvesting",
      category: "Agriculture · Mobile",
      pitch: "Digitize every harvest with real-time field data and faster decisions.",
      logo: "/logo-eharvesting.jpg",
      rating: "4.2",
      android: "https://play.google.com/store/apps/details?id=com.bluezoneeharvesting.app&hl=en",
    },
    {
      id: "mobile-inspection",
      name: "Mobile Inspection",
      category: "Field Ops · Mobile",
      pitch: "Offline-first plantation inspections with location tracking and seamless sync.",
      logo: "/logo-mobileinspection.jpg",
      rating: "4.3",
      android: "https://play.google.com/store/apps/details?id=com.bluezoneinspection.app&hl=en",
    },
    {
      id: "priksa",
      name: "Priksa",
      category: "Field Ops · Mobile",
      pitch: "Streamline field operations with efficiency, accuracy, and seamless collaboration.",
      logo: "/logo-priksa.png",
      rating: "4.6",
      android: "https://play.google.com/store/apps/details?id=com.priksa.mobile&hl=en",
    },
    {
      id: "gudangku",
      name: "GudangKU",
      category: "Warehouse · Mobile",
      pitch: "Real-time inventory visibility, streamlined material movements, and accurate stock.",
      logo: "/logo-gudangku.png",
      // no rating shown for this one
      android: "https://play.google.com/store/apps/details?id=com.tap_wms_mobile&hl=en",
    },
  ] satisfies AppItem[],
} as const;

export const about = {
  eyebrow: "About MinLabs",
  headline: "We turn messy real-world problems into reliable systems.",
  narrative:
    "MinLabs is a software studio building mobile apps, backends, business systems, and AI solutions that run in the real world. We work in short, visible cycles and ship to the Play Store and App Store — and we like work that actually reaches production and keeps running.",
  chips: ["Mobile", "Backend", "Business systems", "AI", "20+ apps", "Production-grade"],
  // Founder credibility — the person behind the studio, linked to their personal profile.
  founder: {
    label: "Founded by Muhammad Amin",
    text: "Software engineer with 9+ years building and leading production systems. Currently leading engineering at a plantation group.",
    linkLabel: "See his profile",
    href: site.founderUrl,
  },
  // What we're building, folded in as compact lines.
  building: [
    {
      label: "AgriMind",
      text: "An AI assistant for agriculture, currently in active development.",
      href: "https://github.com/aminju14/agri-mind-ai",
    },
    {
      label: "Fastwork",
      text: "Hire us for project work through our verified Fastwork profile.",
      href: site.fastworkUrl,
    },
  ],
  cta: { label: "Let's build something", href: "#contact" },
} as const;

export const contact = {
  eyebrow: "Get in touch",
  headline: "Have something to build? Let's make it real.",
  subheadline:
    "Tell us about your project — we usually reply within 24 hours. Or reach us directly below.",
  projectTypes: ["Mobile", "Web", "AI", "Maintenance", "Other"],
  submit: "Send message",
  submitting: "Sending…",
  success: "Message sent — we'll get back to you within 24 hours.",
  error: "Something went wrong. Please try again or email us directly.",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ],
  cta: { label: "Contact us", href: "#contact" },
} as const;
