"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useRouter, useSearchParams } from "next/navigation";
import left from "@/assets/icons/leftpagination.svg";
import right from "@/assets/icons/rightpagination.svg";
import Image from "next/image";
import Cookies from "js-cookie";

const ProductList = ({ products, meta }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // استخراج الفلاتر من الـ URL
  // const filters = Object.fromEntries(searchParams.entries());
  // تصفية المنتجات بناءً على الفلاتر
  // const filteredProducts = products.filter((product) => {
  //   // تخطي فلتر الكاتيجوري لو كان 0
  //   if (
  //     filters.category &&
  //     filters.category !== "0" &&
  //     !filters.category.split(",").includes(product.category.id.toString())
  //   ) {
  //     return false;
  //   }
  //   if (
  //     filters.Code &&
  //     !product.code.toLowerCase().includes(filters.Code.toLowerCase())
  //   ) {
  //     return false;
  //   }
  //   if (
  //     filters.Diameter &&
  //     !product.diameter.toString().includes(filters.Diameter.toString())
  //   ) {
  //     return false;
  //   }
  //   if (
  //     filters.Height &&
  //     !product.height.toString().includes(filters.Height.toString())
  //   ) {
  //     return false;
  //   }
  //   if (
  //     filters.Neck &&
  //     !product.neck.toString().includes(filters.Neck.toString())
  //   ) {
  //     return false;
  //   }
  //   if (
  //     filters.Volume &&
  //     !product.volume.toString().includes(filters.Volume.toString())
  //   ) {
  //     return false;
  //   }
  //   if (
  //     filters.Material &&
  //     !product.material.toLowerCase().includes(filters.Material.toLowerCase())
  //   ) {
  //     return false;
  //   }

  //   return true;
  // });

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
  };
  const lang = Cookies.get("lang");
  return (
    <div className="pb-[50px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 pb-16 md:pb-10 lg:pb-20 xl:pb-40 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="pagination flex justify-center items-center gap-9">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={meta.current_page === 1}
            className={`p-2 ${
              meta.current_page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image src={lang === "ar" ? right : left} alt="previous page" />
          </button>

          <span className="bg-[#D9D9D9] px-3 flex items-center justify-center font-mono">
            {meta.current_page} / {meta.last_page}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!meta.more}
            className={`p-2 ${
              !meta.more ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image src={lang === "ar" ? left : right} alt="next page" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
