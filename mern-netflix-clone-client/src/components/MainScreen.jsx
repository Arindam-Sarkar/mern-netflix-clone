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

import { saveUserAuth } from '../features/auth/authSlice.js'
import {
  getUserFavourites,
  addUserFavourites,
  removeUserFavourites
} from '../features/userData/userDataSlice';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';


const MainScreen = ({ type }) => {
  const [title, setTitle] = useState('')
  const [mainScreenImageUrl, setMainScreenImageUrl] = useState("")
  const [mainScreenData, setMainScreenData] = useState({})

  const userAuth = useSelector((state) => state.auth.userAuth);
  const favouriteMovieIds = useSelector((state) => state.userData.favouriteMovieIds);
  const favouriteTvShowIds = useSelector((state) => state.userData.favouriteTvShowIds);

  const movie = useSelector((state) => state.movie.movies[MOVIE_SLICE_CODE_TOP_RATED]);
  const tvShow = useSelector((state) => state.movie.tvShows[MOVIE_SLICE_CODE_TOP_RATED]);

  const [iconFocussed, setIconFocussed] = useState([false, false, false, false, false])

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const iconFocussedHandler = (setLocation, setState) => {
    const iconFocussedTemp = [...iconFocussed]
    iconFocussedTemp[setLocation] = setState
    setIconFocussed(iconFocussedTemp)
  }

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

  const ToggleFavouritesHandler = (e) => {
    e.preventDefault()

    if (!mainScreenData) {
      return
    }
    // Check the type and add to fav if not there in fav
    // and remove from fav if there in fav
    if (type === "movie") {
      if (favouriteMovieIds.includes(mainScreenData.id) === true) {
        dispatch(removeUserFavourites({ userId: userAuth._id, mId: mainScreenData.id }))
        // .then(e => console.log(e))
        // .catch(e => console.log(e))
      } else {
        dispatch(addUserFavourites({ userId: userAuth._id, mId: mainScreenData.id }))
        // .then(e => console.log(e))
        // .catch(e => console.log(e))
      }
    } else if (type === "tv") {
      // console.log(mainScreenData);
      if (favouriteTvShowIds.includes(mainScreenData.id) === true) {
        dispatch(removeUserFavourites({ userId: userAuth._id, tId: mainScreenData.id }))
        // .then(e => console.log(e))
        // .catch(e => console.log(e))
      } else {
        dispatch(addUserFavourites({ userId: userAuth._id, tId: mainScreenData.id }))
        // .then(e => console.log(e))
        // .catch(e => console.log(e))
      }
    }
  }

  const favStyleClassNameHandler = () => {
    let tmpStr = ""

    if (!mainScreenData.id) {
      return
    }

    if (type === "movie") {
      if (favouriteMovieIds.includes(mainScreenData.id) === true) {
        tmpStr = 'mainScreenmIcons mainScreenmIconsFavourite'
      } else {
        tmpStr = (iconFocussed[3] ?
          ('mainScreenmIcons mainScreenmIconsSelected') : ('mainScreenmIcons'))
      }
    } else if (type === "tv") {
      if (favouriteTvShowIds.includes(mainScreenData.id) === true) {
        tmpStr = 'mainScreenmIcons svczmIconsFavourite'
      } else {
        tmpStr = (iconFocussed[3] ?
          ('mainScreenmIcons mainScreenmIconsSelected') : ('mainScreenmIcons'))
      }
    }
    return (tmpStr)
  }

  const videoPlayerHandler = (e) => {
    e.preventDefault()
    navigate('/player', { state: { movieData: mainScreenData } })
  }

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
                onClick={(e) => videoPlayerHandler(e)}
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
                onClick={(e) => ToggleFavouritesHandler(e)}
                className={favStyleClassNameHandler()}
              />
            </div>
          </div>

          <div className='mainScreenDiscCont'>
            <span className='mainScreenDisc'>{mainScreenData.overview?.substring(0, 300)}... </span>
          </div>
        </div >
      </div>
    </div>
  )
}

export default MainScreen