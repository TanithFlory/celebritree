import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  firstName: "",
  statusMessage: "",
};
export const getInitialState = createAsyncThunk("/", () => {
  const accessToken = localStorage.getItem("accessToken");
  const decoded = JSON.parse(atob(accessToken.split(".")[1]));
  const { firstName, exp } = decoded;
  if (Date.now() > exp*1000) {
    return {
      isLogged: false,
      firstName: "",
      statusMessage: "",
    };
  }
  return {
    isLogged: true,
    firstName,
    statusMessage: "",
  };
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.statusMessage = "";
      state.isLogged = true;
      state.firstName = action.payload;
    },
    logout(state) {
      state.isLogged = false;
      state.firstName = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialState.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice;
