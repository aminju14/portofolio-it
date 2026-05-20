import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemArchitecture from "./components/SystemArchitecture";
import ProjectHighlight from "./components/ProjectHighlight";
import Expertise from "./components/Expertise";
import ProfessionalHistory from "./components/ProfessionalHistory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfessionalHistory />
        <ProjectHighlight />
        <SystemArchitecture />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
