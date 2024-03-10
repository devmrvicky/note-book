import { updateTask } from "@/features/tasksSlice";
import { useDispatch } from "react-redux";

const useTaskAction = () => {
  const dispatch = useDispatch();
  // completion task
  const handleCompletionTask = (taskId, updaterField) => {
    dispatch(updateTask({ taskId, updaterField }));
  };

  return { handleCompletionTask };
};

export default useTaskAction;
