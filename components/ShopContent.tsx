"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCards from "@/components/ProductCard";
import CategoryFilter from "@/components/ProductFilter";

export default function ShopContent({
  products,
}: {
  products: any[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get("type") || "All";

  const [selectedCategory, setSelectedCategory] =
    useState(urlCategory);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSelectedCategory(urlCategory);
  }, [urlCategory]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.type === selectedCategory;

    const searchText = search.toLowerCase();

    const matchesSearch =
      product.title.toLowerCase().includes(searchText) ||
      product.stone.toLowerCase().includes(searchText) ||
      product.material.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    if (category === "All") {
      router.push("/shop");
    } else {
      router.push(`/shop?type=${category}`);
    }
  };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">

      <div className="flex justify-center">
        <input
          type="text"
          placeholder=" 🔍 Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      </div>
      <ProductCards
        products={filteredProducts}
      />
    </>
  );
}