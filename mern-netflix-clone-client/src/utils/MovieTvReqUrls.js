import { MOVIEDB_API_KEY } from "../AuthKeys";

export const MovieReqUrls = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Action: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=action&page=1&include_adult=false`,
  Comedy: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`
};

export const TvReqUrls = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Action: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=action&page=1&include_adult=false`,
  Comedy: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`
};
