import React from "react";
import productTest from "@/assets/images/productTest.png";
import Image from "next/image";
import AddToCart from "../addTocart/AddToCart";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-6">
      {/* صورة المنتج */}
      <div className="productImg w-[120px] sm:w-[150px] md:w-[180px] h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center">
        <Image
          src={productTest}
          alt="product"
          className="object-cover w-full h-full"
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="productContent text-center sm:text-left">
        <h4 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl">
          Code B 0111
        </h4>

        <ul className="text-white font-light text-sm sm:text-base mb-3 sm:mb-4">
          <li>Diameter: 75mm</li>
          <li>Height: 265mm</li>
          <li>Neck: 29mm</li>
          <li>Volume: 900ml</li>
          <li>Material: PET</li>
        </ul>

        {/* الألوان */}
        <div className="colors flex items-center justify-center sm:justify-start gap-3 sm:gap-5">
          <span className="text-white font-light text-xs sm:text-sm">
            Color
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer rounded-full shrink-0 bg-white"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer rounded-full shrink-0 bg-[#3B3B3B]"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer rounded-full shrink-0 bg-[#F7941D]"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer rounded-full shrink-0 bg-[#0A6BAB]"></span>
          </div>
        </div>

        {/* زرار إضافة إلى السلة */}
        <div className="mt-3 sm:mt-5">
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
