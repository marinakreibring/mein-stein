"use client";

type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: Props) {
  const categories = [
    "All",
    "Earrings",
    "Bracelet",
    "Ring",
    "Necklace",
    "Set",
  ];

  return (
    <div className="mb-8 flex justify-center">
      <select className="filter-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}        
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}