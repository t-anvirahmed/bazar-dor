import { Product } from "@/lib/utils";
import ProductCard from "./ProductCard";

const PriceFallers = ({ products }: { products: Product[] }) => {
  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct) // বেশি থেকে কম
    .slice(0, 8);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="font-bold text-2xl mb-4">
        <span className="text-green-500 mr-2">▼</span>আজ দাম কমেছে
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fallers.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceFallers;
