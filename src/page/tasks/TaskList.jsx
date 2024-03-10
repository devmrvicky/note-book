import {
  CheckCircledIcon,
  CircleIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";
import useTaskAction from "./hooks/useTaskAction";
import getDate from "@/methods/getdate";

const TaskList = ({
  $id,
  taskName,
  isImportant,
  isCompleted,
  categories,
  dueDate,
}) => {
  console.log($id);
  const { handleCompletionTask } = useTaskAction();
  return (
    <div className="border px-3 py-2 flex items-center gap-4">
      <button onClick={() => handleCompletionTask($id, "taskComplete")}>
        {isCompleted ? (
          <CheckCircledIcon className="w-5 h-5" />
        ) : (
          <CircleIcon className="w-5 h-5" />
        )}
      </button>
      <div className="flex-1 flex flex-col">
        <p>{taskName}</p>
        <div className="flex items-center  gap-3 text-sm text-zinc-500">
          <p>
            {categories.map((category, index) => (
              <span key={index} className="hover:text-white pr-2">
                {category}
              </span>
            ))}
          </p>
          <p>{getDate(dueDate).fullDate}</p>
        </div>
      </div>
      <button
        className="ml-auto"
        onClick={() => handleCompletionTask($id, "taskImportant")}
      >
        {isImportant ? (
          <StarFilledIcon className="w-5 h-5" />
        ) : (
          <StarIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default TaskList;
