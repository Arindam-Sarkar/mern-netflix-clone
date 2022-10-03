import {
  configureStore,
} from "@reduxjs/toolkit";

import { MovieSlice } from "../reduxSlices/movieSlice";

export const store = configureStore({
  reducer: {
    movie: MovieSlice.reducer,
  },
});