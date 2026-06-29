import { PrimaryButton, SecondaryButton } from "./Buttons";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="desite-hero" id="home" aria-labelledby="desite-hero-title">
      <div className="desite-container hero-layout">
        <div className="hero-copy">
          <h1 id="desite-hero-title">DeSite Mini Screeners</h1>
          <p className="hero-intro">
            DeSite Products designs and manufactures screeers we build vibratory screeners and we build grizzly screeners. Designed to perform, built to last, DeSite Screeners come with a 5 year warranty. 
          </p>
         
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
