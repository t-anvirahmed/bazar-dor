import { Category } from "@/lib/utils";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
        {data.map((n: Category) => (
          <div
            key={n.id}
            className="group flex cursor-pointer items-center gap-2 py-1 text-gray-600 transition-colors duration-200 hover:text-green-600"
          >
            <span className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5">
              {n.icon}
            </span>
            <span className="relative text-sm font-medium sm:text-base">
              {n.nameBn}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-green-600 transition-all duration-300 group-hover:w-full" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
