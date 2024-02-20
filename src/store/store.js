import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  pageReducer,
  noteReducer,
  folderReducer,
  requestsReducer
} from "@/features/index.features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer,
    notes: noteReducer,
    folders: folderReducer,
    requests: requestsReducer
  },
});

export default store;
