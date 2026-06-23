export function ContactForm() {
  return (
    <section className="section final-cta" id="quote" aria-labelledby="quote-title">
      <div className="site-container quote-layout">
        <div className="quote-copy">
          <p className="section-kicker">Get a clear recommendation</p>
          <h2 id="quote-title">Not sure which screener is right for you?</h2>
          <p>
            Send us a message and we&apos;ll help you choose the best model for
            your job.
          </p>
          <a className="button button-primary" href="#quote-form">
            Get Help Choosing a Model
          </a>
        </div>

        <form className="contact-form" id="quote-form" aria-label="Request information form">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="form-row split">
            <div>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="material">What material do you want to screen?</label>
            <input
              id="material"
              name="material"
              type="text"
              placeholder="Soil, gravel, compost, sand..."
            />
          </div>

          <div className="form-row">
            <label htmlFor="model">Which model are you interested in?</label>
            <select id="model" name="model" defaultValue="">
              <option value="" disabled>
                Select a model
              </option>
              <option>D-Sight Compact Screener</option>
              <option>D-Sight Mid-Size Screener</option>
              <option>D-Sight Heavy-Duty Screener</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your job site or the material you want to screen."
            />
          </div>

          <button className="button button-primary form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
