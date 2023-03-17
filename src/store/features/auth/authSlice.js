import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLogged: false,
  firstName: "",
  statusMessage: "",
};
export const getInitialState = createAsyncThunk("/", async () => {
  try {
    const response = await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/api/authenticated",
    });
    return {
      isLogged: true,
      firstName: response.data.firstName,
      statusMessage: "",
    };
  } catch (err) {
    return {
      isLogged: false,
      firstName: "",
      statusMessage: "",
    };
  }
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
