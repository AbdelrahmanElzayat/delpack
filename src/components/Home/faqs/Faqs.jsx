"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import vision from "@/assets/images/vision.png";
import goals from "@/assets/images/goals.png";
import strategy from "@/assets/images/strategy.png";
import Image from "next/image";
const Faqs = () => {
  const t = useTranslations();
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
      title: t("our_vision"),
      description: t("our_vision_des"),
      icon: vision,
    },
    {
      id: "goals",
      title: t("goals"),
      description: t("goals_des"),
      icon: goals,
    },
    {
      id: "strategy",
      title: t("strategy"),
      description: t("strategy_des"),
      icon: strategy,
    },
  ];

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="Faqs py-6 md:py-8 lg:py-12 xl:py-16"
      >
        <div className="container">
          <div className="faqsCards flex items-start flex-wrap lg:flex-nowrap gap-6">
            {faqsData.map((faq, i) => (
              <motion.div
                key={faq.id}
                onClick={() => setOpen(open === faq.id ? "" : faq.id)}
                className={`faqCard flex-1 flex-grow bg-[#E7E7E7] rounded-lg flex flex-col justify-center items-center gap-4 py-2 lg:py-4 px-6 lg:pt-6 lg:pb-0 cursor-pointer transition-all`}
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
                    {t("our")}
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
                  className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-[#656565] p-2"
                  animate={open === faq.id ? "visible" : "hidden"}
                  variants={contentVariants}
                >
                  {faq.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="Faqs py-16"
      >
        <div className="container">
          <div className="faqsCards flex items-center flex-wrap lg:flex-nowrap gap-6">
            {faqsData.map((faq) => (
              <motion.div
                key={faq.id}
                onClick={() => setOpen(faq.id)}
                className={`relative faqCard flex-grow bg-[#E7E7E7] rounded-lg flex ${
                  open === faq.id ? "flex-row" : "flex-col"
                } justify-center items-center flex-wrap lg:flex-nowrap gap-4 px-6 pt-6 ${
                  open === faq.id ? "pb-4" : "pb-0"
                } cursor-pointer transition-all overflow-hidden`}
                style={{
                  display: open && open !== faq.id ? "none" : "flex",
                  width: open !== faq.id ? "100%" : "fit-content",
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
              >
                {open === faq?.id && (
                  <span
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpen("");
                    }}
                    className="cursor-pointer absolute top-5 right-5 text-xl bg-white text-red-700 rounded-full w-7 h-7 flex items-center justify-center"
                  >
                    x
                  </span>
                )}
                <div className="our flex flex-col gap-2">
                  <motion.div
                    className="text-[#f7941d] text-xl md:text-2xl lg:text-4xl xl:text-7xl transition-all flex items-center"
                    initial="hidden"
                    animate={open === faq.id ? "visible" : "hidden"}
                    variants={contentVariants}
                  >
                    <span>{t("our")}</span>
                    <Image
                      src={faq?.icon}
                      alt={faq?.title}
                      className="max-w-[65px] md:max-w-[100px] lg:max-w-[150px]"
                    />
                  </motion.div>
                  <span
                    className={`${
                      open === faq.id
                        ? "text-2xl lg:text-4xl xl:text-7xl"
                        : "text-xl lg:text-2xl xl:text-3xl"
                    } text-[#0A6BAB] font-extrabold uppercase text-center`}
                  >
                    {faq.title}
                  </span>
                </div>
                <motion.p
                  className="text-sm sm:text-lg md:text-xl font-light text-[#656565] p-2"
                  initial="hidden"
                  animate={open === faq.id ? "visible" : "hidden"}
                  variants={contentVariants}
                >
                  {faq.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Faqs;
