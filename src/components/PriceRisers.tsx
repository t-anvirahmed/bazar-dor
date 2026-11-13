import { Product } from "@/lib/utils";
import ProductCard from "./ProductCard";

const PriceRisers = ({ products }: { products: Product[] }) => {
  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct) // বেশি থেকে কম
    .slice(0, 8);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="font-bold text-2xl mb-4">
        <span className="text-red-500 mr-2">▲</span>আজ দাম বেড়েছে
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {risers.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceRisers;
