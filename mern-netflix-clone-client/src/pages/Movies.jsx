import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './movies.css'
import MainScreen from '../components/MainScreen'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'


import {
  MOVIE_SLICE_CODE_TOP_RATED, MOVIE_SLICE_CODE_ACTION,
  MOVIE_SLICE_CODE_ADVENTURE, MOVIE_SLICE_CODE_ANIMATION,
  MOVIE_SLICE_CODE_COMEDY, MOVIE_SLICE_CODE_CRIME,
  MOVIE_SLICE_CODE_DOCUMENTARY, MOVIE_SLICE_CODE_DRAMA,
  MOVIE_SLICE_CODE_FAMILY, MOVIE_SLICE_CODE_FANTASY,
  MOVIE_SLICE_CODE_HISTORY, MOVIE_SLICE_CODE_HORROR,
  MOVIE_SLICE_CODE_MUSIC, MOVIE_SLICE_CODE_MYSTERY,
  MOVIE_SLICE_CODE_ROMANCE, MOVIE_SLICE_CODE_SCIENCE_FICTION,
  MOVIE_SLICE_CODE_THRILLER, MOVIE_SLICE_CODE_TV_MOVIE,
  MOVIE_SLICE_CODE_WAR, MOVIE_SLICE_CODE_WESTERN
} from '../features/movie/movieSlice'
import SliderViewRow from '../components/SliderViewRow'

const Movies = () => {
  const [pageScrolled, setPageScrolled] = useState(false)
  const userAuth = useSelector((state) => state.auth.userAuth);
  const navigate = useNavigate()


  window.onscroll = () => {
    setPageScrolled(window.pageYOffset === 0 ? false : true);
  };

  useEffect(() => {
    if (!userAuth?._id) {
      navigate('/login')
    }
  }, [userAuth?._id])

  return (
    <div className='moviesMainCont'>

      <Navbar pageScrolled={pageScrolled} parentPage={'Movies'} />
      <MainScreen type={"movie"} />

      <div>
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_TOP_RATED} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ACTION} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ADVENTURE} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_COMEDY} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_HISTORY} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_DOCUMENTARY} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_DRAMA} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_FANTASY} type={"movie"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ANIMATION} type={"movie"} />
      </div>
    </div>
  )
}

export default Movies