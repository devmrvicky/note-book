import dbService from "@/appwrite/databaseService";
import env from "@/env/env";
import { addNewTaskListTab, updateTask } from "@/features/tasksSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useTaskAction = () => {
  const [showTabInput, setShowTabInput] = useState(false);
  const [taskTabListCreate, setTaskTabListCreate] = useState({
    creating: false,
    name: "",
  });
  const dispatch = useDispatch();
  // completion task
  const handleCompletionTask = (taskId, updaterField) => {
    dispatch(updateTask({ taskId, updaterField }));
  };

  // handle show tab input
  const showCreateTabInput = () => {
    if (showTabInput) return;
    setShowTabInput(true);
  };
  const hideCreateTabInput = () => {
    setShowTabInput(false);
  };

  // create new task list
  const createNewTaskList = async (listName) => {
    try {
      setTaskTabListCreate({ creating: true, name: listName });
      if (!listName) throw new Error("list name is required.");
      const newTaskTabList = await dbService.createDocument(
        { listName, totalTasks: 0 },
        env.appwriteTaskTabListCollectionId
      );
      dispatch(addNewTaskListTab(newTaskTabList));
      setTaskTabListCreate({ creating: false, name: "" });
    } catch (error) {
      console.log(error.message);
    } finally {
      setTaskTabListCreate({ creating: false, name: "" });
    }
  };

  return {
    handleCompletionTask,
    showTabInput,
    showCreateTabInput,
    hideCreateTabInput,
    createNewTaskList,
    taskTabListCreate,
  };
};

export default useTaskAction;
