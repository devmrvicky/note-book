import TaskNav from "./TaskNav";
import TaskList from "./TaskList";
import AddTaskInput from "./AddTaskInput";
import useTasks from "./hooks/useTasks";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";

const Tasks = () => {
  const { loading } = useSelector((store) => store.tasks);

  const { activeTab, tasks, myDayTask, importantTask, completedTask } =
    useTasks();

  return (
    <div className="relative">
      <TaskNav
        activeTab={activeTab}
        totalTasks={tasks.length}
        myDayTasks={myDayTask.length}
        importantTasks={importantTask.length}
        completedTasks={completedTask.length}
      />
      <div className="task-lists flex flex-col gap-3 p-4 max-w-[1000px] mx-auto w-full">
        {loading && (
          <div className="border flex items-center justify-center">
            <ReloadIcon className="w-5 h-5 animate-spin" />
          </div>
        )}
        {tasks.length ? (
          <>
            {activeTab === "all" &&
              tasks.map((task, index) => <TaskList key={index} {...task} />)}
            {activeTab === "my day" &&
              myDayTask.map((task, index) => (
                <TaskList key={index} {...task} />
              ))}
            {activeTab === "important" &&
              importantTask.map((task, index) => (
                <TaskList key={index} {...task} />
              ))}
            {activeTab === "completed" &&
              completedTask.map((task, index) => (
                <TaskList key={index} {...task} />
              ))}
          </>
        ) : (
          <div>you have not any task</div>
        )}
      </div>
      {activeTab !== "completed" && <AddTaskInput />}
    </div>
  );
};

export default Tasks;
