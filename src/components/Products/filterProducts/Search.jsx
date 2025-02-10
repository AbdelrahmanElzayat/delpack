'use client'
import { Field, Form } from "formik";
import React from "react";
import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
  code: Yup.string(),
  diameter: Yup.string(),
  height: Yup.string(),
  neck: Yup.string(),
  volume: Yup.string(),
  material: Yup.string(),
});

const Search = ({ values, handleChange }) => {
  return (
    <div className="bg-[#EAF0F0] shadow-filterShadow p-8 rounded-2xl flex items-center gap-12 w-full">
      <h2 className="text-[#0A6BAB] text-xl font-bold capitalize text-nowrap">
        SEARCH BY
      </h2>
      <Form className="w-full grid grid-cols-6 gap-7">
        {["code", "diameter", "height", "neck", "volume", "material"].map(
          (name) => (
            <div key={name} className="flex flex-col items-start gap-2">
              <label
                className="text-sm text-textMain font-[500]"
                htmlFor={name}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </label>
              <Field
                name={name}
                type="text"
                placeholder={`Type ${name}`}
                className="rounded-[5px] w-full py-2 px-3 bg-[rgba(40,56,65,0.06)] 
              placeholder:text-xs placeholder:text-[#283841] placeholder:opacity-50 
              font-[500] text-sm"
                onChange={handleChange}
              />
            </div>
          )
        )}
      </Form>
    </div>
  );
};

export default Search;
