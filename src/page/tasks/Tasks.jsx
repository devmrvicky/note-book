import React, { useEffect } from "react";
import TaskNav from "./TaskNav";
import TaskList from "./TaskList";
import AddTaskInput from "./AddTaskInput";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "@/features/pageSlice";
import { useLocation } from "react-router-dom";
import useTasks from "./hooks/useTasks";
import useAddTask from "./hooks/useAddTask";
import { ReloadIcon } from "@radix-ui/react-icons";

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
  const { tasks, loading } = useSelector((store) => store.tasks);

  const { activeTab } = useTasks();
  console.log(activeTab);

  return (
    <div className="relative">
      <TaskNav />
      <div className="task-lists flex flex-col gap-3 p-4 max-w-[1000px] mx-auto w-full">
      {loading && <div className="border flex items-center justify-center">
        <ReloadIcon className="w-5 h-5 animate-spin"/>
      </div>}
        {tasks.length ? tasks.map((task, index) => (
          <TaskList key={index} {...task} />
        )) : <div>you have not any task</div>}
      </div>
      <AddTaskInput />
    </div>
  );
};

export default Tasks;
