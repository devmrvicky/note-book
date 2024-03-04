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

const taskNavLists = [
  {
    name: "My day",
    path: "/tasks/my-day",
    icon: <SunIcon className="w-5 h-5" />,
    fillIcon: <PiSunFill className="w-5 h-5" />,
  },
  {
    name: "Important",
    path: "/tasks/important-tasks",
    icon: <StarIcon className="w-5 h-5" />,
    fillIcon: <StarFilledIcon className="w-5 h-5" />,
  },
  {
    name: "All",
    path: "/tasks/all-tasks",
    icon: <IoInfiniteOutline className="w-5 h-5" />,
    fillIcon: <IoInfinite className="w-5 h-5" />,
  },
  {
    name: "Completed",
    path: "/tasks/completed-tasks",
    icon: <GoCheckCircle className="w-5 h-5" />,
    fillIcon: <GoCheckCircleFill className="w-5 h-5" />,
  },
];

const TaskNav = () => {
  return (
    <nav className="border-b border-zinc-400 flex items-center">
      {taskNavLists.map((menu) => (
        <CostumeNavLink
          key={menu.name}
          {...menu}
          className={`flex items-center gap-3 py-3 px-6 relative after:content-[""] after:w-full after:h-[1px] after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 text-zinc-400`}
          activeClasses="text-white after:bg-white"
          noneActiveClasses="hover:text-white hover:after:bg-white"
        />
      ))}
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
