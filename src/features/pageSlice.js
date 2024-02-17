import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "Home",
  toggleObj: {
    editorAside: false,
    newDocsTitleInput: false,
    individualNotePageAside:false
  },
  initializingText: ''
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggle: (state, action) => {
      state.toggleObj = { ...state.toggleObj, ...action.payload };
    },
    changeInitializingText: (state, action) => {
      state.initializingText = action.payload;
    }
  },
});

export const { changeCurrentPage, toggle, changeInitializingText} = pageSlice.actions;
export default pageSlice.reducer;
