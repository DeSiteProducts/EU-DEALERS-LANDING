import { businessBenefits } from "../lib/landingData";

export function BenefitsSection() {
  return (
    <section className="section benefits-section" aria-labelledby="benefits-title">
      <div className="site-container benefits-layout">
        <div className="section-heading">
          <p className="section-kicker">Practical value</p>
          <h2 id="benefits-title">Make more use of the material you already have</h2>
          <p>
            A screener can help reduce waste, lower hauling, and keep work
            moving at your own pace.
          </p>
        </div>
        <div className="benefit-list">
          {businessBenefits.map((benefit) => (
            <div className="business-benefit" key={benefit}>
              <span aria-hidden="true">✓</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
