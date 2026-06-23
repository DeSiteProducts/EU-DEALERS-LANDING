import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/d-sight-screener-hero.jpg"
        alt="A compact screening machine separating soil and gravel at a clean worksite."
        fill
        priority
        sizes="100vw"
        unoptimized
      />
      <div className="hero-overlay" />
      <div className="site-container hero-content">
        <p className="section-kicker">D-Sight screening equipment</p>
        <h1 id="hero-title">Simple, Reliable Screening Equipment</h1>
        <p className="hero-lede">
          Separate, clean, and prepare soil, gravel, compost, and sand with
          equipment that is easy to understand and built for real jobs.
        </p>
        <p className="hero-support">
          Made for contractors, farms, landscaping businesses, and property
          owners who want a clear way to choose the right screener.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#quote">
            Request a Quote
          </a>
          <a className="button button-secondary" href="#compare">
            Compare Models
          </a>
        </div>
      </div>
    </section>
  );
}
