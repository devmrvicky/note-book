import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  pageReducer,
  noteReducer,
  folderReducer,
  requestsReducer,
  tasksReducer,
} from "@/features/index.features";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducers = combineReducers({
  auth: authReducer,
  page: pageReducer,
  notes: noteReducer,
  folders: folderReducer,
  requests: requestsReducer,
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(
  {
    key: "noteInDraft",
    storage,
    version: 1,
  },
  rootReducers
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
