import { ProductImageCarousel } from "./ProductImageCarousel";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const proscreenHighlights = [
  { label: "Weight", value: "725kg" },
  { label: "Bucket Capacity", value: "Up to 1.7 meters" },
  { label: "Feed Height", value: "1.8 meters" },
  { label: "Mesh Range", value: "3mm to 100mm" },
  { label: "Warranty", value: "5 Year Structure Warranty" },
];

const proscreenMaterials = [
  "Soils",
  "Sand",
  "Gravels",
  "Compost",
  "Erosion Rock",
];

const proscreenFeatures = [
  "220 Volt single phase (3600rpm) Vibratory System",
  "45 to 25 degree tilting screen deck",
  "Coil over spring suspension system",
  "Bucket and fork transport pockets",
  "Hot dip zinc coating finish",
];

const proscreenVideos = [
  { id: "1197839645", title: "DeSite ProScreen 68V product demo video 1" },
  { id: "892414970", title: "DeSite ProScreen 68V product demo video 2" },
  { id: "892970062", title: "DeSite ProScreen 68V product demo video 3" },
  { id: "892925987", title: "DeSite ProScreen 68V product demo video 4" },
];

type Product = {
  name: string;
  detailVariant?: "proscreen68";
  description?: string;
  imageAlt?: string;
  images: string[];
  specs?: string;
  capacity?: string;
  equipment?: string;
  applications?: string;
  specSheet?: string;
};

export function ProductCard({
  product,
}: {
  product: Product;
}) {
  if (product.detailVariant === "proscreen68") {
    return <ProScreenProductCard product={product} />;
  }

  return (
    <article className="product-card">
      <ProductImageCarousel
        imageAlt={product.imageAlt}
        images={product.images}
        label={product.name}
      />
      <DefaultProductDetails product={product} />
    </article>
  );
}

function ProScreenProductCard({ product }: { product: Product }) {
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
            <h3>DeSite ProScreen</h3>
            <p>68V Vibratory Mini Screener</p>
          </div>

          <div className="proscreen-intro">
            <p>
              Designed for mini equipment with limited lift capacity, the
              ProScreen 68V is a compact vibratory screener built for practical
              material screening and recycling.
            </p>
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
            {proscreenHighlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="proscreen-videos" aria-labelledby="proscreen-videos">
          <h4 id="proscreen-videos">Videos</h4>
          <div className="proscreen-video-grid">
            {proscreenVideos.map((video) => (
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

        <div className="proscreen-list-grid">
          <ProductFeatureList
            title="Screen and Recycle"
            items={proscreenMaterials}
          />
          <ProductFeatureList
            title="Screener Features"
            items={proscreenFeatures}
          />
        </div>
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

function DefaultProductDetails({ product }: { product: Product }) {
  return (
    <div className="product-content">
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <dl className="product-specs">
        <div>
          <dt>Specs</dt>
          <dd>{product.specs}</dd>
        </div>
        <div>
          <dt>Capacity</dt>
          <dd>{product.capacity}</dd>
        </div>
        <div>
          <dt>Recommended Equipment Size</dt>
          <dd>{product.equipment}</dd>
        </div>
        <div>
          <dt>Applications</dt>
          <dd>{product.applications}</dd>
        </div>
      </dl>
      <div className="product-actions">
        <PrimaryButton href="#contact">Request Information</PrimaryButton>
        {product.specSheet ? (
          <SecondaryButton href={product.specSheet}>Download Spec Sheet</SecondaryButton>
        ) : (
          <span
            aria-disabled="true"
            className="desite-button desite-button-secondary desite-button-disabled"
          >
            Spec sheet coming soon
          </span>
        )}
      </div>
    </div>
  );
}
