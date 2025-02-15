import React from "react";

const NewContent = ({ blog }) => {
  return (
    <div className="py-16">
      <div className="container">
        <h1
          className={`relative w-full text-xl ms::text-2xl lg:text-4xl heading mb-6`}
        >
          Delta Misr For Plastic
        </h1>
        <div dangerouslySetInnerHTML={{ __html: blog?.New?.description }} />
        <hr className="my-8"/>
      </div>
    </div>
  );
};

export default NewContent;
