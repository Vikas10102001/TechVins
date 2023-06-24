import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slice/alert";
import authSlice from "./slice/auth";
const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    auth: authSlice.reducer,
  },
});
export default store;
