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

// JSON-LD structured data (SEO): Person + Organization + projects as CreativeWork.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      alternateName: site.legalName,
      url: site.url,
      jobTitle: "Software Engineer",
      email: site.email,
      sameAs: [site.social.linkedin, site.social.github, site.social.instagram],
      worksFor: { "@type": "Organization", name: "MinLabs" },
      knowsAbout: services.items.map((s) => s.title),
    },
    {
      "@type": "Organization",
      name: "MinLabs",
      founder: { "@type": "Person", name: site.name, alternateName: site.legalName },
      url: site.url,
      description:
        "A software studio founded by Aminju (Muhammad Amin), building products and delivering engineering for startups and businesses.",
    },
    ...work.items.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      about: item.metric,
      url: `${site.url}${item.href}`,
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
