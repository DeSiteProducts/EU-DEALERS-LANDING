import type { DesiteProduct } from "../../lib/desiteData";
import { ProductImageCarousel } from "./ProductImageCarousel";

export function ProductCard({
  product,
}: {
  product: DesiteProduct;
}) {
  return <ProScreenProductCard product={product} />;
}

function ProScreenProductCard({ product }: { product: DesiteProduct }) {
  return (
    <article className="product-card proscreen-card">
      <div className="proscreen-top">
        <ProductImageCarousel
          imageAlt={product.imageAlt}
          images={product.images}
          label={product.name}
        />
        <div className="proscreen-summary">
          <div className="proscreen-header">
            <h3>{product.detailVariant}</h3>
            <p>{product.name}</p>
          </div>

          <div className="proscreen-intro">
            {product.description?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="proscreen-expanded">
        <section
          className="proscreen-key-specs"
          aria-labelledby="proscreen-key-specs"
        >
          <h4 id="proscreen-key-specs">Key Specs</h4>
          <dl className="proscreen-highlights">
            {product.proscreenHighlights?.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

  
        <div className="proscreen-list-grid">
          <ProductFeatureList
            title="Screen and Recycle"
            items={product.materials ?? []}
          />
          <ProductFeatureList
            title="Screener Features"
            items={product.features ?? []}
          />
        </div>

        <section className="proscreen-videos" aria-labelledby="proscreen-videos">
          <h4 id="proscreen-videos">Videos</h4>
          <div className="proscreen-video-grid">
            {product.videos?.map((video) => (
              <div className="proscreen-video-frame" key={video.id}>
                <iframe
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={`https://player.vimeo.com/video/${video.id}`}
                  title={video.title}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function ProductFeatureList({
  items,
  title,
}: {
  items: string[];
  title: string;
}) {
  return (
    <section className="proscreen-feature-section">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
