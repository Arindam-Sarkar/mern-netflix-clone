import { MOVIEDB_API_KEY } from "../AuthKeys";

export const MovieReqUrls = {
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
  Action: `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEDB_API_KEY}&with_genres=28`,
  Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEDB_API_KEY}&with_genres=35`,
  Adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEDB_API_KEY}&with_genres=16`,
};

export const MOVIEDB_CODE_ACTION = 28
export const MOVIEDB_CODE_ADVENTURE = 12
export const MOVIEDB_CODE_ANIMATION = 16
export const MOVIEDB_CODE_COMEDY = 35
export const MOVIEDB_CODE_CRIME = 80
export const MOVIEDB_CODE_DOCUMENTARY = 99
export const MOVIEDB_CODE_DRAMA = 18
export const MOVIEDB_CODE_FAMILY = 10751
export const MOVIEDB_CODE_FANTASY = 14
export const MOVIEDB_CODE_HISTORY = 36
export const MOVIEDB_CODE_HORROR = 27
export const MOVIEDB_CODE_MUSIC = 10402
export const MOVIEDB_CODE_MYSTERY = 9648
export const MOVIEDB_CODE_ROMANCE = 10749
export const MOVIEDB_CODE_SCIENCE_FICTION = 878
export const MOVIEDB_CODE_TV_MOVIE = 10770
export const MOVIEDB_CODE_THRILLER = 53
export const MOVIEDB_CODE_WAR = 10752
export const MOVIEDB_CODE_WESTERN = 37

/*
      Movies
      https://developers.themoviedb.org/3/genres/get-movie-list
      https://api.themoviedb.org/3/genre/movie/list?api_key=[MY_KEY]&language=en-US

      MOVIE
      Action          28
      Adventure       12
      Animation       16
      Comedy          35
      Crime           80
      Documentary     99
      Drama           18
      Family          10751
      Fantasy         14
      History         36
      Horror          27
      Music           10402
      Mystery         9648
      Romance         10749
      Science Fiction 878
      TV Movie        10770
      Thriller        53
      War             10752
      Western         37
      
      
    export const   MOVIEDB_CODE_ACTION          =28
    export const   MOVIEDB_CODE_ADVENTURE       =12
    export const   MOVIEDB_CODE_ANIMATION       =16
    export const   MOVIEDB_CODE_COMEDY          =35
    export const   MOVIEDB_CODE_CRIME           =80
    export const   MOVIEDB_CODE_DOCUMENTARY     =99
    export const   MOVIEDB_CODE_DRAMA           =18
    export const   MOVIEDB_CODE_FAMILY          =10751
    export const   MOVIEDB_CODE_FANTASY         =14
    export const   MOVIEDB_CODE_HISTORY         =36
    export const   MOVIEDB_CODE_HORROR          =27
    export const   MOVIEDB_CODE_MUSIC           =10402
    export const   MOVIEDB_CODE_MYSTERY         =9648
    export const   MOVIEDB_CODE_ROMANCE         =10749
    export const   MOVIEDB_CODE_SCIENCE_FICTION =878
    export const   MOVIEDB_CODE_TV MOVIE        =10770
    export const   MOVIEDB_CODE_THRILLER        =53
    export const   MOVIEDB_CODE_WAR             =10752
    export const   MOVIEDB_CODE_WESTERN         =37
    
    const MOVIE_SLICE_LOOK_UP_TABLE = [
  { nameString: "Top Rated", movieDbCode: MOVIE_SLICE_CODE_TOP_RATED, callBackHandler: fetchTopRatedMovies },
  { nameString: "Action", movieDbCode: MOVIEDB_CODE_ACTION, callBackHandler: fetchMoviesByGenre },
  { nameString: "Adventure", movieDbCode: MOVIEDB_CODE_ADVENTURE, callBackHandler: fetchMoviesByGenre },
  { nameString: "Animation", movieDbCode: MOVIEDB_CODE_ANIMATION, callBackHandler: fetchMoviesByGenre },
  { nameString: "Comedy", movieDbCode: MOVIEDB_CODE_COMEDY, callBackHandler: fetchMoviesByGenre },
  { nameString: "Crime", movieDbCode: MOVIEDB_CODE_CRIME, callBackHandler: fetchMoviesByGenre },
  { nameString: "Documentary", movieDbCode: MOVIEDB_CODE_DOCUMENTARY, callBackHandler: fetchMoviesByGenre },
  { nameString: "Drama", movieDbCode: MOVIEDB_CODE_DRAMA, callBackHandler: fetchMoviesByGenre },
  { nameString: "Family", movieDbCode: MOVIEDB_CODE_FAMILY, callBackHandler: fetchMoviesByGenre },
  { nameString: "Fantasy", movieDbCode: MOVIEDB_CODE_FANTASY, callBackHandler: fetchMoviesByGenre },
  { nameString: "History", movieDbCode: MOVIEDB_CODE_HISTORY, callBackHandler: fetchMoviesByGenre },
  { nameString: "Horror", movieDbCode: MOVIEDB_CODE_HORROR, callBackHandler: fetchMoviesByGenre },
  { nameString: "Music", movieDbCode: MOVIEDB_CODE_MUSIC, callBackHandler: fetchMoviesByGenre },
  { nameString: "Mystery", movieDbCode: MOVIEDB_CODE_MYSTERY, callBackHandler: fetchMoviesByGenre },
  { nameString: "Romance", movieDbCode: MOVIEDB_CODE_ROMANCE, callBackHandler: fetchMoviesByGenre },
  { nameString: "Science Fiction", movieDbCode: MOVIEDB_CODE_SCIENCE_FICTION, callBackHandler: fetchMoviesByGenre },
  { nameString: "TV Movie", movieDbCode: MOVIEDB_CODE_TV_MOVIE, callBackHandler: fetchMoviesByGenre },
  { nameString: "Thriller", movieDbCode: MOVIEDB_CODE_THRILLER, callBackHandler: fetchMoviesByGenre },
  { nameString: "War", movieDbCode: MOVIEDB_CODE_WAR, callBackHandler: fetchMoviesByGenre },
  { nameString: "Western", movieDbCode: MOVIEDB_CODE_WESTERN, callBackHandler: fetchMoviesByGenre },
]
      
*/