import { products } from "../../lib/desiteData";
import { ProductCard } from "./ProductCard";
import { SectionContainer } from "./SectionContainer";

export function ProductsSection() {
  return (
    <SectionContainer className="products-section" id="products">
      <div className="section-heading">
        <p className="section-kicker">Products</p>
        <h2>Compact Screeners</h2>
        <p>
          Explore DeSite compact portable screeners and compare the right model for your operation.
        </p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </SectionContainer>
  );
}
