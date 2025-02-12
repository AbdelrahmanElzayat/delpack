import React from "react";

const AddToCart = () => {
  return (
    <div className="AddToCart flex items-center flex-col md:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
      {/* زرار التحكم في الكمية */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-sm text-[#6E6D6D] font-bold 
          flex items-center justify-center hover:bg-gray-200 transition"
        >
          -
        </button>
        <span className="bg-[#D9D9D9] px-3 py-1 flex items-center justify-center font-mono text-sm sm:text-base">
          1
        </span>
        <button
          className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-sm text-[#6E6D6D] font-bold 
          flex items-center justify-center hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>

      {/* زرار الإضافة إلى السلة */}
      <button
        className="text-[#0A6BAB] text-xs sm:text-sm font-[500] w-fit py-1 sm:py-2 px-3 rounded-lg 
        bg-white shadow-shadowCrt hover:bg-gray-100 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
