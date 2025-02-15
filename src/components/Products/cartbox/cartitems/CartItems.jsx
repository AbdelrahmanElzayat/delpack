"use client";
import React from "react";
import ProductInCart from "./ProductInCart";
import "./cartitem.css";
const CartItems = ({ cart, data }) => {

  return (
    <div className="rounded-3xl bg-[#4E5864] px-2 sm:px-4 md:px-8 lg:px-16 py-12 lg:basis-1/2">
      <div className="cartitems w-full min-h-[500px] overflow-x-auto flex flex-col gap-6 max-h-[500px]">
        {cart && cart?.length ? (
          cart?.map((item, i) => (
            <ProductInCart key={item?.id + i} product={item} data={data} />
          ))
        ) : (
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center">no data in cart!</h1>
        )}
      </div>
    </div>
  );
};

export default CartItems;
