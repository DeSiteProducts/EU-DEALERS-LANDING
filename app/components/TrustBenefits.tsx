import { trustBenefits } from "../lib/landingData";

export function TrustBenefits() {
  return (
    <section className="section trust-band" aria-labelledby="trust-title">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">Why people choose D-Sight</p>
          <h2 id="trust-title">Clear benefits for everyday work</h2>
        </div>
        <div className="trust-grid">
          {trustBenefits.map((benefit) => (
            <article className="trust-item" key={benefit.title}>
              <span className="benefit-icon" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
