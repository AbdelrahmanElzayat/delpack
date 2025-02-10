import CartBox from "@/components/Products/cartbox/CartBox";
import FilterProducts from "@/components/Products/filterProducts/FilterProducts";
import HeroProducts from "@/components/Products/heroProducts/HeroProducts";
import ProductList from "@/components/Products/ProductList/ProductList";
import React from "react";
const page = () => {
  return (
    <div className="bg-products">
      <HeroProducts />
      <FilterProducts />
      <ProductList />
      <CartBox />
    </div>
  );
};

export default page;
