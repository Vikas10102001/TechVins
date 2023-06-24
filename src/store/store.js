import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slice/alert";
const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
  }
});
export default store;