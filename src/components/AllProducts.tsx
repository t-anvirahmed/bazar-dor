import React from "react";
import ProductCard from "./ProductCard";
import { Product, toBanglaNumber } from "@/lib/utils";

const AllProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="container mx-auto mt-8 ">
      <h2>সব পণ্য</h2>
      <p>মোট {toBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
