import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { MOVIEDB_API_KEY } from "../../AuthKeys";
import axios from "axios";

import {
  MOVIEDB_CODE_ACTION, MOVIEDB_CODE_ADVENTURE, MOVIEDB_CODE_ANIMATION,
  MOVIEDB_CODE_COMEDY, MOVIEDB_CODE_CRIME, MOVIEDB_CODE_DOCUMENTARY,
  MOVIEDB_CODE_DRAMA, MOVIEDB_CODE_FAMILY, MOVIEDB_CODE_FANTASY,
  MOVIEDB_CODE_HISTORY, MOVIEDB_CODE_HORROR, MOVIEDB_CODE_MUSIC,
  MOVIEDB_CODE_MYSTERY, MOVIEDB_CODE_ROMANCE, MOVIEDB_CODE_SCIENCE_FICTION,
  MOVIEDB_CODE_THRILLER, MOVIEDB_CODE_TV_MOVIE, MOVIEDB_CODE_WAR, MOVIEDB_CODE_WESTERN, MovieReqUrls
} from "../../utils/MovieTvReqUrls";



//---------------------------------------------
export const MOVIE_SLICE_CODE_TOP_RATED = 0
export const MOVIE_SLICE_CODE_ACTION = 1
export const MOVIE_SLICE_CODE_ADVENTURE = 2
export const MOVIE_SLICE_CODE_ANIMATION = 3
export const MOVIE_SLICE_CODE_COMEDY = 4
export const MOVIE_SLICE_CODE_CRIME = 5
export const MOVIE_SLICE_CODE_DOCUMENTARY = 6
export const MOVIE_SLICE_CODE_DRAMA = 7
export const MOVIE_SLICE_CODE_FAMILY = 8
export const MOVIE_SLICE_CODE_FANTASY = 9
export const MOVIE_SLICE_CODE_HISTORY = 10
export const MOVIE_SLICE_CODE_HORROR = 11
export const MOVIE_SLICE_CODE_MUSIC = 12
export const MOVIE_SLICE_CODE_MYSTERY = 13
export const MOVIE_SLICE_CODE_ROMANCE = 14
export const MOVIE_SLICE_CODE_SCIENCE_FICTION = 15
export const MOVIE_SLICE_CODE_TV_MOVIE = 16
export const MOVIE_SLICE_CODE_THRILLER = 17
export const MOVIE_SLICE_CODE_WAR = 18
export const MOVIE_SLICE_CODE_WESTERN = 19


// movies[MOVIE_SLICE_CODE_TOP_RATED].data => movies[0].data
const initialState = {
  movies: [
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
  ],
  tvShows: [
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
    { genreTitle: '', data: [], loaded: false }, { genreTitle: '', data: [], loaded: false },
  ],
};

// movies[MOVIE_SLICE_CODE_TOP_RATED].nameString =>
// MOVIE_SLICE_LOOK_UP_TABLE[0].nameString = "Top Rated"
// nameString given to user in state
// MOVIE_SLICE_CODE_TOP_RATED and MOVIEDB_CODE_ACTION used in MOVIEDB query
const MOVIE_SLICE_LOOK_UP_TABLE = [
  { nameString: "Top Rated", movieDbCode: MOVIE_SLICE_CODE_TOP_RATED },
  { nameString: "Action", movieDbCode: MOVIEDB_CODE_ACTION },
  { nameString: "Adventure", movieDbCode: MOVIEDB_CODE_ADVENTURE },
  { nameString: "Animation", movieDbCode: MOVIEDB_CODE_ANIMATION },
  { nameString: "Comedy", movieDbCode: MOVIEDB_CODE_COMEDY },
  { nameString: "Crime", movieDbCode: MOVIEDB_CODE_CRIME },
  { nameString: "Documentary", movieDbCode: MOVIEDB_CODE_DOCUMENTARY },
  { nameString: "Drama", movieDbCode: MOVIEDB_CODE_DRAMA },
  { nameString: "Family", movieDbCode: MOVIEDB_CODE_FAMILY },
  { nameString: "Fantasy", movieDbCode: MOVIEDB_CODE_FANTASY },
  { nameString: "History", movieDbCode: MOVIEDB_CODE_HISTORY },
  { nameString: "Horror", movieDbCode: MOVIEDB_CODE_HORROR },
  { nameString: "Music", movieDbCode: MOVIEDB_CODE_MUSIC },
  { nameString: "Mystery", movieDbCode: MOVIEDB_CODE_MYSTERY },
  { nameString: "Romance", movieDbCode: MOVIEDB_CODE_ROMANCE },
  { nameString: "Science Fiction", movieDbCode: MOVIEDB_CODE_SCIENCE_FICTION },
  { nameString: "TV Movie", movieDbCode: MOVIEDB_CODE_TV_MOVIE },
  { nameString: "Thriller", movieDbCode: MOVIEDB_CODE_THRILLER },
  { nameString: "War", movieDbCode: MOVIEDB_CODE_WAR },
  { nameString: "Western", movieDbCode: MOVIEDB_CODE_WESTERN },
]
//---------------------------------------------

export const fetchMovieData = createAsyncThunk(
  "Movie/ByGenre",

  async (genre) => {
    let queryString = ``

    if (genre === 0) {
      queryString = `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
    } else {
      queryString = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEDB_API_KEY}&with_genres=${MOVIE_SLICE_LOOK_UP_TABLE[genre].movieDbCode}`
    }

    const resp = await axios.get(queryString);
    const movieData = await resp.data.results
    const retVal = { genre, movieData }
    return retVal;
  }
)

export const fetchTvShowData = createAsyncThunk(
  "TvShow/ByGenre",

  async (genre) => {
    let queryString = ``

    if (genre === 0) {
      queryString = `https://api.themoviedb.org/3/tv/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
    } else {
      queryString = `https://api.themoviedb.org/3/discover/tv?api_key=${MOVIEDB_API_KEY}&with_genres=${MOVIE_SLICE_LOOK_UP_TABLE[genre].movieDbCode}`
    }

    const resp = await axios.get(queryString);
    const movieData = await resp.data.results
    const retVal = { genre, movieData }
    return retVal;
  }
)

export const movieSlice = createSlice({
  name: "Movie",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchMovieData.fulfilled, (state, action) => {
      const storageLocation = action.payload.genre
      state.movies[storageLocation].genreTitle = MOVIE_SLICE_LOOK_UP_TABLE[storageLocation].nameString
      state.movies[storageLocation].data = action.payload.movieData;
      state.movies[storageLocation].loaded = true
    });

    builder.addCase(fetchTvShowData.fulfilled, (state, action) => {
      const storageLocation = action.payload.genre
      state.tvShows[storageLocation].genreTitle = MOVIE_SLICE_LOOK_UP_TABLE[storageLocation].nameString
      state.tvShows[storageLocation].data = action.payload.movieData;
      state.tvShows[storageLocation].loaded = true
    });


  },
});



