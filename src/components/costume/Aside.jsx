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
import { IoBugOutline } from "react-icons/io5";
import { IoBugSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { PiDevices } from "react-icons/pi";
import { PiDevicesFill } from "react-icons/pi";
import CostumeNavLink from "./CostumeNavLink";

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
    name: "Tasks",
    path: "/tasks",
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

const extraMenus = [
  {
    name: "Report a bug",
    path: "/report-bug",
    icon: <IoBugOutline className="w-4 h-4" />,
    fillIcon: <IoBugSharp className="w-4 h-4" />,
  },
  {
    name: "suggestion a feature",
    path: "/feature-suggest",
    icon: <FaRegLightbulb className="w-4 h-4" />,
    fillIcon: <FaLightbulb className="w-4 h-4" />,
  },
  {
    name: "dev",
    path: "/dev",
    icon: <PiDevices className="w-4 h-4" />,
    fillIcon: <PiDevicesFill className="w-4 h-4" />,
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
          {/* main menus */}
          {menus.map((menu) => (
            <CostumeNavLink
              key={menu.name}
              {...menu}
              className={`px-3 py-2 text-lg rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center ${
                menu.className && menu.className
              }`}
              activeClasses={`dark:text-black bg-zinc-200 `}
              noneActiveClasses={`hover:dark:text-black hover:bg-zinc-200`}
              iconClass="md:block hidden"
            />
          ))}
          {/* extra menu */}
          <div className="extra-menus flex flex-col gap-1 before:content-['options'] before:text-xs max-[400px]:hidden before:text-zinc-500">
            {extraMenus.map((menu) => (
              <CostumeNavLink
                key={menu.name}
                {...menu}
                className={`px-3 py-2 rounded-md text-[.7rem] flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center`}
                activeClasses={`dark:text-[#aaaaaa] bg-[#1d1d1d]`}
                noneActiveClasses={`dark:text-[#747373] dark:hover:text-[#aaaaaa] hover:bg-[#1d1d1d]`}
              />
            ))}
          </div>
        </FlexBox>
        <ModeToggle />
        <Auth />
      </FlexBox>
    </aside>
  );
};

export default Aside;
export { extraMenus };
