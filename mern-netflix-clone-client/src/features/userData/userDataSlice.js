import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userFavourites: JSON.parse(localStorage.getItem("userFavourites")) || [null],
};

export const getUserFavourites = createAsyncThunk(
  "User/FetchFavourites",

  async (getObj) => {
    try {
      const resp = await axios.get(`user/favourites/get/${getObj.userId}`);
      const retVal = await resp.data.favourites
      return retVal;
    } catch (error) {
      console.log(error);
    }
  }
)

export const addUserFavourites = createAsyncThunk(
  "User/AddFavourites",

  async (addObj) => {
    console.log(addObj)
    try {
      const resp = await axios.put(
        `user/favourites/add/${addObj.userId}`,
        { movieId: addObj.movieId });
      const retVal = await resp.data.favourites
      return retVal;
    } catch (error) {
      console.log(error);
    }
  }
)

export const removeUserFavourites = createAsyncThunk(
  "User/RemoveFavourites",

  async (remObj) => {
    console.log(remObj)
    try {
      const resp = await axios.put(
        `user/favourites/remove/${remObj.userId}`,
        { movieId: remObj.movieId });
      const retVal = await resp.data.favourites
      return retVal;
    } catch (error) {
      console.log(error);
    }
  }
)

export const userDataSlice = createSlice({
  name: "userData",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getUserFavourites.fulfilled, (state, action) => {
      localStorage.setItem("userFavourites", JSON.stringify(action.payload));
      state.userFavourites = action.payload;
    });

    builder.addCase(addUserFavourites.fulfilled, (state, action) => {
      localStorage.setItem("userFavourites", JSON.stringify(action.payload));
      state.userFavourites = action.payload;
    });

    builder.addCase(removeUserFavourites.fulfilled, (state, action) => {
      localStorage.setItem("userFavourites", JSON.stringify(action.payload));
      state.userFavourites = action.payload;
    });
  },
});



