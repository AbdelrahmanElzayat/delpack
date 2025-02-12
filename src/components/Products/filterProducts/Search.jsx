"use client";
import React, { useState } from "react";

const Search = ({ values, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#EAF0F0] shadow-filterShadow p-6 sm:p-8 rounded-2xl flex items-center flex-wrap lg:flex-nowrap gap-6 sm:gap-12 w-full">
      {/* زرار "SEARCH BY" في الموبايل */}
      <button
        className="text-[#0A6BAB] text-lg sm:text-xl font-bold capitalize text-nowrap w-full 
          sm:w-auto flex items-center justify-between sm:block"
        onClick={() => setIsOpen(!isOpen)}
      >
        SEARCH BY
        <span className="sm:hidden">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* القائمة اللي بتظهر عند الضغط على SEARCH BY */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full 
          transition-all duration-300 ease-in-out 
          ${isOpen ? "block" : "hidden"} sm:grid`}
      >
        {["code", "diameter", "height", "neck", "volume", "material"].map(
          (name) => (
            <div key={name} className="flex flex-col gap-1 sm:gap-2">
              <label
                className="text-sm text-textMain font-[500]"
                htmlFor={name}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </label>
              <input
                name={name}
                type="text"
                placeholder={`Type ${name}`}
                className="rounded-[5px] py-2 px-3 bg-[rgba(40,56,65,0.06)] 
                  placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 
                  font-[500] text-sm w-full"
                value={values[name]}
                onChange={handleChange}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
