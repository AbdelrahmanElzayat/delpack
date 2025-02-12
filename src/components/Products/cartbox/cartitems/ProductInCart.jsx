import React from "react";
import productTest from "@/assets/images/productTest.png";
import Image from "next/image";

const ProductInCart = () => {
  return (
    <div className="productCard flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-12 p-4">
      {/* صورة المنتج */}
      <div className="productImg w-full md:max-w-[150px] h-[300px] md:h-[400px] flex justify-center items-center">
        <Image
          src={productTest}
          alt="product"
          className="object-cover w-full h-full"
        />
      </div>

      {/* المحتوى */}
      <div className="productContent w-full md:w-auto">
        <h4 className="text-white font-extrabold text-lg md:text-xl">
          Code B 0111
        </h4>

        <ul className="text-white font-light mb-4 text-xs md:text-sm">
          <li>Diameter: 75mm</li>
          <li>Height: 265mm</li>
          <li>Neck: 29mm</li>
          <li>Volume: 900ml</li>
          <li>Material: PET</li>
        </ul>

        {/* الألوان */}
        <div className="colors flex items-center gap-3 md:gap-5">
          <span className="text-white font-light text-xs md:text-sm">
            color
          </span>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-4 h-4 cursor-pointer rounded-full bg-white"></span>
            <span className="w-4 h-4 cursor-pointer rounded-full bg-[#3B3B3B]"></span>
            <span className="w-4 h-4 cursor-pointer rounded-full bg-[#F7941D]"></span>
            <span className="w-4 h-4 cursor-pointer rounded-full bg-[#0A6BAB]"></span>
          </div>
        </div>

        {/* أزرار الإضافة للسلة */}
        <div className="AddToCart flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 bg-white rounded-sm text-[#6E6D6D] flex items-center justify-center">
              -
            </button>
            <span className="bg-[#D9D9D9] px-4 py-1 text-xs flex items-center justify-center font-mono">
              1
            </span>
            <button className="w-6 h-6 bg-white rounded-sm text-[#6E6D6D] flex items-center justify-center">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
