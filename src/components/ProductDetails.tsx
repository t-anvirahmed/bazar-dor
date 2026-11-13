import { Product, toBanglaNumber } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const markets = product.markets ?? [];

  const formatPrice = (price: number) => `৳${price.toLocaleString("bn-BD")}`;

  const unitName =
    product.unit === "kg"
      ? "কেজি"
      : product.unit === "liter"
        ? "লিটার"
        : product.unit;

  const priceDifference = product.today - product.yesterday;

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";
  const isStable = product.change.dir === "stable";

  // Calculate market statistics
  const lowestPrice =
    markets.length > 0
      ? Math.min(...markets.map((market) => market.min))
      : null;

  const highestPrice =
    markets.length > 0
      ? Math.max(...markets.map((market) => market.max))
      : null;

  // Calculate each market's average using its minimum and maximum
  const marketAverages = markets.map((market) => (market.min + market.max) / 2);

  const averagePrice =
    marketAverages.length > 0
      ? marketAverages.reduce((sum, price) => sum + price, 0) /
        marketAverages.length
      : null;

  return (
    <main className="min-h-screen bg-green-50">
      <div className="container mx-auto space-y-6 px-4 py-8">
        {/* Product Overview */}
        <section className="flex flex-col justify-between gap-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8 md:flex-row md:items-center">
          {/* Product Information */}
          <div className="flex items-start gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl sm:size-20 sm:text-5xl">
              {product.categoryIcon}
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-sm text-gray-500">প্রতি {unitName}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                {isStable ? (
                  <span className="font-medium text-gray-500">
                    গতকালের তুলনায় দাম অপরিবর্তিত
                  </span>
                ) : (
                  <>
                    <span
                      className={`font-semibold ${
                        isUp ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {isUp ? "↑" : "↓"}{" "}
                      {formatPrice(Math.abs(priceDifference))}
                    </span>

                    <span className="text-gray-500">
                      গতকালের তুলনায় দাম {isUp ? "বেড়েছে" : "কমেছে"}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Today's Price */}
          <div className="rounded-xl bg-green-50 p-5 md:min-w-56 md:text-right">
            <p className="text-sm font-medium text-gray-500">আজকের দাম</p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              {formatPrice(product.today)}
            </h2>

            <p className="mt-1 text-xs text-gray-500">টাকা / {unitName}</p>

            <div
              className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                isUp
                  ? "bg-red-50 text-red-600"
                  : isDown
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>{isUp ? "↑" : isDown ? "↓" : "—"}</span>
              {product.change.pct.toLocaleString("bn-BD")}%{" "}
              {isUp ? "বৃদ্ধি" : isDown ? "হ্রাস" : "পরিবর্তন নেই"}
            </div>
          </div>
        </section>
        {/* Price Summary */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            বাজারদরের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Lowest Price */}
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  সর্বনিম্ন দাম
                </p>
                <span className="flex size-9 items-center justify-center rounded-xl bg-green-50 text-lg font-bold text-green-600">
                  ↓
                </span>
              </div>

              <p className="text-2xl font-bold text-green-700">
                {lowestPrice !== null ? formatPrice(lowestPrice) : "—"}
              </p>

              <p className="mt-1 text-xs text-gray-400">টাকা / {unitName}</p>
            </div>

            {/* Highest Price */}
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  সর্বোচ্চ দাম
                </p>
                <span className="flex size-9 items-center justify-center rounded-xl bg-red-50 text-lg font-bold text-red-500">
                  ↑
                </span>
              </div>

              <p className="text-2xl font-bold text-gray-900">
                {highestPrice !== null ? formatPrice(highestPrice) : "—"}
              </p>

              <p className="mt-1 text-xs text-gray-400">টাকা / {unitName}</p>
            </div>

            {/* Average Price */}
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">গড় দাম</p>
                <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                  ≈
                </span>
              </div>

              <p className="text-2xl font-bold text-gray-900">
                {averagePrice !== null
                  ? formatPrice(Math.round(averagePrice))
                  : "—"}
              </p>

              <p className="mt-1 text-xs text-gray-400">টাকা / {unitName}</p>
            </div>
          </div>
        </section>
        {/* Market Comparison */}
        <section className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-gray-900">
                বাজারভিত্তিক দাম
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                বিভিন্ন বাজার ও বিভাগ অনুযায়ী পণ্যের দাম
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
              {toBanglaNumber(markets.length)} টি বাজার
            </span>
          </div>

          {markets.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-162.5 text-left text-sm">
                <thead>
                  <tr className="bg-gray-50/80 text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-6 py-4 font-semibold">বাজার</th>
                    <th className="px-6 py-4 font-semibold">বিভাগ</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      সর্বনিম্ন দাম
                    </th>
                    <th className="px-6 py-4 text-right font-semibold">
                      সর্বোচ্চ দাম
                    </th>
                    <th className="px-6 py-4 text-right font-semibold">
                      গড় দাম
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {markets.map((market) => {
                    const marketAverage = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${market.division}`}
                        className="transition-colors duration-150 hover:bg-green-50/60"
                      >
                        <td className="px-6 py-4">
                          <span className="font-semibold text-gray-800">
                            {market.market}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                            {market.division}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <span className="font-medium text-green-700">
                            {formatPrice(market.min)}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <span className="font-medium text-gray-700">
                            {formatPrice(market.max)}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <span className="inline-flex rounded-lg bg-green-50 px-3 py-1.5 font-semibold text-green-800">
                            {formatPrice(Math.round(marketAverage))}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="px-6 py-12 text-center text-sm text-gray-500">
              বাজারের কোনো তথ্য পাওয়া যায়নি।
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
