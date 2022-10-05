import React, { useState } from 'react'
import { useEffect } from 'react';
import './mainMovie.css'

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from '../features/movie/movieSlice';
import { MOVIE_SLICE_CODE_TOP_RATED } from '../features/movie/movieSlice';


const MainMovie = () => {
  const [mainMovieImageUrl, setMainMovieImageUrl] = useState("")

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movies[MOVIE_SLICE_CODE_TOP_RATED]);


  useEffect(() => {
    dispatch(fetchMovieData(MOVIE_SLICE_CODE_TOP_RATED));
  }, [])

  useEffect(() => {
    let ranValue = Math.floor(Math.random() * movie.data.length)
    if (movie.data[ranValue]) {
      let imgUrl = `https://image.tmdb.org/t/p/original/${movie.data[ranValue]?.backdrop_path}`
      setMainMovieImageUrl(imgUrl)
    }
  }, [movie.loaded])



  return (

    <div className="MainMovieMainCont">
      <div className='MainMovieCont'>
        <img className='MainMovieImg'
          src={mainMovieImageUrl} alt="" />
      </div>
    </div>
  )
}

export default MainMovie