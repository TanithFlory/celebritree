import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partialVisible: false,
  fullyVisible: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    partialVisible(state) {
      state.partialVisible = true;
      state.fullyVisible = false;
    },
    fullyVisible(state) {
      state.partialVisible = false;
      state.fullyVisible = true;
    },
    notVisible(state) {
      state.partialVisible = false;
      state.fullyVisible = false;
    },
  },
});

export const scrollActions = scrollSlice.actions;
export default scrollSlice;
