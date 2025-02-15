import CartBox from "@/components/Products/cartbox/CartBox";
import FilterProducts from "@/components/Products/filterProducts/FilterProducts";
import HeroProducts from "@/components/Products/heroProducts/HeroProducts";
import ProductList from "@/components/Products/ProductList/ProductList";
import { fetchProducts } from "@/lib/api";
import React from "react";
const page = async ({ searchParams }) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, meta } = await fetchProducts(currentPage);
  return (
    <div className="bg-products">
      <HeroProducts />
      <FilterProducts />
      <ProductList products={products} meta={meta} />
      <CartBox products={products} />
    </div>
  );
};

export default page;
