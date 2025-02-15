"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AddToCart from "../addTocart/AddToCart";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const [color, setColor] = useState("");

  // تحديد أول لون تلقائيًا عند تحميل الكومبوننت
  useEffect(() => {
    if (product?.colors?.length) {
      setColor(product.colors[0].hex);
    }
  }, [product]);

  return (
    <div className="flex flex-col gap-3">
      {/* صورة المنتج */}
      <motion.div
        whileHover={{ scale: 0.9 }}
        className="productImg w-full md:h-[450px] sm:h-[350px] h-[200px] flex justify-center items-start"
      >
        <Image
          src={product?.image}
          width={100}
          height={100}
          alt="product"
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* تفاصيل المنتج */}
      <div className="productContent text-center sm:text-left">
        <h4 className="text-white font-extrabold text-lg sm:text-xl">
          Code {product?.code}
        </h4>

        <ul className="text-white font-light text-sm sm:text-base mb-3 sm:mb-4">
          <li>Diameter: {product?.diameter}mm</li>
          <li>Height: {product?.height}mm</li>
          <li>Neck: {product?.neck}mm</li>
          <li>Volume: {product?.volume}ml</li>
          <li>Material: {product.material}</li>
        </ul>

        {/* الألوان */}
        <div className="colors flex items-center justify-center sm:justify-start gap-3 sm:gap-5">
          <span className="text-white font-light text-xs sm:text-sm">
            Color
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            {product?.colors?.map((c, i) => (
              <div
                key={i}
                className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-lg"
                style={{
                  border:
                    color === c.hex
                      ? "2px solid white"
                      : "2px solid transparent",
                }}
                onClick={() => setColor(c.hex)}
              >
                <span
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shrink-0"
                  style={{ backgroundColor: c.hex }}
                ></span>
              </div>
            ))}
          </div>
        </div>

        {/* زرار إضافة إلى السلة */}
        <div className="mt-3 sm:mt-5">
          <AddToCart product={product} color={color} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
