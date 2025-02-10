import React from "react";
import productTest from "@/assets/images/productTest.png";
import Image from "next/image";
const ProductInCart = () => {
  return (
    <div className="productCard flex items-center gap-12">
      <div className="productImg max-w-[150px] h-[400px] flex justify-center items-center">
        <Image
          src={productTest}
          alt="product"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="productContent">
        <h4 className="text-white font-extrabold text-xl">Code B 0111</h4>
        <ul className="text-white font-light mb-4 text-sm">
          <li>Diameter: 75mm</li>
          <li>Height: 265mm</li>
          <li>Neck: 29mm</li>
          <li>Volume: 900ml</li>
          <li>Material: PET</li>
        </ul>
        <div className="colors flex items-center gap-5">
          <span className="text-white font-light text-sm">color</span>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 cursor-pointer rounded-full shrink-0 bg-white"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full shrink-0 bg-[#3B3B3B]"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full shrink-0 bg-[#F7941D]"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full shrink-0 bg-[#0A6BAB]"></span>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
