import React from "react";
import { NavLink } from "react-router-dom";

const CostumeNavLink = ({
  path,
  name,
  icon,
  fillIcon,
  iconClass = "",
  className,
  activeClasses,
  noneActiveClasses,
}) => {
  return (
    <NavLink
      to={path}
      key={name}
      className={({ isActive }) =>
        isActive
          ? `${className} ${activeClasses}`
          : `${className} ${noneActiveClasses}`
      }
    >
      {({ isActive }) =>
        isActive ? (
          <>
            {fillIcon} <span className={`${iconClass}`}>{name}</span>
          </>
        ) : (
          <>
            {icon} <span className={`${iconClass}`}>{name}</span>
          </>
        )
      }
    </NavLink>
  );
};

export default CostumeNavLink;
