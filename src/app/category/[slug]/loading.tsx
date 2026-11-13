export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse bg-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Category header skeleton */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:mb-8 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
          <div className="size-16 shrink-0 rounded-2xl bg-green-100 sm:size-20" />

          <div className="flex-1 space-y-3">
            <div className="h-8 w-40 max-w-full rounded-lg bg-gray-200 sm:h-10 sm:w-56" />
            <div className="h-4 w-56 max-w-full rounded-md bg-gray-100 sm:w-72" />
          </div>
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              {/* Product image */}
              <div className="mb-4 h-40 rounded-xl bg-gray-100 sm:h-44" />

              {/* Product name */}
              <div className="mb-3 h-5 w-3/4 rounded-md bg-gray-200" />

              {/* Price */}
              <div className="mb-3 h-7 w-1/2 rounded-md bg-green-100" />

              {/* Price change */}
              <div className="h-4 w-2/3 rounded-md bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
