"use client";
import React from "react";
import CartItems from "./cartitems/CartItems";
import CartForm from "./cartfotm/CartForm";
import { useAppSelector } from "@/rtk/store";

const CartBox = ({ products }) => {
  const allcart = useAppSelector((state) => state.cart);
  const cart = useAppSelector((state) => state.cart.cartItems);

  return (
    <div className="pb-[50px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
      <div className="container">
        <div className="CartBox bg-[#EDEDED] px-8 py-10 rounded-lg">
          <h5 className="text-[#5B5B5B] text-base uppercase font-bold mb-4">
            cart
            <span className="capitalize font-light">
              ({allcart?.totalQuantity} item)
            </span>
          </h5>
          <div className="flex items-start flex-col lg:flex-row justify-center gap-16">
            <CartItems data={products} cart={cart} />
            <CartForm productsIncart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
