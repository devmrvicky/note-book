import dbService from "@/appwrite/databaseService";
import { useToast } from "@/components/ui/use-toast";
import env from "@/env/env";
import {
  addTaskPending,
  addTaskFailed,
  addTaskSuccess,
} from "@/features/tasksSlice";
import { useDispatch } from "react-redux";

const useAddTask = () => {
  const { toast } = useToast();

  const dispatch = useDispatch();
  const handleAddingTask = async (data) => {
    try {
      dispatch(addTaskPending());
      const task = {
        taskName: data.task,
        isImportant: true,
        isCompleted: false,
        categories: ["my day", "important", "completed"],
        dueDate: "2 jan 2025",
        taskSteps: [],
        taskNote: "",
      };
      const res = await dbService.createDocument(
        task,
        env.appwriteTaskCollectionId
      );
      if (res) {
        dispatch(addTaskSuccess(task));
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
