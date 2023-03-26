import authSlice from "./features/auth/authSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./features/scroll/scrollSlice.js";

const store = configureStore({
  reducer: { auth: authSlice.reducer, scroll: scrollSlice.reducer },
});

export default store;
