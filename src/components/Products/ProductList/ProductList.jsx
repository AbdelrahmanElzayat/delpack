import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import left from "@/assets/icons/leftpagination.svg";
import right from "@/assets/icons/rightpagination.svg";
import Image from "next/image";
const ProductList = () => {
  return (
    <div className="pb-[200px]">
      <div className="grid grid-cols-3 pb-40">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="pagination flex justify-center items-center gap-9">
        <button>
          <Image src={left} alt="left" />
        </button>
        <span className="bg-[#D9D9D9] px-3 flex items-center justify-center font-mono">
          1
        </span>
        <button>
          <Image src={right} alt="right"/>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
