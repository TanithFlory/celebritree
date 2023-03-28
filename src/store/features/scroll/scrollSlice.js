import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partialVisible: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    partialVisible(state) {
      state.partialVisible = true;
    },
    notVisible(state) {
      state.partialVisible = false;
    },
  },
});

export const scrollActions = scrollSlice.actions;
export default scrollSlice;
