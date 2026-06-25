import { ProductImageCarousel } from "./ProductImageCarousel";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export function ProductCard({
  product,
}: {
  product: {
    name: string;
    description: string;
    imageAlt?: string;
    images: string[];
    specs: string;
    capacity: string;
    equipment: string;
    applications: string;
    specSheet?: string;
  };
}) {
  return (
    <article className="product-card">
      <ProductImageCarousel
        imageAlt={product.imageAlt}
        images={product.images}
        label={product.name}
      />
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
    </article>
  );
}
