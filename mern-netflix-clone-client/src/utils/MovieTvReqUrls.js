import { MOVIEDB_API_KEY } from "../AuthKeys";

export const MovieReqUrls = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=2`,
  Horror: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
};

export const TvReqUrls = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=2`,
  Horror: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
};
