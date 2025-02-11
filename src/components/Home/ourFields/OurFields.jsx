

import React from "react";
import SwipeFields from "./SwipeFields";

const OurFields = () => {
  const fields = [
    "Edible oils",
    "Detergents",
    "Cosmetics",
    "Pharmaceuticals",
    "Chemicals",
    "Beverages",
    "Food containers",
    "Industrial lubricants",
    "Agricultural products",
    "Personal care products",
    "Household products",
  ];

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
          {/* Swiper Section */}
          <div className="fieldsCards w-full md:w-[500px] max-w-full flex justify-center">
            <SwipeFields />
          </div>

          {/* Content Section */}
          <div className="fieldsContent basis-1/2 flex flex-col mt-3 md:mt-0 gap-3 md:gap-6">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0A6BAB]">
              Our Fields
            </h3>
            <p className="text-[#656565] text-sm sm:text-base md:text-lg lg:text-xl font-light">
              Delta Misr Plastic Factories Delpak manufactures plastic
              containers (coloured, transparent and opaque) for many consumer
              goods and industrial products, such as:
            </p>

            <div className="max-h-[200px] overflow-y-auto">
              <ul className="grid grid-cols-2 gap-x-4 text-[#656565] text-sm ms:text-lg lg:text-xl font-light list-disc list-inside">
                {fields.map((field, index) => (
                  <li key={index}>{field}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFields;
