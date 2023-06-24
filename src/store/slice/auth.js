import { createSlice } from "@reduxjs/toolkit";

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