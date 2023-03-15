import authSlice from "./features/auth/authSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export default store;