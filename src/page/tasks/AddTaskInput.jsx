import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";
import { useForm } from "react-hook-form";
import useAddTask from "./hooks/useAddTask";

const AddTaskInput = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      task: "default task",
    },
  });
  const { handleAddingTask } = useAddTask();

  return (
    <div className="fixed left-0 bottom-0 bg-transparent w-full py-2">
      <form
        action=""
        onSubmit={handleSubmit(handleAddingTask)}
        className="w-full h-full bg-transparent pl-[250px]"
      >
        <div className="w-full max-w-[900px] mx-auto flex border bg-black px-3 py-2 items-center gap-3 focus-within:border focus-within:border-white rounded">
          <CircleIcon className="w-6 h-6" />
          <div className="form-control w-full flex-1">
            <input
              type="text"
              name="task"
              placeholder="add your task"
              className="w-full bg-transparent border-none outline-0 px-2 py-1 text-xl"
              {...register("task")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTaskInput;
