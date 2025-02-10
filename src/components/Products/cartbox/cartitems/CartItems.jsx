import React from "react";
import ProductInCart from "./ProductInCart";
import "./cartitem.css";
const CartItems = () => {
  return (
    <div className="rounded-3xl bg-[#4E5864] px-16 py-12 basis-1/2">
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
