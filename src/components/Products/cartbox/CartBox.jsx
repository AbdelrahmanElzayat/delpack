"use client";
import React, { useEffect, useState } from "react";
import CartItems from "./cartitems/CartItems";
import CartForm from "./cartfotm/CartForm";
import { useAppSelector } from "@/rtk/store";
import { useTranslations } from "next-intl";

const CartBox = ({ products }) => {
  const allcart = useAppSelector((state) => state.cart);
  const cart = useAppSelector((state) => state.cart.cartItems);
  const t = useTranslations();

  // ✅ حل مشكلة الـ Hydration: استخدام حالة محلية
  const [clientCart, setClientCart] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(allcart));
      setClientCart(allcart); // تحديث الحالة بعد التحميل
    }
  }, [allcart]);

  return (
    <div className="pb-[50px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
      <div className="container">
        <div className="CartBox bg-[#EDEDED] px-8 py-10 rounded-lg">
          <h5 className="text-[#5B5B5B] text-base uppercase font-bold mb-4">
            {t("cart")}
            <span className="capitalize font-light">
              ({clientCart?.totalQuantity || 0} item){" "}
              {/* ✅ استخدام `clientCart` بعد التحميل */}
            </span>
          </h5>
          <div className="grid lg:grid-cols-2 gap-16">
            <CartItems data={products} cart={clientCart?.cartItems || []} />
            <CartForm productsIncart={clientCart?.cartItems || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
