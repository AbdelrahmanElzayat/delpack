import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, image }) => {
  return (
    <div className="blog-card min-h-[600px] w-full lg:w-[1000px] rounded-[46px] bg-[#D9D9D9] p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <Image src={image} alt="imgBlog" className="object-cover w-full h-full" />
      </div>
      <div className="blogCardContent flex flex-col gap-3 relative z-20">
        <h3 className="text-white text-2xl font-bold uppercase w-[50%]">{title}</h3>
        <Link
          href={"/"}
          className="bg-[#FFB548] text-lg font-normal text-center uppercase pt-3 pb-2 px-8 w-fit"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
