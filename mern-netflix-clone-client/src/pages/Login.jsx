import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
import BackgroundImage from '../components/BackgroundImage';
import Navbar from '../components/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';
import { serverUrl } from '../serverUrl';

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [showWrongCreds, setShowWrongCreds] = useState(false)

  const userAuth = useSelector((state) => state.auth.userAuth);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginHandler = async (e) => {
    e.preventDefault()

    try {
      const credentialJson = {
        "email": email,
        "password": pass
      }

      const res = await axios.post(`${serverUrl}/user/login`, credentialJson);

      if (res.data) {
        // console.log("Login Successful");
        toast("Login Successful")
        dispatch(saveUserAuth(res.data))
      } else {
        dispatch(saveUserAuth({}))
      }

    } catch (error) {
      if (error.response.data.message?.match('User not found !')) {
        toast("User not found !")
        setShowWrongCreds(true)
      }
      setEmail("")
      setPass("")
    }
  }

  useEffect(() => {
    if (userAuth?._id) {
      // console.log(userAuth)
      navigate("/movies");
    }
  }, [userAuth?._id])

  return (
    <div>
      <BackgroundImage />
      <Navbar parentPage={'Login'} />
      <div className='loginMainContainer'>

        <div className='loginContainer'>
          <h1>Login</h1>

          <form
            className='loginForm'
            onSubmit={(e) => loginHandler(e)}>

            <input
              type="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} />

            <input
              type="password"
              placeholder='Password'
              onChange={(e) => setPass(e.target.value)} />

            <button type='submit'>
              Login to your account
            </button>

            {
              showWrongCreds &&
              <div className='invalidCreds'>
                Wrong Email or Password
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login