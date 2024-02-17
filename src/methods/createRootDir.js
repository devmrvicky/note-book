import { default as dbService } from "@/appwrite/databaseService";
import { default as env } from "@/env/env";

const createRootDir = async (dirData) => {
  try {
    // const data = {folderName: 'rootDir', rootDir: true, id: [], flag: 'folder'}
    return await dbService.createDocument(
      dirData,
      env.appwriteFolderCollectionId
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default createRootDir;
