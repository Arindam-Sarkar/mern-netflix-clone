import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import BackgroundImage from '../components/BackgroundImage'

import { useNavigate } from "react-router-dom";
import { firebaseAuth } from '../utils/firebaseConfig'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";

import './signup.css'
import Navbar from '../components/Navbar';

const Signup = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [showPass, showSetPass] = useState(false)
  const [userExists, setUserExists] = useState(false)

  const navigate = useNavigate()

  const formGetStartedHandler = async (e) => {
    e.preventDefault();
    showSetPass(true)
  }

  const formCreateUserHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(firebaseAuth, email, pass);
      console.log(res);
    } catch (error) {
      const message = { ...error }
      const messageStr = message.code.toString()

      if (messageStr === "auth/email-already-in-use") {
        setUserExists(true)
      }
    }
  }

  // Check if the auth state has changed and if 
  // it has then navigate to other page
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/netflix")
    }
  });


  return (
    <>
      <BackgroundImage />
      <Navbar />

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
                    type="email"
                    placeholder='Email Address'
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