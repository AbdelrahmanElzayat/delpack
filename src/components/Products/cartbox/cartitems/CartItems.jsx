"use client";
import React from "react";
import ProductInCart from "./ProductInCart";
import "./cartitem.css";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
const CartItems = ({ cart, data }) => {
  const lang = Cookies.get("lang");
  return (
    <motion.div
      initial={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
      exit={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
      style={{ overflow: "hidden" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="rounded-3xl w-full bg-[#4E5864] px-2 sm:px-4 md:px-8 lg:px-16 py-12"
    >
      <div className="cartitems w-full min-h-[250px] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] overflow-x-auto flex flex-col gap-6 max-h-[500px]">
        {cart && cart?.length ? (
          cart?.map((item, i) => (
            <ProductInCart key={item?.id + i} product={item} data={data} />
          ))
        ) : (
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center">
            no data in cart!
          </h1>
        )}
      </div>
    </motion.div>
  );
};

export default CartItems;
