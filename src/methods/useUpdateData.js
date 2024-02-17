import dbService from "@/appwrite/databaseService";
import removeDollarSign from "./removeDollarSign";
import { updateNote } from "@/features/noteSlice";

const useUpdateData = async ({ $id, $collectionId }, data, dispatch) => {
  try {
    const prepareData = removeDollarSign(data);
    const updatedData = await dbService.updateDocument(
      $id,
      prepareData,
      $collectionId
    );
    dispatch(updateNote(updatedData));
  } catch (error) {
    console.log(error.message);
  }
};

export default useUpdateData;
