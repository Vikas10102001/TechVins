import { createSlice } from "@reduxjs/toolkit";

//auth related data could be useful like in conditionally rendering nav buttons
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: localStorage.getItem('auth'),
  },
  reducers: {
    setAuth(state, action) {
      return {
        ...state,
        authData: action.payload,
      };
    },
  },
});

export default authSlice;