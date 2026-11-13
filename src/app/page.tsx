import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";
import PriceFallers from "@/components/PriceFallers";
import PriceRisers from "@/components/PriceRisers";

const getProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      next: { revalidate: 300 },
    },
  );
  return res.json();
};

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="bg-green-50">
      <Hero />
      <PriceFallers products={products} />
      <PriceRisers products={products} />
      <AllProducts products={products} />
    </div>
  );
}
