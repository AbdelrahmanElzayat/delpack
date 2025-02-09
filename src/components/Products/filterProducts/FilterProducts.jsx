import React from "react";
import Search from "./Search";
import SelectCategory from "./SelectCategory";

const FilterProducts = () => {
  return (
    <div className="FilterProducts py-16">
      <div className="container">
        <div className="flex flex-col gap-16">
          <Search />
          <SelectCategory />
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
