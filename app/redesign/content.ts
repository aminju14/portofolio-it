/**
 * Final approved homepage content (CONTENT-STRUCTURE.md).
 * Single source of truth for copy. English (primary locale of the redesign).
 *
 * Items marked `TODO(real-data)` use reasonable, honest placeholders that make
 * no false traction claims — replace with real content before launch.
 */

export const site = {
  name: "Aminju", // brand/display name used across the site
  navName: "Muhammad Amin", // full name kept in the navbar only
  legalName: "Muhammad Amin", // full/legal name for SEO & structured data
  positioning: "Software Engineer · Founder of MinLabs · Creator of AgriMind",
  url: "https://aminju.vercel.app",
  email: "amin.workspace2026@gmail.com", // TODO(real-data): move to a branded domain email
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
  eyebrow: "Software Engineer · Founder of MinLabs · Creator of AgriMind",
  headline: "I build production mobile, backend, and AI systems for startups and businesses.",
  // Benefit-led, not a stat dump — the numbers live in the proof chips below.
  subheadline:
    "From idea to launch, I design and ship software that holds up in the real world — and keep it running after.",
  chips: ["9+ yrs experience", "20+ apps in production", "Mobile · Backend · AI"],
  ctaPrimary: { label: "Contact me", href: "#contact" },
  ctaSecondary: { label: "See my work", href: "#work" },
  // Technologies & practices I work with — drawn from real projects, then broadened.
  techEyebrow: "Technologies I work with",
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
  headline: "What you can hire me to build.",
  subheadline:
    "From idea to production — I design, build, and maintain the systems your business runs on.",
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
  eyebrow: "How I work",
  headline: "A simple, predictable way to work together.",
  subheadline: "No surprises — you always know what's happening and what's next.",
  steps: [
    {
      no: "01",
      title: "Discuss",
      text: "We talk through your idea, scope, and goals. I give honest feedback and a clear plan before anything starts.",
    },
    {
      no: "02",
      title: "Build",
      text: "I design and develop in short, visible cycles — you see progress regularly, not just at the end.",
    },
    {
      no: "03",
      title: "Ship & support",
      text: "I deliver to production, hand over cleanly, and stay available to maintain and improve what we built.",
    },
  ],
} as const;

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  metric: string;
  tags: string[];
  href: string;
  image?: string;
  featured?: boolean;
  status?: string;
};

export const work = {
  eyebrow: "Selected Work",
  headline: "Real products, in production, used by real teams.",
  subheadline: "A few systems I've designed and shipped end-to-end.",
  cta: { label: "See all work", href: "/projects" },
  // The headliner — shown large with a real mockup.
  featured: {
    id: "restuque",
    title: "Restuque",
    category: "Mobile Approval System",
    metric: "5 legacy systems unified into one real-time mobile approval gateway.",
    tags: ["React Native", "RabbitMQ", "Node.js", "PostgreSQL", "Laravel"],
    href: "/projects/restuque",
    image: "/images/restuque-mockup-dark.png",
    featured: true,
  } satisfies WorkItem,
  items: [
    {
      id: "mobile-inspection",
      title: "Mobile Inspection",
      category: "Mobile Apps",
      metric: "Offline-first plantation inspections, in production through v6.18.",
      tags: ["React Native", "Realm", "Firebase"],
      href: "/projects/mobile-inspection",
    },
    {
      id: "sdlc-portal",
      title: "SDLC Portal",
      category: "AI Systems",
      metric: "4 tools unified into 1 portal with an AI copilot.",
      tags: ["Next.js", "FastAPI", "Claude"],
      href: "/projects/sdlc-portal",
    },
    {
      id: "homin",
      title: "Homin",
      category: "Mobile Apps",
      metric: "Premium Flutter rental template — 20+ screens, ~70% faster start.",
      tags: ["Flutter", "Riverpod", "Clean Arch"],
      href: "/projects/homin",
    },
  ] satisfies WorkItem[],
} as const;

export const agrimind = {
  eyebrow: "In active development",
  headline: "AgriMind — bringing AI to the field.",
  subheadline:
    "An AI assistant that helps growers make faster, smarter decisions in agriculture.",
  // TODO(real-data): replace with the 3 real, concrete AgriMind features
  features: [
    "Plain-language answers to field and crop questions",
    "Decision support from your own operational data",
    "Built for low-connectivity, real-world field use",
  ],
  status: "Currently building · Follow the journey.",
  ctaPrimary: { label: "Get early updates", href: "#contact" },
  ctaSecondary: { label: "Follow the build", href: "https://github.com/aminju14/agri-mind-ai" },
} as const;

export const minlabs = {
  eyebrow: "The Studio",
  headline: "MinLabs — a software studio.",
  subheadline:
    "A software studio founded by Aminju, building products and delivering engineering for startups and businesses.",
  // TODO(real-data): confirm 3rd pillar wording
  pillars: ["Product engineering", "AI solutions", "Long-term maintenance"],
  cta: { label: "Work with MinLabs", href: "#contact" },
} as const;

export const about = {
  eyebrow: "About",
  headline: "I turn messy real-world problems into reliable systems.",
  narrative:
    "I'm Aminju — a software engineer with 9+ years building mobile apps, backends, business systems, and AI solutions used in the field. I lead engineering at a plantation group and ship to the Play Store and App Store. I like work that actually reaches production.",
  chips: ["Mobile", "Backend", "Business systems", "AI", "20+ apps", "Team lead"],
  // AgriMind + MinLabs folded in as compact "what I'm building" lines.
  building: [
    {
      label: "MinLabs",
      text: "My software studio — building products & engineering for startups and businesses.",
      href: site.fastworkUrl,
    },
    {
      label: "AgriMind",
      text: "An AI assistant for agriculture, currently in active development.",
      href: "https://github.com/aminju14/agri-mind-ai",
    },
  ],
  cta: { label: "Let's build something", href: "#contact" },
} as const;

export const finalCta = {
  headline: "Have something to build? Let's make it real.",
  subheadline: "Tell me about your project — I usually reply within 24 hours.",
  ctaPrimary: { label: "Start a project", href: "#contact" },
  ctaSecondary: { label: "View Fastwork", href: site.fastworkUrl },
} as const;

export const contact = {
  eyebrow: "Get in touch",
  headline: "Have something to build? Let's make it real.",
  subheadline:
    "Tell me about your project — I usually reply within 24 hours. Or reach me directly below.",
  projectTypes: ["Mobile", "Web", "AI", "Maintenance", "Other"],
  submit: "Send message",
  submitting: "Sending…",
  success: "Message sent — I'll get back to you within 24 hours.",
  error: "Something went wrong. Please try again or email me directly.",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ],
  cta: { label: "Contact me", href: "#contact" },
} as const;
