import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  activeTaskTab: 'My day'
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getAllTasks: (state, action) => {
      state.tasks = action.payload
    },
    addTaskPending: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    addTaskSuccess: (state, action) => {
      state.tasks.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },
    addTaskFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTaskReset: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    changeActiveTab: (state, action) => {
      state.activeTaskTab = action.payload ? action.payload : 'My day'
    }
  },
});

export const { getAllTasks, addTaskPending, addTaskSuccess, addTaskFailed, addTaskReset } =
  tasksSlice.actions;
export default tasksSlice.reducer;
