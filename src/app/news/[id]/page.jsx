import NewContent from "@/components/news/newsContent/NewContent";
import NewsHero from "@/components/news/newsHero/NewsHero";
import OtherBlogs from "@/components/news/otherBlogs/OtherBlogs";
import { fetchNewDetails } from "@/lib/api";
import { cookies } from "next/headers";
import React from "react";

export async function generateMetadata({ params }) {
  const lang = cookies().get("lang")?.value || "en";
  const { blog } = await fetchNewDetails({ lang, id: params.id });

  return {
    title:
      lang === "en"
        ? `DELPACK || ${blog?.New?.title || "new-details"}`
        : `دلبــــــــاك || ${blog?.New?.title || "تفاصيل الخبر"}`,
    description: "delta misr for plastic",
    keywords:
      lang === "en"
        ? "plastic containers, transparent containers, plastic bottles, juice bottles, oil bottles, jars, plastics, cosmetics, bottle, olive oil, oil, creams, cylinders, easy open, cans, shampoo containers, juice containers, cream containers, packaging, packaging and wrapping"
        : "عبوات بلاستيك, عبوات شفافه, زجاجات بلاستيك, زجاجات عصير, زجاجات زيت, برطمانات, بلاستيك, كوزمتكس, عبوه, زيت زيتون, زيت, كريمات, سلندرات, ايزي اوبن, كانز, عبوات شامبو, عبوات عصير, عبوات كريم, عبوات تعبئه, تعبئه وتغليف",
  };
}
const Page = async ({ params }) => {
  const lang = cookies().get("lang")?.value || "en";
  const { blog } = await fetchNewDetails({ lang, id: params.id });

  return (
    <div className="xl:mb-32 lg:mb-28 md:mb-24 sm:mb-20 mb-12 ">
      <NewsHero image={blog?.New?.image} />
      <NewContent blog={blog} />
      <OtherBlogs blogs={blog?.other_news} />
    </div>
  );
};

export default Page;
