import dbService from "@/appwrite/databaseService";
import { useToast } from "@/components/ui/use-toast";
import env from "@/env/env";
import { changeCurrentPage } from "@/features/pageSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useTasks = () => {
  const [activeTab, setActiveTab] = useState("My day");
  const [allTasks, setAllTasks] = useState([]);

  // const {tasks} = useSelector(store => store.tasks)

  const {toast} = useToast()
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const taskTabQuery = new URLSearchParams(location.search);
    const activeTaskTab = taskTabQuery.get("tab");
    setActiveTab(activeTaskTab);
    dispatch(changeCurrentPage("Tasks"));
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const res = await dbService.getAllDocs(env.appwriteTaskCollectionId)
        if(res){
          dispatch(res.documents)
        }
      } catch (error) {
        toast({
          description: error.message
         })
      }
    })()
  }, [])

  return { activeTab };
};

export default useTasks;
