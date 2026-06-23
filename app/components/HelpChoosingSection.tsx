import { choosingGuides } from "../lib/landingData";

export function HelpChoosingSection() {
  return (
    <section className="section help-section" aria-labelledby="help-title">
      <div className="site-container help-layout">
        <div className="section-heading">
          <p className="section-kicker">Which model is right for you?</p>
          <h2 id="help-title">A simple way to choose</h2>
          <p>
            You do not need to know every technical detail to start. Match the
            model to the job size and the amount of material you want to screen.
          </p>
        </div>
        <div className="choice-list">
          {choosingGuides.map((guide) => (
            <article className="choice-item" key={guide.model}>
              <span aria-hidden="true">{guide.model.charAt(0)}</span>
              <p>{guide.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
