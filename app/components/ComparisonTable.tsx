import { comparisonRows } from "../lib/landingData";

export function ComparisonTable() {
  return (
    <section
      className="section comparison-band"
      id="compare"
      aria-labelledby="compare-title"
    >
      <div className="site-container">
        <div className="section-heading wide-heading">
          <p className="section-kicker">Side-by-side comparison</p>
          <h2 id="compare-title">Find the model that fits your job</h2>
          <p>
            Use this table to compare size, materials, production needs, and
            placeholder pricing at a glance.
          </p>
        </div>

        <div className="table-scroll" role="region" aria-label="Model comparison">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Best For</th>
                <th scope="col">Bucket Size</th>
                <th scope="col">Material Types</th>
                <th scope="col">Production Range</th>
                <th scope="col">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" data-label="Model">
                    {row.label}
                  </th>
                  <td data-label="Best For">{row.bestFor}</td>
                  <td data-label="Bucket Size">{row.bucketSize}</td>
                  <td data-label="Material Types">{row.materialTypes}</td>
                  <td data-label="Production Range">{row.productionRange}</td>
                  <td data-label="Starting Price">{row.startingPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
