import ProductDetails from "@/components/ProductDetails";
import { Product } from "@/lib/utils";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  // Fetch all products to find the matching ID
  const productsResponse = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      next: { revalidate: 60 },
    },
  );

  if (!productsResponse.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await productsResponse.json();

  const matchedProduct = products.find(
    (item: { slug: string }) => item.slug === slug,
  );

  if (!matchedProduct) {
    notFound();
  }

  // Fetch complete product details
  const productResponse = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${matchedProduct.id}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!productResponse.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product: Product = await productResponse.json();

  return <ProductDetails product={product} />;
}
