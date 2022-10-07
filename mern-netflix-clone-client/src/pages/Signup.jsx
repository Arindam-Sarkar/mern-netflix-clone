import React, { useEffect, useState } from 'react'
import BackgroundImage from '../components/BackgroundImage'

import { useNavigate } from "react-router-dom";


import './signup.css'
import Navbar from '../components/Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'
import axios from 'axios';

const Signup = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const [showPass, showSetPass] = useState(false)
  const [userExists, setUserExists] = useState(false)

  const userAuth = useSelector((state) => state.auth.userAuth);

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const formGetStartedHandler = async (e) => {
    e.preventDefault()
    showSetPass(true)
  }

  const formCreateUserHandler = async (e) => {
    e.preventDefault();

    try {
      const credentialJson = {
        "username": userName,
        "email": email,
        "password": pass
      }

      const res = await axios.post("/user/register", credentialJson);

      if (res.data) {
        dispatch(saveUserAuth(res.data))
      } else {
        dispatch(saveUserAuth({}))
      }

    } catch (error) {
      if (error.response.data.message?.match('E11000')) {
        dispatch(saveUserAuth({}))
        setUserExists(true)
      }

    }
  }

  useEffect(() => {
    if (userAuth?._id) {
      console.log(userAuth);
      navigate("/movies");
    }
  }, [userAuth?._id])

  return (
    <>
      <BackgroundImage />
      <Navbar parentPage={'Signup'} />

      <div className='signInMainContainer'>

        <div className="signInContainer">
          <h1>Unlimited movies, TV </h1>
          <h1>shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>Ready to watch? Enter your email to create or restart membership.</h4>

          {!showPass &&
            <>
              <form
                className='emailContainer1'
                onSubmit={(e) => formGetStartedHandler(e)}>

                <input
                  type="text"
                  placeholder='User Name'
                  onChange={(e) => setUserName(e.target.value)} />

                <input
                  type="email"
                  placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'> Get Started </button>
              </form>
            </>
          }
          {showPass &&
            <>
              <form className='emailContainerAlternte'
                onSubmit={(e) => formCreateUserHandler(e)}>
                <div className='emailContainer2'>
                  <input
                    type="text"
                    placeholder='User Name'
                    defaultValue={userName}
                    onChange={(e) => setUserName(e.target.value)} />

                  <input
                    type="email"
                    placeholder='Email Address'
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)} />

                  <input
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPass(e.target.value)} />
                </div>
                <button type='submit'>Sign Up</button>
              </form>

              {
                userExists &&
                <div className='signupUserExists'>
                  User Exists, Please Select new User.
                </div>
              }

            </>
          }
        </div>

      </div>
    </>
  )
}

export default Signup