'use client'
import React from "react";
import { Field } from "formik";

const categories = [
  "All",
  "Edible oils",
  "Soft drink bottles",
  "Honey packages",
  "Molasses packages",
];

const SelectCategory = ({ values, handleChange }) => {
  return (
    <div
      className="SelectCategory flex items-center gap-20 w-full border-b border-b-[#A4A4A4] pb-4"
    >
      <h3 className="text-[#F7941D] text-2xl font-bold border-r border-r-[#F7941D] pr-4">
        CATEGORY
      </h3>
      <div className="flex items-start w-full justify-between">
        {categories.map((category) => (
          <div key={category} className="flex items-center gap-1">
            <Field
              type="checkbox"
              name="category"
              value={category}
              checked={values.category.includes(category)}
              onChange={handleChange}
              className="w-4 h-4 mb-2 rounded-[2px]"
            />
            <label className="text-white text-2xl font-light">{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
