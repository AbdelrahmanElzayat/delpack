"use client";
import React from "react";

// import { useState } from "react";

// const slidesData = [
//   {
//     id: 1,
//     img: "https://i.ibb.co/qCkd9jS/img1.jpg",
//     name: "Switzerland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 2,
//     img: "https://i.ibb.co/jrRb11q/img2.jpg",
//     name: "Finland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 3,
//     img: "https://i.ibb.co/NSwVv8D/img3.jpg",
//     name: "Iceland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 4,
//     img: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
//     name: "Australia",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 5,
//     img: "https://i.ibb.co/jTQfmTq/img5.jpg",
//     name: "Netherland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 6,
//     img: "https://i.ibb.co/RNkk6L0/img6.jpg",
//     name: "Ireland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 6,
//     img: "https://i.ibb.co/RNkk6L0/img6.jpg",
//     name: "Ireland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 6,
//     img: "https://i.ibb.co/RNkk6L0/img6.jpg",
//     name: "Ireland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
//   {
//     id: 6,
//     img: "https://i.ibb.co/RNkk6L0/img6.jpg",
//     name: "Ireland",
//     des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
//   },
// ];

const ProductsSlider = () => {
//   const [slides, setSlides] = useState(slidesData);

//   const handleNext = () => {
//     setSlides((prev) => {
//       const newSlides = [...prev];
//       const first = newSlides.shift();
//       newSlides.push(first);
//       return newSlides;
//     });
//   };

//   const handlePrev = () => {
//     setSlides((prev) => {
//       const newSlides = [...prev];
//       const last = newSlides.pop();
//       newSlides.unshift(last);
//       return newSlides;
//     });
//   };

//   // تحسب المواقع والستايل بناءً على ترتيب العنصر
//   const getItemStyle = (index) => {
//     if (index === 0 || index === 1) {
//       return {
//         top: 0,
//         left: 0,
//         transform: "none",
//         borderRadius: 0,
//         width: "100%",
//         height: "100%",
//       };
//     } else if (index === 2) {
//       return { right: "-60%" };
//     } else if (index === 3) {
//       return { right: "calc(-60% - 220px)" };
//     } else if (index === 4) {
//       return { right: "calc(-60% - 440px)" };
//     } else if (index === 5) {
//       return { right: "calc(-60% - 660px)" };
//     } else if (index === 6) {
//       return { right: "calc(-60% - 880px)" };
//     } else if (index >= 6) {
//       return { right: "calc(-60% - 1100px)", opacity: 0 };
//     }
//     return {};
//   };

  return (
    <div className="bg-products-gradient py-4 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* <div className="container mt-10">
        <div className="relative left-0 z-50 max-w-[260px] lg:max-w-[350px] h-[50vh] lg:h-[90vh] bg-gray-100 shadow-[0_30px_50px_#dbdbdb] transform">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="absolute w-[200px] h-[300px] bottom-0 rounded-[20px] bg-center bg-cover transition-all duration-500"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  ...getItemStyle(index),
                }}
              ></div>
            ))}
          </div>
          <div className="relative bottom-5 w-full text-center">
            <button
              onClick={handlePrev}
              className="w-10 h-9 rounded-md border border-black mr-2 hover:bg-gray-400 hover:text-white"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-9 rounded-md border border-black ml-2 hover:bg-gray-400 hover:text-white"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductsSlider;
