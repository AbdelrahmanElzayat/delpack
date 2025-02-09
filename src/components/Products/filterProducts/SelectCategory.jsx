import React from "react";

const SelectCategory = () => {
  return (
    <div className="SelectCategory flex items-center gap-20 w-full">
      <h3 className="text-[#F7941D] text-2xl font-bold border-r border-r-[#F7941D] pr-4">
        CATEGORY
      </h3>
      <div className="flex items-start w-full justify-between">
        <div className="flex items-center gap-1">
          <input className="w-4 h-4 mb-2 rounded-[2px]" type="checkbox" name="all" id="" value={"all"} />
          <label className="text-white text-2xl font-light " htmlFor="">all</label>
        </div>
        <div className="flex items-center gap-1">
          <input className="w-4 h-4 mb-2 rounded-[2px]" type="checkbox" name="" id="" value={"Edible oils"} />
          <label className="text-white text-2xl font-light " htmlFor="">Edible oils</label>
        </div>
        <div className="flex items-center gap-1">
          <input className="w-4 h-4 mb-2 rounded-[2px]" type="checkbox" name="" id="" value={"Soft drink bottles"} />
          <label className="text-white text-2xl font-light " htmlFor="">Soft drink bottles</label>
        </div>
        <div className="flex items-center gap-1">
          <input className="w-4 h-4 mb-2 rounded-[2px]" type="checkbox" name="" id="" value={"Honey packages"} />
          <label className="text-white text-2xl font-light " htmlFor="">Honey packages</label>
        </div>
        <div className="flex items-center gap-1">
          <input className="w-4 h-4 mb-2 rounded-[2px]" type="checkbox" name="" id="" value={"Molasses packages"} />
          <label className="text-white text-2xl font-light " htmlFor="">Molasses packages</label>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
