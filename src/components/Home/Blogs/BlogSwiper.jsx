"use client";
// import React, { useState, useRef } from "react";
// import BlogCard from "./BlogCard";
// import BlogTest from "@/assets/images/blogEx.jpg";
// import stopSwipe from "@/assets/icons/stopSwipe.svg";
// import playSwipe from "@/assets/icons/playSwipe.svg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";

// const BlogSwiper = () => {
//   const [isAutoplay, setIsAutoplay] = useState(true); // للتحكم في تشغيل الـ autoplay
//   const [activeIndex, setActiveIndex] = useState(0); // حالة لتخزين الباجينيشن النشط
//   const swiperRef = useRef(null); // مرجع للـ Swiper

//   const blogs = [
//     {
//       id: 1,
//       image: BlogTest,
//       title: "NEW MACHINES NEW QUALITIES",
//     },
//     {
//       id: 2,
//       image: BlogTest,
//       title: "NEW MACHINES NEW QUALITIES",
//     },
//     {
//       id: 3,
//       image: BlogTest,
//       title: "NEW MACHINES NEW QUALITIES",
//     },
//   ];

//   const toggleAutoplay = () => {
//     if (swiperRef.current) {
//       if (isAutoplay) {
//         swiperRef.current.autoplay.stop(); // إيقاف الـ autoplay
//       } else {
//         swiperRef.current.autoplay.start(); // تشغيل الـ autoplay
//       }
//     }
//     setIsAutoplay(!isAutoplay); // تحديث الحالة
//   };

//   return (
//     <div className="py-10 relative">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1.2}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[Pagination, Autoplay]}
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // تخزين الـ swiper في المرجع
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // تحديث الباجينيشن النشط عند تغيير الشريحة
//       >
//         {blogs?.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="w-full flex justify-center">
//               <BlogCard title={item.title} image={item.image} />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Box */}
//       <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 z-50 w-[420px] h-[100px] bg-gradient-to-r from-gray-300 to-gray-500/70 rounded-full shadow-lg p-1">
//         {/* الصندوق الداخلي */}
//         <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full border border-white/40" />
//         {/* المحتوى */}
//         <div className="relative flex items-center justify-between h-full px-10">
//           {/* الباجينيشن */}
//           <div className="flex items-center space-x-2">
//             {blogs.map((_, index) => (
//               <div
//                 key={index}
//                 className={`${
//                   activeIndex === index ? "w-[89px]" : "w-4"
//                 } h-4 bg-white rounded-full shadow-md border border-gray-300`}
//               />
//             ))}
//           </div>
//           {/* زرار التحكم في الـ autoplay */}
//           <button
//             onClick={toggleAutoplay}
//             className="px-5 py-1 text-gray-800 font-semibold transition"
//           >
//             {isAutoplay ? (
//               <Image src={stopSwipe} alt="Stop" width={22} height={22} />
//             ) : (
//               <Image src={playSwipe} alt="Play" width={22} height={22} />
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSwiper;


import React, { useState, useRef } from "react";
import BlogCard from "./BlogCard";
import BlogTest from "@/assets/images/blogEx.jpg";
import stopSwipe from "@/assets/icons/stopSwipe.svg";
import playSwipe from "@/assets/icons/playSwipe.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const BlogSwiper = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const blogs = [
    { id: 1, image: BlogTest, title: "NEW MACHINES NEW QUALITIES" },
    { id: 2, image: BlogTest, title: "NEW MACHINES NEW QUALITIES" },
    { id: 3, image: BlogTest, title: "NEW MACHINES NEW QUALITIES" },
  ];

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      isAutoplay
        ? swiperRef.current.autoplay.stop()
        : swiperRef.current.autoplay.start();
    }
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div className="py-10 relative mx-4 md:mx-0">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {blogs.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full flex justify-center">
              <BlogCard title={item.title} image={item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Box */}
      <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 z-50 w-[200px] lg:w-[300px] sm:w-[420px] h-[80px] sm:h-[100px] bg-gradient-to-r from-gray-300 to-gray-500/70 rounded-full shadow-lg p-1">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full border border-white/40" />
        <div className="relative flex items-center justify-between h-full px-5 sm:px-10">
          {/* الباجينيشن */}
          <div className="flex items-center space-x-2">
            {blogs.map((_, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index ? "w-[70px] sm:w-[89px]" : "w-3 sm:w-4"
                } h-3 sm:h-4 bg-white rounded-full shadow-md border border-gray-300`}
              />
            ))}
          </div>
          {/* زر التحكم */}
          <button
            onClick={toggleAutoplay}
            className="px-4 sm:px-5 py-1 text-gray-800 font-semibold transition"
          >
            <Image
              src={isAutoplay ? stopSwipe : playSwipe}
              alt="Toggle"
              width={22}
              height={22}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSwiper;
