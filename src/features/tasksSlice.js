import getDate from "@/methods/getdate";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  activeTaskTab: "my day",
  taskDueDate: null,
  taskTabLists: []
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getAllTasks: (state, action) => {
      state.tasks = action.payload;
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
      state.activeTaskTab = action.payload ? action.payload : "my day";
    },
    setTaskDueDate: (state, action) => {
      state.taskDueDate = action.payload ? action.payload : getDate().fullDate;
    },
    updateTask: (state, action) => {
      const { taskId, updaterField } = action.payload;
      console.log({ taskId, updaterField });
      state.tasks = state.tasks.map((task) =>
        task.$id === taskId
          ? {
              ...task,
              isCompleted:
                updaterField === "taskComplete"
                  ? !task.isCompleted
                  : task.isCompleted,
              isImportant:
                updaterField === "taskImportant"
                  ? !task.isImportant
                  : task.isImportant,
            }
          : task
      );
    },
    getAllTaskTabList: (state, action) => {
      state.taskTabLists = action.payload
    },
    addNewTaskListTab: (state, action) => {
      state.taskTabLists.push(action.payload)
    },
  },
});

export const {
  getAllTasks,
  addTaskPending,
  addTaskSuccess,
  addTaskFailed,
  addTaskReset,
  changeActiveTab,
  setTaskDueDate,
  updateTask, getAllTaskTabList, addNewTaskListTab
} = tasksSlice.actions;
export default tasksSlice.reducer;
