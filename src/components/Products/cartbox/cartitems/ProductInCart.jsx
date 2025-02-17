"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/rtk/store";
import { cartActions } from "@/rtk/slices/cartslice";
import { useTranslations } from "next-intl";
import deleteIcon from "@/assets/icons/delete.svg";
const ProductInCart = ({ product, data }) => {
  const t = useTranslations();
  const currentProduct = useMemo(
    () => data?.find((item) => item.id === product.id),
    [data, product.id]
  );
  const colors = currentProduct?.colors || [];
  const [color, setColor] = useState(product?.color || "");

  // تحديد أول لون تلقائيًا عند تحميل الكومبوننت
  useEffect(() => {
    if (colors?.length) {
      setColor(product?.color || colors[0]?.hex);
    }
  }, [product, colors]);
  const dispatch = useAppDispatch();

  return (
    <div className="productCard flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-6 p-4">
      {/* صورة المنتج */}
      <motion.div
        whileHover={{ scale: 0.9 }}
        className="productImg w-full md:h-[300px] h-[200px] flex justify-center items-start"
      >
        <Image
          src={product?.image}
          width={100}
          height={100}
          alt="product"
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* المحتوى */}
      <div className="productContent w-full ">
        <h4 className="text-white font-extrabold text-base sm:text-lg md:text-xl">
          {t("code")} {product?.code}
        </h4>

        <ul className="text-white font-light mb-4 text-xs md:text-sm">
          <li>
            {t("diameter")}: {product?.diameter} {t("mm")}
          </li>
          <li>
            {t("height")}: {product?.height} {t("mm")}
          </li>
          <li>
            {t("neck")}: {product?.neck} {t("mm")}
          </li>
          <li>
            {t("volume")}: {product?.volume} {t("ml")}
          </li>
          <li>
            {t("material")}: {product.material}
          </li>
        </ul>

        {/* الألوان */}
        <div className="colors flex items-center gap-3 md:gap-5">
          <span className="text-white font-light text-xs md:text-sm">
            {t("color")}
          </span>
          <div className="flex items-center gap-2 md:gap-3">
            {colors?.map((c, i) => (
              <div
                key={i}
                className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-lg"
                style={{
                  border:
                    color === c.hex
                      ? "2px solid white"
                      : "2px solid transparent",
                }}
                onClick={() => {
                  setColor(c.hex);
                  dispatch(
                    cartActions.changeColor({
                      id: product?.id,
                      oldColor: product?.color,
                      newColor: c.hex,
                    })
                  );
                }}
              >
                <span
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shrink-0"
                  style={{ backgroundColor: c.hex }}
                ></span>
              </div>
            ))}
          </div>
        </div>

        {/* أزرار الإضافة للسلة */}
        <div className="AddToCart flex justify-between items-center gap-3 mt-4">
          <div className="flex items-center gap-1">
            <button
              className="w-6 h-6 bg-white rounded-sm text-[#6E6D6D] flex items-center justify-center"
              onClick={() =>
                dispatch(cartActions.decreseItem({ id: product?.id, color }))
              }
            >
              -
            </button>
            <span className="bg-[#D9D9D9] px-4 py-1 text-xs flex items-center justify-center font-mono">
              {product?.quantity}
            </span>
            <button
              className="w-6 h-6 bg-white rounded-sm text-[#6E6D6D] flex items-center justify-center"
              onClick={() =>
                dispatch(cartActions.increaseItem({ id: product?.id, color }))
              }
            >
              +
            </button>
          </div>
          <button
            className="delete flex items-center gap-1 text-[#c61515] font-bold text-xs md:text-sm "
            onClick={() =>
              dispatch(
                cartActions.deleteItem({
                  id: product?.id,
                  color: product?.color,
                })
              )
            }
          >
            {t("delete")} <Image src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
