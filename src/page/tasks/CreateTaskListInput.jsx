import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PiList } from "react-icons/pi";

const CreateTaskListInput = ({ hideCreateTabInput, createNewTaskList }) => {
  const [listName, setListName] = useState("");
  return (
    <form
      className="flex items-center gap-2 border px-3 py-1"
      onSubmit={(e) => {
        e.preventDefault();
        createNewTaskList(listName);
        hideCreateTabInput();
      }}
    >
      <PiList className="w-5 h-5" />
      <input
        type="text"
        value={listName}
        autoFocus
        onBlur={hideCreateTabInput}
        className="p-0 bg-transparent dark:text-white text-black border-none outline-none text-xl"
        onChange={(e) => setListName(e.target.value)}
      />
    </form>
  );
};

export default CreateTaskListInput;
