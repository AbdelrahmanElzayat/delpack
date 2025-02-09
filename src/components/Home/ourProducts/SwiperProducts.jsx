"use client";
// import productEx from "@/assets/images/productEx.png";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow } from "swiper/modules";
// import Image from "next/image";

// const SwiperProducts = () => {
//   const products = [
//     {
//       id: 1,
//       image: productEx,
//       title: "Code B 0111",
//       diameter: "75mm",
//       height: "265mm",
//       neck: "29mm",
//       volume: "900ml",
//       material: "PET",
//     },
//     {
//       id: 2,
//       image: productEx,
//       title: "Code B 0112",
//       diameter: "70mm",
//       height: "260mm",
//       neck: "28mm",
//       volume: "850ml",
//       material: "PET",
//     },
//     {
//       id: 2,
//       image: productEx,
//       title: "Code B 0112",
//       diameter: "70mm",
//       height: "260mm",
//       neck: "28mm",
//       volume: "850ml",
//       material: "PET",
//     },
//     {
//       id: 2,
//       image: productEx,
//       title: "Code B 0112",
//       diameter: "70mm",
//       height: "260mm",
//       neck: "28mm",
//       volume: "850ml",
//       material: "PET",
//     },
//     {
//       id: 2,
//       image: productEx,
//       title: "Code B 0112",
//       diameter: "70mm",
//       height: "260mm",
//       neck: "28mm",
//       volume: "850ml",
//       material: "PET",
//     },
//     {
//       id: 2,
//       image: productEx,
//       title: "Code B 0112",
//       diameter: "70mm",
//       height: "260mm",
//       neck: "28mm",
//       volume: "850ml",
//       material: "PET",
//     },
//     {
//       id: 2,
//       image: productEx,
//       title: "Code B 0112",
//       diameter: "70mm",
//       height: "260mm",
//       neck: "28mm",
//       volume: "850ml",
//       material: "PET",
//     },
//     // Add more products as needed
//   ];

//   const [activeProduct, setActiveProduct] = useState(products[0]);

//   const handleSlideChange = (swiper) => {
//     setActiveProduct(products[swiper.activeIndex]);
//   };

//   return (
//     <div className="products relative bg-products-gradient py-8 pl-12 overflow-hidden flex items-end justify-between">
//       <div className="leftSide">
//         <div className="activeProductImg">
//           <div className="mainProduct">
//             <Image
//               src={productEx}
//               alt="product"
//               className="max-w-[460px] max-h-[90vh] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="rightSide flex flex-col justify-center gap-[50px]">
//         <div>
//           <div className="productData flex flex-col gap-3 max-w-[350px]">
//             <h3 className="border-b-4 border-b-[#F7941D] text-white text-4xl font-extrabold">Code B 0111</h3>
//             <p className="max-w-[300px] text-white font-light text-2xl">
//               Diameter................75mm
//               Height....................265mm
//               Neck.......................29mm
//               Volume....................900ml
//               Material..................PET
//             </p>
//           </div>
//         </div>
//         <div className="products bg-productsList-gradient py-4 px-14">
//           <div className="flex justify-center items-center gap-14">
//             <Image
//               src={productEx}
//               alt="product"
//               className="max-w-[120px] max-h-[260px] object-contain"
//             />
//             <Image
//               src={productEx}
//               alt="product"
//               className="max-w-[120px] max-h-[260px] object-contain"
//             />
//             <Image
//               src={productEx}
//               alt="product"
//               className="max-w-[120px] max-h-[260px] object-contain"
//             />
//             <Image
//               src={productEx}
//               alt="product"
//               className="max-w-[120px] max-h-[260px] object-contain"
//             />
//             <Image
//               src={productEx}
//               alt="product"
//               className="max-w-[120px] max-h-[260px] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SwiperProducts;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import productEx from "@/assets/images/productEx.png";

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
      title: "Code B 0115",
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

  const [activeProduct, setActiveProduct] = useState(products[0]);

  const handleSlideChange = (swiper) => {
    setActiveProduct(products[swiper.realIndex]);
  };

  return (
    <div className="products relative bg-products-gradient py-8 pl-12 overflow-hidden flex items-end justify-between">
      {/* الجانب الأيسر: المنتج النشط */}
      <div className="leftSide">
        <div className="activeProductImg">
          <div className="mainProduct">
            <Image
              src={activeProduct.image}
              alt={activeProduct.title}
              className="max-w-[460px] max-h-[90vh] object-contain"
            />
          </div>
        </div>
      </div>

      {/* الجانب الأيمن: معلومات المنتج والسوايبر */}
      <div className="rightSide flex flex-col justify-center gap-[50px]">
        {/* بيانات المنتج النشط */}
        <div >
          <div className="productData flex flex-col gap-3 max-w-[350px]">
            <h3 className="border-b-4 border-b-[#F7941D] text-white text-4xl font-extrabold">
              {activeProduct.title}
            </h3>
            <p className="max-w-[300px] text-white font-light text-2xl">
              {activeProduct.details.map((detail, index) => (
                <span key={index}>
                  {detail}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* سوايبر المنتجات */}
        <div className="w-full products bg-productsList-gradient py-4 px-14 container">
          <Swiper
            modules={[EffectCoverflow]}
            slidesPerView={5}
            spaceBetween={5}
            centeredSlides={true}
            effect="coverflow"
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            onSlideChange={handleSlideChange}
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
  );
};

export default ProductSwiper;
