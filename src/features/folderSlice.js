import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  currentDirName: "rootDir",
  currentDir: {},
  allDocs: [],
  dirBreadcrumb: ["rootDir"],
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    getAllFolders: (state, action) => {
      state.folders = action.payload;
    },
    updateFolders: (state, action) => {
      state.folders.push(action.payload);
    },
    deleteFolder: (state, action) => {
      state.folders = state.folders.filter(
        (folder) => folder.$id !== action.payload
      );
    },
    changeCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
    updateCurrentDir: (state, action) => {
      state.currentDir = action.payload;
      state.folders = state.folders.map((folder) =>
        folder.folderName === state.currentDir.folderName
          ? action.payload
          : folder
      );
    },
    changeCurrentDirName: (state, action) => {
      state.currentDirName = action.payload ? action.payload : "rootDir";
      if (!action.payload) {
        state.dirBreadcrumb = ["rootDir"];
      }
    },
    getAllDocs: (state, action) => {
      state.allDocs = action.payload;
    },
    addDirToDirBreadcrumb: (state, action) => {
      if (action.payload === "rootDir") {
        state.dirBreadcrumb = ["rootDir"];
        return;
      }
      const index = state.dirBreadcrumb.indexOf(action.payload);
      if (index !== -1) {
        state.dirBreadcrumb = state.dirBreadcrumb.slice(0, index + 1);
      } else {
        state.dirBreadcrumb.push(action.payload);
      }
    },
    backOneDir: (state) => {
      state.dirBreadcrumb.pop();
      state.dirBreadcrumb = state.dirBreadcrumb;
    },
    removeDirFromDirBreadcrumb: (state, action) => {
      const index = state.dirBreadcrumb.indexOf(action.payload);
      state.dirBreadcrumb = state.dirBreadcrumb.slice(0, index + 1);
    },
  },
});

export const {
  getAllFolders,
  deleteFolder,
  updateFolders,
  changeCurrentDir,
  updateCurrentDir,
  changeCurrentDirName,
  getAllDocs,
  addDirToDirBreadcrumb,
  removeDirFromDirBreadcrumb,
  backOneDir,
} = foldersSlice.actions;
export default foldersSlice.reducer;
