import env from "@/env/env";


const getCollectionId = (name) => {
  let collectionId;
  switch (name) {
    case "note":
      collectionId = env.appwriteCollectionId;
      break;
    case "folder":
      collectionId = env.appwriteFolderCollectionId;
      break;
    default:
      collectionId = false;
  }
  return collectionId;
};

export default getCollectionId;