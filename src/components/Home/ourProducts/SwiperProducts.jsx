"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import rightProduct from "@/assets/icons/rightProduct.svg";
import leftProduct from "@/assets/icons/leftProduct.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const ProductSwiper = ({ products }) => {
  const swiperRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const handleSlideChange = (swiper) => {
    setActiveProduct(products[swiper.realIndex]);
  };
  const t = useTranslations();
  const lang = Cookies.get("lang");
  return (
    <div className="products relative z-50 bg-products-gradient py-4 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between">
      {/* الجانب الأيسر: المنتج النشط */}
      <motion.div
        initial={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
        transition={{ duration: 2 }}
        style={{ overflow: "hidden" }}
        className="leftSide relative mb-8 lg:mb-0 w-full md:w-auto md:basis-1/2 overflow-hidden"
      >
        <div className="activeProductImg">
          <div className="mainProduct">
            <Image
              src={activeProduct.image}
              alt={"productActive"}
              width={500}
              height={400}
              className="max-w-[260px] lg:max-w-[350px] h-[50vh] lg:h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
        {/* أزرار التنقل حول الصورة */}
        <button
          className="absolute left-3 top-1/2 transform -translate-y-1/2 "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={leftProduct} alt="prev" />
        </button>
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 "
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={rightProduct} alt="next" />
        </button>
      </motion.div>

      {/* الجانب الأيمن: معلومات المنتج والسوايبر */}
      <div className="w-full rightSide flex flex-col justify-center gap-8 text-center lg:text-left overflow-hidden">
        {/* بيانات المنتج النشط */}
        <motion.div
          initial={{ opacity: 0, x: lang === "en" ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: lang === "en" ? 100 : -100 }}
          transition={{ duration: 2 }}
          className="overflow-hidden"
        >
          <div className="productData flex flex-col gap-3 w-full mx-auto lg:mx-0">
            <h3 className="w-fit border-b-4 border-b-[#F7941D] text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl font-extrabold">
              {t("code")} {activeProduct.code}
            </h3>
            <ul className="w-full flex flex-col items-start text-white font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">
              <li>
                {t("diameter")}..................{activeProduct?.diameter}{" "}
                {t("mm")}
              </li>
              <li>
                {t("height")}..................{activeProduct?.height} {t("mm")}
              </li>
              <li>
                {t("neck")}..................{activeProduct?.neck} {t("mm")}
              </li>
              <li>
                {t("volume")}..................{activeProduct?.volume} {t("ml")}
              </li>
              <li>
                {t("material")}..................{activeProduct.material}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* <div className="md:w-full md:max-w-[900px] w-full products bg-productsList-gradient py-4 px-6 lg:px-0 container"> */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
          className="w-full products bg-productsList-gradient py-4 px-6 lg:px-0"
        >
          <div className="">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              centeredSlides={true}
              loop
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                250: { slidesPerView: 2, spaceBetween: 10 }, // للشاشات الصغيرة
                320: { slidesPerView: 3, spaceBetween: 10 }, // للشاشات الصغيرة
                480: { slidesPerView: 3, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
                1280: { slidesPerView: 5, spaceBetween: 20 }, // للشاشات الكبيرة
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.code}
                    width={500}
                    height={500}
                    className="max-w-[100px] max-h-[260px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>

      <Link
        href={"/products"}
        className="bg-[#0A6BAB] rounded-2xl px-4 md:px-6 lg:px-8 xl:px-10 py-2 lg:py-3 xl:py-4  absolute left-1/2 -translate-x-1/2 z-50 -bottom-4 md:-bottom-6 lg:-bottom-8 xl:-bottom-10 flex justify-center items-center text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] font-bold "
      >
        {t("explore_more")}
      </Link>
    </div>
  );
};

export default ProductSwiper;

// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import Image from "next/image";
// import rightProduct from "@/assets/icons/rightProduct.svg";
// import leftProduct from "@/assets/icons/leftProduct.svg";
// import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";
// import Cookies from "js-cookie";

// const ProductSwiper = ({ products }) => {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const t = useTranslations();
//   const lang = Cookies.get("lang");

//   return (
//     <div className="products relative z-50 bg-products-gradient py-4 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row items-center justify-center">
//       {/* قسم السلايدر باستخدام تأثير الـ Coverflow */}
//       <div className="w-full lg:w-1/2 relative">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={false} // لن يكون في المنتصف؛ الشريحة النشطة على اليسار
//           slidesPerView={3}
//           spaceBetween={20}
//           initialSlide={0}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 80, // تعديل هذه القيمة لنقل الشريحة النشطة أكثر لليسار
//             depth: 150,
//             modifier: 1,
//             slideShadows: false,
//           }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           modules={[EffectCoverflow, Navigation]}
//           className="mySwiper"
//         >
//           {products?.map((product, index) => (
//             <SwiperSlide key={product.id}>
//               <motion.div
//                 initial={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={500}
//                   height={500}
//                   className={`object-contain ${
//                     activeIndex === index
//                       ? "max-w-[350px] lg:max-w-[450px] h-[50vh] lg:h-[90vh]"
//                       : "max-w-[150px] lg:max-w-[200px] h-[30vh] lg:h-[50vh]"
//                   }`}
//                 />
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* أزرار التنقل */}
//         <button
//           className="swiper-button-prev absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <Image src={leftProduct} alt="prev" />
//         </button>
//         <button
//           className="swiper-button-next absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <Image src={rightProduct} alt="next" />
//         </button>
//       </div>

//       {/* بيانات المنتج النشط */}
//       <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col justify-center gap-8 text-center lg:text-left">
//         <motion.div
//           initial={{ opacity: 0, x: lang === "en" ? 100 : -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="productData flex flex-col gap-3">
//             <h3 className="w-fit border-b-4 border-b-[#F7941D] text-white text-2xl font-extrabold">
//               {t("code")} {products[activeIndex]?.code}
//             </h3>
//             <ul className="flex flex-col items-start text-white font-light text-lg">
//               <li>
//                 {t("diameter")}: {products[activeIndex]?.diameter} {t("mm")}
//               </li>
//               <li>
//                 {t("height")}: {products[activeIndex]?.height} {t("mm")}
//               </li>
//               <li>
//                 {t("neck")}: {products[activeIndex]?.neck} {t("mm")}
//               </li>
//               <li>
//                 {t("volume")}: {products[activeIndex]?.volume} {t("ml")}
//               </li>
//               <li>
//                 {t("material")}: {products[activeIndex]?.material}
//               </li>
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProductSwiper;
