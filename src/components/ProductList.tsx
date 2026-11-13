"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/utils";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortBy === "price-asc") return a.today - b.today;
      if (sortBy === "price-desc") return b.today - a.today;

      return 0;
    });
  }, [products, sortBy]);

  return (
    <div>
      {/* Sorting dropdown */}
      <div className="mb-5 flex items-center justify-end gap-3">
        <label
          htmlFor="product-sort"
          className="text-sm font-medium text-gray-600"
        >
          সাজান
        </label>

        <div className="relative">
          <select
            id="product-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="min-w-44 cursor-pointer appearance-none rounded-xl border border-green-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-gray-700 shadow-sm outline-none transition-all hover:border-green-400 hover:bg-green-50/50 focus:border-green-500 focus:ring-2 focus:ring-green-100"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>

          <svg
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
