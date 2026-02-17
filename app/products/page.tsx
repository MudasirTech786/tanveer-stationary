import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
