import dbService from "@/appwrite/databaseService";
import { useToast } from "@/components/ui/use-toast";
import env from "@/env/env";
import {
  addTaskPending,
  addTaskFailed,
  addTaskSuccess,
} from "@/features/tasksSlice";
import getDate from "@/methods/getdate";
import { useDispatch, useSelector } from "react-redux";

const useAddTask = () => {

  const {activeTaskTab, taskDueDate} = useSelector(store => store.tasks)

  const { toast } = useToast();
  const {fullDate} = getDate()

  const dispatch = useDispatch();
  const handleAddingTask = async (data) => {
    try {
      dispatch(addTaskPending());
      const task = {
        taskName: data.task,
        isImportant: activeTaskTab === 'important' ? true : false,
        isCompleted: false,
        categories: ["tasks", activeTaskTab],
        dueDate: taskDueDate ? taskDueDate : fullDate,
        taskSteps: [],
        taskNote: "",
      };
      const res = await dbService.createDocument(
        task,
        env.appwriteTaskCollectionId
      );
      if (res) {
        dispatch(addTaskSuccess(res));
        toast({
          description: "task created successfully",
        });
      } else {
        dispatch(addTaskFailed("error while creating task. try again"));
        toast({
          variant: "destructive",
          description: "error while creating task. try again",
        });
      }
    } catch (error) {
      dispatch(addTaskFailed(error.message));
      toast({
        variant: "destructive",
        description: error.message,
      });
    }
  };

  return { handleAddingTask };
};

export default useAddTask;
