"use client";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import SelectCategory from "./SelectCategory";

const FilterProducts = () => {
  const [filters, setFilters] = useState({
    code: "",
    diameter: "",
    height: "",
    neck: "",
    volume: "",
    material: "",
    category: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        category: checked
          ? [...prev.category, value]
          : prev.category.filter((cat) => cat !== value),
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="FilterProducts py-16">
      <div className="container flex flex-col gap-16">
        <Search values={filters} handleChange={handleChange} />
        <SelectCategory values={filters} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default FilterProducts;
