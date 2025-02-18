import { cookies } from "next/headers";
import React from "react";

export async function generateMetadata() {
  const lang = cookies().get("lang")?.value || "en";

  return {
    title: lang === "en" ? "DELPACK || Catalogue" : "دلبــــــــاك || الكتالوج",
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
