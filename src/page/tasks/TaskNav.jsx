import CostumeNavLink from "@/components/costume/CostumeNavLink";
import { CostumeTooltip } from "@/components/index.components";
import { Button } from "@/components/ui/button";
import {
  CheckCircledIcon,
  PlusIcon,
  StarFilledIcon,
  StarIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { GoCheckCircle, GoCheckCircleFill } from "react-icons/go";
import { IoInfinite, IoInfiniteOutline } from "react-icons/io5";
import { PiSunFill } from "react-icons/pi";
import { TbDeviceIpadHorizontalPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { GoHome, GoHomeFill} from "react-icons/go";

const taskNavLists = [
  {
    name: "My day",
    icon: <SunIcon className="w-5 h-5" />,
    fillIcon: <PiSunFill className="w-5 h-5" />,
  },
  {
    name: "Tasks",
    icon: <GoHome className="w-5 h-5" />,
    fillIcon: <GoHomeFill className="w-5 h-5" />,
  },
  {
    name: "Important",
    icon: <StarIcon className="w-5 h-5" />,
    fillIcon: <StarFilledIcon className="w-5 h-5" />,
  },
  {
    name: "All",
    icon: <IoInfiniteOutline className="w-5 h-5" />,
    fillIcon: <IoInfinite className="w-5 h-5" />,
  },
  {
    name: "Completed",
    icon: <GoCheckCircle className="w-5 h-5" />,
    fillIcon: <GoCheckCircleFill className="w-5 h-5" />,
  },
];

const TaskNav = ({
  activeTab,
  totalTasks,
  myDayTasks,
  importantTasks,
  completedTasks,
}) => {
  const navigate = useNavigate();
  return (
    <nav className="border-b border-zinc-400 flex items-center">
      <ul className="flex items-center">
        {taskNavLists.map(({ name, icon, fillIcon }) => (
          <li
            key={name}
            className={`flex items-center gap-3 py-3 px-6 relative after:content-[""] after:w-full after:h-[1px] after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 cursor-pointer ${
              activeTab === name.toLocaleLowerCase()
                ? "text-white after:bg-white"
                : "text-zinc-400 hover:text-white hover:after:bg-white"
            }`}
            onClick={() => navigate(`/tasks?tab=${name.toLocaleLowerCase()}`)}
          >
            <span>
              {activeTab === name.toLocaleLowerCase() ? fillIcon : icon}
            </span>
            <span>{name}</span>
            {name === "All" && totalTasks >= 1 && (
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm ml-auto bg-zinc-600">
                {totalTasks}
              </span>
            )}
            {name === "My day" && myDayTasks >= 1 && (
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm ml-auto bg-zinc-600">
                {myDayTasks}
              </span>
            )}
            {name === "Important" && importantTasks >= 1 && (
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm ml-auto bg-zinc-600">
                {importantTasks}
              </span>
            )}
            {name === "Completed" && completedTasks >= 1 && (
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm ml-auto bg-zinc-600">
                {completedTasks}
              </span>
            )}
          </li>
        ))}
      </ul>
      {/* tasks btn */}
      <div className="nav-ctrl-btns ml-auto flex gap-3 pr-3">
        <Button variant="outline" className="flex items-center gap-3">
          <PlusIcon className="w-5 h-5" />
          <span>new list</span>
        </Button>
        <CostumeTooltip text="create new group">
          <Button variant="outline" className="flex items-center gap-3">
            <TbDeviceIpadHorizontalPlus className="w-5 h-5" />
          </Button>
        </CostumeTooltip>
      </div>
    </nav>
  );
};

export default TaskNav;
