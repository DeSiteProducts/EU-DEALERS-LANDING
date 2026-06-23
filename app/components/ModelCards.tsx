import { models } from "../lib/landingData";

function MachineVisual({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <div
      className={`machine-visual ${className}`}
      role="img"
      aria-label={`${label} placeholder illustration`}
    >
      <span className="machine-hopper" />
      <span className="machine-screen" />
      <span className="machine-base" />
      <span className="machine-conveyor" />
      <span className="machine-pile" />
    </div>
  );
}

export function ModelCards() {
  return (
    <section className="section" id="models" aria-labelledby="models-title">
      <div className="site-container">
        <div className="section-heading wide-heading">
          <p className="section-kicker">Three model options</p>
          <h2 id="models-title">Compare the D-Sight screener lineup</h2>
          <p>
            Each model is shown with placeholder details so real specifications
            can be added later without changing the page structure.
          </p>
        </div>

        <div className="model-grid">
          {models.map((model) => (
            <article className="model-card" key={model.name}>
              <MachineVisual label={model.name} className={model.visualClass} />
              <div className="model-card-body">
                <p className="model-label">Model {model.shortName}</p>
                <h3>{model.name}</h3>
                <p>{model.description}</p>

                <div className="model-detail">
                  <strong>Ideal for</strong>
                  <span>{model.idealFor}</span>
                </div>

                <div className="model-detail">
                  <strong>Key features</strong>
                  <ul>
                    {model.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a className="button button-outline" href="#quote">
                  Request Info
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
