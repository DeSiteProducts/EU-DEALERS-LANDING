import { BenefitsSection } from "./components/BenefitsSection";
import { ComparisonTable } from "./components/ComparisonTable";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { HelpChoosingSection } from "./components/HelpChoosingSection";
import { HeroSection } from "./components/HeroSection";
import { ModelCards } from "./components/ModelCards";
import { TrustBenefits } from "./components/TrustBenefits";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-container nav-inner">
          <a className="brand-link" href="#" aria-label="D-Sight Screeners home">
            D-Sight Screeners
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#models">Models</a>
            <a href="#compare">Compare</a>
            <a href="#quote">Contact</a>
          </nav>
          <a className="nav-cta" href="#quote">
            Request a Quote
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <TrustBenefits />
        <ModelCards />
        <ComparisonTable />
        <HelpChoosingSection />
        <BenefitsSection />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
