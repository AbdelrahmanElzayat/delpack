"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Search from "./Search";
import SelectCategory from "./SelectCategory";

const FilterProducts = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // تأجيل الريندر حتى يتم تحميل العميل بالكامل

  const initialValues = {
    code: "",
    diameter: "",
    height: "",
    neck: "",
    volume: "",
    material: "",
    category: [],
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string(),
    diameter: Yup.string(),
    height: Yup.string(),
    neck: Yup.string(),
    volume: Yup.string(),
    material: Yup.string(),
    category: Yup.array().of(Yup.string()),
  });

  return (
    <div className="FilterProducts py-16">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-col gap-16">
              <Search values={values} handleChange={handleChange} />
              <SelectCategory values={values} handleChange={handleChange} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FilterProducts;
