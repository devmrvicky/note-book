import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";
import { useForm } from "react-hook-form";

const AddTaskInput = () => {
  const { handleSubmit } = useForm({
    defaultValues: {
      task: "default task",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed left-0 bottom-0 bg-transparent w-full py-2">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full bg-black border max-w-[1000px]"
      >
        <CircleIcon className="w-5 h-5" />
        <div className="form-control">
          <Input type="text" name="task" placeholder="add your task" />
        </div>
      </form>
    </div>
  );
};

export default AddTaskInput;
