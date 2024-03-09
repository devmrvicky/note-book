import {
  CheckCircledIcon,
  CircleIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";

const TaskList = ({
  taskName,
  isImportant,
  isCompleted,
  categories,
  dueDate,
}) => {
  return (
    <div className="border px-3 py-2 flex items-center gap-4">
      <button>
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
          <p>{dueDate}</p>
        </div>
      </div>
      <button className="ml-auto">
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
