import {
  configureStore,
} from "@reduxjs/toolkit";

import { movieSlice } from "../features/movie/movieSlice";
import { authSlice } from "../features/auth/authSlice";
import { userDataSlice } from "../features/userData/userDataSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    auth: authSlice.reducer,
    userData: userDataSlice.reducer
  },
});