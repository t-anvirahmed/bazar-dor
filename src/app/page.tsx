import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";

const getProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  return res.json();
};

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="bg-green-50">
      <Hero />
      <AllProducts products={products} />
    </div>
  );
}
