import { updateTask } from "@/features/tasksSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useTaskAction = () => {
  const [showTabInput, setShowTabInput] = useState(false)
  const [taskTabLists, setTaskTabLists] = useState([])
  const dispatch = useDispatch();
  // completion task
  const handleCompletionTask = (taskId, updaterField) => {
    dispatch(updateTask({ taskId, updaterField }));
  };

  // handle show tab input
  const showCreateTabInput = () => {
    if(showTabInput) return
    setShowTabInput(true)
  }
  const hideCreateTabInput = () => {
    setShowTabInput(false)
  }

  // create new task list
  const createNewTaskList = (newListName) => {
    setTaskTabLists([...taskTabLists, newListName])
  }

  return { handleCompletionTask,showTabInput,  showCreateTabInput, hideCreateTabInput, taskTabLists, createNewTaskList };
};

export default useTaskAction;
