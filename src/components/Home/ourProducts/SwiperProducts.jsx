"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import productEx from "@/assets/images/productEx.png";
import rightProduct from "@/assets/icons/rightProduct.svg";
import leftProduct from "@/assets/icons/leftProduct.svg";

const ProductSwiper = () => {
  const products = [
    {
      id: 1,
      image: productEx,
      title: "Code B 0111",
      details: [
        "Diameter................75mm",
        "Height....................265mm",
        "Neck.......................29mm",
        "Volume....................900ml",
        "Material..................PET",
      ],
    },
    {
      id: 2,
      image: productEx,
      title: "Code B 0112",
      details: [
        "Diameter................80mm",
        "Height....................270mm",
        "Neck.......................30mm",
        "Volume....................950ml",
        "Material..................PET",
      ],
    },
    {
      id: 3,
      image: productEx,
      title: "Code B 0113",
      details: [
        "Diameter................85mm",
        "Height....................280mm",
        "Neck.......................32mm",
        "Volume....................1000ml",
        "Material..................PET",
      ],
    },
    {
      id: 4,
      image: productEx,
      title: "Code B 0114",
      details: [
        "Diameter................85mm",
        "Height....................280mm",
        "Neck.......................32mm",
        "Volume....................1000ml",
        "Material..................PET",
      ],
    },
    {
      id: 5,
      image: productEx,
      title: "Code B 0115",
      details: [
        "Diameter................85mm",
        "Height....................280mm",
        "Neck.......................32mm",
        "Volume....................1000ml",
        "Material..................PET",
      ],
    },
    {
      id: 6,
      image: productEx,
      title: "Code B 0116",
      details: [
        "Diameter................85mm",
        "Height....................280mm",
        "Neck.......................32mm",
        "Volume....................1000ml",
        "Material..................PET",
      ],
    },
    // Add more products as needed
  ];
  const swiperRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const handleSlideChange = (swiper) => {
    setActiveProduct(products[swiper.realIndex]);
  };

  return (
    <div className="products relative bg-products-gradient py-8 pl-12 pr-12 overflow-hidden flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between">
      {/* الجانب الأيسر: المنتج النشط */}
      <div className="leftSide relative mb-8 lg:mb-0">
        <div className="activeProductImg">
          <div className="mainProduct">
            <Image
              src={activeProduct.image}
              alt={activeProduct.title}
              className="max-w-[300px] lg:max-w-[400px] max-h-[50vh] lg:max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
        {/* أزرار التنقل حول الصورة */}
        <button
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={leftProduct} alt="prev" />
        </button>
        <button
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 "
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={rightProduct} alt="next" />
        </button>
      </div>

      {/* الجانب الأيمن: معلومات المنتج والسوايبر */}
      <div className="rightSide flex flex-col justify-center gap-8 text-center lg:text-left">
        {/* بيانات المنتج النشط */}
        <div>
          <div className="productData flex flex-col items-center gap-3 max-w-[350px] mx-auto lg:mx-0">
            <h3 className="w-fit text-center border-b-4 border-b-[#F7941D] text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl font-extrabold">
              {activeProduct.title}
            </h3>
            <p className="max-w-[300px] text-white font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">
              {activeProduct.details.map((detail, index) => (
                <span key={index}>
                  {detail}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="max-w-[600px] md:w-full md:max-w-[900px] w-full products bg-productsList-gradient py-4 px-6 lg:px-0 container">
          <div className="">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              centeredSlides={true}
              loop
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="max-w-[100px] max-h-[260px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSwiper;
