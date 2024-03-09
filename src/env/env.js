const env = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  textEditorApi: String(import.meta.env.VITE_TEXT_EDITOR_API),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteRootCollectionId: String(import.meta.env.VITE_APPWRITE_ROOT_COLLECTION_ID),
  appwriteFolderCollectionId: String(import.meta.env.VITE_APPWRITE_FOLDER_COLLECTION_ID),
  appwriteTaskCollectionId: String(import.meta.env.VITE_APPWRITE_TASK_COLLECTION_ID),
  appwriteBugCollectionId: String(import.meta.env.VITE_APPWRITE_BUG_COLLECTION_ID),
};

export default env;
