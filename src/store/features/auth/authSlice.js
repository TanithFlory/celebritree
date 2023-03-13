import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLogged: false,
  statusMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isLogged = true;
    },
    loginFailed(state, action) {
      state.statusMessage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
