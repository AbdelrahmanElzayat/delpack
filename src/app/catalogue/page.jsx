import { cookies } from "next/headers";
import React from "react";

export async function generateMetadata() {
  const lang = cookies().get("lang")?.value || "en";

  return {
    title: lang === "en" ? "DELPACK || Catalogue" : "ديلباك || الكتالوج",
    description:
      lang === "en"
        ? "Delta Misr Plastic Factories Delpack manufactures plastic containers (coloured, transparent and opaque) for many consumer goods and industrial products"
        : "تقوم مصانع دلتا مصر للبلاستيك (Delpack) بتصنيع الحاويات البلاستيكية (الملونة، الشفافة والمعتمة) للعديد من السلع الاستهلاكية والمنتجات الصناعية",
  };
}
const Page = () => {
  return (
    <div className="w-screen h-[calc(100vh+180px)]">
      <iframe
        src="https://online.fliphtml5.com/rinst/hpve/#p=1"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Page;
