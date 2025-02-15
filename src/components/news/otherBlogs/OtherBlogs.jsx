"use client";

import BlogCard from "@/components/Home/Blogs/BlogCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const OtherBlogs = ({ blogs }) => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.2} // يخلي كل سلايد بحجم معين
        // centeredSlides={true} // يخلي السلايد في النص
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay]}
      >
        {blogs?.map((blog) => (
          <SwiperSlide
            key={blog?.id}
            style={{ width: "100%"}} // يحدد عرض السلايد
          >
            <BlogCard title={blog?.title} image={blog?.image} id={blog?.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OtherBlogs;
