import React from "react";
import "./newsHero.css";
const NewsHero = ({ image }) => {

  return (
    <div
      className="heroProducts"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default NewsHero;
