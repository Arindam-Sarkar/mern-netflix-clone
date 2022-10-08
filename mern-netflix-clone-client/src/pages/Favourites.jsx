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

const Favourites = () => {
  const userAuth = useSelector((state) => state.auth.userAuth);
  const userFavourites = useSelector((state) => state.userData.userFavourites);
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {

    // dispatch(getUserFavourites({ userId: userAuth._id }))
    // dispatch(addUserFavourites({ userId: userAuth._id, movieId: "movieIdNo4" }))
    // dispatch(removeUserFavourites({ userId: userAuth._id, movieId: "movieIdNo21" }))
    if (!userAuth?._id) {
      navigate('/login')
    }
  }, [userAuth?._id])


  return (
    <>
      <Navbar parentPage={'Favourites'} />
    </>
  )
}

export default Favourites