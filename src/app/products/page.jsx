import CartBox from "@/components/Products/cartbox/CartBox";
import FilterProducts from "@/components/Products/filterProducts/FilterProducts";
import HeroProducts from "@/components/Products/heroProducts/HeroProducts";
import ProductList from "@/components/Products/ProductList/ProductList";
import { fetchCategories, fetchProducts } from "@/lib/api";
import { cookies } from "next/headers";
import React from "react";

export async function generateMetadata() {
  const lang = cookies().get("lang")?.value || "en";

  return {
    title:
      lang === "en" ? "DELPACK || Our-Products" : "دلبــــــــاك || منتجاتنا",
    description:
      lang === "en"
        ? "Delta Misr Plastic Factories Delpack manufactures plastic containers (coloured, transparent and opaque) for many consumer goods and industrial products"
        : "تقوم مصانع دلتا مصر للبلاستيك (Delpack) بتصنيع الحاويات البلاستيكية (الملونة، الشفافة والمعتمة) للعديد من السلع الاستهلاكية والمنتجات الصناعية",
    keywords:
      lang === "en"
        ? "plastic containers, transparent containers, plastic bottles, juice bottles, oil bottles, jars, plastics, cosmetics, bottle, olive oil, oil, creams, cylinders, easy open, cans, shampoo containers, juice containers, cream containers, packaging, packaging and wrapping"
        : "عبوات بلاستيك, عبوات شفافه, زجاجات بلاستيك, زجاجات عصير, زجاجات زيت, برطمانات, بلاستيك, كوزمتكس, عبوه, زيت زيتون, زيت, كريمات, سلندرات, ايزي اوبن, كانز, عبوات شامبو, عبوات عصير, عبوات كريم, عبوات تعبئه, تعبئه وتغليف",
  };
}
const page = async ({ searchParams }) => {
  
  // const query = new URLSearchParams(searchParams).toString();
  // const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  // const { products, meta } = await fetchProducts(currentPage);
  
  const lang = cookies().get("lang")?.value || "en";
  const { products, meta } = await fetchProducts(searchParams);
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
