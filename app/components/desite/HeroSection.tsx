import { PrimaryButton, SecondaryButton } from "./Buttons";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="desite-hero" id="home" aria-labelledby="desite-hero-title">
      <div className="desite-container hero-layout">
        <div className="hero-copy">
          <h1 id="desite-hero-title">DeSite Products</h1>
          <p className="hero-tagline">
            North America&apos;s #1 Compact Portable Vibratory Screener
          </p>
          <p className="hero-intro">
            Compact screeners built for contractors, landscapers, and material
            producers who need dependable production in the field.
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
