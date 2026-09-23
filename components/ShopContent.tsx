"use client";

import { useState } from "react";
import ProductCards from "@/components/ProductCard";
import CategoryFilter from "@/components/ProductFilter";

export default function ShopContent({
  products,
}: {
  products: any[];
}) {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.type === selectedCategory
        );

  return (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
  
      <ProductCards
        products={filteredProducts}
      />
    </>
  );
}