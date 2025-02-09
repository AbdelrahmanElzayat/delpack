import React from "react";

const Search = () => {
  return (
    <div className="bg-[#EAF0F0] shadow-filterShadow p-8 rounded-2xl flex items-center gap-12 w-full">
      <h2 className="text-[#0A6BAB] text-xl font-bold capitalize text-nowrap">
        SEARCH BY
      </h2>
      <form className="w-full grid grid-cols-6 gap-7">
        <div className="flex flex-col items-start gap-2">
          <label className="text-sm text-textMain font-[500]" htmlFor="code">
            Code
          </label>
          <input
            className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 font-[500] text-sm"
            type="text"
            placeholder="Type code"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            className="text-sm text-textMain font-[500]"
            htmlFor="Diameter"
          >
            Diameter
          </label>
          <input
            className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 font-[500] text-sm"
            type="text"
            placeholder="Type Diameter"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="text-sm text-textMain font-[500]" htmlFor="Height">
            Height
          </label>
          <input
            className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 font-[500] text-sm"
            type="text"
            placeholder="Type Height"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="text-sm text-textMain font-[500]" htmlFor="Neck">
            Neck
          </label>
          <input
            className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 font-[500] text-sm"
            type="text"
            placeholder="Type Neck"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="text-sm text-textMain font-[500]" htmlFor="Volume">
            Volume
          </label>
          <input
            className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 font-[500] text-sm"
            type="text"
            placeholder="Type Volume"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            className="text-sm text-textMain font-[500]"
            htmlFor="Material"
          >
            Material
          </label>
          <input
            className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 font-[500] text-sm"
            type="text"
            placeholder="Type Material"
            name=""
            id=""
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
