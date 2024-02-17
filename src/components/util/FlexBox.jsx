import React from "react";

const FlexBox = ({
  children,
  alignItems = "items-center",
  justifyItems = "justify-between",
  direction = "flex-row",
  gap = "gap-3",
  className,
}) => {
  return (
    <div
      className={`flex flex-wrap ${gap} ${direction} ${alignItems} ${justifyItems} ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
