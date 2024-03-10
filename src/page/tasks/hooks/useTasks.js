import dbService from "@/appwrite/databaseService";
import { useToast } from "@/components/ui/use-toast";
import env from "@/env/env";
import { changeCurrentPage } from "@/features/pageSlice";
import { changeActiveTab, getAllTasks } from "@/features/tasksSlice";
import getDate from "@/methods/getdate";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useTasks = () => {
  const [activeTab, setActiveTab] = useState("my day");
  const [myDayTask, setMyDayTask] = useState([]);
  const [importantTask, setImportantTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const { tasks } = useSelector((store) => store.tasks);

  const { toast } = useToast();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const taskTabQuery = new URLSearchParams(location.search);
    const activeTaskTab = taskTabQuery.get("tab");
    setActiveTab(activeTaskTab ? activeTaskTab : "my day");
    dispatch(changeActiveTab(activeTaskTab));
    dispatch(changeCurrentPage("Tasks"));

    const { fullDate } = getDate();

    // set today's task
    setMyDayTask(
      tasks.filter((task) => getDate(task.dueDate).fullDate === fullDate)
    );
    // filter important task
    setImportantTask(tasks.filter((task) => task.isImportant));
    // filter completed task
    setCompletedTask(tasks.filter((task) => task.isCompleted));
  }, [location.search, tasks.length]);

  useEffect(() => {
    (async () => {
      try {
        const res = await dbService.getAllDocs(env.appwriteTaskCollectionId);
        if (res) {
          dispatch(getAllTasks(res.documents));
        }
      } catch (error) {
        console.log(error.message);
        toast({
          variant: "destructive",
          description: error.message,
        });
      }
    })();
  }, []);

  return { activeTab, tasks, myDayTask, importantTask, completedTask };
};

export default useTasks;
