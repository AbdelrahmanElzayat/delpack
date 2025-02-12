import React from "react";
import ProductInCart from "./ProductInCart";
import "./cartitem.css";
const CartItems = () => {
  return (
    <div className="rounded-3xl bg-[#4E5864] px-2 sm:px-4 md:px-8 lg:px-16 py-12 lg:basis-1/2">
      <div className="cartitems w-full h-full overflow-x-auto flex flex-col gap-6 max-h-[700px]">
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
      </div>
    </div>
  );
};

export default CartItems;
