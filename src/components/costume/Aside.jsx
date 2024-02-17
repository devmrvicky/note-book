import React from "react";
import { Auth, Logo } from "../index.components";
import { FlexBox } from "../util/index.util";
import { NavLink } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  PiNotebookDuotone,
  PiNotebookFill,
  PiPencil,
  PiPencilFill,
} from "react-icons/pi";
import { RiTodoFill, RiTodoLine } from "react-icons/ri";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { ModeToggle } from "./theme/ModeToggle";

const menus = [
  {
    name: "Home",
    path: "/",
    icon: <GoHome className="w-5 h-5" />,
    fillIcon: <GoHomeFill className="w-5 h-5" />,
  },
  {
    name: "Notes",
    path: "/notes",
    icon: <PiNotebookDuotone className="w-5 h-5" />,
    fillIcon: <PiNotebookFill className="w-5 h-5" />,
  },
  {
    name: "Text editor",
    path: "/text-editor",
    icon: <PiPencil className="w-5 h-5" />,
    fillIcon: <PiPencilFill className="w-5 h-5" />,
  },
  {
    name: "Todos",
    path: "/todos",
    icon: <RiTodoLine className="w-5 h-5" />,
    fillIcon: <RiTodoFill className="w-5 h-5" />,
  },
  {
    name: "Docs",
    path: "/docs",
    icon: <IoDocumentTextOutline className="w-5 h-5" />,
    fillIcon: <IoDocumentText className="w-5 h-5" />,
    className: "max-[400px]:hidden",
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <IoSettingsOutline className="w-5 h-5" />,
    fillIcon: <IoSettings className="w-5 h-5" />,
    className: "max-[400px]:hidden",
  },
];

const Aside = () => {
  return (
    <aside className="md:w-60 w-16 border-r h-screen py-4 px-2 pt-8 fixed z-40 dark:bg-black bg-white overflow-hidden max-[400px]:fixed bottom-0 left-0 right-0 max-[400px]:w-full max-[400px]:bg-[aliceblue] max-[400px]:h-[56px] max-[400px]:p-0">
      <FlexBox
        direction="flex-col max-[400px]:flex-row"
        alignItems="align-start max-[400px]:items-center"
        className="h-full relative "
        justifyItems="max-[400px]:justify-center"
      >
        <Logo className="hidden md:block w-auto" hidden="max-[400px]:hidden" />
        {/* <CollapseBtn /> */}
        <FlexBox
          direction="flex-col max-[400px]:flex-row"
          alignItems="align-start max-[400px]:items-center"
          justifyItems="justify-start max-[400px]:justify-center"
          className="min-[400px]:flex-1 overflow-auto before:content-['Menus'] before:text-xs max-[400px]:before:hidden min-[400px]:py-4 before:text-zinc-500 flex-nowrap"
        >
          {menus.map(({ path, name, icon, fillIcon, className }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                isActive
                  ? `px-3 py-2 dark:text-black bg-zinc-200 text-lg rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center ${
                      className && className
                    }`
                  : `px-3 py-2 hover:dark:text-black hover:bg-zinc-200 text-lg rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center ${
                      className && className
                    }`
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <>
                    {fillIcon} <span className="md:block hidden ">{name}</span>
                  </>
                ) : (
                  <>
                    {icon} <span className="md:block hidden ">{name}</span>
                  </>
                )
              }
            </NavLink>
          ))}
        </FlexBox>
        <ModeToggle />
        <Auth />
      </FlexBox>
    </aside>
  );
};

export default Aside;
