import authReducer, { login, logout } from "./authSlice";
import pageReducer, {
  changeCurrentPage,
  toggle,
  changeInitializingText,
} from "./pageSlice";
import noteReducer, {
  getAllNotes,
  addNote,
  updateNote,
  setCurrentNote,
  setCurrentNoteTitle,
} from "./noteSlice";
import folderReducer, {
  getAllFolders,
  deleteFolder,
  updateFolders,
  changeCurrentDir,
  changeCurrentDirName,
  updateCurrentDir,
  getAllDocs,
  backOneDir,
} from "./folderSlice";

export {
  authReducer,
  login,
  logout,
  pageReducer,
  changeCurrentPage,
  noteReducer,
  getAllNotes,
  addNote,
  updateNote,
  setCurrentNote,
  setCurrentNoteTitle,
  toggle,
  changeInitializingText,
  folderReducer,
  getAllFolders,
  deleteFolder,
  updateFolders,
  changeCurrentDir,
  updateCurrentDir,
  changeCurrentDirName,
  getAllDocs,
  backOneDir,
};
