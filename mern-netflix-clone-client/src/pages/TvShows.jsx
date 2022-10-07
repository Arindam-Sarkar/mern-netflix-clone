import React, { useEffect, useState } from 'react'
import MainScreen from '../components/MainScreen'
import Navbar from '../components/Navbar'
import SliderViewRow from "../components/SliderViewRow"
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
import './tvShows.css'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'


const TvShows = () => {
  const [pageScrolled, setPageScrolled] = useState(false)

  const userAuth = useSelector((state) => state.auth.userAuth);
  const navigate = useNavigate()

  window.onscroll = () => {
    setPageScrolled(window.pageYOffset === 0 ? false : true);
    // return () => (window.onscroll = null);
  };

  useEffect(() => {
    if (!userAuth?._id) {
      navigate('/login')
    }
  }, [userAuth?._id])

  return (
    <div className='tvShowsMainCont'>
      <Navbar pageScrolled={pageScrolled} parentPage={'TvShows'} />

      <MainScreen type={"tv"} />

      <div>
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_TOP_RATED} type={"tv"} />
        {/* <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ACTION} type={"tv"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ADVENTURE} type={"tv"} /> */}
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_COMEDY} type={"tv"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_HISTORY} type={"tv"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_DOCUMENTARY} type={"tv"} />
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_DRAMA} type={"tv"} />
        {/* <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_FANTASY} type={"tv"} /> */}
        <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ANIMATION} type={"tv"} />
      </div>

    </div>
  )
}

export default TvShows