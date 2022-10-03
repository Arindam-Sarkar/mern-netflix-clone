import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import axios from "axios";

import { MovieReqUrls, TvReqUrls } from "../utils/MovieTvReqUrls";

const UPCOMING = 0
const POPULAR = 1
const TRENDING = 2
const TOP_RATED = 3
const ACTION = 4
const COMEDY = 5

// movies[UPCOMING] => movies[0] => 
// movies[UPCOMING].data => movies[0].data
const initialState = {
  movies: [
    { data: [], dataLoaded: false },
    { data: [], dataLoaded: false },
    { data: [], dataLoaded: false },
    { data: [], dataLoaded: false },
    { data: [], dataLoaded: false },
    { data: [], dataLoaded: false }
  ]
};

const getMovieDataFromUrl = async (url) => {
  const movieData = []

  movieData = await axios.get(url)
  return movieData
}


export const fetchUpcomingMovies = createAsyncThunk(
  "Movie/Upcoming",
  async () => {
    const data = await axios.get(MovieReqUrls.Upcoming);
    return data;
  }
)

export const fetchPopularMovies = createAsyncThunk(
  "Movie/Popular",
  async () => {
    const data = await axios.get(MovieReqUrls.Popular);
    return data;
  }
)

export const fetchTrendingMovies = createAsyncThunk(
  "Movie/Trending",
  async () => {
    const data = await axios.get(MovieReqUrls.Trending);
    return data;
  }
)

export const fetchTopRatedMovies = createAsyncThunk(
  "Movie/TopRated",
  async () => {
    const data = await axios.get(MovieReqUrls.TopRated);
    return data;
  }
)

export const fetchActionMovies = createAsyncThunk(
  "Movie/Action",
  async () => {
    const data = await axios.get(MovieReqUrls.Action);
    return data;
  }
)

export const fetchComedyMovies = createAsyncThunk(
  "Movie/Comedy",
  async () => {
    const data = await axios.get(MovieReqUrls.Comedy);
    return data;
  }
)

export const MovieSlice = createSlice({
  name: "Movie",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.movies[UPCOMING].data = action.payload;
      state.movies[UPCOMING].dataLoaded = true
    });

    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.movies[POPULAR].data = action.payload;
      state.movies[POPULAR].dataLoaded = true
    });

    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.movies[TRENDING].data = action.payload;
      state.movies[TRENDING].dataLoaded = true
    });

    builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.movies[TOP_RATED].data = action.payload;
      state.movies[TOP_RATED].dataLoaded = true
    });

    builder.addCase(fetchActionMovies.fulfilled, (state, action) => {
      state.movies[ACTION].data = action.payload;
      state.movies[ACTION].dataLoaded = true
    });

    builder.addCase(fetchComedyMovies.fulfilled, (state, action) => {
      state.movies[COMEDY].data = action.payload;
      state.movies[COMEDY].dataLoaded = true
    });
  },
});



