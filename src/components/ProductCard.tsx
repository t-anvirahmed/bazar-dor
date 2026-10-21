import { Product, toBanglaNumber, toBanglaUnit } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card w-full border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
      <div className="card-body gap-5 p-5 sm:p-6">
        {/* Product Info */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
            {product.image}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="card-title text-lg font-bold text-gray-800">
              {product.nameBn}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              প্রতি {toBanglaUnit(product.unit)}
            </p>
          </div>
        </div>

        {/* Today's Price */}
        <div className="rounded-xl p-4 flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">আজকের দাম</h3>

            <p className="mt-1 text-3xl font-bold tracking-tight">
              {toBanglaNumber(product.today)}
              <span className="ml-2 text-sm font-medium text-gray-500">
                টাকা
              </span>
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-sm font-semibold ${
              product.change.dir === "up"
                ? "bg-red-50 text-red-600"
                : product.change.dir === "down"
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-600"
            }`}
          >
            {product.change.dir === "up"
              ? "▲"
              : product.change.dir === "down"
                ? "▼"
                : "—"}
            {toBanglaNumber(product.change.pct)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
