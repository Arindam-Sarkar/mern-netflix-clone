import React, { useState } from 'react'
import { useEffect } from 'react';
import './mainScreen.css'

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData, fetchTvShowData } from '../features/movie/movieSlice';
import { MOVIE_SLICE_CODE_TOP_RATED } from '../features/movie/movieSlice';


const MainScreen = ({ type }) => {
  const [mainScreenImageUrl, setMainScreenImageUrl] = useState("")
  const [mainScreenData, setMainScreenData] = useState()

  // const [mainScreenData, setMainScreenData] = useState([])

  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movie.movies[MOVIE_SLICE_CODE_TOP_RATED]);
  const tvShow = useSelector((state) => state.movie.tvShows[MOVIE_SLICE_CODE_TOP_RATED]);

  useEffect(() => {
    if (type === "movie") {
      dispatch(fetchMovieData(MOVIE_SLICE_CODE_TOP_RATED));
    } else if (type === "tv") {
      dispatch(fetchTvShowData(MOVIE_SLICE_CODE_TOP_RATED));
    }
  }, [])

  useEffect(() => {
    let ranValue = Math.floor(Math.random() * movie.data.length)

    if (type === "movie") {
      if (movie.data[ranValue]) {
        let imgUrl = `https://image.tmdb.org/t/p/original/${movie.data[ranValue]?.backdrop_path}`
        setMainScreenImageUrl(imgUrl)
        setMainScreenData(movie.data[ranValue])
      }
    }
  }, [movie.loaded])

  useEffect(() => {
    let ranValue = Math.floor(Math.random() * movie.data.length)

    if (type === "tv") {
      if (tvShow.data[ranValue]) {
        let imgUrl = `https://image.tmdb.org/t/p/original/${tvShow.data[ranValue]?.backdrop_path}`
        setMainScreenImageUrl(imgUrl)
        setMainScreenData(tvShow.data[ranValue])
      }

    }
  }, [tvShow.loaded])


  return (

    <div className="MainScreenMainCont">
      <div className='MainScreenCont'>
        <img className='MainScreenImg'
          src={mainScreenImageUrl} alt="" />
      </div>
    </div>
  )
}

export default MainScreen