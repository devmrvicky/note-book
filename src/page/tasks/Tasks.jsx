import React from "react";
import TaskNav from "./TaskNav";
import TaskList from "./TaskList";
import AddTaskInput from "./AddTaskInput";

const tasksList = [
  {
    taskName: "task name",
    isImportant: true,
    isCompleted: false,
    categories: ["my day", "important", "completed"],
    dueData: "2 jan 2025",
    taskStep: [],
    taskNote: "",
  },
  {
    taskName: "task name",
    isImportant: false,
    isCompleted: true,
    categories: ["my day", "important", "completed"],
    dueData: "2 jan 2025",
    taskStep: [],
    taskNote: "",
  },
  {
    taskName: "task name",
    isImportant: false,
    isCompleted: false,
    categories: ["my day", "important", "completed"],
    dueData: "2 jan 2025",
    taskStep: [],
    taskNote: "",
  },
  {
    taskName: "task name",
    isImportant: false,
    isCompleted: false,
    categories: ["my day"],
    dueData: "2 jan 2025",
    taskStep: [],
    taskNote: "",
  },
  {
    taskName: "task name",
    isImportant: false,
    isCompleted: false,
    categories: ["important", "completed"],
    dueData: "2 jan 2025",
    taskStep: [],
    taskNote: "",
  },
  {
    taskName: "task name",
    isImportant: true,
    isCompleted: true,
    categories: ["my day"],
    dueData: "2 jan 2025",
    taskStep: [],
    taskNote: "",
  },
];

const Tasks = () => {
  return (
    <div className="relative">
      <TaskNav />
      <div className="task-lists flex flex-col gap-3 p-4 max-w-[1000px] mx-auto w-full">
        {tasksList.map((task, index) => (
          <TaskList key={index} {...task} />
        ))}
      </div>
      <AddTaskInput />
    </div>
  );
};

export default Tasks;
