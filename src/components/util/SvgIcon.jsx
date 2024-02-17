import React, { useEffect, useState } from "react";

const SvgIcon = ({ children, rounded = true, className = "" }) => {
  const [roundedIcon, setRoundedIcon] = useState(rounded);
  useEffect(() => {
    if (rounded) {
      setRoundedIcon("rounded-full");
    } else {
      setRoundedIcon("rounded");
    }
  }, [rounded]);
  return (
    <div
      className={`min-w-10 h-10 flex items-center justify-center hover:bg-slate-200/50 w-6 cursor-pointer active:scale-95 transition-all ${roundedIcon} ${className}`}
    >
      {children}
    </div>
  );
};

export default SvgIcon;
