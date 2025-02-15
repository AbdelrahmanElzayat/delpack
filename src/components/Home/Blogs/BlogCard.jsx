import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, image, id }) => {
  return (
    <div className="blog-card min-h-[400px] sm:min-h-[600px] w-full lg:w-[1000px] rounded-[46px] bg-[#D9D9D9] p-5 sm:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src={image}
          width={500}
          height={500}
          alt="imgBlog"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="blogCardContent flex flex-col gap-3 relative z-20">
        <h3 className="text-white text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold uppercase w-full sm:w-[50%]">
          {title}
        </h3>
        <Link
          href={`/news/${id}`}
          className="bg-[#FFB548] text-sm sm:text-lg font-normal text-center uppercase pt-2 sm:pt-3 pb-1 sm:pb-2 px-6 sm:px-8 w-fit"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
