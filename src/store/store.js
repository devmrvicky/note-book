import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  pageReducer,
  noteReducer,
  folderReducer,
} from "@/features/index.features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer,
    notes: noteReducer,
    folders: folderReducer,
  },
});

export default store;
