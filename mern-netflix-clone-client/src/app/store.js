import {
  configureStore,
} from "@reduxjs/toolkit";

import { MovieSlice } from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    movie: MovieSlice.reducer,
  },
});