import NewContent from "@/components/news/newsContent/NewContent";
import NewsHero from "@/components/news/newsHero/NewsHero";
import OtherBlogs from "@/components/news/otherBlogs/OtherBlogs";
import { fetchNewDetails } from "@/lib/api";
import { cookies } from "next/headers";
import React from "react";

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
