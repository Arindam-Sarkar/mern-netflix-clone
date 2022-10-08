import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const AUTH_STATUS_SUCCESS = 1
export const AUTH_STATUS_FAIL = 2
export const AUTH_STATUS_PENDING = 3

const initialState = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserAuth: (state, action) => {
      // Save it in local storage first
      localStorage.setItem("userAuth", JSON.stringify(action.payload));
      state.userAuth = action.payload
    },
    deleteUserAuth: (state, action) => {
      const blankObj = {}
      // Clear the local storage
      localStorage.setItem("userAuth", JSON.stringify(blankObj));
      state.userAuth = blankObj
    }
  }
});

export const { saveUserAuth, deleteUserAuth } = authSlice.actions
export default authSlice.reducer