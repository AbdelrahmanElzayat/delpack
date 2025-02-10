import React from "react";

const AddToCart = () => {
  return (
    <div className="AddToCart flex items-center gap-4 mt-6">
      <div className="flex items-center gap-1">
        <button className="w-5 h-5 bg-white rounded-sm text-[#6E6D6D]">
          -
        </button>
        <span className="bg-[#D9D9D9] px-3 flex items-center justify-center font-mono">
          1
        </span>
        <button className="w-5 h-5 bg-white rounded-sm text-[#6E6D6D]">
          +
        </button>
      </div>
      <button className="text-[#0A6BAB] text-sm font-[500] w-fit p-1 px-2 rounded-[6px] bg-white shadow-shadowCrt pt-2">
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;
