"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import catalogueImg from "@/assets/images/catalogue.png";
import "./Catalogue.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Catalogue = () => {
  const t = useTranslations();
  return (
    <div className="Catalogue py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px] sm:py-[200px] bg-white w-full relative">
      <div className="container">
        {/* العنوان والوصف */}
        <div className="mainHeading flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[51px] py-3 font-extrabold uppercase text-center"
          >
            {t("catalogue")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xltext-center text-[#656565] font-light"
          >
            {t("explore_catalogue")}
          </motion.p>
        </div>

        {/* صورة الكتالوج */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 1 }}
          className="catalogueImg flex justify-center items-center py-[50px] sm:py-[100px]"
        >
          <Image
            src={catalogueImg}
            alt="catalogue"
            className="max-w-full sm:max-w-[800px]"
          />
        </motion.div>

        {/* زر التصفح */}
        <Link
          href="/catalogue"
          className="py-2 px-[40px] sm:py-6 sm:px-[80px] bg-[#FFB548] rounded-lg text-lg sm:text-xl md:text-2xl font-light text-white text-center m-auto w-fit block hover:bg-[#FFA726] transition"
        >
          {t("browse")}
        </Link>
      </div>
    </div>
  );
};

export default Catalogue;
