"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Search from "./Search";
import SelectCategory from "./SelectCategory";
import { motion } from "framer-motion";

const FilterProducts = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // استخراج الفلاتر الحالية من الـ URL
  const getFiltersFromURL = () => {
    const params = new URLSearchParams(searchParams.toString());
    return {
      code: params.get("code") || "",
      diameter: params.get("diameter") || "",
      height: params.get("height") || "",
      neck: params.get("neck") || "",
      volume: params.get("volume") || "",
      material: params.get("material") || "",
      category: params.getAll("category") || [],
    };
  };

  const [filters, setFilters] = useState(getFiltersFromURL());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const params = new URLSearchParams(searchParams.toString());

    let updatedFilters = { ...filters };

    if (type === "checkbox") {
      updatedFilters.category = checked
        ? [...filters.category, value]
        : filters.category.filter((cat) => cat !== value);
    } else {
      updatedFilters[name] = value;
    }

    setFilters(updatedFilters);

    // تحديث الـ URL مع الاحتفاظ بالـ page إن وجد
    Object.entries(updatedFilters).forEach(([key, val]) => {
      if (Array.isArray(val) && val.length > 0) {
        params.delete(key);
        val.forEach((item) => params.append(key, item));
      } else if (val) {
        params.set(key, val);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="FilterProducts py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <div className="container flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-16">
        <Search values={filters} handleChange={handleChange} />
        <SelectCategory
          values={filters}
          handleChange={handleChange}
          categories={categories}
        />
      </div>
    </motion.div>
  );
};

export default FilterProducts;
