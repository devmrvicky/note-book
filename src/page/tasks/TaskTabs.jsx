import React from "react";
import { useNavigate } from "react-router-dom";

const TaskTabs = ({
  name,
  icon,
  fillIcon,
  activeTab,
  totalTasks,
  myDayTasks,
  importantTasks,
  completedTasks,
}) => {
  const navigate = useNavigate();
  return (
    <p
      className={`flex items-center gap-3 py-3 px-6 relative after:content-[""] after:w-full after:h-[1px] after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 cursor-pointer min-w-min text-nowrap ${
        activeTab === name.toLocaleLowerCase()
          ? "text-white after:bg-white"
          : "text-zinc-400 hover:text-white hover:after:bg-white"
      }`}
      onClick={() => navigate(`/tasks?tab=${name.toLocaleLowerCase()}`)}
    >
      <span>{activeTab === name.toLocaleLowerCase() ? fillIcon : icon}</span>
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
    </p>
  );
};

export default TaskTabs;
