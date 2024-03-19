import React from "react";
import { PiList } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReloadIcon } from "@radix-ui/react-icons";

const TaskTabList = ({ listName, totalTasks }) => {
  const { activeTaskTab } = useSelector((store) => store.tasks);
  const navigate = useNavigate();
  return (
    <button
      className={`flex items-center gap-3 py-3 px-6 relative after:content-[""] after:w-full after:h-[1px] after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 cursor-pointer min-w-min text-nowrap ${
        activeTaskTab === listName.toLocaleLowerCase()
          ? "text-white after:bg-white"
          : "text-zinc-400 hover:text-white hover:after:bg-white"
      }`}
      onClick={() => navigate(`/tasks?tab=${listName.toLocaleLowerCase()}`)}
    >
      {/* {creating ? <ReloadIcon className="w-5 h-5 animate-spin"/> : <PiList className="w-5 h-5" />} */}
      <PiList className="w-5 h-5" />
      <span>{listName}</span>
    </button>
  );
};

export default TaskTabList;
