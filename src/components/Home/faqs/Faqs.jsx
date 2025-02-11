"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Faqs = () => {
  const [open, setOpen] = useState("");

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  // Static data (replace with API data in the future)
  const faqsData = [
    {
      id: "vision",
      title: "vision",
      description:
        "The main center, administration and factories are located in Gharbia Governorate. The company's area is about twenty-five thousand square meters equipped with the best production lines and the best capabilities consisting of injection and blowing m.",
    },
    {
      id: "goals",
      title: "goals",
      description:
        "The main center, administration and factories are located in Gharbia Governorate. The company's area is about twenty-five thousand square meters equipped with the best production lines and the best capabilities consisting of injection and blowing m.",
    },
    {
      id: "strategy",
      title: "strategy",
      description:
        "The main center, administration and factories are located in Gharbia Governorate. The company's area is about twenty-five thousand square meters equipped with the best production lines and the best capabilities consisting of injection and blowing m.",
    },
  ];

  return (
    <>
      <div className="Faqs py-16">
        <div className="container">
          <div className="faqsCards flex items-start flex-wrap lg:flex-nowrap gap-6">
            {faqsData.map((faq) => (
              <motion.div
                key={faq.id}
                onClick={() => setOpen(open === faq.id ? "" : faq.id)}
                className={`faqCard flex-grow bg-[#E7E7E7] rounded-lg flex flex-col justify-center items-center gap-4 py-4 px-6 pt-6 pb-0 cursor-pointer transition-all`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
              >
                <div className="our flex flex-col gap-2 text-center">
                  <motion.span
                    className="text-[#f7941d] text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-7xl"
                    animate={open === faq.id ? "visible" : "hidden"}
                    variants={contentVariants}
                  >
                    Our
                  </motion.span>
                  <span
                    className={`${
                      open === faq.id
                        ? "sm:text-xl md:text-2xl lg:text-4xl xl:text-7xl"
                        : "sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                    } text-[#0A6BAB] font-extrabold uppercase`}
                  >
                    {faq.title}
                  </span>
                </div>
                <motion.p
                  className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-[#656565]"
                  animate={open === faq.id ? "visible" : "hidden"}
                  variants={contentVariants}
                >
                  {faq.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="Faqs py-16">
    //   <div className="container">
    //     <div className="faqsCards flex items-center gap-6">
    //       {faqsData.map((faq) => (
    //         <motion.div
    //           key={faq.id}
    //           onClick={() => setOpen(open === faq.id ? "" : faq.id)}
    //           className={`faqCard flex-grow bg-[#E7E7E7] rounded-lg flex ${
    //             open === faq.id ? "flex-row" : "flex-col"
    //           } justify-center items-center gap-4 py-4 px-6 pt-6 pb-0 cursor-pointer transition-all overflow-hidden`}
    //           style={{
    //             display: open && open !== faq.id ? "none" : "flex",
    //             width: open !== faq.id ? "100%" : "fit-content",
    //           }}
    //           initial="hidden"
    //           animate="visible"
    //           exit="hidden"
    //           variants={cardVariants}
    //         >
    //           <div className="our flex flex-col gap-2">
    //             <motion.span
    //               className="text-[#f7941d] text-7xl transition-all"
    //               initial="hidden"
    //               animate={open === faq.id ? "visible" : "hidden"}
    //               variants={contentVariants}
    //             >
    //               Our
    //             </motion.span>
    //             <span
    //               className={`${
    //                 open === faq.id ? "text-7xl" : "text-3xl"
    //               } text-[#0A6BAB] font-extrabold uppercase text-center`}
    //             >
    //               {faq.title}
    //             </span>
    //           </div>
    //           <motion.p
    //             className="text-3xl font-light text-[#656565]"
    //             initial="hidden"
    //             animate={open === faq.id ? "visible" : "hidden"}
    //             variants={contentVariants}
    //           >
    //             {faq.description}
    //           </motion.p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
     </div> */}
    </>
  );
};

export default Faqs;
