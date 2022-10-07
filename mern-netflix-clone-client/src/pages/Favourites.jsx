import React from 'react'
import { useEffect } from 'react';
import './favourites.css'
import Navbar from '../components/Navbar'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'

const Favourites = () => {
  const userAuth = useSelector((state) => state.auth.userAuth);
  const navigate = useNavigate()


  useEffect(() => {
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