import { PrimaryButton, SecondaryButton } from "./Buttons";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="desite-hero" id="home" aria-labelledby="desite-hero-title">
      <div className="desite-container hero-layout">
        <div className="hero-copy">
          <h1 id="desite-hero-title">DeSite Products</h1>
          <p className="hero-intro">
            DeSite Products designs and manufactures compact portable vibratory screeners built for contractors, landscapers, and material producers. Every machine is field-tested in real-world conditions to maximize production, reduce downtime, and deliver long-term value.
          </p>
          <div className="hero-actions">
            <PrimaryButton href="#products">Explore Screeners</PrimaryButton>
            <SecondaryButton href="#contact">Contact DeSite</SecondaryButton>
          </div>
        </div>
        <ImagePlaceholder
          label="Hero image coming soon"
          path=""
          tall
        />
      </div>
    </section>
  );
}
