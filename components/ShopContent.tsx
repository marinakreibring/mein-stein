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

  useEffect(() => {
    setSelectedCategory(urlCategory);
  }, [urlCategory]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.type === selectedCategory
        );

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
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ProductCards
        products={filteredProducts}
      />
    </>
  );
}