export default function Loading() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-8 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="mb-6 h-4 w-48 rounded bg-gray-200" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product image */}
        <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-gray-100">
          <div className="h-32 w-32 rounded-full bg-gray-200" />
        </div>

        {/* Product information */}
        <div className="space-y-5">
          <div className="h-7 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-1/3 rounded bg-gray-200" />

          {/* Price */}
          <div className="rounded-xl bg-gray-50 p-5">
            <div className="mb-3 h-4 w-24 rounded bg-gray-200" />
            <div className="h-9 w-40 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-32 rounded bg-gray-200" />
          </div>

          {/* Price comparison */}
          <div className="space-y-3">
            <div className="h-5 w-40 rounded bg-gray-200" />
            <div className="h-14 rounded-lg bg-gray-100" />
            <div className="h-14 rounded-lg bg-gray-100" />
            <div className="h-14 rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Additional information */}
      <div className="mt-10 space-y-4">
        <div className="h-6 w-48 rounded bg-gray-200" />
        <div className="h-24 rounded-xl bg-gray-100" />
      </div>
    </main>
  );
}
