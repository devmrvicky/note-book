import { Logo } from "@/components/index.components";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosGitPullRequest } from "react-icons/io";
import { IoMdGitPullRequest } from "react-icons/io";

const DevAside = () => {
  const devMenus = [
    {
      name: "req",
      path: "/dev/requests",
      icon: <IoIosGitPullRequest className="w-6 h-6" />,
      fillIcon: <IoMdGitPullRequest className="w-6 h-6" />,
    },
  ];

  return (
    <aside className="fixed top-0 left-0 w-[100px] border h-full flex flex-col justify-center">
      <Logo className="hidden" />
      <div className="menus flex-1 py-4">
        {devMenus.map(({ name, path, icon, fillIcon }) => (
          <NavLink key={name} to={path}>
            {({ isActive }) => (!isActive ? icon : fillIcon)}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default DevAside;
