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
      categories: params.getAll("categories") || [],
    };
  };

  const [filters, setFilters] = useState(getFiltersFromURL());
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // إنشاء نسخة من الـ searchParams الحالي
    const params = new URLSearchParams(searchParams.toString());

    // نسخ الكائن الحالي للفلاتر
    let updatedFilters = { ...filters };

    if (type === "checkbox") {
      if (value === "0") {
        // لو المستخدم اختار "الكل"، نخلي قيمة الفئات ["0"]
        updatedFilters.categories = checked ? ["0"] : [];
      } else {
        // لو المستخدم اختار فئة معينة:
        // - لو بيختارها، نضيفها (وبنحذف "0" لو كانت موجودة)
        // - لو بيلغي التحديد، بنشيلها من المصفوفة
        updatedFilters.categories = checked
          ? [...updatedFilters.categories.filter((cat) => cat !== "0"), value]
          : updatedFilters.categories.filter((cat) => cat !== value);
      }
    } else {
      updatedFilters[name] = value;
    }

    // تحديث حالة الفلاتر في الـ state
    setFilters(updatedFilters);

    // أولاً: نحذف كل المفاتيح في URL المتعلقة بالفئات
    for (const key of Array.from(params.keys())) {
      if (key.startsWith("categories[")) {
        params.delete(key);
      }
    }

    // بعدين: لو في قيم في updatedFilters.categories
    if (Array.isArray(updatedFilters.categories)) {
      // لو المصفوفة مش فاضية وما تحتويش على "0"
      if (
        updatedFilters.categories.length > 0 &&
        !updatedFilters.categories.includes("0")
      ) {
        updatedFilters.categories.forEach((item, index) => {
          // نضيف كل عنصر مع مفتاح بصيغة categories[index]
          params.append(`categories[${index}]`, item);
        });
      }
      // ولو المصفوفة فاضية أو تحتوي على "0"، ما بنضيفش حاجة للفئات في الـ URL
    }

    // نتعامل مع باقي الفلاتر (غير الفئات)
    Object.entries(updatedFilters).forEach(([key, val]) => {
      if (key === "categories") return; // تجاهل الفئات لأنها تمت معالجتها
      if (Array.isArray(val)) {
        params.delete(key);
        if (val.length > 0) {
          val.forEach((item) => params.append(key, item));
        }
      } else if (val) {
        params.set(key, val);
      } else {
        params.delete(key);
      }
    });

    // تحديث الـ URL
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
