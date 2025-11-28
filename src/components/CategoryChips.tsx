import { useState } from "react";
import { cn } from "@/lib/utils";
import categories from "@/data/categories.json";

const CategoryChips = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex gap-3 overflow-x-auto py-4 px-6 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0",
            activeCategory === category
              ? "bg-chip-active text-background"
              : "bg-chip hover:bg-chip-active/10"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
