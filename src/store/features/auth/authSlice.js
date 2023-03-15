import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLogged: false,
  firstName: "",
  statusMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.firstName = action.payload;
    },
    loginFailed(state, action) {
      state.statusMessage = action.payload;
    },
    logout(state) {
      state = authInitialState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
