import { default as dbService } from "@/appwrite/databaseService";
import { default as getCollectionId } from "./getCollectionId";
import removeDollarSign from "./removeDollarSign";
import { changeCurrentDir, deleteFolder } from "@/features/folderSlice";
import { deleteNote } from "@/features/noteSlice";
import env from "@/env/env";

const useFileDelete = async (name, fileId, currentDir, dispatch) => {
  try {
    if (!name) return false;
    const collectionId = getCollectionId(name);
    if (collectionId) {
      const res = await dbService.deleteDocument(fileId, collectionId);
      const prepareData = removeDollarSign(currentDir);
      const updatedCurrentDir = await dbService.updateDocument(
        currentDir.$id,
        { ...prepareData, ids: prepareData.ids.filter((id) => id !== fileId) },
        env.appwriteFolderCollectionId
      );
      dispatch(changeCurrentDir(updatedCurrentDir));
      if (name === "note") {
        dispatch(deleteNote(fileId));
      } else if (name === "folder") {
        dispatch(deleteFolder(fileId));
      }
      console.log(`${name} deleted`);
    } else {
      console.log("collection id did not found for " + name);
      // return new FailedObj(false, `collection id did not found for ${name}`);
    }
  } catch (error) {
    console.lgo(error.message);
  }
};

export default useFileDelete;

// delete file from database
// delete file from local store
// update currentDir on database
// update currentDir on local store
// navigate
// 1. if it is note then navigate /notes
// 2. if it is folder then navigate it's root folder
