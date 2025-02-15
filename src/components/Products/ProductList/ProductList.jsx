"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import left from "@/assets/icons/leftpagination.svg";
import right from "@/assets/icons/rightpagination.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
const ProductList = ({ products, meta }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage) => {
    router.push(`?page=${newPage}`);
  };
  return (
    <div className="pb-[50px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 pb-16 md:pb-10 lg:pb-20 xl:pb-40 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
          {products.map((product) => (
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
            <Image src={left} alt="previous page" />
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
            <Image src={right} alt="next page" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
