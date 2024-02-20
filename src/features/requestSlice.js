import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  bugs: []
}

const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    getAllRequestsData: (state, action) => {
      state.bugs = action.payload
    },
    addRequestData: (state, action) => {
      state.bugs.push(action.payload)
    }
  }
})

export const {getAllRequestsData, addRequestData} = requestSlice.actions;
export default requestSlice.reducer;