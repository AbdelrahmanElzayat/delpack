import React from "react";
import SwipeFields from "./SwipeFields";

const OurFields = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-start gap-4">
          <div className="fieldsCards w-[500px]">
            <SwipeFields />
          </div>
          <div className="fieldsContent basis-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-extrabold text-[#0A6BAB]">
              Our Fields
            </h3>
            <p className="text-[#656565] text-xl font-light">
              Delta Misr Plastic Factories Delpak manufactures plastic
              containers (coloured, transparent and opaque) for many consumer
              goods and industrial products, such as
            </p>
            <div className="overflow-y-auto h-[200px]">
              <ul className="grid grid-cols-2 w-full text-[#656565] text-xl font-light list-disc list-inside">
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
                <li>Edible oils</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFields;
