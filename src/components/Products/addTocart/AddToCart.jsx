"use client";
import { cartActions } from "@/rtk/slices/cartslice";
import { useAppDispatch, useAppSelector } from "@/rtk/store";
import { useTranslations } from "next-intl";
import React, { useState, useCallback } from "react";
import toast from "react-hot-toast";

const AddToCart = ({ product, color }) => {
  const t = useTranslations();
  const [qty, setQty] = useState(1);
  const dispatch = useAppDispatch();

  // تحديث الكمية بطريقة صحيحة
  const handleQtyChange = useCallback((type) => {
    setQty((prevQty) => {
      if (type === "increase") return Math.min(prevQty + 1, 99);
      if (type === "decrease") return Math.max(prevQty - 1, 1);
      return prevQty;
    });
  }, []);

  // إضافة المنتج إلى السلة
  const addToCart = useCallback(() => {
    if (!color) return toast.error(t("colorRequires"));
    dispatch(cartActions.addItem({ product, color, qty }));
    toast.success(t("added"));
  }, [dispatch, product, color, qty]);

  return (
    <div className="flex flex-col md:flex-row  gap-3 sm:gap-4 mt-4 sm:mt-6">
      {/* زر التحكم في الكمية */}
      <div className="flex items-center gap-2">
        <button
          className="w-7 h-7 bg-white rounded-sm text-[#6E6D6D] font-bold flex items-center justify-center 
          hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handleQtyChange("decrease")}
          disabled={qty === 1}
        >
          -
        </button>
        <span className="bg-[#D9D9D9] px-4 py-1 flex items-center justify-center font-mono text-sm sm:text-base">
          {qty}
        </span>
        <button
          className="w-7 h-7 bg-white rounded-sm text-[#6E6D6D] font-bold flex items-center justify-center 
          hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handleQtyChange("increase")}
          disabled={qty >= 99}
        >
          +
        </button>
      </div>

      {/* زر الإضافة إلى السلة */}
      <button
        className="text-[#0A6BAB] text-xs sm:text-sm font-medium py-2 px-4 rounded-lg 
        bg-white shadow-md hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={addToCart}
        disabled={!color}
      >
        {t("add_to_cart")}
      </button>
    </div>
  );
};

export default AddToCart;
