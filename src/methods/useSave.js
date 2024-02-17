import dbService from "@/appwrite/databaseService";
import env from "@/env/env";
import removeDollarSign from "./removeDollarSign";
import { updateCurrentDir, updateFolders } from "@/features/folderSlice";
import { addNote } from "@/features/noteSlice";
import getCollectionId from "./getCollectionId";

class SavedObj {
  constructor(status, message = "file saved successfully") {
    this.status = status;
    this.message = message;
  }
}

class FailedObj {
  constructor(status, message = "file won't saved successfully") {
    this.status = status;
    this.message = message;
  }
}

const useSave = async (name, data, currentDir, dispatch) => {
  try {
    if (!name) return false;
    const collectionId = getCollectionId(name);
    if (collectionId) {
      const createdDataOnDB = await dbService.createDocument(
        data,
        collectionId
      );
      const prepareData = removeDollarSign(currentDir);
      // here we an assume updateNote method as updateDocument
      const updatedCurrentDir = await dbService.updateDocument(
        currentDir.$id,
        { ...prepareData, ids: [createdDataOnDB.$id, ...prepareData.ids] },
        env.appwriteFolderCollectionId
      );
      dispatch(updateCurrentDir(updatedCurrentDir));
      if (name === "note") {
        dispatch(addNote(createdDataOnDB));
      } else if (name === "folder") {
        dispatch(updateFolders(createdDataOnDB));
      }
      return new SavedObj(true);
    } else {
      console.log("collection id did not found for " + name);
      return new FailedObj(false, `collection id did not found for ${name}`);
    }
  } catch (error) {
    console.log(`error of useSave : ${error.message}`);
    throw new FailedObj(false, error.message);
  }
};

export default useSave;
