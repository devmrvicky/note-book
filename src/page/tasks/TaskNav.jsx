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
import { GoHome, GoHomeFill } from "react-icons/go";
import { createPortal } from "react-dom";
import useTaskAction from "./hooks/useTaskAction";
import CreateTaskListInput from "./CreateTaskListInput";
import TaskTabs from "./TaskTabs";
import { PiList } from "react-icons/pi";
import TaskTabList from "./TaskTabList";

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
  const { showTabInput, showCreateTabInput, hideCreateTabInput, taskTabLists, createNewTaskList } =
    useTaskAction();
  return (
    <nav className="border-b border-zinc-400 flex items-center">
      <div
        id="task-tabs"
        className="flex items-center overflow-hidden max-w-[733px]"
      >
        {taskNavLists.map((tab) => (
          <TaskTabs 
            key={tab.name} 
            {...tab} 
            activeTab = {activeTab}
            totalTasks = {totalTasks}
            myDayTasks = {myDayTasks}
            importantTasks = {importantTasks}
            completedTasks = {completedTasks}
          />
        ))}
        {/* task lists */}
        {taskTabLists.map((list, index) => (
          <TaskTabList key={index} list={list}/>
        ))}
      </div>
      {/* tasks btn */}
      <div className="nav-ctrl-btns ml-auto flex gap-3 pr-3">
        <Button
          variant="outline"
          className="flex items-center gap-3"
          onClick={showCreateTabInput}
        >
          <PlusIcon className="w-5 h-5" />
          <span>new list</span>
        </Button>
        {showTabInput &&
          createPortal(
            <CreateTaskListInput hideCreateTabInput={hideCreateTabInput} createNewTaskList={createNewTaskList} />,
            document.querySelector("#task-tabs")
          )}
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

// overflow: auto;
// flex: 1;
// width: 100%;
// max-width: 733px;

// min-width: min-content;
