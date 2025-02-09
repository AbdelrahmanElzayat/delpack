import FilterProducts from "@/components/Products/filterProducts/FilterProducts";
import HeroProducts from "@/components/Products/heroProducts/HeroProducts";
import React from "react";
const page = () => {
  return (
    <div className="bg-products">
      <HeroProducts />
      <FilterProducts />
    </div>
  );
};

export default page;
