import React, { useState } from 'react'
import { useEffect } from 'react';
import './mainScreen.css'

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData, fetchTvShowData } from '../features/movie/movieSlice';
import { MOVIE_SLICE_CODE_TOP_RATED } from '../features/movie/movieSlice';

import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus, AiTwotoneHeart } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

const MainScreen = ({ type }) => {
  const [title, setTitle] = useState('')
  const [mainScreenImageUrl, setMainScreenImageUrl] = useState("")
  const [mainScreenData, setMainScreenData] = useState()

  // const [mainScreenData, setMainScreenData] = useState([])

  const dispatch = useDispatch();

  const [iconFocussed, setIconFocussed] =
    useState([false, false, false, false, false])

  const iconFocussedHandler = (setLocation, setState) => {
    const iconFocussedTemp = [...iconFocussed]
    iconFocussedTemp[setLocation] = setState
    setIconFocussed(iconFocussedTemp)
  }

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
        setTitle(movie.data[ranValue].title)
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
        setTitle(tvShow.data[ranValue].name)
      }

    }
  }, [tvShow.loaded])


  return (

    <div className="mainScreenMainCont">
      <div className='mainScreenCont'>

        <img className='mainScreenImg'
          src={mainScreenImageUrl} alt="" />

        < div className='mainScreenMiscCont' >
          <h1 className='mainScreenName'>{title}</h1>

          <div className='mainScreenmCont'>
            <div className='mainScreenmContLeft'>

              <IoPlayCircleSharp
                onMouseEnter={() => iconFocussedHandler(0, true)}
                onMouseLeave={() => iconFocussedHandler(0, false)}
                className={iconFocussed[0] ?
                  ('mainScreenmIcons mainScreenmIconsSelected') : ('mainScreenmIcons')}
              />

              <RiThumbUpFill
                onMouseEnter={() => iconFocussedHandler(1, true)}
                onMouseLeave={() => iconFocussedHandler(1, false)}
                className={iconFocussed[1] ?
                  ('mainScreenmIcons mainScreenmIconsSelected') : ('mainScreenmIcons')}
              />

              <RiThumbDownFill
                onMouseEnter={() => iconFocussedHandler(2, true)}
                onMouseLeave={() => iconFocussedHandler(2, false)}
                className={iconFocussed[2] ?
                  ('mainScreenmIcons mainScreenmIconsSelected') : ('mainScreenmIcons')}
              />

              <AiTwotoneHeart
                onMouseEnter={() => iconFocussedHandler(3, true)}
                onMouseLeave={() => iconFocussedHandler(3, false)}
                className={iconFocussed[3] ?
                  ('mainScreenmIcons mainScreenmIconsSelected') : ('mainScreenmIcons')}
              />
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

export default MainScreen