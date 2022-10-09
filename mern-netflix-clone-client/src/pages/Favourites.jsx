import React from 'react'
import { useEffect } from 'react';
import './favourites.css'
import Navbar from '../components/Navbar'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'
import {
  getUserFavourites,
  addUserFavourites,
  removeUserFavourites
} from '../features/userData/userDataSlice';

import SliderViewCardZoomed from '../components/SliderViewCardZoomed'
import { useState } from 'react';
import { MOVIEDB_API_KEY } from '../authKeys';
import axios from 'axios';

const Favourites = () => {
  const [favMovieData, setFavMovieData] = useState([])
  const [favTvShoweData, setFavTvShowData] = useState([])

  const userAuth = useSelector((state) => state.auth.userAuth);
  const favouriteMovieIds = useSelector((state) => state.userData.favouriteMovieIds);
  const favouriteTvShowIds = useSelector((state) => state.userData.favouriteTvShowIds);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userAuth?._id) {
      navigate('/login')
    }

    dispatch(getUserFavourites({ userId: userAuth._id }))
    // .then(e => console.log(e))
    // .catch(e => console.log(e))
  }, [userAuth?._id])


  useEffect(() => {
    let favMovieDataTmp = []
    let favTvShowDataTmp = []

    const fetchDataFromId = () => {
      // Get movie data from movie id 
      favouriteMovieIds.map(async (movieId) => {
        try {
          let queryStr = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIEDB_API_KEY}&language=en-US`
          let resp = await axios.get(queryStr)
          let objTmp = await resp.data
          favMovieDataTmp = [...favMovieDataTmp, objTmp]
          setFavMovieData(favMovieDataTmp)
          // console.log(favMovieDataTmp);
        } catch (error) {
          console.log(error);
        }
      })
      // Get tv show data from tv show id 
      favouriteTvShowIds.map(async (tvShowId) => {
        try {
          let queryStr = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${MOVIEDB_API_KEY}&language=en-US`
          let resp = await axios.get(queryStr)
          let objTmp = await resp.data
          favTvShowDataTmp = [...favTvShowDataTmp, objTmp]
          setFavTvShowData(favTvShowDataTmp)
          // console.log(favTvShowDataTmp);
        } catch (error) {
          console.log(error);
        }
      })
    }
    fetchDataFromId()
  }, [favouriteMovieIds, favouriteTvShowIds])

  // console.log(favMovieData)
  // console.log(favTvShoweData)

  return (
    <>
      <Navbar parentPage={'Favourites'} />

      <div className='favMainCont'>
        <div className='favTypeCont'>
          <h1 className='favHeading'>Favourite Movies</h1>
          <div className='favCont'>
            {
              favMovieData.map(data =>
                <div className='favItem' key={data.id}>
                  < SliderViewCardZoomed cardData={data} type={"movie"} />
                </div>)
            }
          </div>
        </div>

        <div className='favTypeCont'>
          <h1 className='favHeading'>Favourite Tv Shows</h1>
          <div className='favCont'>
            {
              favTvShoweData.map(data =>
                <div className='favItem' key={data.id}>
                  < SliderViewCardZoomed cardData={data} type={"tv"} />
                </div>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

// dispatch(getUserFavourites({ userId: userAuth._id }))
//       .then(e => console.log(e))
//       .catch(e => console.log(e))

// dispatch(addUserFavourites({ userId: userAuth._id, mId: "mNo4" }))
//   .then(e => console.log(e))
//   .catch(e => console.log(e))

// dispatch(removeUserFavourites({ userId: userAuth._id, mId: "mNo4" }))
//   .then(e => console.log(e))
//   .catch(e => console.log(e))

export default Favourites

