import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    // {
    //   taskName: "task name",
    //   isImportant: true,
    //   isCompleted: false,
    //   categories: ["my day", "important", "completed"],
    //   dueData: "2 jan 2025",
    //   taskStep: [],
    //   taskNote: "",
    // },
    // {
    //   taskName: "task name",
    //   isImportant: false,
    //   isCompleted: true,
    //   categories: ["my day", "important", "completed"],
    //   dueData: "2 jan 2025",
    //   taskStep: [],
    //   taskNote: "",
    // },
    // {
    //   taskName: "task name",
    //   isImportant: false,
    //   isCompleted: false,
    //   categories: ["my day", "important", "completed"],
    //   dueData: "2 jan 2025",
    //   taskStep: [],
    //   taskNote: "",
    // },
    // {
    //   taskName: "task name",
    //   isImportant: false,
    //   isCompleted: false,
    //   categories: ["my day"],
    //   dueData: "2 jan 2025",
    //   taskStep: [],
    //   taskNote: "",
    // },
    // {
    //   taskName: "task name",
    //   isImportant: false,
    //   isCompleted: false,
    //   categories: ["important", "completed"],
    //   dueData: "2 jan 2025",
    //   taskStep: [],
    //   taskNote: "",
    // },
    // {
    //   taskName: "task name",
    //   isImportant: true,
    //   isCompleted: true,
    //   categories: ["my day"],
    //   dueData: "2 jan 2025",
    //   taskStep: [],
    //   taskNote: "",
    // },
  ],
  loading: false,
  error: null,
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
  },
});

export const { getAllTasks, addTaskPending, addTaskSuccess, addTaskFailed, addTaskReset } =
  tasksSlice.actions;
export default tasksSlice.reducer;
