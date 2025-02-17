import CartBox from "@/components/Products/cartbox/CartBox";
import FilterProducts from "@/components/Products/filterProducts/FilterProducts";
import HeroProducts from "@/components/Products/heroProducts/HeroProducts";
import ProductList from "@/components/Products/ProductList/ProductList";
import { fetchCategories, fetchProducts } from "@/lib/api";
import { cookies } from "next/headers";
import React from "react";

const lang = cookies().get("lang")?.value || "en";
export const metadata = {
  title: lang === "en" ? "DELPACK || Our-Products" : "ديلباك || منتجاتنا",
  description:
    lang === "en"
      ? "Delta Misr Plastic Factories Delpak manufactures plastic containers (coloured, transparent and opaque) for many consumer goods and industrial products"
      : "تقوم مصانع دلتا مصر للبلاستيك (Delpak) بتصنيع الحاويات البلاستيكية (الملونة، الشفافة والمعتمة) للعديد من السلع الاستهلاكية والمنتجات الصناعية",
};
const page = async ({ searchParams }) => {
  const lang = cookies().get("lang")?.value || "en";
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, meta } = await fetchProducts(currentPage);
  const { categories } = await fetchCategories(lang);
  return (
    <div className="bg-products overflow-hidden">
      <HeroProducts />
      <FilterProducts categories={categories} />
      <ProductList products={products} meta={meta} />
      <CartBox products={products} />
    </div>
  );
};

export default page;
