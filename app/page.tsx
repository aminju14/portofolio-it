import Navbar from "./redesign/sections/Navbar";
import Hero from "./redesign/sections/Hero";
import Stats from "./redesign/sections/Stats";
import Services from "./redesign/sections/Services";
import Process from "./redesign/sections/Process";
import FeaturedWork from "./redesign/sections/FeaturedWork";
import About from "./redesign/sections/About";
import Contact from "./redesign/sections/Contact";
import Footer from "./redesign/sections/Footer";
import StickyMobileCta from "./redesign/sections/StickyMobileCta";
import { site, services, work } from "./redesign/content";

// JSON-LD structured data (SEO): Organization (studio) + founder Person + projects.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      description:
        "A software studio building production mobile, backend, and AI systems for startups and businesses.",
      founder: {
        "@type": "Person",
        name: site.founder,
        url: site.founderUrl,
        jobTitle: "Software Engineer",
        sameAs: [site.social.linkedin, site.social.github, site.social.instagram],
      },
      sameAs: [site.social.linkedin, site.social.github, site.social.instagram],
      knowsAbout: services.items.map((s) => s.title),
    },
    ...work.items.map((item) => ({
      "@type": "MobileApplication",
      name: item.name,
      applicationCategory: item.category,
      description: item.pitch,
      operatingSystem: [item.android && "Android", item.ios && "iOS"]
        .filter(Boolean)
        .join(", "),
      url: item.android ?? item.ios,
      ...(item.rating && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: item.rating,
          bestRating: "5",
        },
      }),
      creator: { "@type": "Organization", name: site.name },
    })),
  ],
};

export default function HomePage() {
  return (
    <div className="bg-surface font-sans text-ink antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* To the point: who → proof → what you can buy → work → about → close. */}
        <Hero />
        <Stats />
        <Services />
        <Process />
        <FeaturedWork />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
