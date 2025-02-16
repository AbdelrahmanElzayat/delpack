"use client";
import React from "react";
import style from "./ourProducts.module.css";
import Image from "next/image";
import arrowdown from "@/assets/icons/arrowdown.svg";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
const OurProductHeading = () => {
  const t = useTranslations();
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={`${style.OurProductHeading} min-h-[400px] pt-3 md:pt-5 flex justify-center items-center w-full`}
    >
      <div className="container">
        <div className="content flex flex-col items-center justify-center gap-5 relative z-50 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {t("our_products")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            {t("tagline")}
          </motion.p>
          <Image
            src={arrowdown}
            alt="explore products"
            className="animate-bounce mt-5 cursor-pointer max-h-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProductHeading;
