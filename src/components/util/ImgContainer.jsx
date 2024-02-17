import React from "react";

const ImgContainer = ({
  imgSrc,
  imgAlt,
  rounded = "",
  imgWidth = "w-[100px]",
  className = "",
  id,
}) => {
  return (
    <div className={`overflow-hidden ${rounded} ${className} ${imgWidth}`}>
      <img src={imgSrc} alt={imgAlt} width={"100%"} />
    </div>
  );
};

export default ImgContainer;
