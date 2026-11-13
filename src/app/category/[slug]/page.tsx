import { toBanglaNumber } from "@/lib/utils";
import ProductList from "@/components/ProductList";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const [categoryRes, productsRes] = await Promise.all([
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/categories/${slug}`,
      {
        next: { revalidate: 60 },
      },
    ),
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
      {
        next: { revalidate: 60 },
      },
    ),
  ]);

  if (!categoryRes.ok || !productsRes.ok) {
    return <p className="p-8 text-gray-600">Failed to load category data.</p>;
  }

  const categoryJson = await categoryRes.json();
  const productsJson = await productsRes.json();

  const category = categoryJson;
  const products = productsJson;

  return (
    <div className="bg-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:mb-8 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl sm:size-20 sm:text-5xl">
            {category?.icon}
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {category?.nameBn}
            </h1>

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base space-x-1">
              <span>
                {Array.isArray(products)
                  ? toBanglaNumber(products.length)
                  : toBanglaNumber(0)}
                টি
              </span>
              <span>পণ্যের আজকের দাম ও পরিবর্তন</span>
            </p>
          </div>
        </div>

        {Array.isArray(products) && products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p className="text-gray-500">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </p>
        )}
      </div>
    </div>
  );
}
