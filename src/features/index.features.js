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
  setCurrentNoteTitle,addNoteInDraft
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
import requestsReducer, {getAllRequestsData, addRequestData} from './requestSlice'

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
  requestsReducer,
  addRequestData,
  getAllRequestsData, addNoteInDraft
};
