import CartBox from "@/components/Products/cartbox/CartBox";
import FilterProducts from "@/components/Products/filterProducts/FilterProducts";
import HeroProducts from "@/components/Products/heroProducts/HeroProducts";
import ProductList from "@/components/Products/ProductList/ProductList";
import { fetchCategories, fetchProducts } from "@/lib/api";
import { cookies } from "next/headers";
import React from "react";
const page = async ({ searchParams }) => {
  const lang = cookies().get("lang")?.value || "en";

  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, meta } = await fetchProducts(currentPage);
  const { categories } = await fetchCategories(lang);
  return (
    <div className="bg-products">
      <HeroProducts />
      <FilterProducts categories={categories} />
      <ProductList products={products} meta={meta} />
      <CartBox products={products} />
    </div>
  );
};

export default page;
