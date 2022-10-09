import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favouriteMovieIds: JSON.parse(localStorage.getItem("favouriteMovieIds")) || [null],
  favouriteTvShowIds: JSON.parse(localStorage.getItem("favouriteTvShowIds")) || [null],
};

export const getUserFavourites = createAsyncThunk(
  "User/FetchFavourites",

  async (getObj) => {
    try {
      const resp = await axios.get(`user/favourites/get/${getObj.userId}`);
      const retVal = await resp.data
      // console.log(retVal);
      return retVal;
    } catch (error) {
      console.log(error);
    }
  }
)

export const addUserFavourites = createAsyncThunk(
  "User/AddFavourites",

  async (addObj) => {
    try {
      let bodyObj = {}
      if (addObj.mId) {
        bodyObj = { "mId": addObj.mId }
      } else {
        bodyObj = { "tId": addObj.tId }
      }

      const resp = await axios.put(
        `user/favourites/add/${addObj.userId}`, bodyObj);
      const retVal = await resp.data
      return retVal;
    } catch (error) {
      console.log(error);
    }
  }
)

export const removeUserFavourites = createAsyncThunk(
  "User/RemoveFavourites",

  async (remObj) => {
    try {
      let bodyObj = {}
      if (remObj.mId) {
        bodyObj = { "mId": remObj.mId }
      } else {
        bodyObj = { "tId": remObj.tId }
      }

      const resp = await axios.put(
        `user/favourites/remove/${remObj.userId}`, bodyObj);
      const retVal = await resp.data
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
      if (action.payload.favouriteMovies) {
        localStorage.setItem("favouriteMovieIds", JSON.stringify(action.payload.favouriteMovies));
        state.favouriteMovieIds = action.payload.favouriteMovies;
      }
      if (action.payload.favouriteTvShows) {
        localStorage.setItem("favouriteTvShowIds", JSON.stringify(action.payload.favouriteTvShows));
        state.favouriteTvShowIds = action.payload.favouriteTvShows;
      }
    });

    builder.addCase(removeUserFavourites.fulfilled, (state, action) => {
      if (action.payload.favouriteMovies) {
        localStorage.setItem("favouriteMovieIds", JSON.stringify(action.payload.favouriteMovies));
        state.favouriteMovieIds = action.payload.favouriteMovies;
      }
      if (action.payload.favouriteTvShows) {
        localStorage.setItem("favouriteTvShowIds", JSON.stringify(action.payload.favouriteTvShows));
        state.favouriteTvShowIds = action.payload.favouriteTvShows;
      }
    });

    builder.addCase(addUserFavourites.fulfilled, (state, action) => {
      if (action.payload.favouriteMovies) {
        localStorage.setItem("favouriteMovieIds", JSON.stringify(action.payload.favouriteMovies));
        state.favouriteMovieIds = action.payload.favouriteMovies;
      }
      if (action.payload.favouriteTvShows) {
        localStorage.setItem("favouriteTvShowIds", JSON.stringify(action.payload.favouriteTvShows));
        state.favouriteTvShowIds = action.payload.favouriteTvShows;
      }
    });

  },
});



